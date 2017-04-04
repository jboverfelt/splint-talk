//html

<input id="js-input-2" type="text"/>

<p><em>Letter Count:</em> <span id="js-output-2"></span></p>
<p><em>Vowel Count:</em> <span id="js-output-3"></span></p>

// js

(function () {
  function getCount() {
    return $("#js-input-2").val().length;
  }

  function getVowelCount() {
    var text = $("#js-input-2").val();
    return (text.match(/[aeiouy]/gi) || []).length
  }

  function updateCount() {
    $("#js-output-2").text(getCount());
  }

  function updateVowelCount() {
    $("#js-output-3").text(getVowelCount());
  }

  $(function() {
    updateCount();
    updateVowelCount();
    var inputEvents = "propertychange keyup input paste";
    $("#js-input-2").bind(inputEvents, function(e) {
      updateCount();
      updateVowelCount();
    })
  });
})()
