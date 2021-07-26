var sliderImages = Array.from(document.querySelectorAll(".carousal-container img"));

var slidesCount = sliderImages.length;

var currentSlide = 1;

var slideNumberElement = document.getElementById("slide-num");

var nextButtom = document.getElementById("next");

var prevButtom = document.getElementById("prev");

nextButtom.onclick = nextslide;
prevButtom.onclick = prevslide;

var paginationEle = document.createElement('ul');

paginationEle.setAttribute('id', 'pagination-ul');

for (var i = 1; i <= slidesCount; i++) {

    var paginationItem = document.createElement('li');

    paginationItem.setAttribute('data-index', i);

    paginationItem.appendChild(document.createTextNode(i));

    paginationEle.appendChild(paginationItem);

}

document.getElementById("indicators").appendChild(paginationEle);

var paginatiionUl = document.getElementById('pagination-ul');

var paginationBullets = Array.from(document.querySelectorAll("#pagination-ul li"));

for (let i = 0; i < paginationBullets.length; i++) {

    paginationBullets[i].onclick = function () {

        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();
    }
}

theChecker();
// create check func
function theChecker() {

    slideNumberElement.textContent = 'slide # ' + currentSlide + " of " + slidesCount;

    removeAllVisible();

    sliderImages[currentSlide - 1].classList.add('visible');

    paginatiionUl.children[currentSlide - 1].classList.add('visible');

    if (currentSlide == 1) {
        prevButtom.classList.add('disabled');

    } else {
        prevButtom.classList.remove('disabled');
    }

    if (currentSlide == slidesCount) {

        nextButtom.classList.add('disabled');
    } else {

        nextButtom.classList.remove('disabled');
    }

}


function nextslide() {
    if (nextButtom.classList.contains('disabled')) {
        currentSlide = 1;
        theChecker();
    } else {

        currentSlide++;
        theChecker();
    }
}

function prevslide() {
    if (prevButtom.classList.contains('disabled')) {
        currentSlide = slidesCount;
        theChecker();
    } else {

        currentSlide--;
        theChecker();
    }
}


function removeAllVisible() {

    sliderImages.forEach(function (img) {

        img.classList.remove('visible');
    })
    paginationBullets.forEach(function (bullet) {
        bullet.classList.remove('visible');
    })
}
setInterval(function () {

    nextButtom.click();

}, 5000)




// end of carousal

// start sebha
var sebhaClick = document.querySelector('.sebha-click'),
    sebhaCount = sebhaClick.textContent,
    reset = document.querySelector('.sebha-reset');

sebhaClick.onclick = function () {

    sebhaCount++;
    sebhaClick.innerHTML = sebhaCount;

}
reset.onclick = function () {
    sebhaCount = 0;
    sebhaClick.innerHTML = 0;
}


