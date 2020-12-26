const Yup = require('yup');
const Cliente = require('../models/Cliente');

class ClienteController {
	async index(req, res) {
		try {
			const response = await Cliente.find({ ...req.query });

			return res.json(response);
		} catch (err) {
			return res.status(400).json({ error: err.message });
		}
	}

	async show(req, res) {
		const { client_id } = req.params;

		const schema = Yup.object().shape({
			client_id: Yup.string(),
		});

		if (!(await schema.isValid({ client_id })))
			return res.status(400).json({
				error:
					'Falha na validação. O corpo da requisição não está correto.',
			});

		try {
			const response = await Cliente.findOne({
				_id: client_id,
				...req.query,
			});

			return res.json(response);
		} catch (err) {
			return res
				.status(400)
				.json({ error: err.message });
		}
	}

	async store(req, res) {
		const schema = Yup.object().shape({
			name: Yup.string().required(),
			email: Yup.string().email().required(),
			phone: Yup.number(),
			cpf_cnpj: Yup.number(),
			address:  Yup.object().shape({
				country: Yup.string(),
				zip_code: Yup.number().required(),
				state: Yup.string(),
				city: Yup.string(),
				neighborhood: Yup.string(),
				street: Yup.string(),
				number: Yup.number(),
				complement: Yup.string(),
			}),
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
		const { client_id } = req.params;

		const schema = Yup.object().shape({
			name: Yup.string(),
			email: Yup.string().email(),
			phone: Yup.number(),
			cpf_cnpj: Yup.number(),
			address:  Yup.object().shape({
				country: Yup.string(),
				zip_code: Yup.number(),
				state: Yup.string(),
				city: Yup.string(),
				neighborhood: Yup.string(),
				street: Yup.string(),
				number: Yup.number(),
				complement: Yup.string(),
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

			if (clienteExiste && String(clienteExiste._id) !== client_id)
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

		try {
			await Cliente.findByIdAndDelete(client_id);

			return res.json({ message: 'Cliente Excluído com Sucesso.' });
		} catch(err){
			return res.json({ error: err.message })
		}
	}
}

module.exports = new ClienteController();
