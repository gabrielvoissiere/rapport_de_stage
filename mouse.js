$(document).ready(function () {
    $("body").mousemove(function (event) {
        //////////// Déclare la variable 'x' égal à : les coordonnées du curseur sur l'axe X
        let x = event.pageX
        //////////// Déclare la variable 'y' égal à : les coordonnées du curseur sur l'axe Y
        let y = event.pageY
        //////////// Déclare la variable 'cursorWeight' égal à : la largeur de 'cursor' divisé par 2
        let cursorWeight = $("#cursor").width() / 2
        //////////// Déclare la variable 'cursorHeight' égal à : la hauteur de 'cursor' divisé par 2
        let cursorHeight = $("#cursor").height() / 2
        //////////// Séléctionne 'cursor', change le css => top devient 'y' moin 'cursorHeight , left devient 'x' - 'cursorWidth
        $("#cursor").css("top", (y - cursorHeight) + "px")
        $("#cursor").css("left", (x - cursorWeight) + "px")
    });
});