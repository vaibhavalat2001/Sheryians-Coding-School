let form = document.querySelector("form");
let upd = document.querySelector("#upd");
let in1 = document.querySelector("#name");
let in2 = document.querySelector("#email");
let in3 = document.querySelector("#url");
let submit = document.querySelector("#submit");
let users = document.querySelector(".users");

let usersData = [
    {
        name: "Elon Musk",
        email: "elon.tech123@gmail.com",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg"
    },
    {
        name: "Sundar Pichai",
        email: "sundar.dev456@gmail.com",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ulQYiw6_UUBcSaxbi9NVH1WrA-jsv7_sMafSZ5AxoQ&s=10"
    },
    {
        name: "Satya Nadella",
        email: "satya.code789@gmail.com",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ONgj3u46P4S0HboTInv9NtxIyFKq36imYjIjrbc8qg&s=10"
    },
    {
        name: "Mark Zuckerberg",
        email: "mark.web101@gmail.com",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQurC5SxEn44Ny2Hzw-5Q2c7bPNL6gI8x1rwSzmZoMmaw&s=10"
    },
    {
        name: "Tim Cook",
        email: "tim.apple202@gmail.com",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbrblJchptzuiv1cf1DXZqrUM5bcoJyD3mZdMOCXpAIw&s=10"
    },
    {
        name: "Jensen Huang",
        email: "jensen.ai303@gmail.com",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFqX067ltC2VJImkxbQcuTDp_xLjRGwSzLVjlsR6Z5DQ&s=10"
    },
    {
        name: "Sam Altman",
        email: "sam.gpt404@gmail.com",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfx-sXjma7lsDarUHIT6BWb2SMjGjwTKbNWeYjiDuzmA&s=10"
    },
    {
        name: "Jeff Bezos",
        email: "jeff.aws505@gmail.com",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_WaU-tQm4YjT1BbGs3z8AuFoBtVJSc9w6ns2sF0GpQ&s=10"
    },
    {
        name: "Narayana Murthy",
        email: "murthy.tech606@gmail.com",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxE_AOp3RCSHkrr-eHnIk-KzH7L3toZGsFUbD4e277kw&s=10"
    },
    {
        name: "Bill Gates",
        email: "bill.dev707@gmail.com",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSL3saoRQza0ByLcILmIbY6d4SYWA01vDW92xnEDqS9g&s=10"
    }
];


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let action = e.submitter.value;

    let name = in1.value;
    let email = in2.value;
    let url = in3.value;


    if (action === "sub") {
        usersData.push({
            name,
            email,
            url
        });
    }

    ui();
    form.reset();
})


let ui = () => {
    users.innerHTML = "";
    usersData.forEach((data, index) => {
        users.innerHTML += `<div class="userData bg-gray-500 w-[300px] h-[350px] p-2 rounded-xl flex flex-col gap-4">
                    <img class="object-cover object-top rounded-xl h-[200px]" src="${data.url}" alt="img here">
                    <div class="info px-4 flex flex-col gap-2">
                        <h2 class="font-bold">Name: ${data.name}</h2>
                        <p>Email: ${data.email}</p>
                        <div class="flex justify-between">
                            <button onclick="editCard(${index})" class="bg-green-500 text-gray-200 px-4 rounded-lg font-bold cursor-pointer active:scale-90">Edit</button>
                            <button onclick="deleteCard(${index})" class="bg-red-900 text-gray-200 px-4 rounded-lg font-bold cursor-pointer active:scale-90">Delete</button>
                        </div>
                    </div>
                </div>`;
        
    console.log(index);

    })

}

ui();

let deleteCard = (index) => {
    usersData.splice(index, 1);
    ui();
}

let currentInd = null;
let editCard = (index) => {
    currentInd = index;
    upd.classList.remove("hidden");
    in1.value = usersData[currentInd].name;
    in2.value = usersData[currentInd].email;
    in3.value = usersData[currentInd].url;
    ui();
}


upd.addEventListener("click", () => {
    usersData[currentInd] = {
        name: in1.value,
        email: in2.value,
        url: in3.value
    };
    upd.classList.add("hidden");
})


