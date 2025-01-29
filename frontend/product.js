
let FilterSleep = document.getElementById("filter-Sleep")
let FilterBathe = document.getElementById("filter-Bathe")
let FilterEat = document.getElementById("filter-Eat")
let FilterDrink = document.getElementById("filter-Drink")
let FilterDecor = document.getElementById("filter-Decor")
let SortHigh = document.getElementById("sort-low-to-high")
let SortLow = document.getElementById("sort-high-to-low")

//load product
let productdata=[]

function FetchData() {
    fetch("https://backend-intern-1-h5e8.onrender.com/pitches")
        .then((res) => res.json())
        .then((data) => {List(data)
        productdata=data}
    )
        .catch((err) => console.log(err))
}
FetchData()

function List(data) {
    const store = data.map((el) => Card(el.image, el.title, el.category, el.price, el.id,el.description))
    document.getElementById("data-list-wrapper").innerHTML = store.join("")
}

function Card(image, title, category, price, id,description) {
    let singlecard = `
    <a href="describe.html?title=${encodeURIComponent(title)}&image=${encodeURIComponent(image)}&category=${encodeURIComponent(category)}&price=${encodeURIComponent(price)}&description=${encodeURIComponent(description)}&id=${encodeURIComponent(id)}">
<div class="card col-2 mb-3 procard" data-id=${id} style="width:300px;border:0px">
<div class="card-img">
    <img src="${image}" alt="" width="300px">
</div>
<div class="card-body">
    <h4 class="card-title">${title}</h4>
    <p class="card-catogery">${category}</p>
    <p class="card-price">$${price}</p>
    <button class="card-button pe-4 ps-2" data-id=${id}>Delete</button>
</div>
<div class="pose ms-3">
<img src="https://snowehome.com/cdn/shop/files/quick-add-icon_400x.jpg?v=16992969588348465457" alt="" width="50px">
</div>
</div>
</a>

`
    return singlecard
}



//Delete product
{
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("card-button")) {
            DeleteProduct(e.target.dataset.id)
        }
    })

    function DeleteProduct(id) {
        fetch(`https://backend-intern-1-h5e8.onrender.com/pitches/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                alert("Deleted...")
                console.log(data)
            })
            .catch((err) => console.log(err))
    }
}



//Filter Product
{
    FilterSleep.addEventListener("click", () => {
        console.log(productdata)
        let FilterData = productdata.filter((el) => el.category == "Sleep")
        console.log(FilterData)
        List(FilterData)
    })

    FilterBathe.addEventListener("click", () => {
        console.log(productdata)
        let FilterData = productdata.filter((el) => el.category == "Bathe")
        console.log(FilterData)
        List(FilterData)
    })

    FilterEat.addEventListener("click", () => {
        console.log(productdata)
        let FilterData = productdata.filter((el) => el.category == "Eat")
        console.log(FilterData)
        List(FilterData)
    })

    FilterDrink.addEventListener("click", () => {
        console.log(productdata)
        let FilterData = productdata.filter((el) => el.category == "Drink")
        console.log(FilterData)
        List(FilterData)
    })

    FilterDecor.addEventListener("click", () => {
        console.log(productdata)
        let FilterData = productdata.filter((el) => el.category == "Decor")
        console.log(FilterData)
        List(FilterData)
    })
}

//Sort Product

    SortHigh.addEventListener("click", () => {
        const SortHigh = productdata.sort((a, b) =>a.price-b.price)
        console.log(SortHigh)
        List(SortHigh)
    })

    SortLow.addEventListener("click", () => {
        const SortLow = productdata.sort((a, b) =>b.price-a.price)
        console.log(SortLow)
        List(SortLow)
    })

    

    
