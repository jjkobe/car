function game1() {
    ScreenObjPool.empty();
		MainApp.emptyEventsPool();
		KEY_LOCK = {
			LEFT: false,
			RIGHT: false,
			UP: false,
			DOWN: false
		}

  var road1=new ImageEntityObject(resourceLoader.get('road1'),new Vector(0,0),640,480);
  ScreenObjPool.add(road1);

  var images=[];
  images.push(resourceLoader.resources.ask);


  for(var i = 0; i < 11; i++){
  		var img =  resourceLoader.resources.ask;
  		var newAsk = new Question(new Vector(i * 24 + 50, window.util.random(-5000, -80)), window.util.randomColor(), img);
  		newAsk.question = true;
  		ScreenObjPool.add(newAsk);
  	}



  var leftC = new CollisionEntityObject(new Vector(0, 0), 30, 480);
	var rightC = new CollisionEntityObject(new Vector(350, 0), 20, 480);
	var topC = new CollisionEntityObject(new Vector(0, 0), 640, 40);
	var bottomC = new CollisionEntityObject(new Vector(0, 480), 640, 10);
	var cMap = new CollistionMap();
	cMap.add(leftC);
	cMap.add(rightC);
	cMap.add(topC);
	cMap.add(bottomC);

  var fff = new TextEntityObject('下一关', new Vector(220, 250), {fillStyle: '#900', font: 'bold 64px 微软雅黑', 'textBaseline': 'top'}, 100, 35);

	ScreenObjPool.add(fff);

  MainApp.addEventListener(fff, 'mouseover', function(e){
		fff.setStyle({fillStyle: '#999'});
	});


	MainApp.addEventListener(fff, 'mouseout', function(e){
		fff.setStyle({fillStyle: '#333'});
	});

	//ScreenObjPool.add(fff);

	MainApp.addEventListener(fff, 'click', function(e){
		// ScreenObjPool.remove(end);
		// ScreenObjPool.remove(restart);
    ScreenObjPool.empty();
		MainApp.emptyEventsPool();
		KEY_LOCK = {
			LEFT: false,
			RIGHT: false,
			UP: false,
			DOWN: false
		}
		game2();
	});
  // MainApp.addEventListener(fff, 'click', function(e){
  //   console.log('ss');
  //   ScreenObjPool.empty();
	// 	MainApp.emptyEventsPool();
	// 	KEY_LOCK = {
	// 		LEFT: false,
	// 		RIGHT: false,
	// 		UP: false,
	// 		DOWN: false
	// 	}
	// 	//ScreenObjPool.remove(restart);
  //
	// 	startGame();
	// });


  // var myCar = new Car(new Vector(240, 390), window.util.randomColor(), resourceLoader.resources.car_p, new Vector(0, 0));
	// myCar.setCollisionMap(cMap);
	// MainApp.addEventListener(myCar, 'keyup', function(e){
	// 	var KEY = MainApp.INPUT.KEY;
	// 	switch(e.which){
	// 		case KEY.UP:
	// 			if(KEY_LOCK.UP){
	// 				this.speed.remove(new Vector(0, -200));
	// 				KEY_LOCK.UP = false;
	// 			}
	// 			break;
	// 		case KEY.DOWN:
	// 			if(KEY_LOCK.DOWN){
	// 				this.speed.remove(new Vector(0, 200));
	// 				KEY_LOCK.DOWN = false;
	// 			}
	// 			break;
	// 		case KEY.LEFT:
	// 			if(KEY_LOCK.LEFT){
	// 				this.speed.remove(new Vector(-200, 0));
	// 				KEY_LOCK.LEFT = false;
	// 			}
	// 			break;
	// 		case KEY.RIGHT:
	// 			if(KEY_LOCK.RIGHT){
	// 				this.speed.remove(new Vector(200, 0));
	// 				KEY_LOCK.RIGHT = false;
	// 			}
	// 			break;
	// 	}
	// });
  //
	// MainApp.addEventListener(myCar, 'keydown', function(e){
	// 	var KEY = MainApp.INPUT.KEY;
	// 	switch(e.which){
	// 		case KEY.UP:
	// 			if(!KEY_LOCK.UP){
	// 				myCar.speed.add(new Vector(0, -200));
	// 				KEY_LOCK.UP = true;
	// 			}
	// 			break;
	// 		case KEY.DOWN:
	// 			if(!KEY_LOCK.DOWN){
	// 				myCar.speed.add(new Vector(0, 200));
	// 				KEY_LOCK.DOWN = true;
	// 			}
	// 			break;
	// 		case KEY.LEFT:
	// 			if(!KEY_LOCK.LEFT){
	// 				myCar.speed.add(new Vector(-200, 0));
	// 				KEY_LOCK.LEFT = true;
	// 			}
	// 			break;
	// 		case KEY.RIGHT:
	// 			if(!KEY_LOCK.RIGHT){
	// 				myCar.speed.add(new Vector(200, 0));
	// 				KEY_LOCK.RIGHT = true;
	// 			}
	// 			break;
	// 	}
  //
	// });
  //
  // MainApp.addEventListener(myCar, 'question', function(e){
	// 			MainApp.stopRun();
  //       alert("question");
	// });
  //ScreenObjPool.add(myCar);
}
function game2() {
    ScreenObjPool.empty();
		MainApp.emptyEventsPool();
		KEY_LOCK = {
			LEFT: false,
			RIGHT: false,
			UP: false,
			DOWN: false
		}

  var road1=new ImageEntityObject(resourceLoader.get('back'),new Vector(0,0),960,960);
  ScreenObjPool.add(road1);

  var images=[];
  images.push(resourceLoader.resources.ask);


  for(var i = 0; i < 11; i++){
  		var img =  resourceLoader.resources.ask;
  		var newAsk = new Question(new Vector(i * 24 + 50, window.util.random(-5000, -80)), window.util.randomColor(), img);
  		newAsk.question = true;
  		ScreenObjPool.add(newAsk);
  	}



  var leftC = new CollisionEntityObject(new Vector(0, 0), 30, 480);
	var rightC = new CollisionEntityObject(new Vector(350, 0), 20, 480);
	var topC = new CollisionEntityObject(new Vector(0, 0), 640, 40);
	var bottomC = new CollisionEntityObject(new Vector(0, 480), 640, 10);
	var cMap = new CollistionMap();
	cMap.add(leftC);
	cMap.add(rightC);
	cMap.add(topC);
	cMap.add(bottomC);

  var fff = new TextEntityObject('下一关', new Vector(220, 250), {fillStyle: '#900', font: 'bold 64px 微软雅黑', 'textBaseline': 'top'}, 100, 35);

	ScreenObjPool.add(fff);

  MainApp.addEventListener(fff, 'mouseover', function(e){
		fff.setStyle({fillStyle: '#999'});
	});


	MainApp.addEventListener(fff, 'mouseout', function(e){
		fff.setStyle({fillStyle: '#333'});
	});

	//ScreenObjPool.add(fff);

	MainApp.addEventListener(fff, 'click', function(e){
		// ScreenObjPool.remove(end);
		// ScreenObjPool.remove(restart);
    ScreenObjPool.empty();
		MainApp.emptyEventsPool();
		KEY_LOCK = {
			LEFT: false,
			RIGHT: false,
			UP: false,
			DOWN: false
		}
		game1();
	});
}

