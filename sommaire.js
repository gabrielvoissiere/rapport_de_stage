let batBtn = document.getElementById("bat-monde")

batBtn.addEventListener("click", function () {
    document.getElementById("bat").classList.add("bat-active")
    document.getElementById("bat-succes").classList.add("bat-succes-active")

    localStorage.setItem("bat", "https://minecraftskinstealer.com/achievement/16/Freedom%21/lib%C3%A9r%C3%A9+la+chauve+souris")

    setTimeout(() => {
        document.getElementById("bat-succes").classList.remove("bat-succes-active")
    }, 4000);
})

let endBtn = document.getElementById("end")

endBtn.addEventListener("mouseover", function () {
    document.getElementById("end-succes").classList.add("end-succes-active")

    localStorage.setItem("end", "https://minecraftskinstealer.com/achievement/28/the+end+%3F/Arriver+%C3%A0+la+conclusion")

    setTimeout(() => {
        document.getElementById("end-succes").classList.remove("end-succes-active")
    }, 4000);
})