(function() {
  angular
    .module("turtleFacts")
    .factory("quizMetrics", QuizMetrics);

  function QuizMetrics() {
    var quizObj = {
      quizActive: false,
      toggleQuiz: toggleQuiz,
      resultsActive: false,
    };

    function toggleQuiz(metric, state) {
      if (metric === 'quiz') {
        quizObj.quizActive = state;
      } else if (metric === 'results') {
        quizObj.resultsActive = state;
      } else {
        return false;
      }
    }

    return quizObj;
  }
})();
