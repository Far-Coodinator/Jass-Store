

$('.register-entry').on('click',()=>{
    $('#root #register-form').css('left','0')
    mobCloseacc()
})

$('#form .close-tab').on('click',()=>{
    let widthRegister = $('#root #register-form').width()
    $('#root #register-form').css('left',widthRegister+10)
})


