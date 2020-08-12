/**
 * Behaviors and hooks related to the matching controller here.
 * All this logic will automatically be available in application.js.
 */

// TODO rollback any item change upon ajax failure, includes values, flip state, etc.

// Wrapper class for items
class Item {
  constructor(jqObject) {
    this.jqObject = jqObject
    this.id = this.jqObject.attr('data-item-id')
    this.ajaxUpdateRoute = this.jqObject.attr('data-ajax-update-route')
    this.completedStatusSelector = '#item-' + this.id + '-completed-status'
    this.itemViewSelector = '.item-view'
    this.itemNameSelector = '.item-view .item-link'
    this.itemEditSelector = '.item-edit'
    this.itemNameInputSelector = '.item-edit input[name="name"]'
  }

  itemName(name) {
    if (name !== undefined) {
      this.jqObject.find(this.itemNameSelector).html(name)
    }

    return this.jqObject.find(this.itemNameSelector).html()
  }

  itemNameInput(name) {
    if (name !== undefined) {
      this.jqObject.find(this.itemNameInputSelector).val(name)
    }

    return this.jqObject.find(this.itemNameInputSelector).val()
  }

  completedStatus(status) {
    if (status !== undefined) {
      this.jqObject.find(this.completedStatusSelector).val(status)
    }

    return this.jqObject.find(this.completedStatusSelector).val() === 'true' // force return of boolean
  }

  flip() {
    this.jqObject.addClass('animated')
    return this.jqObject.toggleClass('flipped')
  }

  updateItemName() {
    // update item name from input
    const newItemName = this.itemNameInput()
    this.itemName(newItemName)

    // update item in db
    return this.update({ name: newItemName })
  }

  revertItemName() {
    // revert item name
    const oldItemName = this.itemName()
    return this.itemNameInput(oldItemName)
  }

  toggleCompletedStatus() {
    this.completedStatus(!this.completedStatus())
    return this.update({ completed: this.completedStatus() })
  }

  toggleEdit() {
    // should I chain these together? No for now, just a style choice...
    this.jqObject.toggleClass('no-sort')
    this.jqObject.toggleClass('editing')
    this.jqObject.find(this.itemViewSelector).toggleClass('hidden')
    this.jqObject.find(this.itemEditSelector).toggleClass('hidden')

    if (this.jqObject.find(this.itemViewSelector).hasClass('hidden')) {
      return this.jqObject.find(this.itemNameInputSelector).focus()
      // @itemNameInput(@itemName())
    } else {
      return this.jqObject.find(this.itemNameInputSelector).blur()
    }
  }

  update(updateValues) {
    return $.ajax({
      url: this.ajaxUpdateRoute, // items/update
      type: 'PATCH',
      dataType: 'script',
      data: { item: updateValues }
    })
      .done(function () {
        // alert('ajax done!')
      })
      .fail(function () {
        // alert('ajax failed!')
      })
  }
}

// get the parent item from wherever you are in item tree
const parentItem = function (jqObject) {
  if (jqObject.is('li')) {
    return new Item(jqObject)
  } else {
    return new Item(jqObject.parents('li'))
  }
}

const acceptItemEdit = function (item) {
  item.updateItemName()
  return item.toggleEdit()
}

const cancelItemEdit = function (item) {
  item.revertItemName()
  return item.toggleEdit()
}

const newItemToggle = function () {
  $('#new-item-placeholder').toggleClass('hidden')
  return $('#new-item').toggleClass('hidden')
}

// having a webkit transition property on an element causes sorting behavior to go wacky (draggable item sizes weird)
// to get around that, I'm adding and removing the webkit transition behavior via events
// when a user tries to sort, the transition property isn't there, so nothing is messed up
$(document).on('webkitTransitionEnd', 'ul#list-items li', function (event) {
  return $(this).removeClass('animated')
})

// custom item events because :remote => true in rails causes the address bar show up on iOS (annoying!)
// delegate event binding, do not need $() / ready event binding, can break with turbolinks anyway
$(document).on('click', 'ul#list-items .item-link', function (event) {
  event.preventDefault()

  // flip first, THEN do network activity, response is priority
  const targetItem = parentItem($(this))
  targetItem.flip()
  return targetItem.toggleCompletedStatus()
})

$(document).on('click', 'ul#list-items .item-edit-link', function (event) {
  event.preventDefault()

  const targetItem = parentItem($(this))
  return targetItem.toggleEdit()
})

$(document).on('click', 'ul#list-items .item-edit-done', function (event) {
  event.preventDefault()

  const targetItem = parentItem($(this))
  return acceptItemEdit(targetItem)
})

$(document).on('click', 'ul#list-items .item-edit-cancel', function (event) {
  event.preventDefault()

  const targetItem = parentItem($(this))
  return cancelItemEdit(targetItem)
})

$(document).on('keyup', 'ul#list-items .item-edit input[type=text]', function (event) {
  let targetItem
  event.preventDefault()
  if (event.keyCode === 13) { // enter key, needed because this input is not in a form
    targetItem = parentItem($(this))
    return acceptItemEdit(targetItem)
  } else if (event.keyCode === 27) { // escape key
    targetItem = parentItem($(this))
    return cancelItemEdit(targetItem)
  }
})

$(document).on('click', 'a.add-item-link', function (event) {
  event.preventDefault()
  newItemToggle()
  return $('#new-item input[type=text]').focus()
})

$(document).on('click', '#new-item-cancel', function (event) {
  event.preventDefault()
  newItemToggle()
  return $('#new-item input[type=text]').blur()
})

$(document).on('keyup', '#new-item input[type=text]', function (event) {
  event.preventDefault()
  // do not need to worry about enter key, this input is already in a form
  if (event.keyCode === 27) { // escape key
    newItemToggle()
    return $('#new-item input[type=text]').blur()
  }
})
