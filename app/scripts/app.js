(function() {
    // Set Module App
    angular
        .module('App', [])
        .controller('AppControler', AppControler);

    function AppControler () {
        var vm = this;
        vm.name = 'Jacek';
        vm.surname = 'Polak';
    }
})();
