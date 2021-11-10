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
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	form: {
		maxWidth: '100%',
		display: 'inline-block',
		textAlign: 'center',
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
		alignItems: 'center',
		justifyContent: 'space-around',
		color: theme.palette.secondary.main,
	},
	checkbox: {
		alignItems: 'center',
		display: 'inline-block',
		justifyContent: 'space-around',
		flexWrap: 'wrap',
	}
}))


export default function ADMEmpresaForm() {
	const classes = useStyles()

	const [title, setTitle] = useState('Cadastrar Novo Empresa')

	const [dialogOpen, setDialogOpen] = useState(false) // O diálogo de confirmação de voltar está aberto?

	// Estados de Snackbar:
	const [sbOpen, setSbOpen] = useState(false)
	const [sbSeverity, setSbSeverity] = useState('')
	const [sbMessage, setSbMessage] = useState('')

	function handleDialogClose(result) {
		setDialogOpen(false)

		// Se o usuário concordou em voltar
		if (result) history.push('/Empresa')
	}

	const history = useHistory()
	const params = useParams()

	const [form, setForm] = useState({ stAtivo: true })

	useEffect(async () => {
		// Verifica se tem o parâmetro id na rota. Se tiver, temos que buscar
		// os dados do registro no back-end para edição
		if (params.id) {
			setTitle('Editando Empresa')
			//console.log(params.id)
			getData(params.id)
		}

	}, [])

	/* function handleSbClose() {
		setSbOpen(false)    // Fecha a snackbar
	} */

	async function getData(id) {
		try {
			let { data } = await axios.get(`http://localhost:3333/Empresa/${id}`)

			setForm({ ...data })
		}
		catch (error) {
			console.error(error)
			setSbOpen(true)
			setSbSeverity('error')
			setSbMessage('ERRO: ' + error.message)
		}
	}

	async function saveData() {
		try {
			// Se o registro já existe (edição, verbo HTTP PUT)
			if (params.id) await axios.put('http://localhost:3333/Empresa', form)
			// Registro não existe, cria um novo (verbo HTTP POST)
			else await axios.post('http://localhost:3333/Empresa', form)

			setSbOpen(true)
			setSbSeverity('success')
			setSbMessage('Dados enviados com sucesso.')
			setTimeout(() => { history.push('/Empresa') }, 2000)
		}
		catch (error) {
			console.error(error)
			setSbOpen(true)
			setSbSeverity('error')
			setSbMessage('ERRO: ' + error.message)
		}
	}

	function handleSubmit(event) {
		event.preventDefault() // Evita o recarregamento da página
		saveData()
	}

	function handleChange({ target }) {
		const { id, value } = target
		setForm({ ...form, [id]: value })
		/* esse [id] recebe o id do input */
	}

	return (
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			{console.log(form)}
			<ConfirmDialog isOpen={dialogOpen} onClose={handleDialogClose} color="secondary">
				Podem haver dados não salvos. Tem certeza que deseja sair?
			</ConfirmDialog>

			<Snackbar open={sbOpen} autoHideDuration={6000} color="secondary">
				<MuiAlert elevation={6} variant="filled" severity={sbSeverity}>
					{sbMessage}
				</MuiAlert>
			</Snackbar>

			<h1>{title}</h1>
			<form className={classes.form} onSubmit={handleSubmit}>

				<TextField
					id="nmFantasia" InputLabelProps={{ shrink: true }}
					label="Nome Fantasia"
					value={form.nmFantasia} variant="outlined"
					onChange={handleChange} color="secondary"
					fullWidth required
				/>

				<TextField
					id="dsRazaoSocial" InputLabelProps={{ shrink: true }}
					label="Razão Social" variant="outlined"
					color="secondary" value={form.dsRazaoSocial}
					onChange={handleChange}
					fullWidth required
				/>

				<TextField
					id="cdCNPJ" InputLabelProps={{ shrink: true }}
					label="CNPJ" variant="outlined"
					color="secondary" value={form.cdCNPJ}
					onChange={handleChange}
					fullWidth required
				/>

				<TextField
					id="dsInscricaoEstMun" InputLabelProps={{ shrink: true }}
					label="Inscrição Estadual/Municipal" variant="outlined"
					color="secondary" value={form.dsInscricaoEstMun}
					onChange={handleChange}
					fullWidth required
				/>

				<TextField
					id="cdCEP" InputLabelProps={{ shrink: true }}
					label="CEP" variant="outlined"
					color="secondary" value={form.cdCEP}
					onChange={handleChange}
					fullWidth required
				/>

				<TextField
					id="dsEndereco" InputLabelProps={{ shrink: true }}
					label="Endereço" variant="outlined"
					color="secondary" value={form.dsEndereco}
					onChange={handleChange}
					fullWidth required
				/>

				<TextField
					id="dsEmail" InputLabelProps={{ shrink: true }}
					label="E-mail" variant="outlined"
					color="secondary" value={form.dsEmail}
					onChange={handleChange}
					fullWidth required
				/>

				<TextField
					id="dsEmailNFE" InputLabelProps={{ shrink: true }}
					label="E-mail NFE" variant="outlined"
					color="secondary" value={form.dsEmailNFE}
					onChange={handleChange}
					fullWidth required
				/>

				<FormControl className={classes.checkbox} fullWidth>
					<FormControlLabel required={true}
						control={<Checkbox id="stAtivo"
							checked={(form.stAtivo ? true : false)}
							onChange={e => (
								(setForm({ ...form, stAtivo: (e.target.checked) }))
							)}
						/>}
						label="Empresa Ativa?"
					/>
				</FormControl>

				<Toolbar className={classes.toolbar}>
					<Button variant="contained" color="secondary" type="submit">
						Enviar
					</Button>

					<Button variant="contained"
						onClick={() => setDialogOpen(true)}>
						Voltar
					</Button>
				</Toolbar>
			</form>
		</div >
	)
}