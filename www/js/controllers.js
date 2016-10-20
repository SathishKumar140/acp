var url,exam,browsedQuestions,reviewId,questionNumbers;

// $.ajaxSetup({async:false});

function getDataQuestions(){
	var questions = [];
	$.get(url,function(response){
			// var data = response.replace(/\n[0-9]+\.+\s/g,"Question:");
			// data = data.replace(/\n[0-9]+\.+�/g,"Question:");
			// data = data.replace(/\n[0-9]+\./g,"Question:");
			var data = getReplaceStringData(response);
        	var items = data.split('Question:');
			for(var i = 0; i < items.length-1; i++){
				var ans,explanation;
				if(items[i+1].split('A.')[1].split('B.')[1].split('C.')[1].split('D.')[1].split('Answer:')[1]===undefined){
					ans = ' '
					explanation = '';
				}else{
					ans = items[i+1].split('A.')[1].split('B.')[1].split('C.')[1].split('D.')[1].split('Answer:')[1].split('Explanation:')[0];
					explanation = items[i+1].split('A.')[1].split('B.')[1].split('C.')[1].split('D.')[1].split('Answer:')[1].split('Explanation:')[1];
				}
		   		var ques = {
		    		'Qid':i+1,
		    		'question':items[i+1].split('A.')[0],
		    		'options':{
		    			'a':items[i+1].split('A.')[1].split('B.')[0],
		    			'b':items[i+1].split('A.')[1].split('B.')[1].split('C.')[0],
		    			'c':items[i+1].split('A.')[1].split('B.')[1].split('C.')[1].split('D.')[0],
		    			'd':items[i+1].split('A.')[1].split('B.')[1].split('C.')[1].split('D.')[1].split('Answer:')[0]
		    		},
		    		'ans':ans,
		    		'explanation':explanation
		    	}
		    	questions.push(ques);
		    }
	});
	return questions;

}
function getReplaceStringData(data){
	var lines = data.split('\n');
        var newFileContent = "";
        var questionCnt = 0;

        if(lines.length>0)
        {
          var i =0;         
              while(i<lines.length)
              { 
                try
                {
                    var currLine = lines[i].trim(); // Remove leading and trailing spaces
                    currLine.replace(/\t+/g, ""); // Some questions starts with /t or tab character
                   
                    if(currLine.length>0)
                    {                      
                      // Check if the first character is digit like 1. OR 2.
                       if((!isNaN(currLine.charAt(0))) && (currLine.charAt(1)=='.'))
                       {
                          newFileContent += "\nQuestion:"+currLine.substring(2,currLine.length);
                          questionCnt++;
                       } // Check if the first character is digit like 11. OR 22.
                       else if((!isNaN(currLine.charAt(0))) && (!isNaN(currLine.charAt(1))) && (currLine.charAt(2)=='.'))
                       {
                          newFileContent += "\nQuestion:"+currLine.substring(3,currLine.length);
                          questionCnt++;
                       } // Check if the first character is digit like 111. OR 112.
                       else if((!isNaN(currLine.charAt(0))) && (!isNaN(currLine.charAt(1))) && (!isNaN(currLine.charAt(2))) && (currLine.charAt(3)=='.'))
                       {
                          newFileContent += "\nQuestion:"+currLine.substring(4,currLine.length);
                          questionCnt++;
                       }
                       else
                          newFileContent +=currLine;
                    }                      
                }                   
                catch(err)
                {
                    window.alert("Exception = "+err);  
                }
                i++;
              }
              return newFileContent;
          } // If ends       
}
angular.module('starter.controllers', ['ngCordova'])
.controller('HomeCtrl', function($scope,$state,$http,$ionicHistory){
	$scope.totalExam = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
	$scope.Exam = function(testNumber){
		exam = testNumber;
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
.controller('ReviewQuestionCtrl', function($scope,$state){
	$scope.questions = getDataQuestions();
	$scope.count = 1;
	$scope.reviewMode = true;
	$scope.QuestionNumber = questionNumbers[$scope.count-1]-1;
	$scope.expAns = false;
	$scope.showAnswerToggle  = {'flag':false};
	if(questionNumbers.length!==1){
		$scope.nextEnd = true;
	}
	$scope.changeQuestion = function(value){
		$scope.prevEnd = true;
		$scope.nextEnd = true;
		if(value === 'Next'){
			if($scope.count <= questionNumbers.length - 1 ){
				$scope.count = $scope.count + 1;
			}
			if(questionNumbers.length!==$scope.count){
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
		$scope.QuestionNumber = questionNumbers[$scope.count-1]-1;
	}
	$scope.showAnswer = function(){
		if( $scope.showAnswerToggle.flag == true){
			$scope.expAns = true;
		}else{
			$scope.expAns = false;
		}	
	}
})
.controller('ReviewCtrl', function($scope,$state){
	$scope.reviewMode = false;
	var reviewIds = [];
	if(window.localStorage.getItem("savedReviews")!==null){
		var object = JSON.parse(window.localStorage.getItem("savedReviews"));
		for(var i = 0; i < object.length; i++){
			if(reviewIds.length!==0){
				if(object[i].examId!==reviewIds[reviewIds.length-1]){
					reviewIds.push(object[i].examId);
				}
			}else{
				reviewIds.push(object[i].examId);
			}
		}
	}
	$scope.reviews = reviewIds;

	$scope.review = function(reviewId){
		questionNumbers = [];
		var reviews = window.localStorage.getItem('savedReviews');
		var k = JSON.parse(reviews);
		for(var  i = 0; i < k.length; i++){
			if(reviewId===k[i].examId){
				exam = k[i].examId;
				questionNumbers.push(k[i].qid);
			}
		}
		url = 'txt/QABank_Set'+exam+'.txt';
		$state.go('tab.saved');
	}

	
})
.controller('TestCtrl', function($scope,$state,$http,$ionicHistory,$rootScope,$ionicPopup){

	$scope.examNumber = exam;
	$rootScope.$ionicGoBack = function() {
		$ionicPopup.confirm({
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
	$scope.saveBtn = false;
	$scope.timer = true;
	$scope.timerTemplate = false;
	$scope.numberOfQuestions = 150;
	if($ionicHistory.viewHistory().views[$ionicHistory.viewHistory().backView.backViewId].stateId==='tab.settings'){
		$scope.questions = browsedQuestions;
	}else{
		$scope.questions = getDataQuestions();
	}
	
	$scope.count = 1;
	$scope.nextEnd = true;
	$scope.testResults = [];
	$scope.saveReviewQuestions = [];
	$scope.options = {};
	$scope.score = 0;
	$scope.showScoreCard = false;
	$scope.review = false;
	$scope.QuestionNumber = 0;
	$scope.expAns = false;
	$scope.showAnswerToggle  = {'flag':false};

	for(var i = 0; i < $scope.numberOfQuestions; i++){
		$scope.testResults.push({'Qid':i+1,'selected':0,'correct':0})
	}

	if($state.current.name==='tab.simulate'){
		$scope.saveBtn = true;
		$scope.simulateReview = true;
		$scope.setReviewId = true;
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
		if($scope.review || $scope.simulateReview){
			$scope.saveBtn = true;
		}
		$scope.setCurrentQuestion();
		$scope.showAnswerToggle.flag = false;
		$scope.options.choice = 0;
		$scope.expAns = false;
		$scope.acp_correct_answer_a = 'none';
		$scope.acp_correct_answer_b = 'none';
		$scope.acp_correct_answer_c = 'none';
		$scope.acp_correct_answer_d = 'none';
		if(value === 'Next'){
			if($scope.count <= $scope.questions.length - 1 ){
				$scope.count = $scope.count + 1;
			}
			if($scope.questions.length!==$scope.count){
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
		if($scope.testResults[$scope.count-1].Qid === $scope.count){
			$scope.testResults[$scope.count-1].selected = $scope.options.choice;
			$scope.testResults[$scope.count-1].correct = $scope.questions[$scope.QuestionNumber].ans.trim().toLowerCase();
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
		for(var i = 0; i < $scope.questions.length; i++){
			if($scope.testResults[i].selected!==0 && $scope.testResults[i].selected === $scope.testResults[i].correct.trim().toLowerCase()){
				$scope.score = $scope.score + 1;
			}
		}
		$scope.numberOfQuestions = $scope.questions.length;
		$scope.stopTimer();
	}
	$scope.reviewAnswers = function(){
		$scope.showScoreCard = false;
		$scope.testMode = true;
		$scope.review = true;
		$scope.setReviewId = true;
		$scope.saveBtn = true;
		$scope.count = 1;
		$scope.setCurrentQuestion();
		$scope.nextEnd = true;
		$scope.QuestionNumber = $scope.count - 1;
		$scope.showCorrectAnswer($scope.questions[$scope.count-1].ans.trim().toLowerCase());
		var reviewIds = [];
		if(window.localStorage.getItem("savedReviews")===null){
			reviewId = 1;
		}
	}
	$scope.showCorrectAnswer = function(option){
		if(option==='a'){
			$scope.acp_correct_answer_a = 'green';
		}else if(option==='b'){
			$scope.acp_correct_answer_b = 'green';
		}else if(option==='c'){
			$scope.acp_correct_answer_c = 'green';
		}else if(option==='d'){
			$scope.acp_correct_answer_d = 'green';
		}
	}
	$scope.showAnswer=function(){
		if( $scope.showAnswerToggle.flag == true){
			$scope.expAns = true;
		}else{
			$scope.expAns = false;
		}
	}

	$scope.saveReview = function(){
		$scope.saveBtn = false;
		var exist = false;
		var saveReviewQuestions = [];
		var reviewIds = [];
		// if($scope.setReviewId){
		// 	if(window.localStorage.getItem("savedReviews")!==null){
		// 		var object = JSON.parse(window.localStorage.getItem("savedReviews"));
		// 		for(var i = 0; i < object.length; i++){
		// 			if(reviewIds.length!==0){
		// 				if(object[i].reviewId!==reviewIds[reviewIds.length-1]){
		// 					reviewIds.push(object[i].reviewId);
		// 				}
		// 			}else{
		// 				reviewIds.push(object[i].reviewId);
		// 			}
		// 		}
		// 		reviewId  = reviewIds.length+1;
		// 	}
		// 	$scope.setReviewId = false;
		// }

		var question = {
			'examId':exam,
			'qid':$scope.questions[$scope.count-1].Qid
		}
		
		if(window.localStorage.getItem("savedReviews")!==null){
			var object = JSON.parse(window.localStorage.getItem("savedReviews"));
			for(var i = 0; i < object.length; i++){
				if(object[i].examId === exam && object[i].qid===$scope.questions[$scope.count-1].Qid){
					exist = true;
					break;
				}
			}
			if(!exist){
				object.push(question);
			}
			var b = JSON.stringify(object);
			window.localStorage.setItem("savedReviews",b );
		}else{
			saveReviewQuestions.push(question);
			var a = JSON.stringify(saveReviewQuestions);
			window.localStorage.setItem("savedReviews", a );
		}
		
	}
	$scope.$watch('options.choice',function(newValue, oldValue){
		if(angular.isDefined(newValue)){
			if(newValue !== oldValue){
				$scope.showAnswerToggle.flag = true;
	    		$scope.showAnswer();
	    	}
		}
    });
})
.controller('SettingsCtrl', function($scope,$state) {
	$scope.openFileDialog = function(){
		ionic.trigger('click', { target: document.getElementById('file') });
	}
    $scope.fileNameChanged = function(element) {
	 
	 	var reader = new FileReader();

		reader.onload = function(e) {
		      $scope.$apply(function() {
		          browsedQuestions = readSingleFile(reader.result);
		          exam = 'Browsed'
		          $state.go('tab.mode');
		      });
		};

		$scope.file = element.files[0];

    	reader.readAsText($scope.file);
	 	
	}
});
function readSingleFile(response) {
	var questions = [];
    var data = getReplaceStringData(response);
    var items = data.split('Question:');
	for(var i = 0; i < items.length-1; i++){
		var ans,explanation;
		if(items[i+1].split('A.')[1].split('B.')[1].split('C.')[1].split('D.')[1].split('Answer:')[1]===undefined){
			ans = ' '
			explanation = '';
		}else{
			ans = items[i+1].split('A.')[1].split('B.')[1].split('C.')[1].split('D.')[1].split('Answer:')[1].split('Explanation:')[0];
			explanation = items[i+1].split('A.')[1].split('B.')[1].split('C.')[1].split('D.')[1].split('Answer:')[1].split('Explanation:')[1];
		}
		var ques = {
			'Qid':i+1,
			'question':items[i+1].split('A.')[0],
			'options':{
				'a':items[i+1].split('A.')[1].split('B.')[0],
				'b':items[i+1].split('A.')[1].split('B.')[1].split('C.')[0],
				'c':items[i+1].split('A.')[1].split('B.')[1].split('C.')[1].split('D.')[0],
				'd':items[i+1].split('A.')[1].split('B.')[1].split('C.')[1].split('D.')[1].split('Answer:')[0]
			},
			'ans':ans,
			'explanation':explanation
		}
		questions.push(ques);
	}
	return questions
}
