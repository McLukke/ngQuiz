(function() {
  angular
    .module("turtleFacts")
    .controller("quizController", QuizController);

  QuizController.$inject = ['quizMetrics', 'dataService'];

  function QuizController(quizMetrics, dataService) {
    var vm = this;

    vm.quizMetrics = quizMetrics;
    vm.dataService = dataService;
    vm.activeQuestion = 0;
    vm.questionAnswered = questionAnswered;
    vm.setActiveQuestion = setActiveQuestion;
    vm.selectAnswer = selectAnswer;
    vm.error = false;
    vm.finalize = false;
    vm.finalizeAnswers = finalizeAnswers;

    var numQuestionsAnswered = 0;

    function questionAnswered() {
      var quizLength = dataService.quizQuestions.length;

      if (dataService.quizQuestions[vm.activeQuestion].selected !== null) {
        numQuestionsAnswered++;
        if (numQuestionsAnswered >= quizLength) {
          // finalize quiz
          for(var i = 0; i<quizLength; i++) {
            if (dataService.quizQuestions[i].selected === null) {
              setActiveQuestion(i);
              return;
            }
          }

          vm.error = false;
          vm.finalize = true;
          return;
        }
      }

      vm.setActiveQuestion();
    }

    function setActiveQuestion(index) {
      if (index === undefined) {
        var breakOut = false;
        var quizLength = dataService.quizQuestions.length - 1;

        while(!breakOut) {
          if (vm.activeQuestion < quizLength) {
            vm.activeQuestion = ++vm.activeQuestion;
          } else {
            vm.activeQuestion = 0;
            vm.error = true;
          }

          if (dataService.quizQuestions[vm.activeQuestion].selected === null) {
            breakOut = true;
          }
        }
      } else {
        vm.activeQuestion = index;
      }
    }

    function selectAnswer(index) {
      dataService.quizQuestions[vm.activeQuestion].selected = index;
    }

    function finalizeAnswers() {
      vm.finalize = false;
      numQuestionsAnswered = 0;
      vm.activeQuestion = 0;
      quizMetrics.markQuiz();
      quizMetrics.toggleQuiz('quiz', false);
      quizMetrics.toggleQuiz('results', true);
    }
  }
})();
