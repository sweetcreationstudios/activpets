let items = ["bakeryProducts": [
    {
        "name": "Blueberry-Coconut",
        "price": 8,
        "size": "8 oz",
        "ingredients": [
            "Blueberry",
            "Coconut"
        ]
    },
    {
        "name": "Strawberry-Banana",
        "price": 9,
        "size": "8 oz",
        "ingredients": [
            "Strawberry",
            "Banana"
        ]
    },
    {
        "name": "Banana-Coconut",
        "price": 8,
        "size": "8 oz",
        "ingredients": [
            "Banana",
            "Coconut"
        ]
    }]
];

const obj = JSON.parse(items);
document.getElementById("demo").innerHTML =
    obj.bakeryProducts[0].name + " " + obj.bakeryProducts[0].price;

