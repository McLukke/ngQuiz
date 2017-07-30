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

    function questionAnswered() {
      
    }
  }


})();
