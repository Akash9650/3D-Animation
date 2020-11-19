//Movement Animation to happen

const card = document.querySelector('.card');
const container = document.querySelector(".container");
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.size')

//Moving Event

container.addEventListener('mousemove', (e) => {
    console.log(e.pageX, e.pageY);
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animatie in
container.addEventListener('mouseenter', e => {
    card.style.transition = 'none';

    title.style.transform = 'translateZ(150px)';
    sneaker.style.transform = 'translateZ(150px) rotateZ(-45deg)';
    purchase.style.transform = 'translateZ(150px)';
    description.style.transform = 'translateZ(150px)';
    sizes.style.transform = 'translateZ(150px)';
})


//Animated out
container.addEventListener('mouseleave', e => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    title.style.transform = 'translateZ(0px)';
    sneaker.style.transform = 'translateZ(0px) rotate(0deg)';
    purchase.style.transform = 'translateZ(0px)';
    description.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';
})