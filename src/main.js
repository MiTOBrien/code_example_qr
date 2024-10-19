// SECTION VARIABLES
const htmlPage = document.getElementById("html"),
      cssPage = document.getElementById("css"),
      jsPage = document.getElementById("js"),
      rubyPage = document.getElementById("ruby"),
      railsPage = document.getElementById("rails"),
      sqlPage = document.getElementById("sql"),
      allButtons = document.getElementsByClassName("examplesButton")
      allPages = document.getElementsByClassName("codePage")


// BUTTON VARIABLES
const htmlButton = document.getElementById("htmlButton"),
      cssButton = document.getElementById("cssButton"),
      jsButton = document.getElementById("jsButton"),
      rubyButton = document.getElementById("rubyButton"),
      railsButton = document.getElementById("railsButton"),
      sqlButton = document.getElementById("sqlButton"),
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
sqlButton.addEventListener("click", function() {
    showContent(sqlPage, allButtons);
})
homeButton.addEventListener("click", function() {
    showMain(allButtons);
})

// Toggle the pages

function showContent(pageToShow, allButtons) {
    for(let i=0; i < allPages.length; i++) {
        allPages[i].classList.add("hidden")
    }

    pageToShow.classList.remove("hidden");
    for(let i=0; i < allButtons.length; i++) {
            allButtons[i].classList.add("hidden")
    }
}

function showMain(allButtons) {
    for(let i=0; i < allPages.length; i++) {
        allPages[i].classList.add("hidden")
    }

    for(let i=0; i < allButtons.length; i++) {
        allButtons[i].classList.remove("hidden")
    }
}