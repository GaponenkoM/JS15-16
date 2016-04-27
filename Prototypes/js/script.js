'use strict'
		/*First version*/
	function Human() {
			this.name = 'Maryna';
			this.age = 27;
			this.gender = 'female';
			this.height = 165;
			this.weigt = 50
		};
		
	function Student() {
			this.study = 'Volodymyr Dahl East Ukrainian National University';
			this.grant = 700;
			this.iq = 100;
			this.watchTV = function(time) {
				this.iq -= time/60;
			}
		};
		
	Student.prototype = new Human();
	var newStudent = new Student;
	console.log('newStudent', newStudent);
	console.log('newStudent.age', newStudent.age);
	newStudent.watchTV('1000');	
	console.log('newStudent.watchTV', newStudent.iq);
	
		
	function Worker() {
			this.job = 'EPAM';
			this.money = 1000;
			this.work = function(time){
			this.money += time/30;
			}
		};
		
	Worker.prototype = new Human();
	var newWorker = new Worker;
	console.log('newWorker', newWorker);
	console.log('newWorker.name', newWorker.name);
	newWorker.work('50');	
	console.log('newWorker.work', newWorker.money);	
	
	var coolWorker = new Human();
	console.log('coolWorker', coolWorker);
	
	var smartStudent = new Human();
	console.log('smartStudent', smartStudent);

	/*Second version*/
	function Human() {
		this.name = 'Maryna';
		this.age = 27;
		this.gender = 'female';
		this.height = 165;
		this.weigt = 50
	};
	
	Human.prototype.work = function Worker() {
		this.job = 'EPAM';
		this.money = '1000 $'
	};
	
	Human.prototype.watchTvShows =  function Student() {
		this.study = 'Volodymyr Dahl East Ukrainian National University',
		this.grant = '1000 UAH'
	}
	
	var newWorker = new Human();
	newWorker.work();
	console.log('newWorker.work()',newWorker);
	
	var newStudent = new Human();
	newStudent.watchTvShows();
	console.log('newStudent.watchTvShows()',newStudent);
	
	var secondWorker = new Human();
	console.log('secondWorker.age', secondWorker.age);
	
	var secondStudent = new Human();
	console.log('secondStudent.name', secondStudent.name);
	
	
	
	