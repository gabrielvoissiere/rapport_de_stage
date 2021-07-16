let batBtn = document.getElementById("bat-monde")

batBtn.addEventListener("click", function () {
    document.getElementById("bat").classList.add("bat-active")
    document.getElementById("bat-succes").classList.add("bat-succes-active")
    setTimeout(() => {
        document.getElementById("bat-succes").classList.remove("bat-succes-active")
    }, 4000);
})