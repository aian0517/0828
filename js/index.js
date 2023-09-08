

// 
var header_swiper = new Swiper('.header-swiper',{
    loop:true,
    noSwiping:true,
    loopedSlides:6,
    effect:'fade',
    fadeEffect: {
        crossFade: true,
    },
})

var header_swiper_smll = new Swiper('.header-swiper-smll',{
    loop:true,
    // spaceBetween:10,
    grabCursor:true,
    slidesPerView:3,
    controller:{
        control:header_swiper,
    },
    speed:1000,
    autoplay:{
        delay:4000,
        disableOnInteraction:false,
    },
    navigation:{
        nextEl:'.swiper-header-next',
        prevEl:'.swiper-header-prev',
    },
})

var head_carousel_text_anim = gsap.timeline()
head_carousel_text_anim.fromTo(".head-carousel-text >h1",{opacity:0,y:50},{opacity:1,y:0,duration:0.7},0.2)
head_carousel_text_anim.fromTo(".head-carousel-text >p",{opacity:0,y:50},{opacity:1,y:0,duration:0.7},0.5)

header_swiper_smll.on('slideChange',function(){
    head_carousel_text_anim.restart()
})
$('.swiper-header-next').click(function(){
    head_carousel_text_anim.restart()
})
$('.swiper-header-prev').click(function(){
    head_carousel_text_anim.restart()
})




//  body1
var body1_swiper = new Swiper('.body1-swiper',{
    loop:true,
    grabCursor:true,
    effect:'cube',
    cubeEffect:{
        Shadow:false,
        slideShadow:false,
        shadowOffset:0,
        shadowScale:0,
    },
    autoplay:{
        delay:5000,
        disableOnInteraction:false,
    },
    pagination:{
        el:".body1-pagination",
    },
})
gsap.from(".body1-text-content", {
    x: -300,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".body1-text-content", // 触发滚动动画的元素
      start: "top center", // 触发动画的开始位置
      end: "top center", // 触发动画的结束位置
      markers: false, // 在页面上显示触发区域的标记，用于调试
      scrub: 1, // 滚动时的触发行为
    },
  })

gsap.timeline({
    scrollTrigger:{
        trigger:".body1-img",
        start:"top center",
        end:"bottom center",
        scrub:1,
        // markers:true,
        pin:true,
    }
})
.fromTo(".body1-img",{rotate:0,opacity:1},{rotate:360,opacity:0,duration:1},0)
.fromTo(".body1-img2",{rotate:0,opacity:0},{rotate:360,opacity:1,duration:1},1)
gsap.timeline({
    scrollTrigger:{
        trigger:".body1-swiper .swiper-slide",
        start:"top center",
        end:"center center",
        scrub:1,
    },
})
.fromTo(".body1-swiper-box",{x:300,opacity:0},{x:0,opacity:1,duration:1,})
// body2

$('.body2-click').click(function(){
    $('.body2-click').removeClass('active')
    $(this).addClass('active')
    var index = $(this).index('.body2-click')
    $('.body2-card').addClass('body2-card-anim')
    setTimeout(() => {
        $('.body2-card-img').attr('src',body2_data[index].img)
        $('.body2-card-title').text(body2_data[index].title)
        $('.body2-card-text').text(body2_data[index].text)
    }, 500);
    setTimeout(() => {
        $('.body2-card').removeClass('body2-card-anim')
    }, 1100);
})



// body3
var body3_bg = new Swiper('.body3-swiper-bg',{
    noSwiping:true,
    loop:true,
    effect:'fade',
    fadeEffect:{
        crossFade:true,
    },
})
var body3_swiper_text = new Swiper('.body3-swiper-text',{
    noSwiping:true,
    loop:true,
    reverseDirection:true,
    height:'500',
})
var body3_swiper = new Swiper('.body3-swiper',{
    loop:true,
    grabCursor:true,
    controller:{
        control:[body3_swiper_text,body3_bg],
    },
    autoplay:{
        delay:4000,
        disableOnInteraction:false,
    },
    navigation:{
        nextEl:".body3-navigation-next",
        prevEl:".body3-navigation-prev",
    },
})


