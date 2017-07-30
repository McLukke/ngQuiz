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

    var numQuestionsAnswered = 0;

    function questionAnswered() {
      var quizLength = dataService.quizQuestions.length;

      if (dataService.quizQuestions[vm.activeQuestion].selected !== null) {
        numQuestionsAnswered++;
        if (numQuestionsAnswered >= quizLength) {
          // finalize quiz
        }
      }

      vm.setActiveQuestion();
    }

    function setActiveQuestion() {
      var breakOut = false;
      var quizLength = dataService.quizQuestions.length - 1;

      while(!breakOut) {
        if (vm.activeQuestion < quizLength) {
          vm.activeQuestion = ++vm.activeQuestion;
        } else {
          vm.activeQuestion = 0;
        }
        console.log('vm.activeQuestion: ', vm.activeQuestion);

        if (dataService.quizQuestions[vm.activeQuestion].selected === null) {
          breakOut = true;
        }
      }
    }
  }
})();
