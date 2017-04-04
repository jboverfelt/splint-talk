// html

<input id="js-input-1" type="text"/>

<p><em>Letter Count:</em> <span id="js-output-1"></span></p>

// js

(function () {
  function getCount() {
    return $("#js-input-1").val().length;
  }

  function updateCount(newLength) {
    $("#js-output-1").text(getCount());
  }

  $(function() {
    updateCount();
    var inputEvents = "propertychange keyup input paste";
    $("#js-input-1").bind(inputEvents, function(e) {
      updateCount();
    })
  });
})()
