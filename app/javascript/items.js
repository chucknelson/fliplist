/**
 * Behaviors and hooks related to the matching controller here.
 * All this logic will automatically be available in application.js.
 *
 * TODOs:
 *  - Rollback any item change upon ajax failure, includes values, flip state, etc.
 *
 */

import Item from "./models/item";

// Get the parent item from wherever the given element is in the item tree
const parentItem = function (jqObject) {
  if (jqObject.is("li")) {
    return new Item(jqObject);
  } else {
    return new Item(jqObject.parents("li"));
  }
};

const acceptItemEdit = function (item) {
  item.updateItemName();
  return item.toggleEdit();
};

const cancelItemEdit = function (item) {
  item.revertItemName();
  return item.toggleEdit();
};

const newItemToggle = function () {
  $("#new-item-placeholder").toggleClass("hidden");
  return $("#new-item").toggleClass("hidden");
};

// Item-related event bindings

// Having a webkit transition property on an element causes sorting behavior to go wacky (draggable item sizes weird)
// to get around that, I'm adding and removing the webkit transition behavior via events
// when a user tries to sort, the transition property isn't there, so nothing is messed up
$(document).on("webkitTransitionEnd", "ul#list-items li", function (event) {
  return $(this).removeClass("animated");
});

// Custom item events because :remote => true in rails causes the address bar show up on iOS (annoying!)
// Delegate event binding, do not need $() / ready event binding, can break with turbolinks anyway
$(document).on("click", "ul#list-items .item-link", function (event) {
  event.preventDefault();

  // Flip first, THEN do network activity, response is priority
  const targetItem = parentItem($(this));
  targetItem.flip();
  return targetItem.toggleCompletedStatus();
});

$(document).on("click", "ul#list-items .item-edit-link", function (event) {
  event.preventDefault();

  const targetItem = parentItem($(this));
  return targetItem.toggleEdit();
});

$(document).on("click", "ul#list-items .item-edit-done", function (event) {
  event.preventDefault();

  const targetItem = parentItem($(this));
  return acceptItemEdit(targetItem);
});

$(document).on("click", "ul#list-items .item-edit-cancel", function (event) {
  event.preventDefault();

  const targetItem = parentItem($(this));
  return cancelItemEdit(targetItem);
});

$(document).on("keyup", "ul#list-items .item-edit input[type=text]", function (
  event
) {
  let targetItem;
  event.preventDefault();
  // Enter key, needed because this input is not in a form
  if (event.keyCode === 13) {
    targetItem = parentItem($(this));
    return acceptItemEdit(targetItem);
  }
  // Escape key
  else if (event.keyCode === 27) {
    targetItem = parentItem($(this));
    return cancelItemEdit(targetItem);
  }
});

$(document).on("click", "a.add-item-link", function (event) {
  event.preventDefault();
  newItemToggle();
  return $("#new-item input[type=text]").focus();
});

$(document).on("click", "#new-item-cancel", function (event) {
  event.preventDefault();
  newItemToggle();
  return $("#new-item input[type=text]").blur();
});

$(document).on("keyup", "#new-item input[type=text]", function (event) {
  event.preventDefault();
  // Do not need to worry about enter key, this input is already in a form
  // Escape key
  if (event.keyCode === 27) {
    newItemToggle();
    return $("#new-item input[type=text]").blur();
  }
});
