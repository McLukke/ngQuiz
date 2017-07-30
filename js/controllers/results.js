(function() {
  angular
    .module("turtleFacts")
    .controller('resultsController', ResultsController);

  ResultsController.$inject = ['quizMetrics', 'dataService'];

  function ResultsController(quizMetrics, dataService) {
    var vm = this;

    vm.quizMetrics = quizMetrics;
    vm.dataService = dataService;
    vm.activeQuestion = 0;
    vm.getAnswerClass = getAnswerClass;
    vm.setActiveQuestion = setActiveQuestion;
    vm.calculatePerc = calculatePerc;
    vm.reset = reset;

    function getAnswerClass(index) {
      if (index === quizMetrics.correctAnswers[vm.activeQuestion]) {
        return 'bg-success';
      } else if (index === dataService.quizQuestions[vm.activeQuestion].selected) {
        return 'bg-danger';
      }
    }

    function setActiveQuestion(index) {
      vm.activeQuestion = index;
    }

    function calculatePerc() {
      return quizMetrics.numCorrect / dataService.quizQuestions.length * 100;
    }

    function reset() {
      quizMetrics.toggleQuiz('results', false);
      quizMetrics.numCorrect = 0;

      for(var i = 0; i < dataService.quizQuestions.length; i++) {
        var data = dataService.quizQuestions[i];

        data.seelcted = null;
        data.correct = null;
      }
    }
  }
})();
