Array.from(document.getElementsByTagName('input')).forEach((e, i)=>{
    e.addEventListener('keyup', (el)=>{
        if (e.value.length > 0) {
            document.getElementsByClassName('fa-caret-down')[i].style.transform = "rotate(180deg)";
        } else {
            document.getElementsByClassName('fa-caret-down')[i].style.transform = "rotate(0deg)";
            
        }
    })
})


let menu_btn = document.getElementsByClassName('fa-ellipsis-vertical')[0];
let menu_bx = document.getElementById('menu_bx')

menu_btn.addEventListener('click',()=>{
    menu_bx.classList.toggle('ul_active');
})