let succesBtn = document.getElementById("succesucces")
succesBtn.addEventListener("click", function() {
    localStorage.setItem("succes", "https://minecraftskinstealer.com/achievement/2/Trouver%21/trouver+le+succ%C3%A8s")
    document.getElementById("succesucces").style.opacity = 1

    document.getElementById("succes-succes").classList.add("succes-succes-active")

    setTimeout(() => {
        document.getElementById("succes-succes").classList.remove("succes-succes-active")
    }, 4000);})

// bee
let bee = localStorage.getItem("bee")
if (bee == null || bee == "undefifined" || bee == "") {
    //noting
} else {
    document.getElementById("succesBee").setAttribute("src", bee)
}

// bat
let bat = localStorage.getItem("bat")
if (bat == null || bat == "undefifined" || bat == "") {
    //noting
} else {
    document.getElementById("succesBat").setAttribute("src", bat)
}

// enchant
let enchant = localStorage.getItem("enchant")
if (enchant == null || enchant == "undefifined" || enchant == "") {
    //noting
} else {
    document.getElementById("succesEnchant").setAttribute("src", enchant)
}

// intro
let intro = localStorage.getItem("intro")
if (intro == null || intro == "undefifined" || intro == "") {
    //noting
} else {
    document.getElementById("succesIntro").setAttribute("src", intro)
}

// entreprise
let entreprise = localStorage.getItem("btn")
if (entreprise == null || entreprise == "undefifined" || entreprise == "") {
    //noting
} else {
    document.getElementById("succesBtn").setAttribute("src", entreprise)
}

// succes
let succes = localStorage.getItem("succes")
if (succes == null || succes == "undefifined" || succes == "") {
    //noting
} else {
    document.getElementById("succesucces").style.opacity = 1
}

// succes
let reverse = localStorage.getItem("tnt")
if (reverse == null || reverse == "undefifined" || reverse == "") {
    //noting
} else {
    document.getElementById("succesReverse").setAttribute("src", reverse)
}
