function init (){
    const tableBody = document.getElementById("products")

    const addNewProduct = document.getElementById("button")
    addNewProduct.addEventListener("click",function(){
        const productsName = document.getElementById("ProductName")
        const productsPrice = document.getElementById("ProductPrice")
        const productsCategory = document.getElementById("ProductCategory")
        const productsImg = document.getElementById("ProductImg")
        
        const productsNameValue = productsName.value;
        const productsPriceValue = parseFloat(productsPrice.value);
        const productsCategoryValue = productsCategory.value;
        const productsImgValue = productsImg.value;

        if(isNaN(productsPriceValue)){
            alert ("Price most contain numbers");
            return;
        }

        const productsRow = getProducts(productsNameValue, productsPriceValue, productsCategoryValue, productsImgValue);

        tableBody.appendChild(productsRow)

        productsName.value = ""
        productsPrice.value = ""
        productsCategory.value = ''

    });

}

    function getProducts(productsNameValue, productsPriceValue, productsCategoryValue, productsImgValue){
        const tdproductsNameValue = document.createElement("td")
        tdproductsNameValue.innerText = productsNameValue
        
        const tdproductsPriceValue = document.createElement("td")
        tdproductsPriceValue.innerText = productsPriceValue
        
        const tdproductsCategoryValue = document.createElement("td")
        tdproductsCategoryValue.innerText = productsCategoryValue
        
        const tdproductsImgValue = document.createElement("td")
        const img = document.createElement("img")
        img.src = productsImgValue
        img.alt = "Product Image"
        img.width = 50;
        tdproductsImgValue.appendChild(img)
        


        const trProducts = document.createElement("tr")
        trProducts.append(tdproductsNameValue, tdproductsPriceValue, tdproductsCategoryValue, tdproductsImgValue)

        return trProducts

    }
init()