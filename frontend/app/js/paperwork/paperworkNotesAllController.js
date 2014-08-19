paperworkModule.controller('paperworkNotesAllController', function($scope, $rootScope, $location, $routeParams, paperworkNotesService) {
    if(typeof $routeParams == "undefined" || $routeParams == {} || typeof $routeParams.notebookId == "undefined") {
      return;
      $rootScope.notebookSelectedId = 0;
    } else {
      $rootScope.notebookSelectedId = parseInt($routeParams.notebookId);
    }
    paperworkNotesService.getNotesInNotebook($rootScope.getNotebookSelectedId(), function() {
      // $rootScope.setNoteSelectedId($rootScope.getNotebookSelectedId(), $rootScope.notes[0].id);
      $location.path("/n/" + $scope.notebookSelectedId + "/" + $rootScope.notes[0].id);
    });
    // $rootScope.navbarMainMenu = true;
    // $rootScope.navbarSearchForm = true;
    // $rootScope.expandedNoteLayout = false;

    // ---
    // $rootScope.note = null; // TODO: Do we still need this?

    // $location.path("/notebook/" + $scope.notebookSelectedId + "/note/" + $rootScope.notes[0].id);
});