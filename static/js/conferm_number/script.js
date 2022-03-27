window.addEventListener('load', function (e) {
    var inp_one = document.querySelector('#pass_one');
    var inp_two = document.querySelector('#pass_two');
    var button_one = document.querySelector('#button_one');
    var button_two = document.querySelector('#button_two');
    var lock_one = document.querySelector('#fa-lock_one');
    var unlock_one = document.querySelector('#fa-unlock_one');
    var lock_two = document.querySelector('#fa-lock_two');
    var unlock_two = document.querySelector('#fa-unlock_two');
    
    button_one.addEventListener('click', function(){
        if(inp_one.type == 'password'){
            inp_one.type = 'text'
            unlock_one.style.display = 'block'
            lock_one.style.display = 'none'
        }else{
            inp_one.type = 'password'
            lock_one.style.display = 'block'
            unlock_one.style.display = 'none'
        }
    })
    button_two.addEventListener('click', function(){
        if(inp_two.type == 'password'){
            inp_two.type = 'text'
            unlock_two.style.display = 'block'
            lock_two.style.display = 'none'
        }else{
            inp_two.type = 'password'
            lock_two.style.display = 'block'
            unlock_two.style.display = 'none'
        }
    })
});