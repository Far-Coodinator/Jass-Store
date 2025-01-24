import dataBase from "./DataBase.js"
import { userData } from "./main.js";

$('#mobile-nav #likes').on('click',()=>{
    $('#mobile-nav #likes').toggleClass('active');
    $('#mobile-nav #likes i').toggleClass('activ-ico')
    $('.likes-product').css('top','0px')
    likeItems(userData.L)
})

$('.likes-product .lik-na > i').on('click',()=>{
    $('.likes-product').css('top','100vh')
    $('#mobile-nav #likes').toggleClass('active');
    $('#mobile-nav #likes i').toggleClass('activ-ico')
})

export function closeLike_pro(){
    $('.likes-product').css('top','100vh')
}

function likeItems(array){
    $('.likes-product .f-products').html("");
    array.forEach( x => {
        let likeProduct = dataBase.find( item => item.id == x);
        const offerPriceLikeProduct = defindingOfferPrice(likeProduct.offer,likeProduct.price)
        const likeProductTemp = `
                    <div class="f-product" id="fav-${likeProduct.id}">
                        <div class="b-1-like">
                            <div class="f-1">
                                <img src="${likeProduct.imagePath}" alt="" class="p-img">
                            </div>
                            <div class="f-2">
                                <p>${likeProduct.title}</p>
                                <p class="price">${offerPriceLikeProduct}</p>
                            </div>
                        </div>
                        <div class="delete-likes">
                            <i class="fa-regular fa-trash-can"></i>
                        </div>
                    </div>`
            let pId = likeProduct.id
            $('.likes-product .f-products').prepend(likeProductTemp);
            let favId = `#fav-${pId}`
            $('.delete-likes').on('click',function(){


                let likeArray = userData.L;
                $('#h-b-alert').css('display','flex');
                $('#h-b-alert .imoji').text("🚮")
                $('#h-b-alert p').text("Do you want to remove from favorite")
                $('#h-b-alert button').on('click',function(){
                    $(favId).remove();
                    likeArray.splice(likeArray.indexOf(pId),1)
                    $('#h-b-alert').css('display','none');
                })
            });
    });
}



function defindingOfferPrice(offer,price){
    if(offer && price){
        const findOfferPrice = (price / 100 ) * offer
        let offerPrice = (price-findOfferPrice).toFixed(2)
        return `<span class="current-price">${offerPrice}</span>$  <span class="actul-price">${price}</span>$(<span>${offer}</span>%)`
    }else
        return `<span class="current-price">${price}</span>$`
}
