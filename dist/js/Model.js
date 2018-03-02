'use strict';

window.Model = function (options) {
	var resourceName = options.resourceName;
	return {
		init: function init() {
			var APP_ID = '5zC0fMVT28TdVY8l2QfSdDyG-gzGzoHsz';
			var APP_KEY = 'h0yECHy8dC6isqNCMHKHfbA8';
			AV.init({
				appId: APP_ID,
				appKey: APP_KEY
			});
		},
		fetch: function fetch() {
			var query = new AV.Query(resourceName);
			return query.find(); //Promise对象
		},
		save: function save(object) {
			var X = AV.Object.extend(resourceName);
			var x = new X();
			return x.save(object);
		}
	};
};