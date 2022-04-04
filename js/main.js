// Code under is for the arrow animation

const scrollOffset = 0;
 
const scrollElement = document.querySelector(".justarrow");

console.log(scrollElement)

const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
 
  return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) - offset)
  );
};
 
const displayScrollElement = () => {
  scrollElement.classList.add('slide-in-top');
}
 
const hideScrollElement = () => {
  scrollElement.classList.remove('slide-in-top');
}
 
const handleScrollAnimation = () => {
  if (elementInView(scrollElement, scrollOffset)) {
      displayScrollElement();
  } else {
    hideScrollElement();
  }
}
 
window.addEventListener('scroll', () => {
  handleScrollAnimation();
})

// Code under is for the scribble scroll effect

let path = document.querySelector('.path')
let pathLength = path.getTotalLength()

path.style.strokeDasharray = pathLength + ' ' + pathLength;

path.style.strokeDashoffset = pathLength;

window.addEventListener('scroll', () => {

  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  var drawLength = pathLength * scrollPercentage;

  path.style.strokeDashoffset = pathLength - drawLength;
})