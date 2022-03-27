window.addEventListener('load', function (e) {
    var inp = document.querySelector('.form__pass');
    var button = document.querySelector('.button');
    var lock = document.querySelector('.fa-lock');
    var unlock = document.querySelector('.fa-unlock');
    
    button.addEventListener('click', function(){
        if(inp.type == 'password'){
            inp.type = 'text'
            unlock.style.display = 'block'
            lock.style.display = 'none'
        }else{
            inp.type = 'password'
            lock.style.display = 'block'
            unlock.style.display = 'none'
        }
    })
});