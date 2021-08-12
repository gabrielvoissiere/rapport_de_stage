let reverseBtn = document.getElementById("reverseBtn")

reverseBtn.addEventListener("click", function () {

    let text1 = document.getElementById("paraph1").innerHTML
    let textreverse = text1.split("").reverse().join("")
    document.getElementById("paraph1").innerHTML = textreverse

    let text2 = document.getElementById("paraph2").innerHTML
    let textreverse2 = text2.split("").reverse().join("")
    document.getElementById("paraph2").innerHTML = textreverse2

    localStorage.setItem("tnt", "https://minecraftskinstealer.com/achievement/6/chaos+power+%21/Modifier+le+sens+du+text")

    document.getElementById("reverse-succes").classList.add("reverse-succes-active")

    setTimeout(() => {
        document.getElementById("reverse-succes").classList.remove("reverse-succes-active")
        
        let text1 = document.getElementById("paraph1").innerHTML
        let textreverse = text1.split("").reverse().join("")
        document.getElementById("paraph1").innerHTML = textreverse
    
        let text2 = document.getElementById("paraph2").innerHTML
        let textreverse2 = text2.split("").reverse().join("")
        document.getElementById("paraph2").innerHTML = textreverse2

        reverseBtn.style.display = "none"
    }, 4000);
})