
let timerInterval;
Swal.fire({
  title: "Data is Fetching !!",
  html: "It Will Display in <b></b> milliseconds.",
  timer: 8000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log("I was closed by the timer");
  }
});


let url = 'https://fakestoreapi.com/products'

let allproducts = document.getElementById("parent")
allproducts.style.backgroundColor="Azure"
allproducts.style.display = "flex"
allproducts.style.flexWrap = "wrap"
allproducts.style.gap="30px"
allproducts.style.padding="25px"
allproducts.style.border="2px solid black"


let mens = document.getElementById("mens")
let womens = document.getElementById("womens")
let electronics = document.getElementById("elec")
let jewelery = document.getElementById("jew")


mens.addEventListener("click", () => data("men's clothing"))
womens.addEventListener("click", () => data("women's clothing"))
electronics.addEventListener("click", () => data("electronics"))
jewelery.addEventListener("click", () => data("jewelery"))



async function data(cat = null) {
    let data = await fetch(url)
    let data2 = await data.json()
    // console.log(data2);

    allproducts.innerHTML = ""

    let data3 = cat ? data2.filter(x => x.category === cat) : data2
    // console.log(data3);

    data3.forEach(z => {
        let card = document.createElement("div")
        // card.style.width = "300px"
        // card.style.height = "600px"
        // card.style.border = "2px solid black"
        // card.style.textAlign = "center"

        card.style.width="300px"
        card.style.height="auto"
        card.style.border="2px solid black"
        card.style.textAlign="center"
        card.style.justifyItems="center"
        card.style.marginLeft="5px"
        card.style.padding="5px"
        card.style.boxShadow="3px 3px 5px 3px grey"
        card.style.borderRadius="10px"

        
        card.className = "card"

        card.innerHTML = `
                         <img src="${z.image}" width=250px height=250px/>
                         <h3>${z.title}</h3>
                         <p>id:${z.id}</p>
                         <p>$${z.price}</p>
                         <p>Rating:${z.rating.rate}</p>
                         <button id="addtocart">addToCart</button>
                         <button id="buynow">BuyNow</button>

        `
        allproducts.append(card)

        card.addEventListener("click", () => {
            localStorage.setItem("singlecard", JSON.stringify(z))
            location.href = "./singlep.html"

        });

        card.querySelector("#addtocart").addEventListener("click", (v) => {
            v.stopPropagation()
            // alert("Added to cart successfully") 
            Swal.fire("Added to Cart Successfully");
            let cartItems = JSON.parse(localStorage.getItem("cartItems")) || []
            cartItems.push(z)
            localStorage.setItem("cartItems", JSON.stringify(cartItems))
        });

        card.querySelector("#buynow").addEventListener("click", (k) => {
            k.stopPropagation()
            window.location.href = "./buynow.html"
        });


    });


}
data()



