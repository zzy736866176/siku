checkCodeofRandom()


//登录页选项卡
$('.erweima').on('mouseenter', function () {
    $(this).css('width', 136)
    $(this).css('height', 136)
    $(this).css('left', 35)
    $('.phone-test').css('opacity', 1)
}).on('mouseleave', function () {
    $(this).css('width', 192)
    $(this).css('height', 192)
    $(this).css('left', 99)
    $('.phone-test').css('opacity', 0)
})


$('.login-method li').eq(0).on('click', function () {
    $('.error').css('display','none')
    $('.imgs').css('display', 'block')
    $('#house p').css('display', 'block')
    $('form').css('display', 'none')
    $('u').css('display', 'none')
    $('.jizhu').css('display', 'none')
    $('.liji').css('display', 'none')
    $('#house').css('height', 511)
    $(this).css('color', '#f19108')
    $('.login-method li').eq(1).css('color', '#666')

})

$('.login-method li').eq(1).on('click', function () {
    $('.imgs').css('display', 'none')
    $('#house p').css('display', 'none')
    $('form').css('display', 'block')
    $('u').css('display', 'block')
    $('.jizhu').css('display', 'block')
    $('.liji').css('display', 'block')
    $('#house').css('height', 586)
    $(this).css('color', '#f19108')
    $('.login-method li').eq(0).css('color', '#666')
})

//随机验证码
function checkCodeofRandom() {
    // 所需随机抽取的样本数组 
    var nums = new Array("q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", "A", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
    // 初始化 拼接字符串
    var str = "";
    //颜色需要的数组元素
    var nums1 = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f");
    var n1 = "";
    //字号需要的数组元素
    var nums2 = new Array("1", "2", "3", "4", "5", "6", "7");
    var n2;
    for (i = 0; i < 4; i++) {
        //遍历拼接颜色色值 eg 000000
        for (var j = 0; j < 6; j++) {
            var k = Math.floor(Math.random() * 100) % 16;
            n1 = n1 + nums1[k];
        }
        //每次生成一个随机的字号
        var o = Math.floor(Math.random() * 100) % 6;
        n2 = nums2[o];
        //每次生成一个0 - 61 之间的 number 作为随机获取验证码的下标
        var p = Math.floor(Math.random() * 1000) % 62;
        //拼接验证码  随机颜色 随机字号 随机抽取大小写字母和数字
        str += "<font color='#" + n1 + "' size='" + n2 + "'>" + nums[p] + "</font>"
    }
    document.querySelector(".code").innerHTML = str;
}

$('.code').on('click',function(){
    checkCodeofRandom()
})
$('em').on('click',function(){
    checkCodeofRandom()
})
$('[name=vcode]').on('focus',function(){
    $('.error').css('display','none')
    $('#house').css('height', 586)
})
$('[name=username]').on('focus',function(){
    $('.error').css('display','none')
    $('#house').css('height', 586)
})
$('[type=password]').on('focus',function(){
    checkCodeofRandom()
    $('.error').css('display','none')
    $('#house').css('height', 586)
})

$('form').on('submit',function(evt) {
    evt.preventDefault()
    if($('[name=username]').val() === ''){
        $('.error').css('display','block')
        $('.error').html('请输入用户名')
        $('#house').css('height', 616)
        return false
    }
    if($('[name=password]').val() === ''){
        $('.error').css('display','block')
        $('.error').html('请输入密码')
        $('#house').css('height', 616)
        return false
    }
    
    if(($('[name=vcode]').val()).toLowerCase() === ''){
        $('.error').css('display','block')
        $('.error').html('请输入验证码')
        $('#house').css('height', 616)
        return false
    }
    if(($('[name=vcode]').val()).toLowerCase() !== (document.querySelector('.code').textContent).toLowerCase()){
        $('.error').css('display','block')
        $('.error').html('验证码错误')
        $('#house').css('height', 616)
        return false
    }
    else{
        var userValue = document.querySelector('[name=username]').value
        var passValue = document.querySelector('[name=password]').value
        let xhr = new XMLHttpRequest()
        xhr.open('post','./loginPHP/login.php',true)
        xhr.onreadystatechange = function(){
            if(this.status > 200 && this.status <= 300) return
            if(this.readyState !== 4) return
            var obj = JSON.parse(this.responseText)
    
            if(obj.result == 'true'){
                location.href = '../index/index.html'
            }else{
                $('.error').css('display','block')
                $('.error').html('用户名或密码错误')
                $('#house').css('height', 616)
                return false     
            }
        }
        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded")

        xhr.send(`username=${userValue}&password=${passValue}`)
    }
})