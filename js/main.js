var btn = document.getElementById('togBtn');
var element = document.getElementById('nvbar');

console.log(btn);
console.log(element);

    btn.onclick = function(){
        
        element.classList.toggle("showtog");
    };