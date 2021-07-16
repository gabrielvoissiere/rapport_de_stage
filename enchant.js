let enchantBtn = document.getElementById("titre-merci")

enchantBtn.addEventListener("click", function () {
    document.getElementById("merci-devant").classList.add("merci-active")
    document.getElementById("enchant-succes").classList.add("enchant-succes-active")
    setTimeout(() => {
        document.getElementById("enchant-succes").classList.remove("enchant-succes-active")
    }, 4000);
})



beeBtn.addEventListener("click", function () {
    setTimeout(() => {
        document.getElementById("bee").classList.remove("bee-active")
    }, 13000);
})