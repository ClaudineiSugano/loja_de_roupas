let time=4000,
    currentImageIndex = 0,
    images = document 
                .querySelectorAll(".carrossel img")
    max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("imagemcarrossel")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("imagemcarrossel")       
}

function start() {
    setInterval(() => {
        //troca de imagem
        nextImage()
    }, time)
}

window.addEventListener("load", start)






