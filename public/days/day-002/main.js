function onClick() {
    var ele = document.getElementById("lines")
    ele.classList.remove("no-animation")
    if (ele.classList.contains("active")) ele.classList.remove("active")
    else ele.classList.add("active")
}
