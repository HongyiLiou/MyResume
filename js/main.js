
// navBtns 按鈕點擊特效 _______________________________________________。<>>
const navBtns = document.querySelectorAll('.navBtn')

navBtns.forEach(function(navBtn){
    navBtn.addEventListener('click', function(){
        this.classList.add('active')
        setTimeout(function(){
            navBtn.classList.remove('active')
        }, 200)
    })
})



// 物件進入視窗範圍 Fade In ____________________________________________。<>>
const photo = document.querySelector('.photo')
const works = document.querySelectorAll('.works')

function fadeIn(){
    let photoPosTop = photo.getBoundingClientRect().top
    let photoPosBottom = photo.getBoundingClientRect().bottom

    if(photoPosTop < window.innerHeight && photoPosBottom > 200) {
        photo.classList.add('fadeIn')
    }
    
    works.forEach(function(work){
        let workPosTop = work.getBoundingClientRect().top
        let workPosBottom = work.getBoundingClientRect().bottom
        if(workPosTop < window.innerHeight && workPosBottom > 200) {
            work.classList.add('fadeIn')
        }
    })
}



// Header 背景 (捲動相關 Fade In) ______________________________________。<>>
const header = document.querySelector('.header')
const topBtn = document.querySelector('#topBtn')

window.addEventListener('scroll', function(){
    if(this.scrollY > 0) {
        header.classList.add('active')
        topBtn.classList.add('active')
    }
    else {
        header.classList.remove('active')
        topBtn.classList.remove('active')
    }

    fadeIn()
})



// topBtn 回到頂端按鈕 _________________________________________________。<>>
$('#topBtn').click(function(){  //回到頂端按鈕
    $('html,body').animate({
        scrollTop: 0
    },500)
})

function topBtnReload(){
    if(window.scrollY > 0) {
        header.classList.add('active')
        topBtn.classList.add('active')
    }
}



// Nav、Hamburger 導航按鈕 ________________________________________________________。<>>
$('#intro_nav').click(function(){
    $('html,body').animate({scrollTop:$('#intro').offset().top - 100},500)
})
$('#works_nav').click(function(){
    $('html,body').animate({scrollTop:$('#allworks').offset().top},500)
})
$('#contact_nav').click(function(){
    $('html,body').animate({scrollTop:$('#contact').offset().top},500)
})


$('#intro_list').click(function(){
    $('html,body').animate({scrollTop:$('#intro').offset().top - 60},500)
    $('.hamburger,.hamburgerFull,.hamburgerList').removeClass('active')
})
$('#works_list').click(function(){
    $('html,body').animate({scrollTop:$('#allworks').offset().top - 50},500)
    $('.hamburger,.hamburgerFull,.hamburgerList').removeClass('active')
})
$('#contact_list').click(function(){
    $('html,body').animate({scrollTop:$('#contact').offset().top},500)
    $('.hamburger,.hamburgerFull,.hamburgerList').removeClass('active')
})
$('.hamburgerFull,.resume_list,.return_list').click(function(){
    $('.hamburger,.hamburgerFull,.hamburgerList').removeClass('active')
})



// hamburger 漢堡選單 __________________________________________________。<>>
const hamburger = document.querySelector('.hamburger')
const hamburgerFull = document.querySelector('.hamburgerFull')
const hamburgerList = document.querySelector('.hamburgerList')
const hamburgerListImg = document.querySelector('.hamburgerListImg')
const hamburgerListImgs = [
    { value: 1, src: './images/hamburgerList-1.png' },
    { value: 2, src: './images/hamburgerList-2.png' },
    { value: 3, src: './images/hamburgerList-3.png' },
    { value: 4, src: './images/hamburgerList-4.png' },
    { value: 5, src: './images/hamburgerList-5.png' }
]

let x = 0;

hamburger.addEventListener('click', function(){
    let y = Math.ceil(Math.ceil(Math.random() * 10) / 2) - 1;
    while(y === x) {
        y = Math.ceil(Math.ceil(Math.random() * 10) / 2) - 1;
    }
    x = y;
    
    hamburger.classList.add('active');
    hamburgerFull.classList.add('active');
    hamburgerList.classList.add('active');
    hamburgerListImg.setAttribute('src', hamburgerListImgs[y].src)
})


// 圖片預載
function preloadImg(image) {
    var img = new Image();
    img.src = image;
}







window.onload = function(){
    fadeIn();
    topBtnReload();
    preloadImg('./images/hamburgerList-1.png');
    preloadImg('./images/hamburgerList-2.png');
    preloadImg('./images/hamburgerList-3.png');
    preloadImg('./images/hamburgerList-4.png');
    preloadImg('./images/hamburgerList-5.png');
}