/* const observerAnim = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-in-left")
        observer.unobserve(entry.target);
      } else {
        entry.target.classList.remove("slide-in-left")
      }
    })
}, {threshold: 1})

const arrows = document.getElementsByClassName("justarrow-baa");

for (const anim2 of arrows) {
    observerAnim.observe(anim2)
} */

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