function gameJieshao() {
	console.log(ScreenObjPool);
  var title = new TextEntityObject('背景介绍', new Vector(120*gnfx/400, 150*gnfy/710), {fillStyle: '#900', font: 'bold '+60*gnfx/400+'px 微软雅黑', 'textBaseline': 'top'}, 140*gnfx/400, 35*gnfy/710);

	ScreenObjPool.add(title);

  var text = new TextEntityObject('此处应有文字', new Vector(140*gnfx/400, 250*gnfy/710), {fillStyle: '#900', font: 'bold '+24*gnfx/400+'px 微软雅黑', 'textBaseline': 'top'}, 100*gnfx/400, 35*gnfy/710);

	ScreenObjPool.add(text);

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
  var title = new TextEntityObject('是否系安全带', new Vector(105*gnfx/400, 150*gnfy/710), {fillStyle: '#900', font: 'bold '+34*gnfx/400+'px 微软雅黑', 'textBaseline': 'top'}, 200*gnfx/400, 35*gnfy/710);

	ScreenObjPool.add(title);

  var yep = new staticImg(resourceLoader.get('yes'), new Vector(60*gnfx/400, 400*gnfy/710), 100*gnfx/400, 40*gnfy/710);
  ScreenObjPool.add(yep);
  var no =new staticImg(resourceLoader.get('no'),new Vector(230*gnfx/400,400*gnfy/710),100*gnfx/400,40*gnfy/710);
	ScreenObjPool.add(no);

  // MainApp.addEventListener(yep, 'mouseover', function(e){
	// 	yep.setStyle({fillStyle: '#999'});
	// });


	MainApp.addEventListener(yep, 'mouseout', function(e){
		//yep.setStyle({fillStyle: '#333'});
	});



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
    },1000);

	});
}
function runWithOther() {
  setTimeout(function() {
    MainApp.stopRun();
    $('.mask').fadeIn(100);
    $('#phone').slideDown(200);
    $('#jie').on('click',function() {
      $('#text').text('开车时不能接电话');
    });
    $('#bujie').on('click',function(){

      $('.mask').fadeOut(100);
      $('#phone').slideUp(200);
      ScreenObjPool.empty();
  		MainApp.emptyEventsPool();
  		KEY_LOCK = {
  			LEFT: false,
  			RIGHT: false,
  			UP: false,
  			DOWN: false
  		};
      MainApp.keepRun();
      biandao();
    });
  },5000);

  runWithOther=false;

}
function schoolCar() {
  var schoolBus = new Car(new Vector(200*gnfx/400, 700*gnfy/710), window.util.randomColor(), resourceLoader.resources.schoolBus, new Vector(0, 0));
  schoolBus.checkBus=true;
  schoolBus.hitable=true;

  var road = new ImageEntityObject(resourceLoader.get('roadG1'), new Vector(0, -710*gnfy/710), 400*gnfx/400, 1420*gnfy/710, new Vector(0,100));
  ScreenObjPool.add(road);

  var myCar = new Car(new Vector(275*gnfx/400, 600*gnfy/710), window.util.randomColor(), resourceLoader.resources.car_p, new Vector(0, 0));
  var cMap = new CollistionMap();
  myCar.setCollisionMap(cMap);
  MainApp.addEventListener(myCar, 'hit', function(e){//弹框  不能撞击其他车辆
		ScreenObjPool.empty();
		MainApp.emptyEventsPool();
		KEY_LOCK = {
			LEFT: false,
			RIGHT: false,
			UP: false,
			DOWN: false
		}
		//endGame(score.score);
	});
  //图片点击
  // var speedUp = new TextEntityObject('上', new Vector(365*gnfx/400, 500*gnfy/710), {fillStyle: '#fff', font: 'bold '+32*gnfx/400+'px 微软雅黑', 'textBaseline': 'top'}, 35*gnfx/400, 35*gnfy/400);
  // var speedDown = new TextEntityObject('下', new Vector(365*gnfx/400, 600*gnfy/710), {fillStyle: '#fff', font: 'bold '+32*gnfx/400+'px 微软雅黑', 'textBaseline': 'top'}, 35*gnfx/400, 35*gnfy/400);
  // var speedLeft = new TextEntityObject('左', new Vector(0, 500*gnfy/710), {fillStyle: '#fff', font: 'bold '+32*gnfx/400+'px 微软雅黑', 'textBaseline': 'top'}, 35*gnfx/400, 35*gnfy/400);
  // var speedRight = new TextEntityObject('右', new Vector(0, 600*gnfy/710), {fillStyle: '#fff', font: 'bold '+32*gnfx/400+'px 微软雅黑', 'textBaseline': 'top'}, 35*gnfx/400, 35*gnfy/400);
  var speedUp = new staticImg(resourceLoader.get('up'), new Vector(365*gnfx/400, 500*gnfy/710), 30*gnfx/400, 45*gnfy/710);
  var speedDown = new staticImg(resourceLoader.get('down'), new Vector(365*gnfx/400, 600*gnfy/710), 30*gnfx/400, 45*gnfy/710);
  var speedRight = new staticImg(resourceLoader.get('right'), new Vector(3*gnfx/400, 600*gnfy/710), 30*gnfx/400, 45*gnfy/710);
  var speedLeft = new staticImg(resourceLoader.get('left'), new Vector(3*gnfx/400, 500*gnfy/710), 30*gnfx/400, 45*gnfy/710);
  ScreenObjPool.add(speedUp);
  ScreenObjPool.add(speedDown);
  ScreenObjPool.add(speedLeft);
  ScreenObjPool.add(speedRight);
  MainApp.addEventListener(speedUp,'mousedown',function(e){
  myCar.speed.add(new Vector(0, -20));
  //console.log(myCar.speed);
  });
   MainApp.addEventListener(speedUp,'mouseup',function(e){
      myCar.speed.remove(new Vector(0, -20));
  });
  MainApp.addEventListener(speedDown,'mousedown',function(e){
  myCar.speed.add(new Vector(0, 20));
  schoolBus.speed.add(new Vector(15,0));
  //console.log(myCar.speed);
  });
   MainApp.addEventListener(speedDown,'mouseup',function(e){
      myCar.speed.remove(new Vector(0, 20));

      schoolBus.speed.remove(new Vector(15,0));
  });
  MainApp.addEventListener(speedLeft,'mousedown',function(e){
  //myCar.speed.add(new Vector(-20, 0));
  myCar.position.x-=71*gnfx/400;
  //console.log(myCar.speed);
  });
   MainApp.addEventListener(speedLeft,'mouseup',function(e){
      //myCar.speed.remove(new Vector(-20, 0));

  });
  MainApp.addEventListener(speedRight,'mousedown',function(e){
  //myCar.speed.add(new Vector(20, 0));
    myCar.position.x+=71*gnfx/400;
  //console.log(myCar.speed);
  });
   MainApp.addEventListener(speedRight,'mouseup',function(e){
      //myCar.speed.remove(new Vector(20, 0));
  });


  //图片点击

  ScreenObjPool.add(myCar);

  setTimeout(function functionName() {
    ScreenObjPool.add(schoolBus);
    schoolBus.speed.add(new Vector(0, -25));
    myCar.speed.add(new Vector(0, -15));
  },3000);
}


