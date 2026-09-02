
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}
document.getElementById('year').textContent = new Date().getFullYear();

const rt=document.querySelectorAll('.path-card,.section-heading,.search-links,.about-copy,.tag-cloud');rt.forEach(e=>e.classList.add('reveal'));const ob=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('visible');ob.unobserve(x.target)}}),{threshold:.12});rt.forEach(e=>ob.observe(e));

const portrait = document.querySelector('.portrait-wrap img');
window.addEventListener('scroll', () => {
  if (!portrait) return;
  const y = Math.min(window.scrollY * 0.025, 10);
  portrait.style.transform = `scale(1.03) translateY(${y}px)`;
});
