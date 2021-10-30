var data = {};

var form_is_array = {
	'fpessoal': false,
	'fensino': true,
	'forientacao': true,
	'fprojeto': true,
	'fextensao': true,
	'fadmin': true,
	'fprodutos': true,
	'fafasta': true,
	'facademia': true,
};

var orienta_nivel = ['Graduação', 'Mestrado', 'Doutorado', 'Especialização', 'Aperfeiçoamento', 'Residência Médica', 'Mestrado Profissionalizante', 'Residência multi-profissional', 'Fundamental e Médio', 'Outros'];
var tipo_afasta = ['Aposentadoria', 'Cargo eletivo', 'Disposição com ônus', 'Disposição com ônus limitado', 'Disposição sem ônus', 'Exclusão', 'Licença capacitação', 'Licença interesse particular', 'Licença maternidade', 'Licença médica', 'Licença prêmio', 'Pós-graduação', 'Outros'];

var form_fields = {
	'fensino': [
		{name: 'disciplina', label: 'Componente Curricular', width: 600, type: 'select', required: true, jsvalues: disciplinas, getvalue: get_disciplina},
		{name: 'nivel', label: 'Nível', width: 0, type: 'select', required: true, values: ['Graduação', 'Pós-graduação']},
		{name: 'ano', label: 'Ano', width: 80, type: 'number', required: true, min: 2000, max: 2100},
		{name: 'semestre', label: 'Semestre', width: 0, type: 'select', required: true, values: ['1', '2', 'Inverno', 'Verão']},
		{name: 'turma', label: 'Turma/Subturma', width: 100, type: 'text', required: true},
		{name: 'chd', label: 'CH Docente', width: 120, type: 'number', required: true, min: 0, max: 96},
		{name: 'conjugada', label: 'Conjugada', width: 10, type: 'checkbox'},
		{name: 'pontos', label: 'Pontos*', width: 10, getvalue: get_pontos_ensino, fhidden: true},
	],

	'forientacao': [
		{name: 'tabela', label: 'Tabela', width: 600, type: 'select', required: true, jsvalues: tab_orientacao, getvalue: get_tabela},
		{name: 'matricula', label: 'Matrícula', width: 200, type: 'text', required: true},
		{name: 'nome', label: 'Orientando', width: 600, type: 'text', required: true},
		{name: 'nivel', label: 'Nível', width: 0, type: 'select', values: orienta_nivel},
		{name: 'curso', label: 'Curso', width: 400, type: 'text', required: true},
		{name: 'universidade', label: 'Universidade', width: 600, type: 'text'},
		{name: 'titulotrabalho', label: 'Título', width: 600, type: 'text', required: true},
		{name: 'inicio', label: 'Início', width: 160, type: 'date', required: true, onchange: 'valid_termino_orienta()'},
		{name: 'termino', label: 'Término', width: 160, type: 'date', required: true},
		{name: 'tipoorientacao', label: 'Tipo', width: 0, type: 'select', values: ['Presencial', 'EaD', 'Semi-presencial'], required: true},
		{name: 'pontos', label: 'Pontos*', width: 10, getvalue: get_pontos_tabela, fhidden: true},
	],

	'fprojeto': [
		{name: 'tabela', label: 'Tabela', width: 600, type: 'select', required: true, jsvalues: tab_projeto, getvalue: get_tabela},
		{name: 'codigo', label: 'Código', width: 200, type: 'text'},
		{name: 'titulo', label: 'Título', width: 600, type: 'text', required: true},
		{name: 'inicio', label: 'Início', width: 170, type: 'date', required: true, onchange: 'valid_termino_projeto()'},
		{name: 'termino', label: 'Término', width: 170, type: 'date', required: true},
		{name: 'pontos', label: 'Pontos*', width: 10, getvalue: get_pontos_tabela, fhidden: true},
	],

	'fextensao': [
		{name: 'tabela', label: 'Tabela', width: 600, type: 'select', required: true, jsvalues: tab_extensao, getvalue: get_tabela},
		{name: 'descricao', label: 'Descrição da atividade', width: 600, type: 'text', required: true},
		{name: 'clientela', label: 'Descrição da clientela', width: 600, type: 'text', required: true},
		{name: 'inicio', label: 'Início', width: 170, type: 'date', required: true, onchange: 'valid_termino_extensao()'},
		{name: 'termino', label: 'Término', width: 170, type: 'date', required: true},
		{name: 'pontos', label: 'Pontos*', width: 10, getvalue: get_pontos_tabela, fhidden: true},
	],


	'facademia': [
		{name: 'tabela', label: 'Tabela', width: 600, type: 'select', required: true, jsvalues: tab_academia, getvalue: get_tabela},
		{name: 'inicio', label: 'Início', width: 170, type: 'date', required: true, onchange: 'valid_termino_academia()'},
		{name: 'termino', label: 'Término', width: 170, type: 'date', required: true},
		{name: 'descricao', label: 'Descrição da atividade', width: 600, type: 'text', required: true},
		{name: 'clientela', label: 'Descrição da clientela', width: 600, type: 'text', required: false},
		{name: 'pontos', label: 'Pontos*', width: 10, getvalue: get_pontos_tabela, fhidden: true},
	],

	'fadmin': [
		{name: 'tabela', label: 'Tabela', width: 600, type: 'select', required: true, jsvalues: tab_admin, getvalue: get_tabela},
		{name: 'inicio', label: 'Início', width: 170, type: 'date', required: true, onchange: 'valid_termino_admin()', default: get_jan_1},
		{name: 'termino', label: 'Término', width: 170, type: 'date', required: true, default: get_dez_31},
		{name: 'portaria', label: 'Portaria', width: 150, type: 'text', required: true},
		{name: 'orgaoemissor', label: 'Órgão emissor', width: 300, type: 'text', required: true},
		{name: 'orgaoservido', label: 'Órgão servido', width: 300, type: 'text', required: true},
		{name: 'descricao', label: 'Descrição', width: 600, type: 'text', required: false},
		{name: 'pontos', label: 'Pontos*', width: 10, getvalue: get_pontos_tabela, fhidden: true},
	],

	'fafasta': [
		{name: 'motivo', label: 'Motivo', width: 0, type: 'select', required: true, values: tipo_afasta},	
		{name: 'processo', label: 'Processo', width: 200, type: 'text', required: true},
		{name: 'inicio', label: 'Início', width: 170, type: 'date', required: true, onchange: 'valid_termino_afasta()'},
		{name: 'termino', label: 'Término', width: 170, type: 'date', required: true},
		{name: 'descricao', label: 'Descrição', width: 600, type: 'text', required: true},
	],

	'fprodutos': [
		{name: 'tabela', label: 'Tabela', width: 600, type: 'select', required: true, jsvalues: tab_producao, getvalue: get_tabela},
		{name: 'titulo', label: 'Título', width: 600, type: 'text', required: true},
		{name: 'autoria', label: 'Autoria', width: 0, type: 'select', values: ['Primeiro autor', 'Co-autor'], required: true},
		{name: 'projeto', label: 'Projeto associado', width: 600, type: 'text', required: false},
		{name: 'veiculo', label: 'Veiculação', width: 400, type: 'text', required: true},
		{name: 'local', label: 'Local', width: 200, type: 'text', required: true},
		{name: 'data', label: 'Data', width: 170, type: 'date', required: true},
		{name: 'ano', label: 'Ano de publicação', width: 120, type: 'number', required: true, min: 2000, max: 2100},
		{name: 'pinicial', label: 'Página inicial', width: 150, type: 'number', onchange: 'valid_pfinal_produto()'},
		{name: 'pfinal', label: 'Página final', width: 150, type: 'number'},
		{name: 'patente', label: 'Patente', width: 100, type: 'text'},
		{name: 'editora', label: 'Editora', width: 300, type: 'text'},
		{name: 'pontos', label: 'Pontos*', width: 10, getvalue: get_pontos_tabela, fhidden: true},
	]
}

