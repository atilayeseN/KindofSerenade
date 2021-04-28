var counter=0;
clicks();
function clicks(){

    var body=document.body,butt;
    var randtop=String(Math.floor(Math.random() * 500) + 1);
    var randbottom=String(Math.floor(Math.random() * 1000) + 1);
    var randleft=String(Math.floor(Math.random() * 1000) + 1);
    var randright=String(Math.floor(Math.random() * 1000) + 1);
    butt=document.createElement('button');
    butt.style.position="absolute";
    butt.style.top=randtop+"px";
    butt.style.left=randright+"px";
    body.appendChild(butt);
    butt.innerHTML='Buraya tıkla';
    butt.addEventListener('click', e=>{
      butt.parentNode.removeChild(butt);
      clicks();
      counter++;     
    });
    if(counter===5){
    butt.parentNode.removeChild(butt); 
    body.style.backgroundImage = "url('giphy.gif')";
    var text=document.getElementById("love");
    text.style.display="inherit";
    }

  }
