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
