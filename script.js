let beeBtn = document.getElementById("bee-btn")

beeBtn.addEventListener("click", function () {
    document.getElementById("bee").classList.add("bee-active")
})

$(document).ready(function () {
    $(function () {
        // Recup titre de la page
        var pageTitle = $("title").text();
        // Changement dynamique du title
        $(window).blur(function () {
            setTimeout(() => {
                $("title").text("15 💣_______________🔥");
            }, 1000);
            setTimeout(() => {
                $("title").text("14 💣______________🔥");
            }, 2000);
            setTimeout(() => {
                $("title").text("13 💣_____________🔥");
            }, 3000);
            setTimeout(() => {
                $("title").text("12 💣____________🔥");
            }, 3000);
            setTimeout(() => {
                $("title").text("11 💣___________🔥");
            }, 4000);
            setTimeout(() => {
                $("title").text("10 💣__________🔥");
            }, 5000);
            setTimeout(() => {
                $("title").text("09 💣_________🔥");
            }, 6000);
            setTimeout(() => {
                $("title").text("08 💣________🔥");
            }, 7000);
            setTimeout(() => {
                $("title").text("07 💣_______🔥");
            }, 8000);
            setTimeout(() => {
                $("title").text("06 💣______🔥");
            }, 9000);
            setTimeout(() => {
                $("title").text("05 💣_____🔥");
            }, 10000);
            setTimeout(() => {
                $("title").text("04 💣____🔥");
            }, 11000);
            setTimeout(() => {
                $("title").text("03 💣___🔥");
            }, 12000);
            setTimeout(() => {
                $("title").text("02 💣__🔥");
            }, 13000);
            setTimeout(() => {
                $("title").text("01 💣_🔥");
            }, 14000);
            setTimeout(() => {
                $("title").text("💥 BOUM !");
            }, 15000);
            setTimeout(() => {
                $("title").text("Rapport de stage G.Voissiere");
            }, 20000);
        });

        $(window).focus(function () {
            $("title").text(pageTitle);
        });
    });
});