// body4 shop
// gsap.utils.toArray(".comparisonSection").forEach(section => {
// 	let tl = gsap.timeline({
// 			scrollTrigger: {
// 				trigger: section,
// 				start: "center center",
//         // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
// 				end: () => "+=" + section.offsetWidth, 
// 				scrub: true,
// 				pin: true,
//         anticipatePin: 1
// 			},
// 			defaults: {ease: "none"}
// 		});

gsap.utils.toArray("#body4").forEach(section =>{
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger: section,
            start:"center center",
            end: () => "+=" + section.offsetWidth,
            scrub:true,
            pin:true,
            anticipatePin:1,
            markers:false,
        },
        defaults:{ease:"none"}
    })
    tl.fromTo(section.querySelector(".body4-bg-2"), { yPercent:-100,opacity:0.5}, {yPercent: -5,opacity:1,})
});



var body4_swiper = new Swiper('.body4-swiper',{
    // loop:true,
    grabCursor:true,
    slidesPerView:3,    
    scrollbar:{
        el:'.body4-scrollbar',
        hide:true,
    },
    navigation:{
        nextEl:'.body4-navigation-next',
        prevEl:'.body4-navigation-prev',
    },
    breakpoints:{
        1:{
            slidesPerView:1,
        },
        1280:{
            slidesPerView:3,
        },
    },
    
})
$.each(shop_data,function(index,item){
    body4_swiper.appendSlide(`
    <div class="swiper-slide df jcc aic">
        <div class="card body4-card">
        <img src="${item.img}" alt="" class="card-img-top body4-card-img">
        <img src="${item.img2}" alt="" class="card-img-top body4-card-img2">
            <div class="card-body">
                <div class="card-title">
                    <h3 class="f-4 text-center mb-3 fw-bold">${item.title}</h3>
                </div>
                <div class="card-text">
                    <p class="f-6 mb-4">${item.text}</p>
                    <div class="df justify-content-between aic">
                        <h3 class="m-0 f-5 fw-bold">${item.price}元/1${item.b}</h3>
                        <button class="btn body4-btn button" onclick="add(1,${index})">購買</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `)
})
function add(n,index){
    $('#shop-offcanvas').offcanvas('show')
    shop_data[index].amount = Math.max(0,shop_data[index].amount+ n)
    $('.shop-offcanvas-body').html('')
    total_price = 0
    $.each(shop_data,function(ind,item){
        if(item.amount > 0){
            total_price += item.price * item.amount
            $('.shop-offcanvas-body').append(`
            <div class="card">
                <div class="row">
                    <div class="col-3 df jcc aic">
                        <img src="${item.img}" alt="" class="offcanvas-img">
                    </div>
                    <div class="col-9">
                        <h1 class="f-5 fw-bold">${item.title}</h1>
                        <p class="f-6">數量：<span>${item.amount}</span></p>
                        <div class="df justify-content-between aic">
                            <div class="df">
                                <button class="btn shop-offcanvas-reduce button" onclick="add(-1,${ind})">-</button>
                                <input type="text" class="shop-offcanvas-input" value="1" disabled>
                                <button class="btn shop-offcanvas-add button" onclick="add(1,${ind})">+</button>
                            </div>
                            <button class="btn shop-offcanvas-cancel button" data-ind="${ind}">取消</button>
                        </div>
                    </div>
                    
                </div>
            </div>
            `)
        }
        $('.total-price').text(total_price)
    })
}
$('.shop-offcanvas-body').on('click','.shop-offcanvas-cancel',function(){
    total_price -= shop_data[$(this).data('ind')].amount * shop_data[$(this).data('ind')].price
    shop_data[$(this).data('ind')].amount = 0
    $(this).closest('.card').remove()
    $('.total-price').text(total_price)
})
// chart body5

