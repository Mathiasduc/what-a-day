var getVal= {
	day: () => $("#get_day").val(),
	month: () => $("#get_month").val(),
	year: () => $("#get_year").val()
};

(function(){
	window.app = {

		weekDaysArr: [ ,"Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"],

		init: function(){
			app.listeners();
		},
		
		listeners: function(){
			$("#validate").on("click", function(){ 
				app.getDate(); 
			});
		},

		getDate: function(){
			var date = getVal.year() + "-" + getVal.month() + "-" + getVal.day();
			app.getWeekDay(date);
		},
		getWeekDay: function(date){
			var momentObj = moment(date);
			var numDay = parseInt((momentObj.weekday()), 10);
			console.log(momentObj, "momentObj");
			console.log(numDay);
			var weekDay = app.weekDaysArr[numDay];
			console.log(weekDay);
			return (weekDay);
		},
		display: function() {

		}
	};
	app.init();
})();