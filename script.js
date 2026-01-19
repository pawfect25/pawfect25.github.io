// FLOATING PAW PARTICLES
const pawContainer = document.querySelector('.paw-container');
const pawImage = "/mnt/data/A_logo_for_\"PAWFECT,\"_a_brand_specializing_in_dog-.png";

function createPaw() {
    const img = document.createElement("img");
    img.src = pawImage;
    img.classList.add("paw");

    img.style.left = Math.random() * 100 + "vw";
    img.style.animationDuration = (8 + Math.random() * 6) + "s";

    pawContainer.appendChild(img);

    setTimeout(() => {
        img.remove();
    }, 12000);
}

setInterval(createPaw, 900);

