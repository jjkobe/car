

function gameJieshao() {
  var title = new TextEntityObject('背景介绍', new Vector(100*gnfx/400, 100*gnfy/710), {fillStyle: '#900', font: 'bold '+60*gnfx/400+'px 微软雅黑', 'textBaseline': 'top'}, 200*gnfx/400, 35*gnfy/710);

	ScreenObjPool.add(title);

  var text1 = new TextEntityObject('你现在要参加十分钟后的公司会议', new Vector(20*gnfx/400, 350*gnfy/710), {fillStyle: '#900', font: 'bold '+24*gnfx/400+'px 微软雅黑', 'textBaseline': 'top'}, 400*gnfx/400, 35*gnfy/710);
  var text2 = new TextEntityObject('但是天气状况非常不好', new Vector(80*gnfx/400, 450*gnfy/710), {fillStyle: '#900', font: 'bold '+24*gnfx/400+'px 微软雅黑', 'textBaseline': 'top'}, 400*gnfx/400, 35*gnfy/710);
  var text3 = new TextEntityObject('你现在正在高架上驾驶', new Vector(80*gnfx/400, 550*gnfy/710), {fillStyle: '#900', font: 'bold '+24*gnfx/400+'px 微软雅黑', 'textBaseline': 'top'}, 400*gnfx/400, 35*gnfy/710);
  ScreenObjPool.add(text1);
  ScreenObjPool.add(text2);
  ScreenObjPool.add(text3);

  setTimeout(function() {
    ScreenObjPool.empty();
		MainApp.emptyEventsPool();
		KEY_LOCK = {
			LEFT: false,
			RIGHT: false,
			UP: false,
			DOWN: false
		};
    gameSafe();
  },2000);

}

function gameSafe() {
  var title = new TextEntityObject('马上就要驾驶了！', new Vector(110*gnfx/400, 150*gnfy/710), {fillStyle: '#900', font: 'bold '+34*gnfx/400+'px 微软雅黑', 'textBaseline': 'top'}, 200*gnfx/400, 35*gnfy/710);
  var question = new TextEntityObject('是否系安全带?', new Vector(105*gnfx/400, 300*gnfy/710), {fillStyle: '#900', font: 'bold '+34*gnfx/400+'px 微软雅黑', 'textBaseline': 'top'}, 200*gnfx/400, 35*gnfy/710);
	ScreenObjPool.add(title);
  ScreenObjPool.add(question);

  var yep = new staticImg(resourceLoader.get('yes'), new Vector(60*gnfx/400, 500*gnfy/710), 100*gnfx/400, 40*gnfy/710);
  ScreenObjPool.add(yep);
  var no =new staticImg(resourceLoader.get('no'),new Vector(230*gnfx/400,500*gnfy/710),100*gnfx/400,40*gnfy/710);
	ScreenObjPool.add(no);

	MainApp.addEventListener(yep, 'click', function(e){

    $('.mask').fadeIn(100);
    $('#safe').slideDown(200);
    setTimeout(function() {
      $('.mask').fadeOut(100);
      $('#safe').slideUp(200);
      setTimeout(function() {
        ScreenObjPool.empty();
        MainApp.emptyEventsPool();
        KEY_LOCK = {
          LEFT: false,
          RIGHT: false,
          UP: false,
          DOWN: false
        };
        startGame();
      },1000);
    },3000);

	});
  MainApp.addEventListener(no, 'click', function(e){

    $('.mask').fadeIn(100);
    $('#safe').slideDown(200);
    setTimeout(function() {
      $('.mask').fadeOut(100);
      $('#safe').slideUp(200);
      setTimeout(function() {
        ScreenObjPool.empty();
        MainApp.emptyEventsPool();
        KEY_LOCK = {
          LEFT: false,
          RIGHT: false,
          UP: false,
          DOWN: false
        };
        startGame();
      },1000);
    },3000);

	});
}
var stoRwo;
function runWithOther() {
  stoRwo=setTimeout('phoneRwo()',5000);





}
function schoolCar() {
  var road = new ImageEntityObject(resourceLoader.get('roadG1'), new Vector(0, -710*gnfy/710), 400*gnfx/400, 1420*gnfy/710, new Vector(0,100));
  ScreenObjPool.add(road);
  var leftC = new CollisionEntityObject(new Vector(0, 0), 40*gnfx/400, 710*gnfy/710);
  var rightC = new CollisionEntityObject(new Vector(325*gnfx/400, 0), 75*gnfx/400, 710*gnfy/710);
  var topC = new CollisionEntityObject(new Vector(0, 0), 400*gnfx/400, 20*gnfy/710);
  var bottomC = new CollisionEntityObject(new Vector(0, 710*gnfy/710), 400*gnfx/400, 10);
  var cMap = new CollistionMap();
  cMap.add(leftC);
  cMap.add(rightC);
  cMap.add(topC);
  cMap.add(bottomC);
  var schoolBus = new Car(new Vector(200*gnfx/400, 550*gnfy/710), window.util.randomColor(), resourceLoader.resources.schoolBus, new Vector(0, 0));
  schoolBus.checkBus=true;
  schoolBus.hitable=true;
  schoolBus.speed.add(new Vector(0, -40));
  ScreenObjPool.add(schoolBus);
  var myCar = new Car(new Vector(275*gnfx/400, 500*gnfy/710), window.util.randomColor(), resourceLoader.resources.car_p, new Vector(0, 0));
  myCar.setCollisionMap(cMap);
  MainApp.addEventListener(myCar, 'hit', function(e){//弹框  不能撞击其他车辆
    MainApp.stopRun();
    hitschool(function() {
      ScreenObjPool.empty();
  		MainApp.emptyEventsPool();
      console.log(ScreenObjPool);
      MainApp.keepRun();
      schoolCar();
    });
	});
  ScreenObjPool.add(myCar);
  var speedUp = new staticImg(resourceLoader.get('up'), new Vector(365*gnfx/400, 500*gnfy/710), 30*gnfx/400, 45*gnfy/710);
  var speedDown = new staticImg(resourceLoader.get('down'), new Vector(365*gnfx/400, 600*gnfy/710), 30*gnfx/400, 45*gnfy/710);
  var speedRight = new staticImg(resourceLoader.get('right'), new Vector(3*gnfx/400, 600*gnfy/710), 30*gnfx/400, 45*gnfy/710);
  var speedLeft = new staticImg(resourceLoader.get('left'), new Vector(3*gnfx/400, 500*gnfy/710), 30*gnfx/400, 45*gnfy/710);


  MainApp.addEventListener(speedUp,'touchstart',function(e){
      myCar.speed.add(new Vector(0, -20));
  });
  MainApp.addEventListener(speedDown,'touchstart',function(e){
      myCar.speed.add(new Vector(0, 40));
      schoolBus.speed.add(new Vector(20,0));
  });
    MainApp.addEventListener(speedLeft,'touchstart',function(e){
      if(myCar.position.x<126*gnfx/400)
      {
        return;
      }
    myCar.position.x-=71*gnfx/400;
    });
    MainApp.addEventListener(speedRight,'touchstart',function(e){
      if(myCar.position.x>268*gnfx/400)
      {
        return;
      }
    myCar.position.x+=71*gnfx/400;
    });

  ScreenObjPool.add(speedUp);
  ScreenObjPool.add(speedDown);
  ScreenObjPool.add(speedLeft);
  ScreenObjPool.add(speedRight);
}







