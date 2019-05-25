
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



// Header 背景 _______________________________________________________。<>>
const header = document.querySelector('.header')

window.addEventListener('scroll', function(){
    if(this.scrollY > 0) {
        header.classList.add('active')
    }
    else {
        header.classList.remove('active')
    }
})