function build_edit_form(form, div) {
	var newform = $('<form class="saveform" autocomplete="on" style="display: none" id="' + form +'"></form>');
	newform.append('<input type="hidden" name=id>');

	$(form_fields[form]).each(function() {
		var newinput = '<div class="wrapper">';
		if (this.fhidden)
			return;

		if (this.type == 'select') {
			newinput += '<select name="' + this.name + '" id="' + form + '_' + this.name + '"';
			if (this.required)
				newinput += ' required';
			newinput += '>';

			if (this.values) {
				this.values.forEach(function(e) {
					newinput += '<option value="' + e + '">' + e + '</option>';
				});
			}
			newinput += '</select>';
		} else {
			newinput += '<input type="' + this.type + '" name="' + this.name +
					    '" style="width: ' + this.width + 'px" id="' + form + '_' + this.name + '"';

			if (this.required)
				newinput += ' required';
			if (this.min != undefined)
				newinput += ' min="' + this.min + '"';
			if (this.max != undefined)
				newinput += ' max="' + this.max + '"';
			if (this.onchange)
				newinput += ' onchange="' + this.onchange + '"';
			if (this.default)
				newinput += ' value="' + this.default() + '"';

			newinput += '>';
		}
		
		if (this.type == 'checkbox')
			newinput += '<label for="' + form + '_' + this.name + '">' + this.label + '</label>';
		else
			newinput += '<span class="placeholderlabel">' + this.label + '</span></div>';

		newform.append(newinput);
	});

	newform.append('<br><input type="button" value="Salvar" onclick="save_form(\'' + form + '\');">');
	newform.append('<input type="button" value="Cancelar" onclick="cancel_form(\'' + form + '\');">');
	$('#' + div)
		.append(newform)
		.append('<table id="table_' + form + '"></table>');

	// select2
	$(form_fields[form]).each(function() {
		if (this.type == 'select' && this.jsvalues) {
		    $('#' + form + '_' + this.name).select2({
	    		placeholder: this.placeholder,
	    		allowClear: !this.required,
				data: this.jsvalues,
				dropdownAutoWidth : true,
				width: this.width + 'px'
			}).on('select2:open', search_here)
			  .on('change', change_required_border);
		}
	});
}

