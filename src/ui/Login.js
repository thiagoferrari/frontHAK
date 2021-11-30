import { useState, useEffect } from 'react'
import {
	TextField,
	InputAdornment,
	IconButton
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useHistory, useParams } from 'react-router-dom'
import ConfirmDialog from './Components/ConfirmDialogLogin'
import Select from '@material-ui/core/Select'
import { InputLabel } from '@mui/material'
import OutlinedInput from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import ADMAcessoList from './AreaADM/ADMAcessoList'

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


export default function ADMLoginForm() {

	const getItem = (key, value) => { return window.localStorage.getItem(key, value) }
	const setItem = (key, value) => { return window.localStorage.setItem(key, value) }

	const history = useHistory()
	const params = useParams()

	if (getItem('stConectado')) {
		console.log('stConectado')
		history.push('/Login')
		return <ADMAcessoList />

		////window.location.href = '/Login'

	} else {
		const classes = useStyles()

		const [title, setTitle] = useState('Digite seu Login')

		const [dialogOpen, setDialogOpen] = useState(false) // O diálogo de confirmação de voltar está aberto?

		// Estados de Snackbar:
		const [sbOpen, setSbOpen] = useState(false)
		const [sbSeverity, setSbSeverity] = useState('')
		const [sbMessage, setSbMessage] = useState('')

		function handleDialogClose(result) {
			setDialogOpen(false) // Fecha o diálogo de confirmação

			if (result) tryRecovery()
			else history.push('/app-login')
		}

		const [form, setForm] = useState({ stConectado: false, tryRec: true })
		const [showPassword, setShowPassword] = useState(false);

		/* function handleSbClose() {
			setSbOpen(false)    // Fecha a snackbar
		} */

		async function tryRecovery() {
			try {
				await axios.post('http://localhost:3333/Entrar', form)

				setSbOpen(true)
				setSbSeverity('success')
				setSbMessage('Um lembrete de senha foi enviado ao seu e-mail cadastrado como recuperação.')
			}
			catch (error) {
				console.error(error)
				setSbOpen(true)
				setSbSeverity('error')
				setSbMessage('Login não existente ou inativado')
			}
			setTimeout(() => { setSbOpen(false) }, 5000)
		}

		async function tryLogin() {
			try {
				setForm({ ...form, tryRec: false }) // Desabilita rec. de senha

				await axios.post('http://localhost:3333/Entrar', form)

				setItem('dsLogin', form.dsLogin)
				if (form.stConectado) setItem('stConectado', true)

				//form.stConectado ? setItem('stConectado', true) : window.localStorage.clear('stConectado', true)

				history.push('/Login')
			}
			catch (error) {
				console.error(error)
				setSbOpen(true)
				setSbSeverity('error')
				setSbMessage('Login não existente ou inativado')
				setTimeout(() => { setSbOpen(false) }, 5000)
			}
		}

		function handleSubmit(event) {
			event.preventDefault() // Evita o recarregamento da página
			tryLogin()
		}

		function handleChange({ target }) {
			console.log(form)

			const { id, value } = target
			setForm({ ...form, [id]: value })
			/* esse [id] recebe o id do input */
		}

		return (
			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

				<ConfirmDialog isOpen={dialogOpen} onClose={handleDialogClose} color="secondary">
					<TextField
						id="dsLogin" InputLabelProps={{ shrink: true }}
						label="Digite seu Login"
						value={form.dsLogin} variant="outlined"
						onChange={handleChange} color="secondary"
						required fullWidth
					/>
				</ConfirmDialog>

				<Snackbar open={sbOpen} autoHideDuration={6000} color="secondary">
					<MuiAlert elevation={6} variant="filled" severity={sbSeverity}>
						{sbMessage}
					</MuiAlert>
				</Snackbar>

				<h1>{title}</h1>
				<form className={classes.form} onSubmit={handleSubmit}>

					<TextField
						id="dsLogin" InputLabelProps={{ shrink: true }}
						label="Login"
						value={form.dsLogin} variant="outlined"
						onChange={handleChange} color="secondary"
						required
					/>

					<br />

					<TextField
						id="dsSenha"
						InputLabelProps={{ shrink: true }}
						label="Senha" variant="outlined"
						color="secondary" value={form.dsSenha}
						onChange={handleChange}
						type={showPassword ? "text" : "password"}
						required
					/>
					<IconButton
						onClick={() => setShowPassword(!showPassword)}
						onMouseDown={() => setShowPassword(!showPassword)}
					>
						{showPassword ? <Visibility /> : <VisibilityOff />}
					</IconButton>


					{<FormControl className={classes.checkbox} fullWidth>
						<FormControlLabel required={true}
							control={<Checkbox id="stConectado"
								checked={(form.stConectado ? true : false)}
								onChange={e => (
									(setForm({ ...form, stConectado: (e.target.checked) }))
								)}
							/>}
							label="Permanecer Conectado?"
						/>
					</FormControl>}

					<Toolbar className={classes.toolbar}>
						<Button variant="contained" color="secondary" type="submit">
							Entrar
						</Button>
					</Toolbar>
					<Toolbar className={classes.toolbar}>
						<Button variant="contained"
							onClick={() => setDialogOpen(true)}>
							Esqueci Senha
						</Button>
					</Toolbar>
				</form>
			</div>
		)
	}
}