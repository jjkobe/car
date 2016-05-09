var Car = function(v, style, img, speed){

	this.step=0;
	var degree=0;
	this.width = 40;
	this.height = 60;
	this.img = img;
	this.width = img.width;
	this.height = img.height;
	this.rotatel=false;
	this.rotater=false;
	if(speed){
		this.speed = speed;
	}else{
		this.speed = new Vector(0, Math.ceil(window.util.random(80, 180)));
	}

	RectEntityObject.call(this, v, this.width - 6, this.height - 6, {});

	this.checkWin = function(rect){
		if((this.position.y + this.height / 2) < (rect.position.y - rect.height / 2)&&(Math.abs(degree)<0.1)&&(flag)&&(Math.abs(this.position.x-rect.position.x)<20)){
			return true;
		}
		return false;
	};

	this._update = function(){
		// if(forwardLight==false)
		// {
		// 	this.speed=new Vector(0, 0);
		// }
		var oldPos = this.position.clone();
		var diffY = MainApp.diffTime * Math.cos(degree)*this.speed.y / 1000;
		var diffX = MainApp.diffTime * Math.sin(degree)*this.speed.y / 1000;
		this.position.x -= diffX;
		this.position.y += diffY;

		if(this.collisionMap){
			if(this.collisionMap.checkCollide(this)){
				this.position = oldPos;
			}
		}
		////this.position.y += (MainApp.nowTime - MainApp.startTime) * this.speed.y / 1000;
		////this.position.x += (MainApp.nowTime - MainApp.startTime) * this.speed.x / 1000;本身代码就没有用

		// if(this.position.y > 480){
		// 	this.position.y = window.util.random(-240, 0);
		// 	this.speed = new Vector(0, Math.ceil(window.util.random(80, 180)));
		// }
	};

	this._draw = function(context){
		context.save();
        context.translate(this.position.x + (this.width / 2), this.position.y + (this.height / 2));
    //context.rotate(this.angle;);

    //context.drawImage(img, this.x, this.y, this.width, this.height);
		// var degree = this.step * 90 * Math.PI / 180;
		// context.rotate(degree);
		//console.log(degree);

		if (this.rotatel) {
			//this.rotatel=false;
			this.step-=0.02;
		}
		if (this.rotater) {
			//this.rotater=false;
			this.step+=0.02;
		}

		degree = this.step * 90 * Math.PI / 180;
		context.rotate(degree);


		context.translate(-(this.position.x + (this.width / 2)), -(this.position.y + (this.height / 2)));
		//context.strokeRect(this.position.x, this.position.y, this.width, this.height);
		context.drawImage(this.img, this.position.x - 3, this.position.y - 3);
		context.restore();
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

	this._update = function(){
		this.score += (MainApp.nowTime - MainApp.startTime) * 10 / 1000;
		text.setContent(~~this.score);
	}

	this._draw = function(context){
		text.draw(context);
	}

};
