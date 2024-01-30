// Banner --- Carousel *****************************************************************

const banners = document.querySelector(".carousel-banners");
const previousBanner = document.querySelector(".left-banner");
const nextBanner = document.querySelector(".right-banner");

let bannerIndex = 0;

function slide(direction){
    if (direction ==='nextBanner') { if (bannerIndex === 1) {
        bannerIndex = -1;
    } else {
        bannerIndex++;
    }
    
    }

    if (direction ==='prevBanner') {if (bannerIndex === -1) {
        bannerIndex = 1;
    } else {
        bannerIndex--;
    }
    }
    banners.style.transform = `translateX(${-100 * bannerIndex}vw)`
    
    };


nextBanner.addEventListener("click", function () {
        slide('nextBanner')    
});

previousBanner.addEventListener("click", function () {
    slide('prevBanner')
});

setInterval(function() {
    slide('nextBanner')
},4000);

// About us --- Carousel **************************************************

const feedbacks = document.querySelector(".carousel-feedbacks");
const previousFeedback = document.querySelector(".left");
const nextFeedback = document.querySelector(".right");

let feedbackIndex = 0;

function slide2(direction){
    if (direction ==='next') { if (feedbackIndex=== 2) {
        feedbackIndex  = 0;
    } else {
        feedbackIndex++;
    }
    
    }

    if (direction ==='prev') {if (feedbackIndex=== 0) {
        feedbackIndex = 2;
    } else {
        feedbackIndex--;
    }
    }
    feedbacks.style.transform = `translateX(${-100 * feedbackIndex}vw)`
    
    };


nextFeedback.addEventListener("click", function () {
        slide2('next')    
});

previousFeedback.addEventListener("click", function () {
    slide2('prev')
});

setInterval(function() {
    slide2('next')
},4000);


