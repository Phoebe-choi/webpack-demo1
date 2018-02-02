// 初始化
var APP_ID = '5zC0fMVT28TdVY8l2QfSdDyG-gzGzoHsz';
var APP_KEY = 'h0yECHy8dC6isqNCMHKHfbA8';

AV.init({
	appId: APP_ID,
	appKey: APP_KEY
});


var query = new AV.Query('Message');
query.find()
	.then(
		function(messages) {
			let array = messages.map((item) => item.attributes)
			array.forEach((item) => {
				let li = document.createElement('li')
				li.innerText = `${item.name}: ${item.content}`
				let messageList = document.querySelector('#messageList')
				messageList.appendChild(li)
			})
		}
	)

let myForm = document.querySelector('#postMessageForm')

myForm.addEventListener('submit', function(e) {
	e.preventDefault()
	let content = myForm.querySelector('input[name=content]').value
	let name = myForm.querySelector('input[name=name]').value
	var Message = AV.Object.extend('Message');
	var message = new Message();
	message.save({
		'name':name,
		'content':content
	}).then(function(object) { //obiect为存入的数据的相关信息
		let li = document.createElement('li')
		li.innerText = `${object.attributes.name}:${object.attributes.content}`
		let messageList = document.querySelector('#messageList')
		messageList.appendChild(li)
		myForm.querySelector('input[name=content]').value=''
	})
})