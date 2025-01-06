function scrollToSection(location){
    console.log("test");
    document.getElementById(location).scrollIntoView({
behavior:'smooth'
    });
}
function scrollToTop() {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
  });
}

//animation code by Chris Gustin
const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };
  
  const callback = (animatedList) => {
    animatedList.forEach(animatedItem => {
      if (animatedItem.isIntersecting && !animatedItem.target.classList.contains("animated")) {
        animatedItem.target.classList.add("animated");
      }
    })
  }
  
  const observer = new IntersectionObserver(callback, options);
  
  const animatedElements = document.querySelectorAll(".animate");
  
  animatedElements.forEach(animatedItem => observer.observe(animatedItem));