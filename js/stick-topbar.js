! function() {
	var view = View('#topNavBar')
	var controller = {
		view: null,
		init: function(view) {//初始化view
			this.view = view//这个this就是controller
			this.bindEvents()
			//this.bindEvents.call(this)
		},
		bindEvents: function() { //绑定view事件
			var view=this.view //这里的this就是第六行的this
			window.addEventListener('scroll',(x)=> {
				if (window.scrollY > 0) {
					this.active()
				} else {
					this.deactive()
				}
			})
		},
		active:function(){ //激活view
			this.view.classList.add('sticky')
		},
		deactive:function(){ //非激活view
			this.view.classList.remove('sticky')
		}
	}
	controller.init(view)
	//controller.init.call(controller,view)
}.call()
