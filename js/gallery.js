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
    //add the modal to the main section or the parent element
    document.querySelector("html").append(modal);
    //adding image to modal
    const newImage = document.createElement("img");
    newImage.setAttribute("src", src);
    modal.append(newImage)
    //creating the close button
    const closeBtn = document.createElement("div");
    closeBtn.setAttribute("class", "closeBtn");
    //close function
    modal.append(newImage, closeBtn);
    document.querySelector(".closeBtn").innerHTML = "&times;";
    modal.onclick = () => {
        modal.remove();
    };
}


