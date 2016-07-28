var url;

// $.ajaxSetup({async:false});

function getDataQuestions(){
	var questions = [];
	$.get(url,function(response){
		var data = response.replace(/\n[0-9]+\.+\s/g,"Question:");
			data = data.replace(/\n[0-9]+\.+�/g,"Question:");
			data = data.replace(/\n[0-9]+\./g,"Question:");
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
	return questions;

}
angular.module('starter.controllers', ['ngCordova'])
.controller('HomeCtrl', function($scope,$state,$http,$ionicHistory){
	$scope.totalExam = [1,2,3,4,5,6,7,8,9,10,11];
	$scope.Exam = function(testNumber){
		url = 'txt/QABank_Set'+testNumber+'.txt';
		$state.go('tab.mode')
	}
})
.controller('ModeCtrl', function($scope,$state,$http,$ionicHistory,$rootScope){
	$rootScope.$ionicGoBack = function(backCount) {
	    $ionicHistory.goBack(backCount);
	};
	$scope.startTestByMode = function(mode){
		// $ionicHistory.clearCache();
		if(mode === 'simulate'){
			$state.go('tab.simulate')
		}else if(mode === 'test'){
			$state.go('tab.test')
		}
	}
})
.controller('TestCtrl', function($scope,$state,$http,$ionicHistory,$rootScope,$ionicPopup){
	$rootScope.$ionicGoBack = function() {
		var confirmPopup = $ionicPopup.confirm({
		    template: 'Are you sure you want to back?',
		    buttons: [{text: 'No',},{type: 'button-dark',text: '<b>Yes</b>',onTap: function(e) {
		    	$ionicHistory.goBack();
		    }}],

		});
	};
	$scope.timerTemplate = true;
	$scope.timerRunning = true;
	$scope.testMode = true;
	$scope.submitBtn = true;
	$scope.timer = true;
	$scope.timerTemplate = false;
	$scope.numberOfQuestions = 120;
	$scope.questions = getDataQuestions();
	$scope.count = 1;
	$scope.nextEnd = true;
	$scope.testResults = [];
	$scope.options = {};
	$scope.score = 0;
	$scope.showScoreCard = false;
	$scope.review = false;
	$scope.QuestionNumber = 0;

	for(var i = 0; i < $scope.numberOfQuestions; i++){
		$scope.testResults.push({'Qid':i+1,'selected':0,'correct':0})
	}

    $scope.startTimer = function (){
        $scope.$broadcast('timer-start');
        $scope.timerRunning = true;
    };

    $scope.stopTimer = function (){
        $scope.$broadcast('timer-stop');
        $scope.timerRunning = false;
    };

    $scope.$on('timer-tick', function (event, args) {
    	if(event.targetScope.mminutes==='00' && event.targetScope.hhours==='00' && event.targetScope.sseconds==='00'){
    		$scope.$apply(function () {
    			$scope.completeTest();
    		});
    	}
    });

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
			if($scope.numberOfQuestions!==$scope.count){
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
		$scope.QuestionNumber = $scope.count-1;
		if($scope.review){
			$scope.showCorrectAnswer($scope.questions[$scope.count-1].ans.trim().toLowerCase());
		}
	}
	$scope.setCurrentQuestion = function(){
		if($scope.testResults[$scope.count-1].Qid === $scope.count-1){
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
		$scope.showCorrectAnswer($scope.questions[$scope.count-1].ans.trim().toLowerCase());
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
.controller('SimulateCtrl', function($scope,$http,$ionicHistory,$state,$rootScope,$ionicPopup) {
	$scope.timerTemplate = true;
	$scope.timerRunning = true;

	$scope.startTimer = function (){
        $scope.$broadcast('timer-start');
        $scope.timerRunning = true;
    };

    $scope.stopTimer = function (){
        $scope.$broadcast('timer-stop');
        $scope.timerRunning = false;
    };

    $scope.$on('timer-tick', function (event, args) {
    	if(event.targetScope.mminutes==='00' && event.targetScope.hhours==='00' && event.targetScope.sseconds==='00'){
    		$state.go('tab.home');
    	}
    });

    $scope.questions = getDataQuestions();

    $rootScope.$ionicGoBack = function() {
		var confirmPopup = $ionicPopup.confirm({
		    template: 'Are you sure you want to back?',
		    buttons: [{text: 'No',},{type: 'button-dark',text: '<b>Yes</b>',onTap: function(e) {
		    	$ionicHistory.goBack();
		    }}],

		});
	};

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
