function toggleWorkSubset() {
    if (document.getElementById("workset").style.visibility == "hidden") {
        document.getElementById("workset").style.visibility = "visible";
        document.getElementById("workset").style.height = "auto";
    } else {
        document.getElementById("workset").style.visibility = "hidden";
        document.getElementById("workset").style.height = "0";
    }
}

function togglePhotoSubset() {
    if (document.getElementById("photoset").style.visibility == "hidden") {
        document.getElementById("photoset").style.visibility = "visible";
        document.getElementById("photoset").style.height = "auto";
    } else {
        document.getElementById("photoset").style.visibility = "hidden";
        document.getElementById("photoset").style.height = "0";
    }
}