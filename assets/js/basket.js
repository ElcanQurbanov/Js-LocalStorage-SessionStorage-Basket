"use strict";





let tableBody = document.querySelector("tbody");

let products = JSON.parse(localStorage.getItem("basket"));

let totalPrice = document.querySelector("h3");



if (products != null) {
    let sum = 0;
    for (const product of products) {
        tableBody.innerHTML += `<tr>
    <td data-id =${product.id}>
    <img src="${product.img}" alt="">
    </td>
    <td>${product.name}</td>
    <td>${product.description}</td>
    <td>${product.count}</td>
    <td>$${product.price * product.count}</td>
    <td> <i class="fa-regular fa-trash-can delete-btn" style="color: red; cursor: pointer;"></i></td>
    </tr> `

        sum += product.price * product.count;

        totalPrice.innerText = "Total: $" + sum;
    }

    getBasketCount(products);

} else {
    document.querySelector("table").classList.add("d-none");
    document.querySelector(".alert-warning").classList.remove("d-none");
}


function getBasketCount(arr) {
    let sum = 0;
    for (const item of arr) {
        sum += item.count;
    }
    document.querySelector("sup").innerText = sum;
}


let deleteBtn = document.querySelectorAll(".delete-btn");


deleteBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
        deleteItem(this);
    });
});


function deleteItem(btn) {

    if (products != null) {

        let id = parseInt(btn.parentNode.parentNode.firstElementChild.getAttribute("data-id"));

        products = products.filter((m) => m.id != id);

        localStorage.setItem("basket", JSON.stringify(products));

        btn.parentNode.parentNode.remove();
        document.location.reload();

    }
    else {
        document.querySelector("table").classList.add("d-none")
        document.querySelector(".alert-warning").classList.remove("d-none");
    }


}

