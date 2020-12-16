const bcrypt = require('bcryptjs');
const Yup = require('yup');
const Cliente = require('../models/Cliente');

class ClienteController {
	async index(req, res) {
		try {
			const response = await Cliente.find({ ...req.query });

			return res.json(response);
		} catch (error) {
			return res.status(400).json({ error: 'Erro ao listar usuários. ' });
		}
	}

	async show(req, res) {
		const { cliente_id } = req.params;

		const schema = Yup.object().shape({
			user_id: Yup.string(),
		});

		if (!(await schema.isValid({ cliente_id })))
			return res.status(400).json({
				error:
					'Falha na validação. O corpo da requisição não está correto.',
			});

		try {
			const response = await Cliente.findOne({
				_id: user_id,
				...req.query,
			});

			return res.json(response);
		} catch (error) {
			return res
				.status(400)
				.json({ error: 'Erro ao exibir informações de usuário. ' });
		}
	}

	async store(req, res) {
		const schema = Yup.object().shape({
			nome: Yup.string().required(),
			email: Yup.string().email().required(),
			telefone: Yup.number(),
			cpf_cnpj: Yup.number(),
			endereco: Yup.object().shape({
				pais: Yup.string(),
				cep: Yup.number().required(),
				estado: Yup.string().required(),
				cidade: Yup.string().required(),
				bairro: Yup.string().required(),
				logradouro: Yup.string().required(),
				numero: Yup.number().required(),
				complemento: Yup.string(),
			}),
			status: Yup.boolean(),
		});

		if (!(await schema.isValid(req.body)))
			return res.status(400).json({
				error:
					'Falha na validação. O corpo da requisição não está correto.',
			});



		try {
			const clienteExiste = await Cliente.findOne({ email: req.body.email });

			if (clienteExiste)
				return res.status(400).json({ error: 'Esse E-mail já foi vinculado à outro cliente.' });

			const response = await Cliente.create(req.body);

			return res.json(response);
		} catch(err){
			return res.json({ error: err.message })
		}

	}

	async update(req, res) {
		const { user_id } = req.params;

		const schema = Yup.object().shape({
			nome: Yup.string(),
			email: Yup.string().email(),
			telefone: Yup.number(),
			cpf_cnpj: Yup.number(),
			endereco: Yup.object().shape({
				pais: Yup.string(),
				cep: Yup.number(),
				estado: Yup.string(),
				cidade: Yup.string(),
				bairro: Yup.string(),
				logradouro: Yup.string(),
				numero: Yup.number(),
				complemento: Yup.string(),
				comprovante: Yup.string(),
			}),
			status: Yup.boolean(),
			client_id: Yup.string()
		});

		if (!(await schema.isValid({ ...req.body, client_id })))
			return res.status(400).json({
				error:
					'Falha na validação. O corpo da requisição não está correto.',
			});

		// Validando se esse e-mail não pertence a outro usuário
		if (req.body.email) {
			const clienteExiste = await Cliente.findOne({
				email: req.body.email,
			});

			if (clienteExiste && String(clienteExiste._id) !== String(client_id))
				return res.status(400).json({
					error: 'Esse e-mail já pertence a outro cliente.',
				});
		}

		try {
			const clienteExiste = await Cliente.findOne({ email: req.body.email });

			if (clienteExiste)
				return res.status(400).json({ error: 'Esse E-mail já foi vinculado à outro cliente.' });

				const response = await Cliente.findOneAndUpdate(
					{ _id: client_id },
					req.body,
					{ new: true }
				);
			return res.json(response);
		} catch(err){
			return res.json({ error: err.message })
		}
	}

	async destroy(req, res) {
		const { client_id } = req.params;

		const response = await Cliente.findById(client_id);

		if (!response)
			return res.status(400).json({ error: 'Cliente não existe. ' });

		await Cliente.findByIdAndDelete(client_id);

		return res.json({ message: 'Cliente excluído com sucesso.' });
	}
}

module.exports = new ClienteController();
