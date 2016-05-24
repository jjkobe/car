var Vector = function(x, y){
	this.x = x;
	this.y = y;

	this.add = function(v){
		this.x += v.x;
		this.y += v.y;
	};

	this.remove = function(v){
		this.x -= v.x;
		this.y -= v.y;
	};

	this.clone = function(){
		return new Vector(this.x, this.y);
	};
}

var Rect = function(v, width, height){
	this.position = v;
	this.width = width;
	this.height = height;

	this.checkHit = function(rect){
		if(Math.abs((this.position.x + this.width / 2) - (rect.position.x + rect.width / 2)) < (this.width + rect.width) / 2 && Math.abs((this.position.y + this.height / 2) - (rect.position.y + rect.height / 2)) < (this.height + rect.height) / 2){
			return true;
		}
		return false;
	};

	this.checkAvoid = function(rect){
		if(((this.position.y + this.height / 2) - (rect.position.y - rect.height/2))<-40*gnfy/710){
			return true;
		}
		return false;
	};

	this.checkLine = function(){
		if(((this.position.x + this.width / 2) < 190*gnfx/400)  || ((this.position.x - this.width / 2)  > 220*gnfx/400)){
			return true;
		}
		return false;
	};

	this.checkCline = function(rect){
		if((rect.position.y < -2130*gnfy/710)  && ((this.position.x - this.width / 2)  > 220*gnfx/400)){
			return true;
		}
		return false;
	};

	this.checkMiss = function(rect){
		if((rect.position.y  > -600*gnfy/710) && ((this.position.x-this.width/2<220*gnfx/400) || (this.position.y-this.width/2<120*gnfy/710))){
			return true;
		}
		return false;
	};

	this.checkChange = function(rect){
		if((rect.position.y  > -600*gnfy/710) && (this.position.x-this.width/2>220*gnfx/400) && (this.position.y-this.width/2>120*gnfy/710)){
			return true;
		}
		return false;
	};

	this.checkEnd = function(){
		if((this.position.y - this.height / 2)  < 0){
			return true;
		}
		return false;
	};

	this.checkAddcar = function(rect){
		if((this.position.y - this.height / 2)  < 450*gnfy/710){
			return true;
		}
		return false;
	};

	this.checkContain = function(v){
		if(v.x > this.position.x && v.y > this.position.y && v.x < this.position.x + this.width && v.y < this.position.y + this.height){
			return true;
		}
		return false;
	}
};


var EntityObject = function(){
	this.guid = EntityObject.guid++;

	this.clickable = false;
	this.hitable = false;
	this.avoid=false;
	this.lineable=false;
	this.cline=false;
	this.miss=false;
	this.change=false;
	this.end=false;
	this.addcar=false;
	this.drawable=true;


	this.collisionMap = null;

	this._events = {};

	this._draw = function(context){};
	this._update = function(){};
	this.draw = function(context){
		this._update();
		this._draw(context);
	};


	this.setCollisionMap = function(map){
		this.collisionMap = map;
	};
};

EntityObject.guid = 1;

var RectEntityObject = function(v, width, height, styles){
	Rect.call(this, v, width, height);
	EntityObject.call(this);

	this._draw = function(context){
		if(!styles){
			return false;
		}
		if(styles.border){
			context.strokeStyle = styles.border.color
			context.lineWidth = styles.border.width;
			context.strokeRect(this.position.x, this.position.y, this.width, this.height);
		}

		if(styles.fill){
			context.fillStyle = styles.fill;
			context.fillRect(this.position.x, this.position.y, this.width, this.height);
		}
	}
};


var TextEntityObject = function(content, v, styles, width, height){

	this.content = content;
	!!width || (width = 0);
	!!height || (height = 0);

	EntityObject.call(this);
	Rect.call(this, v, width, height);

	this.setContent = function(content){
		this.content = content;
	};

	this.setStyle = function(s){
		for(var attr in s){
			styles[attr] = s[attr];
		}
	};

	this._draw = function(context){
		for(var attr in styles){
			context[attr] = styles[attr];
		}

		context.fillText(this.content, v.x, v.y,width,height);

		//context.strokeRect(v.x, v.y, this.width, this.height);
	}
}


var ImageEntityObject = function(img, v, width, height,speed){
	this.img=img;
	this.nextImg=img;
	EntityObject.call(this);
	Rect.call(this, v, width, height);
	if(speed){
		this.speed = speed;
	}else{
		this.speed = new Vector(0, 0);
	}

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
		if(this.position.y > 0){
			this.img=this.nextImg;
			this.position = new Vector(0,-710*gnfy/710);
		}
	 };

	this._draw = function(context){
		context.drawImage(this.img, this.position.x, this.position.y,width,height);
	};
};



var staticImg = function(img, v, width, height){
	EntityObject.call(this);
	Rect.call(this, v, width, height);

	this._draw = function(context){
		context.drawImage(img, this.position.x, this.position.y,width,height);
	};
};




var LoadScreen = function(){
	EntityObject.call(this);
	var backgroundRect = new RectEntityObject(new Vector(167*gnfx/400, 210*gnfy/710), 106, 10, {border: {color: '#ccc', width: '2'}});
	var forgroundRect = new RectEntityObject(new Vector(170*gnfx/400, 213*gnfy/710), 0, 4, {fill: '#999'});
	var text = new TextEntityObject('正在为您载入', new Vector(181*gnfx/400, 190*gnfy/710), {fillStyle: '#000', font: 'bold 12px 微软雅黑', 'textBaseline': 'top'});
	this._draw = function(context){
		backgroundRect.draw(context);
		forgroundRect.draw(context);
		text.draw(context);
	}

	this.setProgress = function(percent){
		forgroundRect.width = 100 * percent;
	}
};


var CollisionEntityObject = function(pos, width, height){
	RectEntityObject.call(this, pos, width, height, {border: {color:'#06c', width: 1}});
};

var CollistionMap = function(){
	var objectsIds = [];
	var objects = {};

	this.add = function(o){
		objectsIds.push(o.guid);
		objects[o.guid] = o;
	};

	this.remove = function(o){
		var index = objectsIds.indexOf(o.guid);
		delete objects[o.guid];
		objectsIds.splice(index, 1);
	};

	this.checkCollide = function(rect){
		for(var i = 0, len = objectsIds.length; i < len; i++){
			var co = objects[objectsIds[i]];

			if(co.checkHit(rect)){
				return true;
			}
		}

		return false;
	};
};
