const list = document.querySelector('ul')
const menuButton = document.querySelector('.menu-button')
const discountButton = document.querySelector('.discount-button')
const totalButton = document.querySelector('.total-price')
const filterButton = document.querySelector('.filter-button')


function currencyValue(value) {
    return value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    });
}

function showMenu(arrayDiscount) /* estou chamando meu array com disconto!*/ {
    let myLi = ``

    arrayDiscount.forEach((product) => {
        myLi += `<li>
        <img src= ${product.src}>
        <p>${product.name}</p>
        <p class="item-price">${currencyValue(product.price)}</p>
    </li>`
    })

    list.innerHTML = myLi
}

function addDiscount() {
    const newPrices = menuOptions.map((discount) => ({
        ...discount, //Ferramenta: Spread Operator: ...(items)
        price: discount.price * 0.9, //10% de desconto

    }))
    showMenu(newPrices)
}

function totalPriceButton() {
    const totalPrice = menuOptions.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price
    }, 0)

    list.innerHTML = `<li>
    <p id="total-result">O VALOR TOTAL DOS ITENS É: ${currencyValue(totalPrice)}</p>
        </li>`

}

function filterOptionButton() {
    const veggieOptions = menuOptions.filter((veggie) => {
        if (veggie.vegan === true) {
            return true
        } else {
            return false
        }
    })
    showMenu(veggieOptions)
}



menuButton.addEventListener("click", () => showMenu(menuOptions)) //só vai chamar o showMenu quando clicar no botão (por causa da arrow function)
discountButton.addEventListener("click", addDiscount)
totalButton.addEventListener("click", totalPriceButton)
filterButton.addEventListener("click", filterOptionButton) 