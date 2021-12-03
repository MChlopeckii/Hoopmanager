function openChest(chestName) {
    document.getElementById("everything").style.filter = "blur(3px)";
    setTimeout(() => {
        document.getElementById("everything").style.filter = "";
        document.body.removeChild(document.getElementById("openingAnimation"))
    }, 5000)
    const openingAnimation = document.createElement("div");
    openingAnimation.id = "openingAnimation";
    openingAnimation.innerHTML = "3"
    document.body.appendChild(openingAnimation);
    const animation = document.getElementById("openingAnimation")
    setTimeout(() => { animation.innerHTML = "2" }, 1000);
    setTimeout(() => { animation.innerHTML = "1" }, 2000);
    setTimeout(() => {
        animation.innerHTML = "";
        createCard(chestName);
        animation.style.top = "35%";
        animation.style.right = "40%";
    }, 3000);
}