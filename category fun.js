import dataBase from "./DataBase.js"
import displayProducts from './productAndPreproduct.js'

$('#mobile-nav #menu').on('click',function(){
    $('#mobile-menu.mobile-menu').toggleClass('active')
    $('#mobile-nav #menu').toggleClass('active')
})



$('#root .categories .set-fun').on('click',function(){
    let elementId = $(this).attr('id')
    let result = category(elementId)
    displayProducts(result,true)
})




function category(category){
    let result;
    switch (category) {
        case 'WomenHandbags':
            return result = dataBase.filter( val => val.category == 'WomenHandbags');
            break;
    
        case 'MenShoes' :
            return result = dataBase.filter( val => val.category == 'MenShoes');
            break;
        
        case 'babyshoes':
            return result = dataBase.filter( val => val.category == 'babyshoes')
            break;

        case 'ladyShoes':
            return result = dataBase.filter( val => val.category == 'ladyShoes')
            break;

    }
}

console.log(category('babyshoes'))