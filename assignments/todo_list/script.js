let todo = document.querySelector("input")
let btn = document.querySelector("button")
let  divs = document.querySelector(".todos")

var count = 0
btn.addEventListener("click",function() {
    var item = todo.value
    var para = document.createElement("p")
    para.innerHTML = item
    para.setAttribute("key", count)  
    divs.appendChild(para)
    count += 1
    para.addEventListener("click", function(){
        divs.removeChild(para)
    })
    todo.value = ""
})
