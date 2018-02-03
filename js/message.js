! function() {
	var model = {
		// 初始化
		init: function() {
			var APP_ID = '5zC0fMVT28TdVY8l2QfSdDyG-gzGzoHsz'
			var APP_KEY = 'h0yECHy8dC6isqNCMHKHfbA8'
			AV.init({
				appId: APP_ID,
				appKey: APP_KEY
			})
		},
		//获取数据
		fetch: function() {
			var query = new AV.Query('Message');
			return query.find() //Promise对象
		},
		//创建数据
		save: function(name, content) {
			var Message = AV.Object.extend('Message');
			var message = new Message();
			return message.save({ //Promise对象
				'name': name,
				'content': content
			})
		}
	}
	var view = document.querySelector('section.message')

	var controller = {
		view: null,
		model: null,
		messageList: null,
		init: function(view,model) {
			this.view = view
			this.model = model

			this.messageList = view.querySelector('#messageList')
			this.form = view.querySelector('form')
			this.model.init() //初始化model
			this.loadMessages() //加载信息
			this.bindEvents() //绑定事件
		},
		loadMessages: function() {
			this.model.fetch().then(
				(messages) => {
					let array = messages.map((item) => item.attributes)
					array.forEach((item) => {
						let li = document.createElement('li')
						li.innerText = `${item.name}: ${item.content}`
						this.messageList.appendChild(li)
					})
				}
			)
		},
		bindEvents: function() {
			this.form.addEventListener('submit', function(e) {
				e.preventDefault()
				this.saveMessage()
			})
		},
		saveMessage: function() {
			let myForm = this.form
			let content = myForm.querySelector('input[name=content]').value
			let name = myForm.querySelector('input[name=name]').value
			this.model.save(name, content).then(function(object) { //obiect为存入的数据的相关信息
				let li = document.createElement('li')
				li.innerText = `${object.attributes.name}:${object.attributes.content}`
				let messageList = document.querySelector('#messageList')
				messageList.appendChild(li)
				myForm.querySelector('input[name=content]').value = ''
			})
		}
	}
	controller.init(view, model)
}.call()
