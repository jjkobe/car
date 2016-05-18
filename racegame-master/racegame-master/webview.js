function setHtmlSize(){

  var windowWidth = document.documentElement.clientWidth;
  var windowHeight=document.documentElement.clientHeight;
  //console.log(windowWidth,windowHeight);
  document.getElementById('safe').style.width=0.8*windowWidth+'px';
  document.getElementById('safe').style.height=0.3*windowWidth+'px';
  document.getElementById('phone').style.height=0.3*windowWidth+'px';
  //console.log(welcome);
  if (welcome) {
    console.log(welcome.position.x,welcome.position.y)
    console.log(welcome.x,welcome.y);
  }
  document.getElementById('phone').style.width=0.8*windowWidth+'px';
  document.getElementById('main').style.height=windowHeight+'px';
  if(windowWidth > 800){

    document.getElementsByTagName("html")[0].style.fontSize = 16 + "px";

  }else{

    var size = parseInt((document.documentElement.clientWidth / 640) * 20, 10);

    size % 2 != 0 && size--;

    document.getElementsByTagName("html")[0].style.fontSize = size + "px";

  }

}

function updateOrientation(){ //这里是设备旋转

  var orientation = window.orientation;

  switch (orientation) {

    case 90:

    case -90:

    document.getElementsByTagName("html")[0].style.fontSize = 10 + "px";

    break;

    default:

    break;

  }

}

setHtmlSize();

window.addEventListener("resize", setHtmlSize);

window.addEventListener("orientationchange", updateOrientation, false);
