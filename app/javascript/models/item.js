// Javascript wrapper for a list item
export default class Item {
  constructor(jqObject) {
    this.jqObject = jqObject;
    this.id = this.jqObject.attr("data-item-id");
    this.ajaxUpdateRoute = this.jqObject.attr("data-ajax-update-route");
    this.completedStatusSelector = "#item-" + this.id + "-completed-status";
    this.itemViewSelector = ".item-view";
    this.itemNameSelector = ".item-view .item-link";
    this.itemEditSelector = ".item-edit";
    this.itemNameInputSelector = '.item-edit input[name$="name"]';
  }

  itemName(name) {
    if (name !== undefined) {
      this.jqObject.find(this.itemNameSelector).html(name);
    }

    return this.jqObject.find(this.itemNameSelector).html();
  }

  itemNameInput(name) {
    if (name !== undefined) {
      this.jqObject.find(this.itemNameInputSelector).val(name);
    }

    return this.jqObject.find(this.itemNameInputSelector).val();
  }

  completedStatus(status) {
    if (status !== undefined) {
      this.jqObject.find(this.completedStatusSelector).val(status);
    }

    // Force return of boolean
    return this.jqObject.find(this.completedStatusSelector).val() === "true";
  }

  flip() {
    this.jqObject.addClass("animated");
    return this.jqObject.toggleClass("flipped");
  }

  updateItemName() {
    // Update item name from input
    const newItemName = this.itemNameInput();
    this.itemName(newItemName);

    // Update item in db
    return this.update({ name: newItemName });
  }

  revertItemName() {
    // Revert item name
    const oldItemName = this.itemName();
    return this.itemNameInput(oldItemName);
  }

  toggleCompletedStatus() {
    this.completedStatus(!this.completedStatus());
    return this.update({ completed: this.completedStatus() });
  }

  toggleEdit() {
    // Should I chain these together? No for now, just a style choice...
    this.jqObject.toggleClass("no-sort");
    this.jqObject.toggleClass("editing");
    this.jqObject.find(this.itemViewSelector).toggleClass("hidden");
    this.jqObject.find(this.itemEditSelector).toggleClass("hidden");

    if (this.jqObject.find(this.itemViewSelector).hasClass("hidden")) {
      return this.jqObject.find(this.itemNameInputSelector).focus();
    } else {
      return this.jqObject.find(this.itemNameInputSelector).blur();
    }
  }

  update(updateValues) {
    return $.ajax({
      url: this.ajaxUpdateRoute,
      type: "PATCH",
      dataType: "script",
      data: { item: updateValues },
    })
      .done(function () {
        // alert('ajax done!')
      })
      .fail(function () {
        // alert('ajax failed!')
      });
  }
}
