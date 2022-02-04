(function(){
    let movil = document.getElementById('movil');
    let menu = document.getElementById('principal');

    movil.addEventListener('click',()=>{
        menu.style.display = menu.style.display == 'flex' ? 'none':'flex'; 
        movil.style.borderRadius = menu.style.display == 'flex' ? '10px 10px 0 0':'10px';
    })
})();