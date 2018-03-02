'use strict';

window.Controller = function (options) {
	//options的属性：init、loadMessages、bindEvents、saveMessage
	var _init = options.init; //使用闭包把options的init单独记下来，再赋给init

	var object = {
		view: null,
		model: null,
		init: function init(view, model) {
			this.view = view;
			this.model = model;
			this.model.init();
			_init.call(this, view, model);
			this.bindEvents.call(this);
		}
	};
	for (var key in options) {
		if (key !== 'init') {
			object[key] = options[key]; //把options的属性，除了init之外，其余的全部拷贝给object。
		}
	}
	return object; //controller===object
};