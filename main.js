let bodyWidth=parseFloat($('body').css('width'))
let mobilewidth=650
window.addEventListener('resize',()=>{bodyWidth=$('document').width()})
export let userData={n:undefined,p:undefined,l:[],e:undefined,no:undefined,}
const showLogin=$('#login');let userLogin=$('#user-login')
let loginForm=!1
let mobLogin=!1
$('.user-login').on('click',()=>{if(bodyWidth<=mobilewidth){if(!mobLogin)
mobOpenacc()
else mobCloseacc()}else{if(!loginForm)
openLoginForm()
else closeLoginForm()}});export function openLoginForm(){userLogin.css('background-color','rgba(33, 32, 32, 0.484)')
userLogin.css('color','white')
showLogin.css('right','30px')
loginForm=!0}
function closeLoginForm(){showLogin.css('right','-320px')
loginForm=!1
userLogin.css('background','white')
userLogin.css('color','black')}
export function mobOpenacc(){$('#root .login').css('top','0')
$('#mobile-nav #account').css('background-color','black');$('#mobile-nav #account').css('color','white')
mobLogin=!0}
function mobCloseacc(){$('#root .login').css('top','100vh')
$('#mobile-nav #account').css('color','black');$('#mobile-nav #account').css('background-color','white');mobLogin=!1}
const registerForm=document.querySelector('#register-form')
const RegisterEntry=document.querySelector('#login .regiset-pera span')
RegisterEntry.addEventListener('click',()=>{openRegisterForm()})
function openRegisterForm(){closeLoginForm()
registerForm.style.display='flex'
setTimeout(()=>{registerForm.style.width='100%'})}
function closeRegisterForm(){if(!(bodyWidth<=mobilewidth)){registerForm.style.width='0%'
setTimeout(()=>{registerForm.style.display='none'},1000)}}
document.querySelector('#form .close-tab').addEventListener('click',()=>{closeRegisterForm()})
const searchIcon=document.querySelector('.nav-box3 .search-box')
let searchbar=!1
searchIcon.addEventListener('click',()=>{const showSearchBar=document.querySelector('#root #search-box')
if(!searchbar){searchIcon.style.background='rgba(33, 32, 32, 0.484)'
searchIcon.style.color='white'
showSearchBar.style.margin='50px auto 20px'
searchbar=!0}else{showSearchBar.style.margin='0 auto 20px'
searchbar=!1
searchIcon.style.background='white'
searchIcon.style.color='black'}})
const filterbox=document.querySelector('#filter')
const root=document.querySelector('#root')
const closeFilterIcon=document.querySelector('#filter .close-filter')
const filterIcon=document.querySelector('.nav-box3 .filter-box')
let filterOpendOrClosed=!1
filterIcon.addEventListener('click',()=>{if(!filterOpendOrClosed){openFilterBox()}else closeFilterBox()});closeFilterIcon.addEventListener('click',()=>closeFilterBox())
function openFilterBox(){filterIcon.style.background='rgba(33, 32, 32, 0.484)'
filterIcon.style.color='white'
filterOpendOrClosed=!0
filterbox.style.left='0'
root.style.width='calc(100% - 200px)'}
function closeFilterBox(){filterIcon.style.background='white'
filterIcon.style.color='black'
filterOpendOrClosed=!1
filterbox.style.left='-205px'
root.style.width='100%'}
let slideInd=0;showSlides();function showSlides(){let i;let slides=document.getElementsByClassName("mySlides");for(i=0;i<slides.length;i++){slides[i].style.display="none"}
slideInd++;if(slideInd>slides.length){slideInd=1}
slides[slideInd-1].style.display="block";setTimeout(showSlides,3000)}
let scrollPosition=0;function disableScroll(){scrollPosition=window.pageYOffset||document.documentElement.scrollTop;document.body.style.position='fixed';document.body.style.top=`-${scrollPosition}px`;document.body.style.width='100%'}
function enableScroll(){document.body.style.position='';document.body.style.top='';document.body.style.width='';window.scrollTo(0,scrollPosition)}
export default mobCloseacc