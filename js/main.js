
function toggle_bibtex(selector){

  var pre_bibtex = document.getElementById("bibtex_" + selector)

  if (pre_bibtex.hidden === true) {
    pre_bibtex.hidden = false;
  } else {
    pre_bibtex.hidden = true;
  }
}
