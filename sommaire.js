let batBtn = document.getElementById("bat-monde")

batBtn.addEventListener("click", function () {
    document.getElementById("bat").classList.add("bat-active")
    document.getElementById("bat-succes").classList.add("bat-succes-active")

    localStorage.setItem("bat", "https://minecraftskinstealer.com/achievement/16/Freedom%21/lib%C3%A9r%C3%A9+la+chauve+souris")

    setTimeout(() => {
        document.getElementById("bat-succes").classList.remove("bat-succes-active")
    }, 4000);
})