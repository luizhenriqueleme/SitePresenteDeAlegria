$(document).ready(function(){
	FaleConosco.inicializarPagina();
});

var FaleConosco = {

	inicializarPagina : function() {
		this.ocultarCamposOutros();
		this.adicionarEventosAosComponentes();
	},

	ocultarCamposOutros : function() {
		$('#txtinteresse').hide();
		$('#txtlocalizacao').hide();
		$('#txtconheceu').hide();

		$('#lblinteresse').hide();
		$('#lbllocalizacao').hide();
		$('#lblconheceu').hide();

	},

	adicionarEventosAosComponentes : function() {
		$('#txttelefone').on('keypress', this.eventoValidarEntradaTelefone);
		$('#cmbinteresse').change(this.eventoSelecionarInteresse);
		$('#cmblocalizacao').change(this.eventoSelecionarLocalizacao);
		$('#cmbconheceu').change(this.eventoSelecionarConheceu);
		
	},

	eventoValidarEntradaTelefone : function(event) {
		if (!(event.keyCode >= 48 && event.keyCode <= 57)) {
			return false;
		}
	},

	eventoSelecionarInteresse : function(event) {
		var opcaoSelecionada = $('#cmbinteresse option:selected').val();
		if (opcaoSelecionada == 'OUTROS') {
			$('#lblinteresse').show();
			$('#txtinteresse').show();
		} else {
			$('#lblinteresse').hide();
			$('#txtinteresse').hide();
		}

	},

	eventoSelecionarLocalizacao : function(event) {
		var opcaoSelecionada = $('#cmblocalizacao option:selected').val();
		if (opcaoSelecionada == 'OUTROS') {
			$('#lbllocalizacao').show();
			$('#txtlocalizacao').show();
		} else {
			$('#lbllocalizacao').hide();
			$('#txtlocalizacao').hide();
		}

	},

	eventoSelecionarConheceu : function(event) {
		var opcaoSelecionada = $('#cmbconheceu option:selected').val();
		if (opcaoSelecionada == 'OUTROS') {
			$('#lblconheceu').show();
			$('#txtconheceu').show();
		} else {
			$('#lblconheceu').hide();
			$('#txtconheceu').hide();
		}

	},	

	
}