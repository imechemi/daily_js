const box1 = document.querySelector('#box1')

TweenMax.to(box1, 1, {x: 500})
TweenMax.to(box1, 1, {y: 300, rotate: 450, delay: 1})

const box2 = document.querySelector('#box2')

const tl = new TimelineMax({})
tl.to(box2, 1, {x: 500})
tl.to(box2, 1, {y: 300, rotate: 450, opacity: 0})