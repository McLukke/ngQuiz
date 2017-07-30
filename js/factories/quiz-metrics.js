(function() {
  angular
    .module("turtleFacts")
    .factory("quizMetrics", QuizMetrics);

  function QuizMetrics() {
    var quizObj = {
      quizActive: false,
      toggleQuiz: toggleQuiz,
    };

    function toggleQuiz(state) {
      quizObj.quizActive = state;
    }

    return quizObj;
  }
})()
