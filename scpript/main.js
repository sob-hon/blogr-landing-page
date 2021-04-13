var list = document.getElementById("myDIV");
var navItems = list.getElementsByClassName("nav__head");

function Toggle(elm) {
  var controll = elm.classList.contains("active");

  if (!controll) {
    for (i = 0; i < navItems.length; i++) {
      // remove all active classes
      navItems[i].className = "nav__head";
    }
    elm.className = "nav__head active"; // add active class to current element
  } else {
    elm.className = "nav__head"; // remove active class from current element
  }
}
