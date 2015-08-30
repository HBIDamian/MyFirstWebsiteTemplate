function resizeText(size) {
  if (document.body.style.fontSize == "") {
    document.body.style.fontSize = "1.0em";
  }
  document.body.style.fontSize =  size + "px";
}