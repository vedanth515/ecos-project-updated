

let allData = document.getElementById("container")

document.addEventListener("DOMContentLoaded", () => {
    let Items = JSON.parse(localStorage.getItem("cartItems"))
    console.log(Items);

    Items.forEach(x => {
        let card = document.createElement("div")
        card.style.width = "300px"
        card.style.height = "auto"
        card.style.border = "2px solid black"
        card.style.textAlign = "center"
        card.style.padding = "5px"
        card.style.boxShadow = "3px 3px 5px 3px gray"
        card.style.borderRadius = "10px"

        card.className = "card"
        card.innerHTML = `
                        <img src="${x.image}"/ width="250px" height="250px"
                        <h1>${x.title}</h1>
                        <p>$${x.price}</p>
                        <button id="remove">Remove</button>
                        <button id="buyNow">BUyNow</button>
        `

        allData.append(card)
        document.body.append(allData)

        card.querySelector("#remove").addEventListener("click", () => {
            // alert("item removed successfully")
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your item is successfully removed",
                showConfirmButton: false,
                timer: 1500
              });
            allData.removeChild(card)
        })
    });



});
