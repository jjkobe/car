var Car = function(v, style, img, speed,road){
	this.img = img;
	this.width = img.width*gnfx/400;
	this.height = img.height*gnfy/710;
	if(speed){
		this.speed = speed;
	}else{
		this.speed = new Vector(0, 130);
	}
	if(road){
		this.road = road;
	}else{
		this.road = 3;
	}

	RectEntityObject.call(this, v, this.width - 6, this.height - 6, {});

	this._update = function(){
		var oldPos = this.position.clone();
		var diffY = MainApp.diffTime * this.speed.y / 1000;
		var diffX = MainApp.diffTime * this.speed.x / 1000;
		this.position.x += diffX;
		this.position.y += diffY;

		if(this.collisionMap){
			if(this.collisionMap.checkCollide(this)){
				this.position = oldPos;
			}
		}
		//this.position.y += (MainApp.nowTime - MainApp.startTime) * this.speed.y / 1000;
		//this.position.x += (MainApp.nowTime - MainApp.startTime) * this.speed.x / 1000;

		if(this.position.y > 710*gnfy/710){
			var temp=util.random(0,this.road);
			this.position.x=temp * 74*gnfx/400 + 51;
			this.position.y = window.util.random(-710*gnfy/710, 0);
			this.speed = new Vector(0, 80);
		}
	 };

	this._draw = function(context){

		//context.strokeRect(this.position.x, this.position.y, this.width, this.height);
		context.drawImage(this.img, this.position.x - 3, this.position.y - 3,this.width,this.height);
	};

};

var ConverseCar = function(v, style, img, speed){
	this.img = img;
	this.width = img.width*gnfx/400;
	this.height = img.height*gnfy/710;
	if(speed){
		this.speed = speed;
	}else{
		this.speed = new Vector(0, 130);
	}

	RectEntityObject.call(this, v, this.width - 6, this.height - 6, {});

	this._update = function(){
		var oldPos = this.position.clone();
		var diffY = MainApp.diffTime * this.speed.y / 1000;
		var diffX = MainApp.diffTime * this.speed.x / 1000;
		this.position.x += diffX;
		this.position.y += diffY;

		if(this.collisionMap){
			if(this.collisionMap.checkCollide(this)){
				this.position = oldPos;
			}
		}
		//this.position.y += (MainApp.nowTime - MainApp.startTime) * this.speed.y / 1000;
		//this.position.x += (MainApp.nowTime - MainApp.startTime) * this.speed.x / 1000;

		if(this.position.y > 710*gnfy/710){
			this.position.y = window.util.random(-20, 0);
			this.speed = new Vector(0, window.util.random(80,180));
		}
	 };


	this._draw = function(context){

		//context.strokeRect(this.position.x, this.position.y, this.width, this.height);
		context.drawImage(this.img, this.position.x - 3, this.position.y - 3,this.width,this.height);
	};
};




var Magic = function(v, img, animType, split, speed){

	this.img = img;
	this.animType = animType;
	if(animType === Magic.ANIM_TYPE.VERTICAL){
		this.width = img.width;
		this.height = split;
		this.frames = ~~(img.height / split);
	}else if(animType === Magic.ANIM_TYPE.HORIZONTAL){
		this.width = split;
		this.height = img.height;
		this.frames = ~~(img.width / split);
	}

	!!speed ? (this.speed = speed) : (this.speed = new Vector(0, 0));


	this.currFrame = 0;

	RectEntityObject.call(this, v, this.width, this.height, {});

	this._update = function(){
		this.currFrame += (MainApp.nowTime - MainApp.startTime) * 10 / 1000;
		this.currFrame %= this.frames;

		this.position.x += (MainApp.nowTime - MainApp.startTime) * this.speed.x / 1000;
		if(this.position.x > 640){
			this.position.x = 0;
		}
	};

	this._draw = function(context){
		var f = ~~this.currFrame;
		if(this.animType === Magic.ANIM_TYPE.VERTICAL){
			context.drawImage(img, 0,  f * this.height , this.width, this.height, this.position.x, this.position.y, this.width, this.height);
		}else if(this.animType === Magic.ANIM_TYPE.HORIZONTAL){
			context.drawImage(img, f * this.width, 0 , this.width, this.height, this.position.x, this.position.y, this.width, this.height);
		}
	}
};

Magic.ANIM_TYPE = {
	VERTICAL: 1,
	HORIZONTAL: 2
}


var GameScore = function(s, p){
	EntityObject.call(this);
	this.score = s;
	var text = new TextEntityObject(s, p, {fillStyle: '#fff', font: 'bold 32px 微软雅黑', 'textBaseline': 'top'}, 100, 35);

    this.addCoin=function(){
    	this.score+=5;
    }

	this._update = function(){
		//this.score += (MainApp.nowTime - MainApp.startTime) * 10 / 1000;
		text.setContent(~~this.score);
	}

	this._draw = function(context){
		text.draw(context);
	}

};
