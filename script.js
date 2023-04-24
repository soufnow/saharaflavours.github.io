// Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// google translate function
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: "en" },
    "google_translate_element"
  );
}

// function to rate the recipe
function rateRecipe(columnNumber, rating) {
  // get the star rating element for the given column
  var starRating = document.getElementById("star_rating_" + columnNumber);

  // get all the stars in the rating element
  var stars = starRating.getElementsByClassName("star");

  // loop through the stars and set the class based on the rating
  for (var i = 0; i < stars.length; i++) {
    if (i < rating) {
      stars[i].classList.add("rated");
    } else {
      stars[i].classList.remove("rated");
    }
  }
}