function get_jan_1() {
	var d = new Date(new Date().getFullYear(), 0, 1);
	return d.toISOString().split('T')[0];
}

function get_dez_31() {
	var d = new Date(new Date().getFullYear(), 11, 31);
	return d.toISOString().split('T')[0];
}

function valid_termino_orienta(e) {
	$('#forientacao_termino').attr('min', $('#forientacao_inicio').val());
}

function valid_termino_projeto(e) {
	$('#fprojeto_termino').attr('min', $('#fprojeto_inicio').val());
}

function valid_termino_extensao(e) {
	$('#fextensao_termino').attr('min', $('#fextensao_inicio').val());
}

function valid_termino_admin(e) {
	$('#fadmin_termino').attr('min', $('#fadmin_inicio').val());
}

function valid_termino_afasta(e) {
	$('#fafasta_termino').attr('min', $('#fafasta_inicio').val());
}

function valid_termino_academia(e) {
	$('#facademia_termino').attr('min', $('#facademia_inicio').val());
}

function valid_pfinal_produto(e) {
}

function load_data() {
	var datastr = localStorage.getItem('data');
	if (datastr)
		data = JSON.parse(datastr);
	
	$('.saveform').each(function() {
		form = $(this).attr('id');
		if (form_is_array[form])
			draw_table(form)
		else {
			$('#' + form + ' *').filter(':input').each(function(){
				field = $(this);
				fieldname = field.attr('name');
				if (fieldname && data[form] && data[form][fieldname])
					field.val(data[form][fieldname]);
			});
		}
	});
		
}

function load_form_data(form, id) {
	var df = data[form][id];
	$('#' + form + ' *').filter(':input').each(function(){
		field = $(this);
		fieldname = field.attr('name');
		if (fieldname && df[fieldname]) {
			field.val(df[fieldname]);
			field.trigger('change');
		}
	});
}

function save_form_data(form) {
	var fdata = {};
	$('#' + form + ' *').filter(':input').each(function(){
		field = $(this);
		fieldname = field.attr('name');
		if (field.attr('type') == 'checkbox')
			fdata[fieldname] = field[0].checked ? 'Sim' : 'Não';
		else
			fdata[fieldname] = field.val();
	});

	if (form_is_array[form]) {
		if (!data[form])
			data[form] = [];

		if (fdata['id'] == '') // insertion
			fdata['id'] = String(data[form].length);

		data[form][fdata['id']] = fdata;
	} else {
		data[form] = fdata;
	}
}

function get_disciplina(form, data, code) {
	var result = disciplinas.find(x => x.id === code);
	return result.text;
}

function get_tabela(form, data, code) {
	var tabela = form_fields[form].find(x => x.name === 'tabela');
	if (tabela && tabela.jsvalues) {
		var item = tabela.jsvalues.find(x => x.id === code);
		if (item)
			return item.text;
	}
	return 'Tabela inválida.';
}

function get_pontos_ensino(form, data, oldpoints) {
	var result = disciplinas.find(x => x.id === data['disciplina']);
	var ch = Math.min(result.ch, data['chd']);
	return ch / 32 * 10;
}

function get_pontos_tabela(form, data, oldpoints) {
	var tabela = form_fields[form].find(x => x.name == 'tabela');
	if (tabela && tabela.jsvalues) {
		var item = tabela.jsvalues.find(x => x.id === data['tabela']);
		if (item)
			return item.pontos;
	}
	return 0;
}

