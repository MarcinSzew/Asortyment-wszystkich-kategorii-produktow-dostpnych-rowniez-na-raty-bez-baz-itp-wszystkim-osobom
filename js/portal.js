let form=document.getElementById("offerForm")

if(form){

form.addEventListener("submit",function(e){

e.preventDefault()

let offer={

name:document.getElementById("name").value,
desc:document.getElementById("desc").value,
price:document.getElementById("price").value,
category:document.getElementById("category").value

}

let offers=JSON.parse(localStorage.getItem("offers"))||[]

offers.push(offer)

localStorage.setItem("offers",JSON.stringify(offers))

alert("Oferta dodana")

})

}

let offersDiv=document.getElementById("offers")

if(offersDiv){

let offers=JSON.parse(localStorage.getItem("offers"))||[]

offers.forEach(o=>{

let div=document.createElement("div")

div.innerHTML=`
<h3>${o.name}</h3>
<p>${o.desc}</p>
<b>${o.price} zł</b>
<hr>
`

offersDiv.appendChild(div)

})

}
