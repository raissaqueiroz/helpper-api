const { Schema, model } = require('mongoose');

const ClienteSchema = new Schema({
	nome: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true,
	},
	cpf_cnpj: {
		type: Number,
		required: false,
	},
	telefone: {
		type: Number,
		required: false,
	},
	endereco: {
		pais: {
			type: String,
			required: true,
			default: 'Brasil',
		},
		cep: {
			type: Number,
			required: false,
		},
		estado: {
			type: String,
			required: false,
		},
		cidade: {
			type: String,
			required: false,
		},
		bairro: {
			type: String,
			required: false,
		},
		logradouro: {
			type: String,
			required: false,
		},
		numero: {
			type: Number,
			required: false,
		},
		complemento: {
			type: String,
			required: false,
		},
	},
	status: {
		type: Boolean,
		default: true
	}
});


module.exports = model('Cliente', ClienteSchema);
