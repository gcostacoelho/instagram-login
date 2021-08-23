let checkbox = document.querySelector('input[id=themeToggle]');
checkbox.addEventListener('change', function(){
    if(this.checked){
        document.documentElement.setAttribute('data-theme', "dark");
    }
    else{
        document.documentElement.setAttribute('data-theme', "light");
    }
})