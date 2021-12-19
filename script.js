let tabs = document.querySelectorAll(".tabs button");
let contents = document.querySelectorAll(".contents .content");

tabs.forEach(function(tab, tabIndex){
    tab.addEventListener("click", function(){
        tabs.forEach(function(tab) {
            tab.classList.remove("active");
        })
        tab.classList.add("active");

        contents.forEach(function(content, contentIndex) {
            if(contentIndex == tabIndex){
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        })
    })
})
