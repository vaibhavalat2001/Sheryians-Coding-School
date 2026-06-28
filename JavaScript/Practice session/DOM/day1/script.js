let img = document.querySelector("img");
let btn = document.querySelector("button");

let images = [
    "https://picsum.photos/id/237/200/300",
    "https://picsum.photos/seed/picsum/200/300",
    "https://picsum.photos/200/300?grayscale",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fHww"

];

ind = 0;
img.src = images[ind];
btn.addEventListener('click' , () => {
    ind++;
    if (ind <= images.length) {
        img.setAttribute("src", images[ind]);
    }
    else {
        ind = 0;
        img.src = images[ind];
    }
})