var ctx = $('#mychart')
var body5_chart = new Chart(ctx,{
    type:'doughnut',
    data:{
        labels:[
            '納西妲',
            '楓原萬葉',
            '珊瑚宮心海',
            '夜蘭',
            '艾爾海森'
        ],
        datasets:[{
            labels:'使用率',
            data:[35,25,20,10,10],
            backgroundColor:[
                '#86a6c2',
                '#f39542',
                '#48e8b5',
                '#835cf8',
                'rgb(130, 220, 134)',
            ]
        }]
    },
})

ctx.on('click',function(event){
    var chart_click = body5_chart.getElementsAtEventForMode(event, 'point', body5_chart.options);
    if(chart_click && chart_click.length > 0){
        var chart_index = body5_chart.data.labels[chart_click[0].index]
        switch (chart_index){
            case '納西妲': 
                $('.body5-text').html(`
                    <h3 class="f-3 mb-3 text-center fw-bold">草神納西妲</h3>
                    <h3 class="f-5 mb-3">常用配對</h3>
                    <img src="./images/body5-2.png" alt="" class="body5-img">
                    <img src="./images/body5-4.png" alt="" class="body5-img">
                `)
                break;
            case '楓原萬葉':
                $('.body5-text').html(`
                    <h3 class="f-3 mb-3 text-center fw-bold">楓原萬葉</h3>
                    <h3 class="f-5 mb-3">常用配對</h3>
                    <img src="./images/body5.png" alt="" class="body5-img">
                    <img src="./images/body5-7.png" alt="" class="body5-img">
                `)
                break;
            case '珊瑚宮心海':
                $('.body5-text').html(`
                    <h3 class="f-3 mb-3 text-center fw-bold">珊瑚宮心海</h3>
                    <h3 class="f-5 mb-3">常用配對</h3>
                    <img src="./images/body5-4.png" alt="" class="body5-img">
                    <img src="./images/body5-5.png" alt="" class="body5-img">
                `)
                break;
            case '夜蘭':
                $('.body5-text').html(`
                    <h3 class="f-3 mb-3 text-center fw-bold">夜蘭</h3>
                    <h3 class="f-5 mb-3">常用配對</h3>
                    <img src="./images/body5-6.png" alt="" class="body5-img">
                `)
                break;
            case '艾爾海森':
                $('.body5-text').html(`
                    <h3 class="f-3 mb-3 text-center fw-bold">艾爾海森</h3>
                    <h3 class="f-5 mb-3">常用配對</h3>
                    <img src="./images/body5-2.png" alt="" class="body5-img">
                    <img src="./images/body5-3.png" alt="" class="body5-img">
                `)
                break;
            default:
                break;
        }
    }
})

// body6 message
var body6_swiper = new Swiper('.body6-swiper',{
    loop:true,
    grabCursor:true,
    autoplay:{
        delay:3000,
        disableOnInteraction:false
    },
    pagination:{
        el:'.body6-pagination',
    },
    navigation:{
        nextEl:'.body6-navigation-next',
        prevEl:'.body6-navigation-prev',
    },
})
var messages_name = []
var messages_email = []
var messages_content = []

function messages(){
    window.event.preventDefault()
    messages_name.push($('.messages-name').val())
    messages_email.push($('.messages-email').val())
    messages_content.push($('.messages-content').val())
    localStorage.setItem('messages-name',JSON.stringify(messages_name))
    localStorage.setItem('messages-email',JSON.stringify(messages_email))
    localStorage.setItem('messages-content',JSON.stringify(messages_content))
      
    body6_swiper.appendSlide(`
    <div class="swiper-slide df jcc aic">
        <div class="card df jcc fdc p-3 text-light">
            <div class="df justify-content-between aic">
                <h1 class="f-5 fw-bold">${$('.messages-name').val()}</h1>
                <h1 class="f-6">${$('.messages-email').val()}</h1>
            </div>
            <p class="f-6">${$('.messages-content').val()}</p>
        </div>
    </div>
    `)
    $('.messages-input').val('')
    body6_swiper.slideTo(body6_swiper.slides.length - 1,0)
    body6_swiper.autoplay.start()
}

