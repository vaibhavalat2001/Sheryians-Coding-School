gsap.to("#box1", {
    x: 500, // move to x axis
    duration: 2,    // time period
    ease: "bounce.out",  // bounce 
    delay: 2,
    rotate: 360,
    backgroundColor: "orange",
    borderRadius: "50%",
    scale: 0.5  // increase size
})

// gsap.to("#box2", {
//     x: 500,
//     y: 500,
//     duration:2, 
//     delay: 2
// })

gsap.from("#box2", {
    x: 500,
    duration: 2,
    delay: 2
})

gsap.from("h1", {
    opacity:0,  // hide element
    color: "tomato",
    duration: 1,
    delay: 1,
    y: 70,
    stagger: 0.3,   // come one by one of give time
    // stagger: -1  // visible last first
})

gsap.to("#box3", {
    x: 500,
    duration: 1,
    delay: 1,
    rotate: 360,
    repeat: -1, // 1: repeat 2 time || -1 repeat infinite
    yoyo: true, // reverse
})

// below is best example to manage time of all boxes
// gsap.to("#box4", {
//     x: 500,
//     duration: 1.5,
//     delay: 1
// })

// gsap.to("#box5", {
//     x: 500,
//     duration: 1.5,
//     delay: 2.5
// })

// gsap.to("#box6", {
//     x: 500,
//     duration: 1.5,
//     delay: 4,
//     borderRadius: "50%",
//     scale: 0.5,
//     rotate: 360
// })


// Time line
let tl = gsap.timeline();

tl.to("#box4", {
    x: 500,
    duration: 1.5,
    delay: 1
})

tl.to("#box5", {
    x: 500,
    duration: 1.5
})

tl.to("#box6",  {
    x: 500,
    duration: 1.5,
    rotate: 360,
    borderRadius: "50%"
})


// navbar
let navtl = gsap.timeline();
navtl.from("h2", {
    opacity: 0,
    y: -40,
    duration: 1.5,
    delay: 0.5,
    repeat: -1,
    yoyo: true
})

navtl.from("h4", {
    opacity: 0,
    y: -40,
    duration: 1,
    stagger: 0.2
})

navtl.from("h3", {
    opacity: 0,
    y: -30,
    duration: 0.5,
    scale: 0.5
})