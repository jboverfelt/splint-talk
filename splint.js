// html

<input id="js-input-2" type="text"/>

<p><em>Letter Count:</em> <span id="js-output-2"></span></p>
<p><em>Vowel Count:</em> <span id="js-output-3"></span></p>

// js

$(function () {
  var inCell = $("#js-input-2").cellOf("propertychange",
                                         "keyup",
                                         "input",
                                         "paste");

  var countCell = splint.formula(function(s){return s.length;})(inCell);

  var vowelCountCell = splint.formula(function(s) {
    return (s.match(/[aeiouy]/gi) || []).length
  })(inCell);

  function updateCount(newLength) {
    $("#js-output-2").text(newLength);
  }

  function updateVowelCount(newCount) {
    $("#js-output-3").text(newCount);
  }

  updateCount(deref(countCell));
  updateVowelCount(deref(vowelCountCell));
  $("#js-input-2").bind("propertychange keyup input paste", function(e) {
    updateCount(deref(countCell));
    updateVowelCount(deref(vowelCountCell));
  })
})

//========================================

$("#js-output-2").text(countCell);
$("#js-output-3").text(vowelCountCell);
