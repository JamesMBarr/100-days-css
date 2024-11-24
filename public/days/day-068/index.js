function onClick() {
    var containers = document.getElementById("container")
    if (containers.classList.contains("active")) containers.classList.remove("active")
    else containers.classList.add("active")
}