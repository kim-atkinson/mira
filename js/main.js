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

const animatedTags = document.querySelectorAll(" h1, h2, h3, p, grid, section, img, .message, .monthly-insights, .kickoff, a.btn, svg")

// fade out on load
animatedTags.forEach(tag => {
  tag.style.opacity = 0;
})

const fadeIn = function () {
  // look through all the animated tags and see
  // withthe getBoundingClientRect if it's inthe window

  let delay = 0.25
  animatedTags.forEach(tag => {
    const tagTop = tag.getBoundingClientRect().top
    const tagBottom = tag.getBoundingClientRect().bottom 
    
    if (tagTop < window.innerHeight && tagBottom > 0) {
      tag.style.animation = `fadein 1s ${delay}s both`
      
    } else {
      tag.style.opacity = 0
      tag.style.animation = ""
    }
  })

}

// on load, run fadeIn
fadeIn(); 

// on scroll, run fadeIn
document.addEventListener("scroll", function() {
  fadeIn()
})

// on browser resize, run fadeIn
window.addEventListener("resize", function () {
  fadeIn()
})