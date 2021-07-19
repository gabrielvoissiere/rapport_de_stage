let tombeSurprise = document.getElementById("tombe-surprise")

tombeSurprise.addEventListener("click", function () {
    document.getElementById("tombe").classList.add("tombe-active")
    document.getElementById("totem").style.opacity = "1"

    localStorage.setItem("intro", "https://minecraftskinstealer.com/achievement/8/Seconde+chance/Faite+revivre+un+Ghast")

    setTimeout(() => {
        document.getElementById("totem").style.opacity = "0"
        document.getElementById("ghast").style.opacity = "1"
    }, 2300);

    setTimeout(() => {
        document.getElementById("ghast").style.opacity = "1"
    }, 1500);

    document.getElementById("tombe-succes").classList.add("tombe-succes-active")


    setTimeout(() => {
        document.getElementById("tombe-succes").classList.remove("tombe-succes-active")
    }, 4000);
})