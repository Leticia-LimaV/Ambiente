var h1 = document.getElementById("h1")
var cor = document.body.style.backgroundColor="yellow"
var isBlack = false;
h1.addEventListener("click", function(){
    if(!isBlack) {
        h1.style.color = "yellow";
        document.body.style.backgroundColor = "black"
    }else{
        h1.style.color = "black";
        document.body.style.backgroundColor = "yellow"
    }
    isBlack = !isBlack
})