$(window).on('load',() =>{
    const local_name = JSON.parse(localStorage.getItem('messages-name')) || []
    const local_email = JSON.parse(localStorage.getItem('messages-email')) ||[]
    const local_mess = JSON.parse(localStorage.getItem('messages-content')) || []
    $.each(local_name ,function(index,item){
        body6_swiper.appendSlide(`
        <div class="swiper-slide df jcc aic">
            <div class="card df jcc fdc p-3 text-light">
                <div class="df justify-content-between aic mb-3">
                    <h1 class="f-5 fw-bold">${item}</h1>
                    <h1 class="f-6">${local_email[index]}</h1>
                </div>
                <p class="f-6">${local_mess[index]}</p>
            </div>
         </div>
        `)
    })
    messages_name = messages_name.concat(local_name);
    messages_email = messages_email.concat(local_email);
    messages_content = messages_content.concat(local_mess);
    // localStorage.clear()
})

// robot

$('.robot-btn').click(()=>{
    $('.robot-box').toggleClass('active')
})
$('.robot-header .btn-close').click(()=>{
    $('.robot-box').removeClass('active')
})
$('.robot-submit').click(()=>{
    if($('.robot-input').val() != ''){
        $('.robot-body').append(`
        <div class="mb-3 df justify-content-end aic">
             <span class="text-light robot-body-content-2">${$('.robot-input').val()}</span>
        </div>
        `)
        var ans ='感謝您的詢問，將為您轉告網頁管理員為您服務'
        x = Object.keys(robot_data).filter(k => $('.robot-input').val().includes(k)).at(-1)
        if(x){
            ans = robot_data[x]
        }
        setTimeout(() => {
            $('.robot-body').append(`
                <div class="mb-3">
                    <img src="./images/robot-img.png" alt="">
                    <div class="robot-body-content-1">
                        <span class="text-light">${ans}</span>
                    </div>
                </div>
            `)
            $('.robot-body').animate({scrollTop:$('.robot-body')[0].scrollHeight},'slow')
        }, 1000);

        url = Object.keys(robot_url).filter(k => $('.robot-input').val().includes(k)).at(-1)
        const linkURL = `#${robot_url[url]}`
        window.location.href = linkURL

        $('.robot-input').val('')
    }
})
$('.robot-input').keypress((e)=>{
    if(e.key === 'Enter'){
        $('.robot-submit').click()
    }
})

// sun

$('#sun-check').change(()=>{
    if($('#sun-check').prop('checked')){
        $('body').css('--bg--color1','#f39542')
        $('body').css('--bg--color2','#86a6c2')
        $('body').css('background-color','rgba(100,100,100,0.7)')
        $('body').css('--bg--color','rgba(100,100,100,0.7)')
        $('body').css('color','#fff')
    }
    else{
        $('body').css('--bg--color1','#86a6c2')
        $('body').css('--bg--color2','#f39542')
        $('body').css('background-color','#fff')
        $('body').css('--bg--color','#fff')
        $('body').css('color','#000')
    }
})

// but_anim
$('.button').each(function(){
    const button_anim = gsap.timeline({
        // paused: true,
        onComplete: () => {
            gsap.to('.button', {
                scale: 1,
                duration: 0.2,
            });
        },
        ease: "elastic.inOut",
    });
    button_anim.from(this,{scale:0.7,duration:0.3})
    $(this).data('button_anim', button_anim);
})

$('.button').click(function () {
    const button_anim = $(this).data('button_anim');
    if (button_anim) {
        button_anim.restart();
    }
});

// 
var login = 0
$('.nav-login-icon').click(()=>{
    if(login != 1){
    $('#login').modal('show')
    }else{
        $('#notify').modal('show')
    }
})
$('.shop-login-btn').click(()=>{
    if(login != 1){
        $('#login').modal('show')
    }else{
        $('#notify').modal('show')
    }
})
$('.login-submit').click(()=>{
    $('.login_input').val('')
    $('.nav-login-icon').append(`B034原神玩家`)
    login = 1
})