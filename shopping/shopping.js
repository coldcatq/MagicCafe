class Shopping {

    closeShoppingPage() {
        ROOT_SHOPPING.innerHTML = ''
    }

    render() {
        const productsStore = localStorageUtil.getProducts()
        let htmlCatalog = ''
        let sumCatalog = 0
        
        

        console.log(productsStore);
        CATALOG.forEach(({ id, name, price }) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                <tr>
                <td class="shopping__element--name">${name}</td>
                <td class="shopping__element--price">${price.toLocaleString()} сом</td>
                </tr>
                `

                sumCatalog += price
            }
        })


        const html = `
        <div class="shopping__container">
        <div class="shopping__close" onclick="shoppingPage.closeShoppingPage()">
        <img width=12 src="./components/shopping/img/close.svg">
        </div>
        <table>
        ${htmlCatalog}

        <tr>
            <td class="shopping__element--name">Сумма: </td>
            <td class="shopping__element--price">${sumCatalog.toLocaleString()} сом</td>
           
        </tr>

        </table>
        </div
        `
        ROOT_SHOPPING.innerHTML = html
    }
}

const shoppingPage = new Shopping()