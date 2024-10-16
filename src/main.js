// SECTION VARIABLES
const htmlPage = document.getElementById("html"),
      cssPage = document.getElementById("css"),
      jsPage = document.getElementById("js"),
      rubyPage = document.getElementById("ruby"),
      railsPage = document.getElementById("rails"),
      allButtons = document.getElementsByClassName("examplesButton")


// BUTTON VARIABLES
const htmlButton = document.getElementById("htmlButton"),
      cssButton = document.getElementById("cssButton"),
      jsButton = document.getElementById("jsButton"),
      rubyButton = document.getElementById("rubyButton"),
      railsButton = document.getElementById("railsButton"),
      homeButton = document.getElementById("homeButton")

// ?EVENT LISTENERS
htmlButton.addEventListener("click", function() {
    showContent(htmlPage, allButtons);
})
cssButton.addEventListener("click", function() {
    showContent(cssPage, allButtons);
})
jsButton.addEventListener("click", function() {
    showContent(jsPage, allButtons);
})
rubyButton.addEventListener("click", function() {
    showContent(rubyPage, allButtons);
})
railsButton.addEventListener("click", function() {
    showContent(railsPage, allButtons);
})
homeButton.addEventListener("click", function() {
    showMain(allButtons);
})

// Toggle the pages
// on click show the page that was clicked
// Make sure all other sections are hidden
function showContent(pageToShow, allButtons) {
    htmlPage.classList.add("hidden")
    cssPage.classList.add("hidden")
    jsPage.classList.add("hidden")
    rubyPage.classList.add("hidden")
    railsPage.classList.add("hidden")
    
    pageToShow.classList.remove("hidden");
    for(let i=0; i < allButtons.length; i++) {
            allButtons[i].classList.add("hidden")
    }
}

function showMain(allButtons) {
    htmlPage.classList.add("hidden")
    cssPage.classList.add("hidden")
    jsPage.classList.add("hidden")
    rubyPage.classList.add("hidden")
    railsPage.classList.add("hidden")

    for(let i=0; i < allButtons.length; i++) {
        allButtons[i].classList.remove("hidden")
    }
}