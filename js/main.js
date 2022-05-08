const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

function onLinkClick() {
  document.getElementsByTagName('features container').scrollIntoView();
  // will scroll to 4th h3 element
}