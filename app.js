const body = document.body;
const imgContainer = document.querySelector(".img-container")
const centerimg = document.querySelector(".center-img")
const watches =  [
    {
        color: "rgba(67, 69, 88, 0.6)",
        img: "./assets/imges/black-watch.png",
        model: "Apple Watch Grey"
    },
    {
        color: "#6ADDCC99",
        img: "./assets/imges/green-watch.png",
        model: "Apple Watch Green"
    },
    {
        color: "#F9CDC499",
        img: "./assets/imges/pink-watch.png",
        model: "Apple Watch Pink"
    },
]

for (let watch of watches) {
    const div = document.createElement("div")
    div.style.backgroundColor = watch.color
    imgContainer.appendChild(div)
    const img = document.createElement("img")
    img.src = watch.img
    div.appendChild(img)

    //Event listener:

    div.addEventListener("click", ()=> {
        centerimg.innerHTML = ""
        const center = document.createElement("img")
        center.src = watch.img
        centerimg.appendChild(center)
        centerimg.style.backgroundColor = watch.color
        const model = document.createElement("p")
        model.innerText = watch.model
        model.style.color = watch.color
        centerimg.appendChild(model)
    })

}