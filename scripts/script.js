var buttons = document.getElementsByClassName('accordion');
var unhide = document.getElementsByClassName('unhide');
for(var i = 0; i<buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        this.classList.toggle("active");
        var content = this.nextElementSibling;
      
        if(content.style.display === "block"){
            content.style.display = "none";
        }else{
            content.style.display = "block";
            unhide.style.display = "block";
        }
        
     
    });
}


