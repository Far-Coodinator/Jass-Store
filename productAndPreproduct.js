import dataBase from "./DataBase.js";
const bodyWidth = $('body').width()
let mobileBody = 650

document.addEventListener('DOMContentLoaded',()=>{
    let itemsPerPage = 10;
    pageRender(1);
    const loader = document.querySelector('#root .loading-animation')
    let page = 2;   
    
    function lazyload(){
        const {scrollTop,clientHeight,scrollHeight} = document.documentElement;
        if(scrollTop + clientHeight >= scrollHeight-5){
            setTimeout(()=>{
                pageRender(page);
                page += 1;
            },500)
        }
    }

    function pageRender(page){
        const start = (page-1) * itemsPerPage;
        const end = page * itemsPerPage;
        const dataSlice = dataBase.slice(start,end);
        displayProducts(dataSlice,false)
        if(end >= dataBase.length)
            loader.style.display = 'none';
    }

    


    document.addEventListener('scroll',lazyload);

});

function displayProducts(data,filterd){
    const container = document.querySelector('#products-container')
    data.forEach( product =>{
        const offerPrice = defindingOfferPrice(product.offer,product.price)
        const ratingstars = defindingRatingStarts(product.rating)

        const productElement = document.createElement('div')
        productElement.className = 'product'
        productElement.id = product.id
        productElement.setAttribute('data-category', product.category);
        if(!filterd)
            container.appendChild(productElement)
        else
            container.prepend(productElement)

        const productTem = `<div class="image-container">
                        <img src="${product.imagePath}" alt="${product.title}" class="product-pic">
                        <i class="fa-solid fa-heart"></i>
                    </div>
                    <div class="details">
                        <p class="title">${product.title}</p>
                        <div class="rating">
                            <p>Rating: <span class="rating-image">
                                    ${ratingstars}
                                </span>
                                <span class="rating-no">(${product.rating})</span>
                            </p>
                        </div>
                        <p class="price">price: ${offerPrice}</p>
                    </div>`

        productElement.innerHTML = productTem
        productElement.addEventListener('click',()=>{
            showproductPreview(product,offerPrice,ratingstars);
            if(bodyWidth <= mobileBody){
                $('.mob-search-box').hide()
                $('#root .categories').hide()
            }
        
        })


    });



function defindingOfferPrice(offer,price){
    if(offer && price){
        const findOfferPrice = (price / 100 ) * offer
        let offerPrice = (price-findOfferPrice).toFixed(2)
        return `<span class="current-price">${offerPrice}</span>$  <span class="actul-price">${price}</span>$(<span>${offer}</span>%)`
    }else
        return `<span class="current-price">${price}</span>$`
}

function defindingRatingStarts(rating){
    const positiveCount = Math.trunc(rating);
    const halfStart = rating%1 ;
    let starts = ``;
    for(let i=0;i<positiveCount;i++){
        starts += `<img src="./logo and web related pics/star.png" alt="">`
    }
    if(halfStart)
        starts += `<img src="./logo and web related pics/rating.png" alt="">`
    return starts
}

function showproductPreview(product,offerPrice,ratingstars){

    const tagString = prodectTagesToString(product.tags)
    const radioButtonForSizes = sizeRadioBtn(product.id,product.availableSizes)

    const productPreviewTemplate = `<div class="product-preview" id="product-preview">
                <div class="part-1">
                    <div class="part-1-a">
                        <span class="close-preview" id="close-preview">&times;</span>
                        <img src="${product.imagePath}" alt="" class="product-pic-preview">
                    </div>
                    <div class="part-1-b">
                        <p class="preview-title">${product.title} 
                            <span class="tags">${tagString}</span>
                        </p>
                        <p class="price">Price : ${offerPrice}</p>
                    </div>
                </div>
                <div class="part-2">
                    <h3 class="">Brand : <span class="brand-name">${product.brand}</span></h3>
                    <p class="item-code">Product Serial No : <span class="item-code">${product.id + 1000}</span></p>
                    <div class="description">
                        <p>Description</p>
                    </div>
                    <div class="description-preview">
                        <p class="">${product.description}</p>
                    </div>
                    <div class="size-unit">
                        <div class="size">
                            <p>Size : </p>
                            <div class="size-options">
                                ${radioButtonForSizes}
                            </div>
                        </div>
                        <div class="unit-box">
                            <p>Unit : </p>
                            <div class="unit-option">
                                <button class="minus"><i class="fa-solid fa-minus"></i></button>
                                <input type="number" value="1"/>
                                <button class="add"><i class="fa-solid fa-plus"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class="rating-box">
                        <p>Rating (<span class="rating-no">230</span>) :</p>
                        <div class="rate">
                            ${ratingstars}
                            <p>( ${product.rating} )</p>
                        </div>
                    </div>

                    <div class="review-preview">
                        <p>Reviews</p>
                        <div class="review-content">
                            <div class="head-box">
                                <img src="./IMG-20241222-WA0064.jpg" alt="">
                                <p>Farhan mjm  📅<span class="review-time">10.12.2023 (02:44pm)</span></p>
                            </div>
                            <div class="rev-box">
                                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quia."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="addToCard-buyNow">
                    <p>Total Amount : 400$ (product: 350$ + Delivery fee : 50$)</p>
                    <div>
                        <button>Add to Card</button>
                        <button>Buy Now</button>
                    </div>
                </div>
            `


    const productPreviewContainer = document.querySelector('#root .product-preview-container');
    productPreviewContainer.innerHTML = productPreviewTemplate
    productPreviewContainer.style.display = 'flex';

    document.querySelector('#root .product-preview-container .part-1-a .close-preview').addEventListener('click',()=>{
        productPreviewContainer.style.display = 'none'
    })


    // function for increse the quantity
    document.querySelector('.product-preview-container .add').addEventListener('click',()=>{
        const inputElement = document.querySelector('.product-preview-container .unit-box input')
        let increse = Number(inputElement.value)
        increse += 1
        inputElement.value = increse
        console.log(increse)
    })

    // function for decrece th quantity
    document.querySelector('.product-preview-container .minus').addEventListener('click',()=>{
        const inputElement = document.querySelector('.product-preview-container .unit-box input')
        let increse = Number(inputElement.value)
        if(increse > 1){
            increse -= 1
            inputElement.value = increse
        }
    })

}


function prodectTagesToString(array){
    let string = '';
    array.forEach((x=>{
        string += ('#'+x+" ")
    }));
    return string;
}

function sizeRadioBtn(productId,array){
    let buttonString = "";
    array.forEach((x=>{
        const tag = `<div class="size-option">
                        <input type="radio" id="size-${x}-${productId}" name="size" value="${x}">
                        <label for="size-${x}-${productId}">${x}</label>
                    </div>`
        buttonString += tag;
    }));
    return buttonString;
}
}



























export default displayProducts;