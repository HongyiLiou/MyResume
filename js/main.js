
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



// topBtn 回到頂端按鈕 ________________________________________________。<>>
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



// Nav 導航按鈕 _______________________________________________________。<>>
$('#intro_nav').click(function(){
    $('html,body').animate({scrollTop:$('#intro').offset().top - 100},500)
})
$('#works_nav').click(function(){
    $('html,body').animate({scrollTop:$('#allworks').offset().top},500)
})
$('#contact_nav').click(function(){
    $('html,body').animate({scrollTop:$('#contact').offset().top},500)
})



window.onload = function(){
    fadeIn()
    topBtnReload()
}