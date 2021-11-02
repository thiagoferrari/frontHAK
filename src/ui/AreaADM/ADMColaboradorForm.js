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
import OutlinedInput from '@mui/material/OutlinedInput';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';

const theme = createTheme({
	palette: {
		secondary: {
			main: '#E33E7F'
		}
	}
});

const useStyles = makeStyles((theme) => ({
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
		justifyContent: 'space-around',
		color: theme.palette.secondary.main,
	},
	checkbox: {
		alignItems: 'center'
	}
}))


export default function () {
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
	}, [])

	async function getData(id) {
		try {
			let { data } = await axios.get(`http://localhost:3333/Colaborador/${id}`)

			// Tratar Dados:
			data.idSetor = data.fkSetor.id
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
			if (params.id) await axios.put('http://localhost:3333/Colaborador', form)
			// Registro não existe, cria um novo (verbo HTTP POST)
			else await axios.post('http://localhost:3333/Colaborador', form)
		}
		catch (error) {
			console.log('deu pau no salvamento :>>' + error)
		}
	}

	function handleSubmit(event) {
		event.preventDefault() // Evita o recarregamento da página
		saveData()
	}

	return (
		<>
			{console.log(form)}
			<h1>{title}</h1>
			<form className={classes.form} onSubmit={handleSubmit}>

				<TextField
					id="dsColaborador"
					label="Colaborador"
					variant="outlined"
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
					type="email"
					value={form.dsEmail}
					onChange={({ target }) =>
						setForm({
							...form, dsEmail: target.value
						})}
					variant="outlined"
					fullWidth
					required
				/>

				<FormControl className={classes.checkbox} fullWidth>
					<FormControlLabel
						control={<Checkbox id="stAtivo"
							checked={(form.stAtivo ? true : false)}
							onChange={e => (
								(setForm({ ...form, stAtivo: (e.target.checked) }))
							)}
						/>}
						label="Ativo?"
					/>
				</FormControl>

				<FormControl>
					<InputLabel sx={{ marginLeft: 'auto', marginRight: 'auto' }}>Setor</InputLabel>
					<Select value={Number(form.idSetor)} required
						onChange={e => (setForm({ ...form, idSetor: e.target.value }))}
						variant="outlined" fullWidth required>
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
						type="submit">
						Enviar
					</Button>
					<Button variant="contained"
						onClick={() => history.push('/Colaborador')}>
						Voltar
					</Button>
				</Toolbar>
			</form>
		</>
	)
}