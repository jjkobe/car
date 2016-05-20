(function(window, util){

var flag=false;
var ScreenObjPool = {
	objects: {},
	objectsIds: [],
	add: function(entityObj){
		var objects = this.objects, objectsIds = this.objectsIds;
		if(!this.objects[entityObj.guid]){
			this.objects[entityObj.guid] = entityObj;
			this.objectsIds.push(entityObj.guid);
		}
	},
	remove: function(entityObj){
		var objects = this.objects, objectsIds = this.objectsIds;
		delete this.objects[entityObj.guid];
		for(var i = 0, len = objectsIds.length; i < len; i++){
			if(this.objectsIds[i] === entityObj.guid){
				this.objectsIds.splice(i, 1);
			}
		}
	},

	empty: function(){
		this.objects = {};
		this.objectsIds = [];
	},

	foreach: function(context){
		var objects = this.objects, objectsIds = this.objectsIds;
		for(var i = 0, len = objectsIds.length; i < len; i++){
			var o = objects[objectsIds[i]];
			o.draw(context);
			if(o.hitable){
				MainApp.checkHit(o);
			}
			if(o.avoid){
				MainApp.checkAvoid(o);
			}
			if(o.lineable){
				MainApp.checkLine(o);
			}
			if(o.cline){
				MainApp.checkCline(o);
			}
			if(o.miss){
				MainApp.checkMiss(o);
			}
			if(o.change){
				MainApp.checkChange(o);
			}
			if(o.end){
				MainApp.checkEnd(o)
			}
			if(o.addcar){
				MainApp.checkAddcar(o)
			}
		}
	}
};

window.ScreenObjPool = ScreenObjPool;

//主程序
var MainApp = {
	startTime: null,
	nowTime: null,
	diffTime: null,
	canvasId: 'sence',
	canvas: 'sence',
	context: null,
	runStatus: true,
	INPUT: {
		KEY: {
			UP: 38,
			DOWN: 40,
			LEFT: 37,
			RIGHT: 39
		},

		KEY_LOCK: {
			UP: false,
			DOWN: false,
			LEFT: false,
			RIGHT: false
		}
	},

	init: function(config){
		for(var attr in config){
			this[attr] = config[attr];
		}
		this.canvas = util.g(this.canvasId);
		this.context = this.canvas.getContext('2d');

		this.canvasPos = util.getPosInDoc(this.canvas);

		this.initEvent();
	},
	/**
	 *可碰撞的对象
	 */
	collisionPool: (function(){
		var objectsIds = [];
		var objects = {};
		return {
			add: function(){},
			remove: function(obj){
				delete objects[obj.guid];
				for(var i = 0, len = objectsIds.length; i < len; i++){
					if(objectsIds[i] === obj.guid){
						this.objectsIds.splice(i, 1);
					}
				}
			},
			foreach: function(callback){
				for(var i = 0, len = objectsIds.length; i < len; i++){
					callback.call(objects[objectsIds[i]], index);
				}
			}
		};
	})(),

	eventsPool: {
		keydown: [],
		keyup: [],
		click: [],
		keypress: [],
		mousemove: [],
		mouseover: [],
		mouseout: [],
		collide: [],
		hit: [],
		avoid:[],
		line:[],
		cline:[],
		miss:[],
		change:[],
		end:[],
		addcar:[]
	},

	emptyEventsPool: function(){
		this.eventsPool = {
			keydown: [],
			keyup: [],
			click: [],
			keypress: [],
			mousemove: [],
			mouseover: [],
			mouseout: [],
			collide: [],
			hit: [],
			avoid:[],
			line:[],
			cline:[],
			miss:[],
			change:[],
			end:[],
			addcar:[]
		}
	},

	addEventListener: function(target, eventType, callback){
		var event = {
			target: target,
			callback: callback,
			init: false
		};

		if(eventType == 'mouseover' || eventType == 'mouseout'){
			event.target.mouseover = false;
		}

		this.eventsPool[eventType].push(event);
	},

	initEvent: function(){
		var self = this;
		var KEY = this.INPUT.KEY;
		var LOCK = this.INPUT.KEY_LOCK;
		document.onkeydown = function(e){
			switch(e.which){
				case KEY.UP:
					if(!LOCK.UP){

					}
			}

			for(var i = 0, len = MainApp.eventsPool.keydown.length; i < len; i++){
				var event = MainApp.eventsPool.keydown[i];
				event.callback.call(event.target, e);
			}
		};

		document.onkeyup = function(e){
			for(var i = 0, len = MainApp.eventsPool.keyup.length; i < len; i++){
				var event = MainApp.eventsPool.keyup[i];
				event.callback.call(event.target, e);
			}
		};


		document.onclick = function(e){
			var scroll = util.getScroll();
			e.relX = e.clientX - self.canvasPos.left + scroll.left;
			e.relY = e.clientY - self.canvasPos.top + scroll.top;
			// e.relX=e.clientX*320/gnfx;
			// e.relY=e.clientY*400/gnfy;
			var mPos = new Vector(e.relX, e.relY);
			for(var i = 0, len = MainApp.eventsPool.click.length; i < len; i++){
				var event = MainApp.eventsPool.click[i];
				if(event.target.checkContain(mPos)){
					event.callback.call(event.target, e);
				}
			}
		};

		this.canvas.addEventListener('mousemove', function(e){
			var scroll = util.getScroll();
			e.relX = e.clientX - self.canvasPos.left + scroll.left;
			e.relY = e.clientY - self.canvasPos.top + scroll.top;
			// e.relX=e.clientX*320/gnfx;
			// e.relY=e.clientY*400/gnfy;
			var mPos = new Vector(e.relX, e.relY);

			for(var i = 0, len = MainApp.eventsPool.mouseover.length; i < len; i++){
				var event = MainApp.eventsPool.mouseover[i];
				var status = event.target.checkContain(mPos);

				if(event.target.mouseStatus === undefined){
					event.target.mouseStatus = status;

					status && event.callback.call(event.target, e);
				}else{
					if(!event.target.mouseStatus){
						status && event.callback.call(event.target, e);
						event.target.mouseStatus = status;
					}
				}
			}

			for(var i = 0, len = MainApp.eventsPool.mouseout.length; i < len; i++){
				var event = MainApp.eventsPool.mouseout[i];
				var status = event.target.checkContain(mPos);

				if(event.target.mouseStatus === undefined){
					event.target.mouseStatus = status;
					if(!status){
						event.callback.call(event.target, e);
					}

				}else{
					if(event.target.mouseStatus){
						status || event.callback.call(event.target, e);
						event.target.mouseStatus = status;
					}
				}
			}

		}, false);
	},

	checkHit: function(target){
		for(var i = 0, len = MainApp.eventsPool.hit.length; i < len; i++){
			var event = MainApp.eventsPool.hit[i];
			if(event.target.guid === target.guid){
				continue;
			}

			if(event.target.checkHit(target)){
				event.callback.call(event.target, {relatedTarget: target});
			}
		}
	},
	checkAvoid: function(target){
		for(var i = 0, len = MainApp.eventsPool.avoid.length; i < len; i++){
			var event = MainApp.eventsPool.avoid[i];
			if(event.target.guid === target.guid){
				continue;
			}

			if(event.target.checkAvoid(target)){
				event.callback.call(event.target, {relatedTarget: target});
			}
		}
	},
	checkLine: function(target){
		for(var i = 0, len = MainApp.eventsPool.line.length; i < len; i++){
			var event = MainApp.eventsPool.line[i];
			if(event.target.guid === target.guid){
				if(event.target.checkLine()){
				event.callback.call(event.target, {relatedTarget: target});
			}
			}
		}
	},

	checkCline: function(target){
		for(var i = 0, len = MainApp.eventsPool.cline.length; i < len; i++){
			var event = MainApp.eventsPool.cline[i];
			if(event.target.guid === target.guid){
				continue;
			}

			if(event.target.checkCline(target)){
				event.callback.call(event.target, {relatedTarget: target});
			}
		}
	},

	checkMiss: function(target){
		for(var i = 0, len = MainApp.eventsPool.miss.length; i < len; i++){
			var event = MainApp.eventsPool.miss[i];
			if(event.target.guid === target.guid){
				continue;
			}

			if(event.target.checkMiss(target)){
				event.callback.call(event.target, {relatedTarget: target});
			}
		}
	},

	checkChange: function(target){
		for(var i = 0, len = MainApp.eventsPool.change.length; i < len; i++){
			var event = MainApp.eventsPool.change[i];
			if(event.target.guid === target.guid){
				continue;
			}

			if(event.target.checkChange(target)){
				event.callback.call(event.target, {relatedTarget: target});
			}
		}
	},

	checkEnd: function(target){
		for(var i = 0, len = MainApp.eventsPool.end.length; i < len; i++){
			var event = MainApp.eventsPool.end[i];
			if(event.target.guid === target.guid){
				if(event.target.checkEnd()){
				event.callback.call(event.target, {relatedTarget: target});
			}
			}
		}
	},

	checkAddcar: function(target){
		for(var i = 0, len = MainApp.eventsPool.addcar.length; i < len; i++){
			var event = MainApp.eventsPool.addcar[i];
			if(event.target.guid === target.guid){
				if(event.target.checkAddcar(target)){
				event.callback.call(event.target, {relatedTarget: target});
				return true;
			}
			}
		}
	},


	startRun: function(){
		this.startTime = new Date().getTime();
		var self = this;
		window.requestAnimFrame(function(){
			self.renderFrame();
		});
	},

	stopRun: function(){
		this.runStatus = false;
	},

	renderFrame: function(){
		var self = this;
		this.nowTime = new Date().getTime();
		this.context.clearRect(0, 0, gnfx, gnfy);
		this.diffTime = this.nowTime - this.startTime;
	// 	var temp=util.random(1, 5);
	// 	for(var i = 0; i < temp; i++){
	// 	var img =  images[util.random(0, images.length - 1)];
	// 	console.log(images);
	// 	var newCar = new Car(new Vector(i * 60 + 50, window.util.random(-480, -80)), window.util.randomColor(), img);
	// 	newCar.hitable = true;
	// 	ScreenObjPool.add(newCar);
	// }
	// if(images!=null)
	// {
	// 	console.log(images);
	// }
		ScreenObjPool.foreach(this.context);

		this.startTime = this.nowTime;

		if(self.runStatus)
			window.requestAnimFrame(function(){
				self.renderFrame();
			});
	}
};

window.MainApp = MainApp;

//资源载入器
var resourceLoader = {
	totalCount: 0,
	loadedCount: 0,
	resources: {},
	get: function(name){
		return this.resources[name] !== undefined ? this.resources[name] : false;
	},
	load: function(resource){
		this.totalCount = resource.length;
		var self = this;
		for(var i = 0, len = resources.length; i < len; i++){
			var img = new Image();
			img.dataName = resources[i].name;
			img.onload = function(){
				++self.loadedCount;
				self.onProgress({loadedCount: self.loadedCount, totalCount: self.totalCount});
				self.resources[this.dataName] = this;
				if(self.totalCount === self.loadedCount){
					self.onComplete();
				}
			};

			img.onerror = function(){
				console.log('Error on: ' + this.dataName);
			};

			img.src = resources[i].src;
		};
	},

	onProgress: function(){},

	onComplete: function(){}
};
window.resourceLoader = resourceLoader;

})(window, window.util);
