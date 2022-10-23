function ChangeColor() {
  document.getElementById("btn1").style.backgroundColor = "Red";
  setTimeout("ChangeColor2()", 2000);
}
function ChangeColor2() {
  document.getElementById("btn1").style.backgroundColor = "Pink";
  setTimeout("ChangeColor3()", 2000);
}
function ChangeColor4() {
  document.getElementById("btn1").style.backgroundColor = "Red";
}