function new_form(form) {
	$('#' + form)[0].reset();
	$('#' + form + '_id').val('');
	$('#' + form + ' *').filter(':input').each(function(){
		field = $(this);
		field.trigger('change');
	});

	$('#'+form).show();	
}

function cancel_form(form) {
	$('#'+form)[0].reset();
	$('#'+form).hide();
}

function save_form(form) {
	var formok = true;
	$('#' + form + ' *').filter(':input').each(function(){	
		formok = formok && this.reportValidity();
	});
	if (formok) {
		save_form_data(form);
		draw_table(form);
		$('#'+form).hide();
		save_all_data();
	}
}

function draw_table(form) {

	var table = $('#table_' + form);
	table.empty();

	if (!data[form] || data[form].length == 0) {
		table.append('<tr><td>Nenhum registro informado.');
		return;
	}

	// Header
	var header = '<thead><tr><th class="acoes noprint">';

	form_fields[form].forEach(function(e) {
		if (e['name'] != 'tabela') {
			if (e['name'] == 'pontos')
				header += '<th class="noprint">';
			else
				header += '<th>';
			header += e['label'];
		}
	});
	header += '</tr></thead>';
	table.append(header);

	// Rows
	table.append('<tbody>');

	var oddrow = false;
	var field_tabela = form_fields[form].find(x => x.name == 'tabela');
	var tem_tabela = field_tabela ? true : false;

	data[form].forEach(function(data) {
		tr_prefix = '<tr' + (oddrow ? ' class="odd"' : '') + '>';
		row = tr_prefix + '<td rowspan=' + (tem_tabela ? 2 : 1) + ' class="noprint">' +
			'<span onclick="edit_row(\'' + form + '\', \'' + data['id'] + '\');"><i class="fa fa-lg fa-pencil" title="Editar linha"></i></span>' +
			'<span onclick="delete_row(\'' + form + '\', \'' + data['id'] + '\');"><i class="fa fa-lg fa-trash-o" title="Excluir linha"></i></span>';


		if (tem_tabela) {
			row += '<td colspan=1000>' + field_tabela.getvalue(form, data, data['tabela']) + '</td></tr>' + tr_prefix;
		}

		form_fields[form].forEach(function(field) {
			if (field.name == 'tabela')
				return;

			var classes = 'class="';
			classes += (field.width > 400 ? ' large ' : '');
			classes += (field.name == 'pontos' ? ' noprint ' : '');
			td_prefix = '<td ' + classes + '">';

			if (field.getvalue)
				row += td_prefix + field.getvalue(form, data, data[field.name])
			else {
				if (field.type == 'date')
					row += td_prefix + (new Intl.DateTimeFormat('pt-BR')).format(new Date(data[field.name]+'T00:00'))
				else
					row += td_prefix + data[field.name]
			}
		});
		table.append(row);
		oddrow = !oddrow;
	});

}

function edit_row(form, id) {
	load_form_data(form, id);
	$('#'+form).show();
	$('#'+form + ' :input:enabled:visible:first').focus();	
}

function delete_row(form, id) {
	if (confirm("Confirma a exclusão da linha?")) {
		data[form].splice(id, 1);
		draw_table(form);		
	}
}

function clear_all_data() {
	if (confirm("Limpar todos os dados? Não é possível recuperar.")) {
		data = {};
		localStorage.removeItem('data');
		document.location.reload(true);
	}
}

function save_all_data() {
	$('.saveform').each(function() {
		form = $(this).attr('id');
		if (!form_is_array[form])
			save_form_data(form);
	});

	localStorage.setItem('data', JSON.stringify(data));
}

function search_here(e) {
	$('.select2-search__field').attr('placeholder', 'Digite aqui para pesquisar');
}

function change_required_border(evt) {
	if ($(evt.target).attr('required')) {
		select2name = '#select2-' + evt.target.id + '-container';
		if ($(evt.target).val() == '')
			$(select2name).parent().addClass('invalid');
		else
			$(select2name).parent().removeClass('invalid');
	}
}


$(document).ready(function() {
	build_edit_form('fensino', 'divensino');
	build_edit_form('forientacao', 'divorienta');
	build_edit_form('fprojeto', 'divprojeto');	
	build_edit_form('fextensao', 'divextensao');	
	build_edit_form('facademia', 'divacademia');	
	build_edit_form('fadmin', 'divadmin');
	build_edit_form('fprodutos', 'divprodutos');
	build_edit_form('fafasta', 'divafasta');

	load_data();
});

