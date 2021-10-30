import { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import InputAdornment from '@material-ui/core/InputAdornment'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useHistory, useParams } from 'react-router-dom'
import ConfirmDialog from '../Components/ConfirmDialog'
import Select from '@material-ui/core/Select'
import { InputLabel } from '@mui/material'


const useStyles = makeStyles(() => ({
	form: {
		maxWidth: '100%',
		margin: '0 auto',
		display: 'flex',
		justifyContent: 'space-around',
		flexWrap: 'wrap',
		'& .MuiFormControl-root': {
			minWidth: '200px',
			maxWidth: '500px',
			marginBottom: '24px',
		}
	},
	toolbar: {
		marginTop: '36px',
		width: '100%',
		display: 'flex',
		justifyContent: 'space-around'
	},
	checkbox: {
		alignItems: 'center'
	}
}))


export default function KarangosForm() {
	const classes = useStyles()

	const [title, setTitle] = useState('Cadastrar Novo Colaborador')

	const history = useHistory()
	const params = useParams()

	const [setores, setSetores] = useState()

	const [form, setForm] = useState({})

	useEffect(async () => {
		// Verifica se tem o parâmetro id na rota. Se tiver, temos que buscar
		// os dados do registro no back-end para edição
		if (params.id) {
			setTitle('Editando Colaborador')
			//console.log(params.id)
			getData(params.id)
		}

		let { data } = await axios.get('http://localhost:3333/Setor')
		setSetores(data)
		console.log('data :>> ', data);
	}, [])

	async function getData(id) {
		try {
			let { data } = await axios.get(`http://localhost:3333/Colaborador/${id}`)
			// Tratar Dados:

			data.idSetor = data.fkSetor.id
			data.dsSetor = data.fkSetor.dsSetor
			delete data.fkSetor

			setForm({ ...data })
		}
		catch (error) {
			console.log('deu pau no getData :>>')
		}
	}

	async function saveData() {
		try {
			// Se o registro já existe (edição, verbo HTTP PUT)
			/* if (params.id) await axios.put(`https://api.faustocintra.com.br/karangos/${params.id}`, karango) */
			// Registro não existe, cria um novo (verbo HTTP POST)
			/* else await axios.post('https://api.faustocintra.com.br/karangos', karango) */
		}
		catch (error) {
			console.log('deu pau no salvamento :>>')
		}
	}

	function handleSubmit(event) {
		event.preventDefault() // Evita o recarregamento da página
		saveData()
	}

	return (
		<>
			{form &&
				<>
					{console.log(form)}
					<h1>{title}</h1>
					<form className={classes.form} onSubmit={handleSubmit}>

						<TextField
							id="dsColaborador"
							label="Colaborador"
							variant="filled"
							value={form.dsColaborador}
							onChange={({ target }) =>
								setForm({
									...form, dsColaborador: target.value
								})}
							fullWidth
							required
						/>

						<TextField
							id="dsEmail"
							label="Email"
							value={form.dsEmail}
							onChange={({ target }) =>
								setForm({
									...form, dsEmail: target.value
								})}
							variant="filled"
							fullWidth
							required
						/>

						<FormControl className={classes.checkbox} fullWidth>
							<FormControlLabel
								control={<Checkbox id="stAtivo" />}
								label="Colaborador Ativo?"
							/>
						</FormControl>

						<FormControl>
							<InputLabel>Setor</InputLabel>
							<Select onChange={({ target }) =>
								setForm({ ...form, dsSetor: target.value })}
								value={setores && 2} id={form.dsSetor}
							>
								{setores &&
									setores.map(({ id, dsSetor }, i) => (
										<MenuItem key={i} value={id}>{dsSetor}</MenuItem>
									))}
							</Select>
						</FormControl>

						<Toolbar className={classes.toolbar}>
							<Button
								variant="contained"
								color="secondary"
								type="submit"
							>
								Enviar
							</Button>
							<Button variant="contained">
								Voltar
							</Button>
						</Toolbar>
					</form>
				</>
			}
		</>
	)
}