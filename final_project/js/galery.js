function upDate(previewPic) {
    document.getElementById("image").style.backgroundImage =
        "url('" + previewPic.src + "')";

    document.getElementById("image").innerHTML =
        previewPic.alt;
}

function unDo() {
    document.getElementById("image").style.backgroundImage =
        "";

    document.getElementById("image").innerHTML =
        "Hover over an image below to display here.";
}

function setImages() {

    const options = [
        "./images/anime1.jpg",
        "./images/anime2.jpg",
        "./images/anime3.jpg",
        "./images/anime4.jpg",
        "./images/anime5.jpg",
        "./images/anime6.jpg"
    ];

    const currentImage = document.querySelectorAll(".image-container img");

    for (let i = 0; i < currentImage.length; i++) {
        console.log(currentImage[i]);
        const randomIndex = Math.floor(Math.random() * options.length);
        currentImage[i].src = options[randomIndex];
        options.splice(randomIndex, 1);

        currentImage[i].setAttribute("tabindex", "0");
    }
}