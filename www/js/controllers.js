var questions = [];
$.get('db/questions.txt',function(response){
        var data = response.replace(/[0-9]+\.+�+\s/g,"Question:");
        var items = data.split('Question:');
		for(var i = 0; i < items.length-1; i++){
		   	var ques = {
		    	'Qid':i+1,
		    	'question':items[i+1].split('A.')[0],
		    	'options':{
		    			'a':items[i+1].split('A.')[1].split('B.')[0],
		    			'b':items[i+1].split('A.')[1].split('B.')[1].split('C.')[0],
		    			'c':items[i+1].split('A.')[1].split('B.')[1].split('C.')[1].split('D.')[0],
		    			'd':items[i+1].split('A.')[1].split('B.')[1].split('C.')[1].split('D.')[1].split('Answer:')[0]
		    	},
		    	'ans':items[i+1].split('A.')[1].split('B.')[1].split('C.')[1].split('D.')[1].split('Answer:')[1].split('Explanation:')[0],
		    	'explanation':items[i+1].split('A.')[1].split('B.')[1].split('C.')[1].split('D.')[1].split('Answer:')[1].split('Explanation:')[1]
		    }
		    questions.push(ques);
		}
		
		
});
angular.module('starter.controllers', ['ngCordova'])

.controller('TestCtrl', function($scope,$state,$http){

	$scope.timerTemplate = true;
	$scope.timerRunning = true;
	$scope.endTime = 30;

	var unique_random_numbers = [];

    $scope.startTimer = function (){
        $scope.$broadcast('timer-start');
        $scope.timerRunning = true;
    };

    $scope.stopTimer = function (){
        $scope.$broadcast('timer-stop');
        $scope.timerRunning = false;
    };

    $scope.$on('timer-tick', function (event, args) {
    	if(event.targetScope.mminutes===$scope.endTime){
    		$scope.$apply(function () {
    			$scope.completeTest();
    		});
    	}
    });

	$scope.startTest = function(){
		$scope.startTimer();
		$scope.timerTemplate = false;
		$scope.submitBtn = true;
		$scope.timer = true;
		$scope.numberOfQuestions = 25;
		$scope.questions = questions;
		$scope.count = 1;
		$scope.nextEnd = true;
		$scope.testResults = [];
		$scope.options = {};
		$scope.score = 0;
		$scope.showScoreCard = false;
		$scope.testMode = true;
		$scope.review = false;
		unique_random_numbers.push(Math.floor((Math.random() * questions.length) + 1))
		$scope.QuestionNumber = unique_random_numbers[$scope.count-1];
		for(var a = 0; a < $scope.questions.length; a++){
			if(unique_random_numbers.length<$scope.numberOfQuestions){
				var num = Math.floor((Math.random() * questions.length) + 1);
				for(var b = 0; b < unique_random_numbers.length; b++){
					if(unique_random_numbers[b] !== num){
						unique_random_numbers.push(num);
						break;
					}
				}
			}
		}
		for(var i = 0; i < $scope.numberOfQuestions; i++){
			$scope.testResults.push({'Qid':unique_random_numbers[i],'selected':0,'correct':0})
		}
	}
	$scope.changeQuestion = function(value){
		$scope.setCurrentQuestion();
		$scope.acp_correct_answer_a = 'none';
		$scope.acp_correct_answer_b = 'none';
		$scope.acp_correct_answer_c = 'none';
		$scope.acp_correct_answer_d = 'none';
		if(value === 'Next'){
			if($scope.count <= $scope.numberOfQuestions - 1 ){
				$scope.count = $scope.count + 1;
			}
			if($scope.numberOfQuestions-1!==$scope.count){
				$scope.prevEnd = true;
			}else{
				$scope.nextEnd = false;
			}
		}else if(value === 'Prev'){
			if($scope.count >= 1){
				$scope.count = $scope.count - 1;
			}
			if($scope.count!==1){
				$scope.nextEnd = true;
			}else{
				$scope.prevEnd = false;
			}
		}
		$scope.options.choice = $scope.testResults[$scope.count-1].selected;
		$scope.QuestionNumber = unique_random_numbers[$scope.count-1];
		if($scope.review){
			$scope.showCorrectAnswer($scope.questions[unique_random_numbers[$scope.count-1]].ans.trim().toLowerCase());
		}
	}
	$scope.setCurrentQuestion = function(){
		if($scope.testResults[$scope.count-1].Qid === unique_random_numbers[$scope.count-1]){
			$scope.testResults[$scope.count-1].selected = $scope.options.choice;
			$scope.testResults[$scope.count-1].correct = $scope.questions[$scope.QuestionNumber].ans;
		}
	}
	$scope.completeTest = function(){
		$scope.setCurrentQuestion();
		$scope.testMode = false;
		$scope.showScoreCard = true;
		$scope.prevEnd = false;
		$scope.nextEnd = false;
		$scope.submitBtn = false;
		$scope.timer = false;
		for(var i = 0; i < $scope.numberOfQuestions; i++){
			if($scope.testResults[i].selected!==0 && $scope.testResults[i].selected === $scope.testResults[i].correct.trim().toLowerCase()){
				$scope.score = $scope.score + 1;
			}
		}
		$scope.stopTimer();
	}
	$scope.reviewAnswers = function(){
		$scope.showScoreCard = false;
		$scope.testMode = true;
		$scope.review = true;
		$scope.count = 1;
		$scope.setCurrentQuestion();
		$scope.nextEnd = true;
		$scope.showCorrectAnswer($scope.questions[unique_random_numbers[$scope.count-1]].ans.trim().toLowerCase());
	}
	$scope.showCorrectAnswer = function(option){
		if(option==='a'){
			$scope.acp_correct_answer_a = 'green';
		}else if(option==='b'){
			$scope.acp_correct_answer_b = 'green';
		}else if(option==='c'){
			$scope.acp_correct_answer_c = 'green';
		}else if(option==='d'){
			$scope.acp_correct_answer_a = 'green';
		}
	}
})
.controller('SimulateCtrl', function($scope,$http) {

    $scope.questions = questions;
	$scope.QuestionNumber = 0;
	$scope.count = 1;
	$scope.nextEnd = true;
	$scope.options = {};
	$scope.expAns = false;
	$scope.isChecked = false;
	$scope.showAnswerToggle  = {'flag':false};

	$scope.changeQuestion = function(value){
		$scope.showAnswerToggle.flag = false;
		$scope.options.choice = 0;
		$scope.expAns = false;
		if(value === 'Next'){
			if($scope.QuestionNumber < $scope.questions.length - 1 ){
				$scope.count = $scope.count + 1;
				$scope.QuestionNumber = $scope.QuestionNumber + 1;
			}
			if($scope.questions.length-1!==$scope.QuestionNumber){
				$scope.prevEnd = true;
			}else{
				$scope.nextEnd = false;
			}
		}else if(value === 'Prev'){
			if($scope.QuestionNumber > 0){
				$scope.count = $scope.count - 1;
				$scope.QuestionNumber = $scope.QuestionNumber - 1;
			}
			if($scope.QuestionNumber!==0){
				$scope.nextEnd = true;
			}else{
				$scope.prevEnd = false;
			}
		}
	}
	$scope.showAnswer=function(){
		if( $scope.showAnswerToggle.flag == true){
			$scope.expAns = true;
		}else{
			$scope.expAns = false;
		}
	};
})
.controller('SettingsCtrl', function($scope) {

});
