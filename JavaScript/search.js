function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById("searchbar");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// ================


// YouTube: https://www.youtube.com/watch?v=ietvYXjcWPo
// const product = [{
//     id: 0,
//     image: '../images/treats/dogs/peanut-banana-coconut.JPG',
//     title: 'peanut-banana-coconut',
//     price: 6
// },
// {
//     id: 1,
//     image: '../images/treats/dogs/peanut-banana-coconut.JPG',
//     title: 'peanut-banana-coconut',
//     price: 6
// },
// {
//     id: 2,
//     image: '../images/treats/dogs/peanut-banana-coconut.JPG',
//     title: 'peanut-banana-coconut',
//     price: 6
// },
// {
//     id: 3,
//     image: '../images/treats/dogs/peanut-banana-coconut.JPG',
//     title: 'peanut-banana-coconut',
//     price: 6
// },
// {
//     id: 4,
//     image: '../images/treats/dogs/peanut-banana-coconut.JPG',
//     title: 'peanut-banana-coconut',
//     price: 6
// },
// {
//     id: 5,
//     image: '../images/treats/dogs/peanut-banana-coconut.JPG',
//     title: 'peanut-banana-coconut',
//     price: 6
// },
// ]

// const categories = [...new Set(product.map((item) => { return item }))]
// document.getElementById('searchBar').addEventListener('keyup', (e) => {
//     const searchData = e.target.value.toLowerCase();
//     const filterData = categories.filter((item) => {
//         return (
//             item.title.toLocaleLowerCase().includes(searchData)
//         )
//     })
//     displayItem(filterData)
// });

// const displayItem = (items) => {
//     document.getElementById('root').innerHTML = items.map((item) => {
//         var { image, title, price } = item;
//         return (
//             `<div class='box'>
//                 <img class='images' src=${image}></img>
//             </div>
//             <div class='bottom'>
//                 <p>${title}</p>
//                 <h2>$ ${price}.00</h2>
//                 <button>Add to cart</button>
//             </div>`
//         )
//     }).join('')
// };
// displayItem(categories)