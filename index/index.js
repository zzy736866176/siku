


//轮播图swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    spaceBetween: 10,
    slidesPerGroup: 5,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

//语言切换
$('.language').on('click',function(){
    $('.language ul').css('display','block')
}).on('mouseleave',function(){
    $('.language ul').css('display','none')
})

// document.querySelector('.language').onclick = function(){
//     document.querySelector('.language ul').style.display = 'block'           
// }
// document.querySelector('.language').onmouseleave = function(){
//     document.querySelector('.language ul').style.display = 'none'
// }

//注册按钮
document.querySelector('#title-top p:last-of-type').onclick = () =>location.href = '../register/register.html'

//导航二级菜单
var navTopList = document.querySelectorAll('#nav-top .content ul li')
var navTopContent = document.querySelectorAll('#nav-top .nav-list')

var navTopListLen = navTopList.length
for(let i = 1 ; i < navTopListLen - 2 ; i++){
    navTopList[i].onmouseenter = function(e){
        navTopContent[i-1].className = 'nav-list contain-layout'
        navTopList[i].onmouseleave = function(e){
            navTopContent[i-1].className = 'nav-list contain-layout hidden'
            navTopContent[i-1].onmouseenter = function(e){
                navTopContent[i-1].className = 'nav-list contain-layout'
                navTopContent[i-1].onmouseleave = function(e){
                    navTopContent[i-1].className = 'nav-list contain-layout hidden'
                }
            }
        }
    }
}
//顶部banner部分
document.querySelector('#banner-top img:nth-of-type(4)').onclick = function(){
    this.style.display = 'none'
    document.querySelector('#banner-top video').display = 'block'
    document.querySelector('#banner-top video').play()
    document.querySelector('#banner-top video').volume = '0'
}

//搜索按钮 :原生js
// document.querySelector('#nav-top ul li.search').onmousedown = function(){
//     this.onmouseup = function(){
//     document.querySelector('#nav-top').style.height = 100 + 'px'  
//     document.querySelector('#nav-top ul span').style.top = 50 + 'px'
//     document.querySelector('#nav-top ul span').style.color = 'white'
//     document.querySelector('#nav-top ul li.search').style.display = 'none'
//     document.querySelector('#nav-top .content input').style.display = 'block'
//     document.querySelector('#nav-top .content input').style.left = document.querySelector('#nav-top .content input').offsetLeft - 100 + 'px'  
//     }         
// }
// document.querySelector('#nav-top .content input').onmouseleave = function(){

//     document.onmousedown = function(){
//         document.querySelector('#nav-top').style.height = 50 + 'px'
//         document.querySelector('#nav-top ul span').style.top = 0 + 'px'
//         document.querySelector('#nav-top ul span').style.color = '#ffb81c'
//         document.querySelector('#nav-top ul li.search').style.display = 'block'
//         document.querySelector('#nav-top .content input').style.left = 1075 + 'px'
//         document.querySelector('#nav-top .content input').style.display = 'none'
//         document.onmouseup = function(){
//             this.onmousedown = null
//         }
//     }
// }
//搜索按钮：jQuery
$('#nav-top .content ul li.search').on('click',function(){
    $('#nav-top .content input').css('display','block')
    $('#nav-top ul span').css('color','white')  
    $('#nav-top ul li.search').css('display','none')
    $('#nav-top .content input').animate({
        left:'970px',
        opacity:1
    }).animate({
        top:63,    
    },5)
    
    setTimeout(function(){
        $('#nav-top .content input').focus()
        $('#nav-top').css('height',100)
        $('#nav-top ul span').css('top',50)    
    },400)
    
})
$('#nav-top .content input').on('blur',function(){
    $(this).css('top',11)
    $('#nav-top ul span').css('top',0)
    $('#nav-top').css('height',50)
    setTimeout(function(){
        $('#nav-top ul li.search').css('display','inline-block') 
        $('#nav-top ul span').css('color','#ffb81c') 
    },400) 
    $(this).animate({
        opacity:0,
        left:1190
    }).animate({
        top:11
    })   
})


//轮播图鼠标移入事件
$('#slider .swiper-wrapper .swiper-slide').on('mouseenter',function(){
    $(this).animate({
        top:-10
    },200)
}).on('mouseleave',function(){
    $(this).stop(true)
    $(this).animate({
        top:0
    },200)
})
$('.swiper-slide .mask2').on('mouseenter',function(){
    $(this).next().css('color','#ffb81c')
}).on('mouseleave',function(){
    $(this).next().css('color','black')    
})
//mask黑色半透明遮罩层
$('#banner-top img').eq(1).on('mouseenter',function(){
    $('#banner-top .mask').eq(1).animate({
        opacity:.3
    },200)
    $('#banner-top img').eq(1).on('mouseleave',function(){
        $('#banner-top .mask').eq(1).stop(true)
        $('#banner-top .mask').eq(1).animate({
            opacity:0
        },200)
    })
})

$('#banner-middle img').eq(1).on('mouseenter',function(){
    $('#banner-middle .mask').animate({
        opacity:.3
    },200)
    $('#banner-middle img').eq(1).on('mouseleave',function(){
        $('#banner-middle .mask').stop(true)
        $('#banner-middle .mask').animate({
            opacity:0
        },200)
    })
})


$('.mask').on('mouseenter',function(){
    $(this).animate({
        opacity:.3
    },200).on('mouseleave',function(){
        $(this).stop(true)
        $(this).animate({
            opacity:0
        },200)
    })
})


//微信微博鼠标事件
$('.media ul li').on('mouseenter',function(){
    $(this).children('img').css('display','block')
}).on('mouseleave',function(){
    $(this).children('img').css('display','none')    
})
