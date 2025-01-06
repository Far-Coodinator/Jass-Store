// stop screen rotation
if (screen.orientation && screen.orientation.lock) {
    screen.orientation.lock('portrait') // Lock to portrait mode
        .then(() => {
            console.log("Screen orientation locked to portrait.");
        })
        .catch((error) => {
            console.error("Failed to lock the screen orientation:", error);
        });
} else {
    console.warn("Screen Orientation API is not supported in this browser.");
}



// open login form
const userLogin = document.querySelector('#user-login')
const showLogin = document.querySelector('#login');
let loginForm = false
userLogin.addEventListener('click',()=>{
    if(!loginForm)
        openLoginForm()
    else
        closeLoginForm()
});
function openLoginForm(){
    userLogin.style.background = 'rgba(33, 32, 32, 0.484)'
    userLogin.style.color = 'white'
    showLogin.style.right = '40px'
    loginForm = true
}
function closeLoginForm(){
    showLogin.style.right = '-320px'
    loginForm = false
    userLogin.style.background = 'white'
    userLogin.style.color = 'black'
}

// open register form
const registerForm = document.querySelector('#register-form')
const RegisterEntry = document.querySelector('#login .regiset-pera span')
RegisterEntry.addEventListener('click',()=>{
    openRegisterForm()
})

function openRegisterForm(){
    closeLoginForm()
    registerForm.style.display = 'flex'
    setTimeout(()=>{
        registerForm.style.width = '100%'
    })
}
function closeRegisterForm(){
    registerForm.style.width = '0%'
    setTimeout(()=>{
        registerForm.style.display = 'none' 
    },1000)
}
// close register form
document.querySelector('#form .close-tab').addEventListener('click',()=>{
    closeRegisterForm()
})

// show search bar
const searchIcon = document.querySelector('.nav-box3 .search-box')
let searchbar = false
searchIcon.addEventListener('click',()=>{
    const showSearchBar = document.querySelector('#root #search-box')
    if(!searchbar){
        searchIcon.style.background = 'rgba(33, 32, 32, 0.484)'
        searchIcon.style.color = 'white'
        showSearchBar.style.margin = '50px auto 20px'
        searchbar = true
    }else{
        showSearchBar.style.margin = '0 auto 20px'
        searchbar = false
        searchIcon.style.background = 'white'
        searchIcon.style.color = 'black'
    }
})


// open filter box
const filterbox = document.querySelector('#filter')
const root = document.querySelector('#root')
const closeFilterIcon = document.querySelector('#filter .close-filter')
const filterIcon = document.querySelector('.nav-box3 .filter-box')
let filterOpendOrClosed = false
filterIcon.addEventListener('click',()=> {
    if(!filterOpendOrClosed){
        openFilterBox()
    }else
        closeFilterBox()
});

// close filter box
closeFilterIcon.addEventListener('click',()=> closeFilterBox())

function openFilterBox(){
    filterIcon.style.background = 'rgba(33, 32, 32, 0.484)'
    filterIcon.style.color = 'white'
    filterOpendOrClosed = true
    filterbox.style.left = '0'
    root.style.width = 'calc(100% - 200px)'
}
function closeFilterBox(){
    filterIcon.style.background = 'white'
    filterIcon.style.color = 'black'
    filterOpendOrClosed = false
    filterbox.style.left = '-205px'
    root.style.width = '100%'
}







// Slide show functions
let slideInd = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideInd++;
    if (slideInd > slides.length) {
        slideInd = 1
    }    
    slides[slideInd-1].style.display = "block";  
    setTimeout(showSlides, 3000); 
}



// block scroll
let scrollPosition = 0;
function disableScroll() {
    // Save the current scroll position
    scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add styles to lock the scroll
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`; // Keep the body at the same scroll position
    document.body.style.width = '100%'; // Prevent horizontal shift
}

function enableScroll() {
    // Remove the fixed position styles
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    
    // Restore the scroll position
    window.scrollTo(0, scrollPosition);
}


