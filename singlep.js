
let singlecard=document.createElement("div")
singlecard.className="card"

singlecard.style.width="300px"
singlecard.style.height="auto"
singlecard.style.border="2px solid black"
singlecard.style.textAlign="center"
singlecard.style.padding="5px"
singlecard.style.boxShadow="3px 3px 5px 3px gray"
singlecard.style.borderRadius="10px"
console.log(singlecard);



let fromlocal=JSON.parse(localStorage.getItem("singlecard"))

singlecard.innerHTML=`
                        <img src="${fromlocal.image}" width=250px height=250px />
                        <h2>${fromlocal.title}</h2> 
                        <p>$${fromlocal.price}</p> 
                        <p>id:${fromlocal.id}</p> 
                         <p>Rating:${fromlocal.rating.rate}</p> 
                        <button>addToCart</button>
                        <button>BuyNow</button>

`
document.body.append(singlecard)
