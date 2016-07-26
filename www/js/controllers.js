angular.module('starter.controllers', ['ngCordova'])

.controller('TestCtrl', function($scope,$state){

	$scope.timerTemplate = true;
	$scope.timerRunning = true;
	$scope.endTime = 30;

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
		$scope.numberOfQuestions = 25;
		$scope.questions = questions;
		$scope.QuestionNumber = 0;
		$scope.count = 1;
		$scope.nextEnd = true;
		$scope.testResults = [];
		$scope.options = {};
		$scope.score = 0;
		$scope.showScoreCard = false;
		$scope.testMode = true;
		for(var i = 0; i < $scope.numberOfQuestions; i++){
			$scope.testResults.push({'Qid':i+1,'selected':0,'correct':0})
		}
	}
	$scope.changeQuestion = function(value){
		$scope.setCurrentQuestion();
		if(value === 'Next'){
			if($scope.QuestionNumber < $scope.questions.length - 1 ){
				$scope.count = $scope.count + 1;
				$scope.options.choice = $scope.testResults[$scope.count-1].selected;
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
				$scope.options.choice = $scope.testResults[$scope.count-1].selected;
				$scope.QuestionNumber = $scope.QuestionNumber - 1;
			}
			if($scope.QuestionNumber!==0){
				$scope.nextEnd = true;
			}else{
				$scope.prevEnd = false;
			}
		}
	}
	$scope.setCurrentQuestion = function(){
		if($scope.testResults[$scope.count-1].Qid === $scope.count){
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
		for(var i = 0; i < $scope.numberOfQuestions; i++){
			if($scope.testResults[i].selected!==0 && $scope.testResults[i].selected === $scope.testResults[i].correct){
				$scope.score = $scope.score + 1;
			}
		}
		$scope.stopTimer();
	}
})
.controller('SimulateCtrl', function($scope) {
	$scope.numberOfQuestions = 25;
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
