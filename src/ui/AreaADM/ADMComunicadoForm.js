import { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import InputAdornment from '@material-ui/core/InputAdornment'
import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@mui/material/Tooltip';
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

import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ArticleIcon from '@mui/icons-material/Article';

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


export default function ADMComunicadoForm() {

	const classes = useStyles()

	const [img, setImg] = useState(null)
	const [doc, setDoc] = useState(null)

	const [title, setTitle] = useState('Cadastrar Novo Comunicado')

	const [dialogOpen, setDialogOpen] = useState(false) // O diálogo de confirmação de voltar está aberto?

	// Estados de Snackbar:
	const [sbOpen, setSbOpen] = useState(false)
	const [sbSeverity, setSbSeverity] = useState('')
	const [sbMessage, setSbMessage] = useState('')

	function handleDialogClose(result) {
		setDialogOpen(false)

		// Se o usuário concordou em voltar
		if (result) history.push('/Comunicado')
	}

	const history = useHistory()
	const params = useParams()

	let [form, setForm] = useState({ stAtivo: true })

	useEffect(async () => {
		// Verifica se tem o parâmetro id na rota. Se tiver, temos que buscar
		// os dados do registro no back-end para edição
		if (params.id) {
			setTitle('Editando Comunicado')
			//console.log(params.id)
			getData(params.id)
			setForm({ ...form })
		}

	}, [])

	/* function handleSbClose() {
		setSbOpen(false)    // Fecha a snackbar
	} */

	async function getData(id) {
		try {
			let { data } = await axios.get(`http://localhost:3333/Comunicado/${id}`)

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
			if (params.id) await axios.put('http://localhost:3333/Comunicado', form)
			// Registro não existe, cria um novo (verbo HTTP POST)
			else await axios.post('http://localhost:3333/Comunicado', form)

			setSbOpen(true)
			setSbSeverity('success')
			setSbMessage('Dados enviados com sucesso.')
			setTimeout(() => { history.push('/Comunicado') }, 2000)
		}
		catch (error) {
			console.error(error)
			setSbOpen(true)
			setSbSeverity('error')
			setSbMessage('ERRO: ' + error.message)
		}
	}

	async function handleSubmit(e) {
		e.preventDefault() // Evita o recarregamento da página
		await saveData()
	}

	function handleChange({ target }) {
		const { id, value } = target
		setForm({ ...form, [id]: value })
		/* esse [id] recebe o id do input */
	}
	let teste1

	async function saveAnexo(anexo) {

		const { files } = anexo
		const { id: idInput } = anexo

		var file = new FormData()
		file.append('anexo', files[0])

		await axios.post('http://localhost:3333/Anexo', file)
			.then(({ data: { id } }) => setForm({ ...form, idInput: id }))
	}

	/* async function handleAnexo() {

		async function storeAnexoidImg(estado) {


			var file = new FormData()
			file.append('anexo', estado)

			let { data } = await axios.post('http://localhost:3333/Anexo', file)
			setForm({ ...form, idImg: data.id })
		}

		if (img !== null) await storeAnexoidImg(img)
		if (doc !== null) await storeAnexoidDoc(doc)

		//await console.log('form :>> ', form);

		/* await console.log('img')
		await console.log(img)
		
		await console.log('doc')
		await console.log(doc) 
	} */

	return (
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

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
					id="dsTitulo" InputLabelProps={{ shrink: true }}
					label="Título (Assunto da Comunicação)"
					value={form.dsTitulo} variant="outlined"
					onChange={handleChange} color="secondary"
					fullWidth required
				/>

				<TextField
					id="dsComunicado" InputLabelProps={{ shrink: true }}
					label="Texto da Comunicado" variant="outlined"
					color="secondary" value={form.dsComunicado}
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
						label="Comunicado Ativo?"
					/>
				</FormControl>

				<div>
					<Tooltip title="Anexar Documento ao Comunicado">
						<label htmlFor="idDoc" style={{ marginRight: '10px' }}>
							<input style={{ display: 'none' }} id='idDoc' type='file'
								onChange={(e) => { saveAnexo(e.target) }} />
							<Button variant="contained" component="span">
								<ArticleIcon />
							</Button>
						</label>
					</Tooltip>

					<Tooltip title="Anexar Imagem ao Comunicado">
						<label htmlFor="idImg">
							<input style={{ display: 'none' }} id='idImg' type='file'
								onChange={(e) => { saveAnexo(e.target) }} />
							<Button variant="contained" component="span">
								<AddPhotoAlternateIcon />
							</Button>
						</label>
					</Tooltip>
				</div>

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