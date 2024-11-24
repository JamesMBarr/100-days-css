function onClick(ele) {
    var images = document.getElementsByTagName('img')

    if (ele.classList.contains("selected")) {
        ele.classList.remove("selected")
        for (const image of images) {
            image.classList.remove("blacken")
        }
    }    
    else {
        ele.classList.add("selected")
        for (const image of images) {
            if (!image.classList.contains("selected"))
                image.classList.add("blacken")
        }
    }
}