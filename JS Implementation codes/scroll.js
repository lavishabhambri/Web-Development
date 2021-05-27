// File used to create a scrolling effect

// Get the anchor tags of the navbar menu, this returns an array of different anchor tags in both mobile and laptop mode
var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');

// Add Event listener to all the tags
for(var i=0;i< navMenuAnchorTags.length();i++){
  navMenuAnchorTags[i].addEventListener('click', function(event){
    // Prevent the default action on the event
    event.preventDefault();

    // Fetch the targeted section-ID
    var targetSectionID = this.textContent.trim().toLowerCase();

    // Fetch the targeted section using its ID
    var targetSection = document.getElementById(targetSectionID);

    // Setting the interval function
    var interval = setInterval(function(){
      
      // Get the coordinates of the section everytime as the value of top keeps on decreasing everytime we scroll
      var targetSectionCoordinates = targetSection.getBoundingClientRect();

      // If value of top becomes <= 0, then we reached the desired interval
      if(targetSectionCoordinates.top <=0){
        // stop the interval
        clearInterval(interval);
        return;
      }
      // scroll in y-direction until we reach the targeted section
      window.scrollBy(0, 50);
    }, 20);
  });
}
