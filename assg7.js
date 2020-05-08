expandImage = document.getElementById("bibimage");
expandImage.addEventListener("click", onImageClick);

function onImageClick(){
    if (expandImage.style.width == "")
    {expandImage.style.width = "250px";}
    else {
        expandImage.style.width = "";
    }

}