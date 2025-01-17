import mobCloseacc from "./main.js"

$('.register-entry').on('click',()=>{
    $('#root #register-form').css('top','0')
    mobCloseacc()
})

$('#form .close-tab').on('click',()=>{
    $('#root #register-form').css('top','100vh');
    $('this').css('left','0')
})




$('.mobile-nav #filter-mob').on('click',()=>{
    $('.filter').toggleClass('active');
    $('#mobile-nav #filter-mob').toggleClass('active');
    $('#mobile-nav #filter-mob i').toggleClass('active-ico')
})