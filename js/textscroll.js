const scrollOffset = 200;
 
const scrollElement = document.querySelector(".justarrow-text");

console.log(scrollElement)

const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().left;
 
  return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) - offset)
  );
};
 
const displayScrollElement = () => {
  scrollElement.classList.add('slide-in-left');
}
 
const hideScrollElement = () => {
  scrollElement.classList.remove('slide-in-left');
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