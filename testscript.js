//this line creates a variable that is linked to <p id="firsttest"> tag
myitem = document.getElementById("firsttest");

//This adds an event listener to that tag that detects when you click on it, and then runs the onClick() function
//the 2nd line adds a listener to detect when the mouse is moved off the text
    myitem.addEventListener("click", onClick);
    myitem.addEventListener("mouseout", mouseOut);
//This is the onClick Function, and changes the myitem variable to green text in its html <p> tag
//my added line also changes the font weight to 900
    function onClick() {  
        myitem.style.color = "green";
        myitem.style.fontWeight = "900";  
    }
    //this function resets the text properties back to its default
    function mouseOut() {
        myitem.style.color = "";
        myitem.style.fontWeight = "";
    }