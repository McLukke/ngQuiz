(function() {
  angular
    .module("turtleFacts")
    .controller("quizController", QuizController);

  QuizController.$inject = ['quizMetrics'];

  function QuizController(quizMetrics) {
    var vm = this;

    vm.quizMetrics = quizMetrics;
  }


})()
