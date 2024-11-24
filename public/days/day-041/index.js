function onClick(ele) {
    var ele = document.getElementsByClassName("modal")[0]

    if (ele.classList.contains("close")) {
        ele.classList.remove("close")
    }    
    else {
        ele.classList.add("close")
    }
}