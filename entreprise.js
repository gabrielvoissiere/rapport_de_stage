let quitBtn = document.getElementById("fond")
let count = 0

quitBtn.addEventListener("mouseover", function () {

    if (count != 8) {
        let x = Math.floor(Math.random() * 50)
        let y = Math.floor(Math.random() * 50)

        quitBtn.style.transform = "translate(-" + x + "vw,-" + y + "vh)"

        count++
    } else {
    
        localStorage.setItem("btn", "https://minecraftskinstealer.com/achievement/36/I+got+it%21/Attraper+le+bouton")
    
        document.getElementById("btn-succes").classList.add("btn-succes-active")

        setTimeout(() => {
            document.getElementById("btn-succes").classList.remove("btn-succes-active")
        }, 4000);
    }

})