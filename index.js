var btnPlus = document.querySelectorAll(".btnPlus")
var btnMoins = document.querySelectorAll(".btnMoins")
var trash = document.querySelectorAll(".fa-trash")
var heart = document.querySelectorAll(".fa-heart")


for(let i = 0; i < btnPlus.length; i++){
    btnPlus[i].addEventListener("click", function(){
        btnPlus[i].previousElementSibling.innerText++
        SommeTotal()
    })
}

for(let i = 0; i< btnMoins.length;i++){
    btnMoins[i].addEventListener("click",function(){

        if(btnMoins[i].nextElementSibling.innerText>0){
            btnMoins[i].nextElementSibling.innerText --
            SommeTotal()
        }
       
    })
}

for(let i = 0; i<trash.length;i++){
    trash[i].addEventListener("click",function(){
        trash[i].parentElement.remove()
        SommeTotal()
        
    })
}


for(let i = 0 ; i<heart.length;i++){
    heart[i].addEventListener("click",function(){
        heart[i].classList.toggle("mariem")
    })
}


function SommeTotal(){
    var price = document.querySelectorAll(".price")
    var qte = document.querySelectorAll(".qte")
    var somm = document.querySelector("#somm")

    var sum = 0

    for(let i =0; i < qte.length;i++){
        sum = sum + price[i].innerText * qte[i].innerText
    }

    somm.innerText = sum
}






















