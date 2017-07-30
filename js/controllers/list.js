(function(){
  angular
    .module("turtleFacts")
    .controller("listController", ListController);

  ListController.$inject = ['quizMetrics', 'dataService'];

  function ListController(quizMetrics, dataService) {
    var vm = this;

    vm.quizMetrics = quizMetrics;
    vm.data = dataService.turtlesData;
    vm.activeTurtle = {};
    vm.changeActiveTurtle = changeActiveTurtle;
    vm.search = "";
    vm.activateQuiz = activateQuiz;

    function changeActiveTurtle(index) {
      vm.activeTurtle = index;
    }

    function activateQuiz() {
      quizMetrics.toggleQuiz(true);
    }
  }
})();
