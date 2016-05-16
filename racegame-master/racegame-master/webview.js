function setHtmlSize(){

  var windowWidth = document.documentElement.clientWidth;

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