function biandao() {
  var lupai = new Car(new Vector(280*gnfx/400, -200*gnfy/710), window.util.randomColor(), resourceLoader.get('pai'), new Vector(0, 100));
  var myCar = new Car(new Vector(275*gnfx/400, 600*gnfy/710), window.util.randomColor(), resourceLoader.resources.car_p, new Vector(0, 0));
  var speedUp = new staticImg(resourceLoader.get('up'), new Vector(365*gnfx/400, 500*gnfy/710), 30*gnfx/400, 45*gnfy/710);
  var speedDown = new staticImg(resourceLoader.get('down'), new Vector(365*gnfx/400, 600*gnfy/710), 30*gnfx/400, 45*gnfy/710);
  var speedRight = new staticImg(resourceLoader.get('right'), new Vector(3*gnfx/400, 600*gnfy/710), 30*gnfx/400, 45*gnfy/710);
  var speedLeft = new staticImg(resourceLoader.get('left'), new Vector(3*gnfx/400, 500*gnfy/710), 30*gnfx/400, 45*gnfy/710);
  ScreenObjPool.add(speedUp);
  ScreenObjPool.add(speedDown);
  ScreenObjPool.add(speedLeft);
  ScreenObjPool.add(speedRight);
  MainApp.addEventListener(speedUp,'mousedown',function(e){
  myCar.speed.add(new Vector(0, -20));
  //console.log(myCar.speed);
  });
   MainApp.addEventListener(speedUp,'mouseup',function(e){
      myCar.speed.remove(new Vector(0, -20));
  });
  MainApp.addEventListener(speedDown,'mousedown',function(e){
  myCar.speed.add(new Vector(0, 20));
  schoolBus.speed.add(new Vector(15,0));
  //console.log(myCar.speed);
  });
   MainApp.addEventListener(speedDown,'mouseup',function(e){
      myCar.speed.remove(new Vector(0, 20));

      schoolBus.speed.remove(new Vector(15,0));
  });
  MainApp.addEventListener(speedLeft,'mousedown',function(e){
  myCar.speed.add(new Vector(-20, 0));
  //console.log(myCar.speed);
  });
   MainApp.addEventListener(speedLeft,'mouseup',function(e){
      myCar.speed.remove(new Vector(-20, 0));
  });
  MainApp.addEventListener(speedRight,'mousedown',function(e){
  myCar.speed.add(new Vector(20, 0));
  //console.log(myCar.speed);
  });
   MainApp.addEventListener(speedRight,'mouseup',function(e){
      myCar.speed.remove(new Vector(20, 0));
  });
  var road = new ImageEntityObject(resourceLoader.get('roadG1'), new Vector(0, -710*gnfy/710), 400*gnfx/400, 1420*gnfy/710, new Vector(0,100));
  ScreenObjPool.add(road);
  ScreenObjPool.add(lupai);
  ScreenObjPool.add(myCar);

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
}
