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

let totalResult = [];
$('#root .categories .set-fun').on('click', function () {
    let elementId = $(this).attr('id');
    deleteOldCategory(totalResult);
    totalResult = category(elementId);
    displayProducts(totalResult, true);
    
});


// Function to filter category data
function category(category) {
    let result;
    switch (category) {
        case 'WomenHandbags':
            result = dataBase.filter((val) => val.category === 'WomenHandbags');
            break;
        case 'MenShoes':
            result = dataBase.filter((val) => val.category === 'MenShoes');
            break;
        case 'babyshoes':
            result = dataBase.filter((val) => val.category === 'babyshoes');
            break;
        case 'ladyShoes':
            result = dataBase.filter((val) => val.category === 'ladyShoes');
            break;
        default:
            result = [];
            break;
    }
    return result;
}



function deleteOldCategory(num){
    if(num){
        const oldCategory = document.querySelectorAll('.products-container .product');
        for(let i = 0 ; i <= num.length ;i++){
            oldCategory[i].remove();
        }
    }  
}
    
