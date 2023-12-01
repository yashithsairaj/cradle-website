const images = document.querySelectorAll(".gallery_section img");
let imgSrc;
images.forEach((img) => {
        img.addEventListener("click", (e) => {
        imgSrc = e.target.src;
        imgModal(imgSrc);
    });
});

let imgModal = (src) => {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");

    document.querySelector("html").append(modal);

    const newImage = document.createElement("img");
    newImage.setAttribute("src", src);
    modal.append(newImage)

    const closeBtn = document.createElement("div");
    closeBtn.setAttribute("class", "closeBtn");

    modal.append(newImage, closeBtn);
    document.querySelector(".closeBtn").innerHTML = "&times;";
    modal.onclick = () => {
        modal.remove();
    };
}


