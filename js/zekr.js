// start zekr counter
let zekrDiv = document.querySelectorAll(".contain-count"),
    zekrCounter = document.querySelectorAll(".zekr-counter"),
    vvv = zekrCounter.textContent,
    zekrcount = document.querySelectorAll(".zekr-count");




for (let i = 0; i < zekrDiv.length; i++) {

    zekrDiv[i].onclick = function () {
        zekrCounter[i].textContent++;
        zekrCounter[i].innerHTML = zekrCounter[i].textContent;

        if (zekrCounter[i].textContent == zekrcount[i].textContent) {

            zekrCounter[i].style.backgroundColor = "gold";
            zekrCounter[i].style.color = "brown";

        }
    }
}
