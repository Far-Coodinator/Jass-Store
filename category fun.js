import dataBase from "./DataBase.js"
import displayProducts from './productAndPreproduct.js'

$('#mobile-nav #menu').on('click',function(){
    $('#mobile-menu.mobile-menu').toggleClass('active')
    $('#mobile-nav #menu').toggleClass('active');
});

export function closefiterMobile(){
    $('#mobile-menu.mobile-menu').toggleClass('active')
    $('#mobile-nav #menu').toggleClass('active');
};



$('#root .categories .set-fun').on('click',function(){
    let elementId = $(this).attr('id')
    let result = category(elementId)
    displayProducts(result,true)
})




function category(category){
    let result;
    switch (category) {
        case 'WomenHandbags':
            result = dataBase.filter( val => val.category == 'WomenHandbags');
            break;
    
        case 'MenShoes' :
            result = dataBase.filter( val => val.category == 'MenShoes');
            break;
        
        case 'babyshoes':
            result = dataBase.filter( val => val.category == 'babyshoes')
            break;

        case 'ladyShoes':
            result = dataBase.filter( val => val.category == 'ladyShoes')
            break;

    }
    resultLength = result.length
    console.log(resultLength)
    return result
}

function deleteOldCategory(num){
        const products = document.querySelectorAll('#root .product')
        const parent = document.querySelector('#root .products-container')
        for(let i=num-1;i<=0;i--){
            parent.removeChild(products[i])
        }

}
    
deleteOldCategory()
