const { Schema, model } = require('mongoose');

const ClienteSchema = new Schema({
	name: {
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
	phone: {
		type: Number,
		required: false,
	},
	address: {
		country: {
			type: String,
			required: true,
			default: 'Brasil',
		},
		zip_code: {
			type: Number,
			required: true,
		},
		state: {
			type: String,
			required: false,
		},
		city: {
			type: String,
			required: false,
		},
		neighborhood: {
			type: String,
			required: false,
		},
		street: {
			type: String,
			required: false,
		},
		number: {
			type: Number,
			required: false,
		},
		complement: {
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
