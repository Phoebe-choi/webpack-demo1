// 初始化
var APP_ID = '5zC0fMVT28TdVY8l2QfSdDyG-gzGzoHsz';
var APP_KEY = 'h0yECHy8dC6isqNCMHKHfbA8';

AV.init({
	appId: APP_ID,
	appKey: APP_KEY
});

/*
//创建TestObject表
var TestObject = AV.Object.extend('TestObject');
//在表中创建一行数据
var testObject = new TestObject();
//数据内容是words: 'Hello World!' 保存
//如果保存成功，则运行alert('')
testObject.save({
  words: 'Hello World!'
}).then(function(object) {
  alert('LeanCloud Rocks!');
})
*/

let myForm = document.querySelector('#postMessageForm')
myForm.addEventListener('submit', function(e) {
	e.preventDefault()
	let content = myForm.querySelector('input[name=content]').value
	var Message = AV.Object.extend('Message');
	var message = new Message();
	message.save({
		'content': content
	}).then(function(object) {
		alert('提交成功!');
	})
})