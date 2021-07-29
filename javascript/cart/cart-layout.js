const teddyData = [
    {
        "name": 'Teddy 1',
        "color": 'green',
        "price": 5800,
        "quantity": 18,
        "_id": "5be9c8541c9d440000665243"
    },
    {
        "name": 'Teddy 2',
        "color": 'blue',
        "price": 1800,
        "quantity": 3,
        "_id": "5beaa8bf1c9d440000a57d94"
    },
    {
        "name": 'Teddy 2',
        "color": 'green',
        "price": 1800,
        "quantity": 1,
        "_id": "5beaa8bf1c9d440000a57d94"
    },
    {
        "name": 'Teddy 1',
        "color": 'blue',
        "price": 5800,
        "quantity": 19,
        "_id": "5be9c8541c9d440000665243"
    }
    

]

function addTeddy() {

}


    const cart = document.getElementById('cart')

    const cartTable = document.createElement('table');
    const cartThead = document.createElement('thead');

    const cartRow = document.createElement('tr');
    const cartRowTitle = document.createElement('th');
    const cartRowColor = document.createElement('th');
    const cartRowPrice = document.createElement('th');
    const cartRowQuantity = document.createElement('th');

    const cartBody = document.createElement('tbody');

    cartRowTitle.innerHTML = 'Name';
    cartRowColor.innerHTML = 'Color';
    cartRowPrice.innerHTML = 'Price';
    cartRowQuantity.innerHTML = 'Quantity';

    cart.appendChild(cartTable)

    cartTable.appendChild(cartThead)
    cartTable.appendChild(cartBody)

    cartThead.appendChild(cartRow)
    cartRow.appendChild(cartRowTitle)
    cartRow.appendChild(cartRowColor)
    cartRow.appendChild(cartRowPrice)
    cartRow.appendChild(cartRowQuantity)


teddyData.forEach((teddy) => {
    const cartBodyRow = document.createElement('tr');
    const cartBodyRowHeader = document.createElement('th');
    const cartBodyRowColor = document.createElement('td');
    const cartBodyRowPrice = document.createElement('td');
    const cartBodyRowQuantity = document.createElement('td');

    cartTable.setAttribute('class', 'table')
    cartRowTitle.setAttribute('scope', 'col')
    cartRowColor.setAttribute('scope', 'col')
    cartRowPrice.setAttribute('scope', 'col')
    cartRowQuantity.setAttribute('scope', 'col')
    cartBodyRowHeader.setAttribute('scope', 'row')

    cartBodyRowHeader.textContent = teddy.name;
    cartBodyRowColor.textContent = teddy.color;
    cartBodyRowPrice.textContent = teddy.price;
    cartBodyRowQuantity.textContent = teddy.quantity;

    cartBody.appendChild(cartBodyRow)
    cartBodyRow.appendChild(cartBodyRowHeader)
    cartBodyRow.appendChild(cartBodyRowColor)
    cartBodyRow.appendChild(cartBodyRowPrice)
    cartBodyRow.appendChild(cartBodyRowQuantity)
});

console.log(teddyData)

