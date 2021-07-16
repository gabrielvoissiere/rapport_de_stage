let enchantBtn = document.getElementById("titre-merci")

enchantBtn.addEventListener("click", function () {
    document.getElementById("merci-devant").classList.add("merci-active")
    document.getElementById("enchant-succes").classList.add("enchant-succes-active")

    localStorage.setItem("enchant", "https://minecraftskinstealer.com/achievement/19/Multicolore%21/Enchanter+le+%22Merci%22")


    setTimeout(() => {
        document.getElementById("enchant-succes").classList.remove("enchant-succes-active")
    }, 4000);
})