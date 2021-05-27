// To get all the skill bars
var progressBars = document.querySelectorAll(".skill-progress > div");

// initialise all the bars with width = 0%
function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

// To initialise single bar with width = 0%
for (var bar of progressBars) {
    initialiseBar(bar);
}

// To fill each bar with the target width in %
function fillBar(bar) {
    // initially width = 0
    var currentWidth = 0;

    // get the target width using the data attribute for the bar
    var targetWidth = bar.getAttribute("data-bar-width");

    // this runs in intervals
    var interval = setInterval(function () {

      // run till the width is not equal to the target width
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 5);

}

// This function uses a for loop for individual progress bars.
function checkScroll() {

    for (let bar of progressBars) {

      // get all the coordinates of the bar
        var barCoordinates = bar.getBoundingClientRect();

        // check if the bar is not visited and its coordinates should be visible at the viewport
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        }
        else if (barCoordinates.top > window.innerHeight) { // to animate again if we reach from top to bottom
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}

// This event fills the progress bars if they are displayed on the screen when the page is loaded.
//window.addEventListener("load", checkScroll);
window.addEventListener("scroll", checkScroll);