function phoneRwo() {
  MainApp.stopRun();
  $('.mask').fadeIn(100);
  $('#phone').slideDown(200);
  $('#jie').on('click',function() {
    $('#text').text('司机开车打电话要扣分并处罚款哦！');
    setTimeout(function() {
      $('.mask').fadeOut(100);
      $('#phone').slideUp(200);
      MainApp.keepRun();
      var lupai = new Car(new Vector(280*gnfx/400, -200*gnfy/710), window.util.randomColor(), resourceLoader.get('pai'), new Vector(0, 100));
      ScreenObjPool.add(lupai);
      setTimeout(function() {
        MainApp.stopRun();
        $('.mask').fadeIn(100);
        $('#pai').slideDown(200);
        setTimeout(function () {
          $('.mask').fadeOut(100);
          $('#pai').slideUp(200);
          ScreenObjPool.empty();
          MainApp.emptyEventsPool();
          KEY_LOCK = {
            LEFT: false,
            RIGHT: false,
            UP: false,
            DOWN: false
          };
          background();
          MainApp.keepRun();

        },2000);
      },5000);
    },2000);

  });
  $('#bujie').on('click',function(){
    $('.mask').fadeOut(100);
    $('#phone').slideUp(200);
    MainApp.keepRun();
    var lupai = new Car(new Vector(280*gnfx/400, -200*gnfy/710), window.util.randomColor(), resourceLoader.get('pai'), new Vector(0, 100));
    ScreenObjPool.add(lupai);
    setTimeout(function() {
      MainApp.stopRun();
      $('.mask').fadeIn(100);
      $('#pai').slideDown(200);
      setTimeout(function () {
        $('.mask').fadeOut(100);
        $('#pai').slideUp(200);
        ScreenObjPool.empty();
        MainApp.emptyEventsPool();
        KEY_LOCK = {
          LEFT: false,
          RIGHT: false,
          UP: false,
          DOWN: false
        };
        background();
        MainApp.keepRun();

      },2000);
    },5000);
    //biandao();
  });


  rwo=false;
}
function hitTip(callback) {
  console.log(callback);
  console.log('hitTip');
  $('.mask').fadeIn(100);
  $('#hitTip').slideDown(200);
  $('#know').on('click',function () {
    $('.mask').fadeOut(100);
    $('#hitTip').slideUp(200);
    if (callback) {
      callback();
    }
  })

}
function hitschool(callback) {
  $('.mask').fadeIn(100);
  $('#hitschool').slideDown(200);
  $('#schoolknow').on('click',function () {
    $('.mask').fadeOut(100);
    $('#hitschool').slideUp(200);
    if (callback) {
      callback();
    }
  })

}
function busToAvoid() {
  next = new TextEntityObject('成功给校车让道，下一关:', new Vector(80*gnfx/400, 200*gnfy/710), {fillStyle: '#900', font: 'bold '+40*gnfx/400+'px 微软雅黑', 'textBaseline': 'top'}, 200*gnfx/400, 35*gnfy/710);
  next1 = new TextEntityObject('请避让横穿马路的行人', new Vector(40*gnfx/400, 350*gnfy/710), {fillStyle: '#900', font: 'bold '+40*gnfx/400+'px 微软雅黑', 'textBaseline': 'top'}, 300*gnfx/400, 35*gnfy/710);
  ScreenObjPool.add(next);
  ScreenObjPool.add(next1);
  setTimeout(function () {
    ScreenObjPool.empty();
    MainApp.emptyEventsPool();
    KEY_LOCK = {
      LEFT: false,
      RIGHT: false,
      UP: false,
      DOWN: false
    };
    avoidGame();
  },3000);
}
