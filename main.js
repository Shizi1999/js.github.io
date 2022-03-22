function options() {
    var tabs = document.querySelectorAll(".option__item")
    var contents = document.querySelectorAll(".content__item")
    var tabActive = document.querySelector(".option__item.active")
    var line = document.querySelector(".line")
    line.style.left = tabActive.offsetLeft + "px"
    line.style.width = tabActive.offsetWidth + "px"
    tabs.forEach(function (tab, index) {
        tab.onclick = function () {
            document.querySelector(".option__item.active").classList.remove("active")
            document.querySelector(".content__item.invalid").classList.remove("invalid")
            this.classList.add("active")
            var tabActive = document.querySelector(".option__item.active")
            var line = document.querySelector(".line")
            line.style.left = tabActive.offsetLeft + "px"
            line.style.width = tabActive.offsetWidth + "px"
            contents[index].classList.add("invalid")
        }
    })
}

options();