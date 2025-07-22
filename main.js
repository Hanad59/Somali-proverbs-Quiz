const h1 = document.querySelector("#h1")
const h2 = document.querySelector("#h2")
const h3 = document.querySelector("#h3")
const h4 = document.querySelector("#h4")
const h5 = document.querySelector("#h5")
const h6 = document.querySelector("#h6")
const h7 = document.querySelector("#h7")
const h8 = document.querySelector("#h8")
const h9 = document.querySelector("#h9")
const h10 = document.querySelector("#h10")
const pre = document.querySelector("#pre")
const nex = document.querySelector("#nex")
const end = document.querySelector("#end")


let current = 0;

nex.addEventListener("click", () => {
    if(current === 0){
        h1.classList.remove("hidden")
    }

    if(current === 1){
        h1.classList.add("hidden")
        h2.classList.remove("hidden")
    }
    
    if(current === 2){
        h2.classList.add("hidden")
        h3.classList.remove("hidden")
    }

    if(current === 3){
        h3.classList.add("hidden")
        h4.classList.remove("hidden")
    }

    if(current === 4){
        h4.classList.add("hidden")
        h5.classList.remove("hidden")
        h5.style.color = "red"
    }

    if(current === 5){
        h5.classList.add("hidden")
        h6.classList.remove("hidden")
    }

    if(current === 6){
        h6.classList.add("hidden")
        h7.classList.remove("hidden")
    }

    if(current === 7){
        h7.classList.add("hidden")
        h8.classList.remove("hidden")
    }

    if(current === 8){
        h8.classList.add("hidden")
        h9.classList.remove("hidden")
    }

    if(current === 9){
        h9.classList.add("hidden")
        h10.classList.remove("hidden")
        end.classList.remove("hidden")
        end.style.color = "red"
    }

    if(current < 10){
        current ++
    }

})



pre.addEventListener("click", () => {
    if(current === 1){
        h2.classList.add("hidden")
        h1.classList.remove("hidden")
    }

    if(current === 2){
        h2.classList.add("hidden")
        h1.classList.remove("hidden")
    }
    
    if(current === 3){
        h3.classList.add("hidden")
        h2.classList.remove("hidden")
    }

    if(current === 4){
        h4.classList.add("hidden")
        h3.classList.remove("hidden")
    }

    if(current === 5){
        h5.classList.add("hidden")
        h4.classList.remove("hidden")
    }

    if(current === 6){
        h6.classList.add("hidden")
        h5.classList.remove("hidden")
    }

    if(current === 7){
        h7.classList.add("hidden")
        h6.classList.remove("hidden")
    }

    if(current === 8){
        h8.classList.add("hidden")
        h7.classList.remove("hidden")
    }

    if(current === 9){
        h9.classList.add("hidden")
        h8.classList.remove("hidden")
    }

    if(current === 10){
        h10.classList.add("hidden")
        end.classList.add("hidden")
        h9.classList.remove("hidden")
    }

    if(current > 0){
        current --
    }

})






