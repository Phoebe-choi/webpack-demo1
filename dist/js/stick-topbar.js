'use strict';

!function () {
	var view = View('#topNavBar');
	var controller = {
		view: null,
		init: function init(view) {
			//初始化view
			this.view = view; //这个this就是controller
			this.bindEvents();
			//this.bindEvents.call(this)
		},
		bindEvents: function bindEvents() {
			var _this = this;

			//绑定view事件
			var view = this.view; //这里的this就是第六行的this
			window.addEventListener('scroll', function (x) {
				if (window.scrollY > 0) {
					_this.active();
				} else {
					_this.deactive();
				}
			});
		},
		active: function active() {
			//激活view
			this.view.classList.add('sticky');
		},
		deactive: function deactive() {
			//非激活view
			this.view.classList.remove('sticky');
		}
	};
	controller.init(view);
	//controller.init.call(controller,view)
}.call();