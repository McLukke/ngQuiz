(function() {
  angular
    .module("turtleFacts")
    .factory("quizMetrics", QuizMetrics);

  function QuizMetrics() {
    var quizObj = {
      quizActive: false,
    };
  }
})()
