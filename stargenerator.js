// Written by Gurgen Gurgenyan, circion.design

const global_population = 5;
const stardistribution = [2.75, 9.6, 19.2];


function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function stargeneration() {
    var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var screenWidth = window.screen.width;
    var viewportScale = screenWidth / viewportWidth;
    var finalcalwidth = screenWidth / viewportScale;

    function calculateCSS(pos, color)
    {
        return (getRandomArbitrary(pos, finalcalwidth) + "px " + getRandomArbitrary(1, 2000) + "px "+color)
    }
    var starElementArray = document.getElementsByClassName('stars');
    var stararray = new Array();
    starcount = 0;
    for (i = 0; i < 3; i++) {
        stararray[i] = new Array();
        for (x = 0; x < finalcalwidth / stardistribution[i] * global_population; x++) {
            if(i<2)
            {
                stararray[i][x] = calculateCSS(i, "#fff");
            }
            else
            {
                stararray[i][x] = calculateCSS(i, "#a147cd");
            }
        }

        starElementArray[i].style.setProperty(('--stars' + Math.floor(i + 1)), (stararray[i].join(", ")))
    }
}
window.addEventListener('DOMContentLoaded', () => {
    try {
        
        stargeneration()
        addEventListener("resize", (event) => stargeneration());
    } catch (err) {
        console.error(err);
    }
});