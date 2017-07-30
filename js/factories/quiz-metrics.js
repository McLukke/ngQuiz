(function() {
  angular
    .module("turtleFacts")
    .factory("quizMetrics", QuizMetrics);

  function QuizMetrics() {
    var quizObj = {
      quizActive: false,
      toggleQuiz: toggleQuiz,
    };

    return quizObj;

    function toggleQuiz(state) {
      quizObj.quizActive = state;
      console.log('quizObj.quizActive: ', quizObj.quizActive);
    }
  }
})()
