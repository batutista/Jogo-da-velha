angular.module("jogoApp", [])
  .controller('jogoController', function() {
    var vm = this;

    vm.teste = 0;


    /* ***************    FUNÇÕES EXECUTADAS NA VIEW (HMTL)    **************** */
    vm.jogou = jogou;
    vm.inserirImagem = inserirImagem;


    function jogou($event){
      console.log("ID do elemento: " + $event.target.id);
    }


    function inserirImagem(evento){
      var img_element = angular.element('<img src="img/xis.png">')

      angular.element(document.getElementById(evento.target.id)).append(img_element);
    }


    /* ***************    FUNÇÕES INTERNAS    **************** */
    

  });
