window.addEventListener("load",eventWindowLoaded,false);

var Debugger =function(){};
Debugger.log =function(message){
    try{
      console.log(message);
    }catch(exception){
      return;
    }
}

function eventWindowLoaded(){
  canvasApp();
}
function canvasApp(){
  if(!canvasSupport()){
    return;
  }
  var theCanvas=document.getElementById("CanvasOne");
  var context=theCanvas.getContext("2d");


      Debugger.log("开始绘图");
      function drawScreen(){
        //background
        context.fillStyle="#ffffaa";
        context.fillRect(0,0,500,300);
        //text
        context.fillStyle="#000000";
        context.font="30px sans-serif";
        context.textBaseline="top";
        context.fillText("HelloWorld",195,80);
        //Photo
        var helloWorldImage =new Image();
        helloWorldImage.onload=function(){
          context.drawImage(helloWorldImage,155,110);
        }
        helloWorldImage.src="media/helloWorld.jpg";
        //border
        context.strokeStyle="#000000";
        context.strokeRect(5,5,490,290);
      }
      drawScreen();
}
