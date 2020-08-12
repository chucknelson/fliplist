/**
 * Global behaviors and hooks here.
 * All this logic will automatically be available in application.js.
 */

$(document).on("turbolinks:load", function () {
  $('#flash').delay('5000').slideUp('400')
})
