import handbagsData from "./ladies-hand-bags .js";
import shoes from "./men-shoes.js";
import displayProducts from "./productAndPreproduct.js";
 let data = [...handbagsData,...shoes]

document.querySelector('#filter .apply .apply-filter').addEventListener('click',()=>{
    const categoriesElement = document.querySelectorAll('#filter .categories-box input.category:checked');
    const colorsElement = document.querySelectorAll('#filter .colors-box input.color:checked');
    const sizesElement = document.querySelectorAll('#filter .sizes-box input.size:checked');
    const minPrice = document.querySelector('#filter .min-price-box input').value || 0
    const maxPrice = document.querySelector('#filter .max-price-box input').value || 50
    
    const categories = categoriesElement.length ? Array.from(categoriesElement, el => el.value) : [];
    const colors = colorsElement.length ? Array.from(colorsElement, el => el.value) : [];
    const sizes = sizesElement.length ? Array.from(sizesElement, el => el.value) : [];

    const filteredData = data.filter(product =>{
        return (!categories.length || categories.includes(product.category))&&
            (!colors.length || checkArrayInArray(colors,product.color))&&
            (!sizes.length || checkArrayInArray(sizes,product.availableSizes))&&
            (minMaxPrice(minPrice,maxPrice,product.price));
    })
    displayProducts(filteredData,true)
    
})

function checkArrayInArray(arr1,arr2){
    return arr1.some(x => arr2.includes(x));
}

function minMaxPrice(min,max,price){
    return (price > min && price < max)
}




const minInput = document.querySelector('#filter .min-price-box input');
document.querySelector('#filter .min-price-box .minus').addEventListener('click',()=>{
    let decrece = Number(minInput.value)
    if(decrece > 0){
        decrece --
        minInput.value = decrece
    }
});
document.querySelector('#filter .min-price-box .add').addEventListener('click',()=>{
    let increse = Number(minInput.value)
        increse ++
        minInput.value = increse
});



const maxInput = document.querySelector('#filter .max-price-box input');
document.querySelector('#filter .max-price-box .minus').addEventListener('click',()=>{
    let decrece = Number(maxInput.value)
    if(decrece > Number(minInput.value)+50){
        decrece --
        maxInput.value = decrece
    }
});
document.querySelector('#filter .max-price-box .add').addEventListener('click',()=>{
    let increse = Number(maxInput.value)
        increse ++
        maxInput.value = increse
});










