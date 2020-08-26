/**
 * Behaviors and hooks related to the matching controller here.
 * All this logic will automatically be available in application.js.
 */

import Sortable from "sortablejs";

$(document).on("turbolinks:load", () => {
  const listItems = document.getElementById("list-items");

  if (listItems) {
    Sortable.create(listItems, {
      filter: ".no-sort",
      ghostClass: "ui-sortable-placeholder",
      animation: 150,

      onEnd: function (event) {
        const item = $(event.item);

        // Build new sort order request body
        const newSort = {};
        item
          .parent()
          .children()
          .each(function () {
            const itemID = $(this).attr("data-item-id");
            const sortOrder = $(this).index();
            newSort[itemID] = sortOrder;
            return newSort;
          });

        // Update sort order
        return $.ajax({
          url: item.parent().attr("data-ajax-sort-route"),
          data: { sort: newSort },
          type: "PATCH",
          dataType: "script",
        });
      },
    });
  }
});
