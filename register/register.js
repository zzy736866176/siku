document.querySelector('#house p:first-of-type span').className = 'user-true'

document.querySelector('[name=username]').onmousedown = function(){
    document.querySelector('#house p:first-of-type span').className = 'user-true'
    this.onmouseleave = function(){
        document.onmousedown = function(){
            var userReg = /^([A-Za-z0-9_\-\.])+\@(163.com|qq.com|42du.cn)$/
            var userValue = document.querySelector('[name=username]').value
            
            if(userReg.test(userValue)){
                document.querySelector('#house p:first-of-type span').className = ''
            }else{
                document.querySelector('#house p:first-of-type span').className = 'user-false'
            }
            document.querySelector('[name=username]').onmousedown = function(){
                document.onmousedown = null
            }
        }
    }
}
//输入用户名时在数据库中检测是否已被注册（收发ajax）
document.querySelector('[name=username]').oninput = function(){
    document.querySelector('#house p:first-of-type span').className = ''
    var userValue = document.querySelector('[name=username]').value
    
    let xhr = new XMLHttpRequest()
    xhr.open('get',`./registerPHP/confirm.php?username=${userValue}`,true)
    xhr.onreadystatechange = function(){
        if(this.status > 200 && this.status <= 300) return
        if(this.readyState !== 4) return
        var obj = JSON.parse(this.responseText)

        if(obj.result == 'false'){
            document.querySelector('#house span.user-repeat').style.display = 'inline'
        }else{
            document.querySelector('#house span.user-repeat').style.display = 'none'
        }
    }
    xhr.send()
}

document.querySelector('[name=password]').onmousedown = function(){
    this.onmouseleave = function(){
        document.onmousedown = function(){
            var passReg = /^[\w.]{6,25}$/
            var passValue = document.querySelector('[name=password]').value
            if(passValue == ''){
                document.querySelector('#house p:nth-of-type(2) span').className = 'pass-empty'
            }else if(passReg.test(passValue) == false){
                document.querySelector('#house p:nth-of-type(2) span').className = 'pass-false'
            }else{
                document.querySelector('#house p:nth-of-type(2) span').className = ''
            }
            document.querySelector('[name=username]').onmousedown = function(){
                document.onmousedown = null
            }
        }
    }
}

document.querySelector('input:last-of-type').onmousedown = function(){
    this.onmouseleave = function(){
        document.onmousedown = function(){
            
            var passValue = document.querySelector('[name=password]').value
            var confirmValue = document.querySelector('input:last-of-type').value
            if(confirmValue == ''){
                document.querySelector('#house p:nth-of-type(3) span').className = 'confirm-empty'
            }else if(passValue !== confirmValue){
                document.querySelector('#house p:nth-of-type(3) span').className = 'confirm-false'
            }else{
                document.querySelector('#house p:nth-of-type(3) span').className = ''
            }
            document.querySelector('[name=username]').onmousedown = function(){
                document.onmousedown = null
            }
        }
    }
}


document.querySelector('button').onclick = function(){
    if(document.querySelector('#house p:first-of-type span').className == '' && document.querySelector('#house p:nth-of-type(2) span').className == '' && document.querySelector('#house p:nth-of-type(3) span').className == '' && document.querySelector('[name=agree]').checked){
        location.href = './index/index.html'
    }else{
        console.log('error')
        return false;
    }
}

