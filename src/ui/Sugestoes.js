import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@material-ui/core/styles'
import cyan from '@material-ui/core/colors/cyan'

import axios from 'axios';

const useStyles = makeStyles((theme) => ({
	toolbar: {
		marginTop: '36px',
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
		color: cyan[500],
	},
	box: {
		textAlign: 'center',
		maxWidth: '500px',
		marginLeft: 'auto',
		marginRight: 'auto'
	}
}))

export default function () {

	const classes = useStyles()
	const [anonimo, setAnonimo] = React.useState(false)
	const [form, setForm] = React.useState({
		stAtivo: true,
		nmPessoa: '',
		dsSugestao: ''
	})

	const handleAnonimo = () => {
		//const { nmPessoa } = form
		setAnonimo(!anonimo)
		setForm({ ...form, nmPessoa: '' })
	}

	async function hanldeSubmit() {
		event.preventDefault()
		await axios.post('http://localhost:3333/Sugestao', form)
	}

	function handleChange({ target }) {
		const { id, value } = target
		setForm({ ...form, [id]: value })
		/* esse [id] recebe o id do input */
	}

	return (
		< form onSubmit={hanldeSubmit} >
			{console.log(form)}
			<Box className={classes.box}>
				<h1>Escreva sua Sugestão:</h1>
				<TextField autoFocus margin="normal"
					required label="Digite sua Sugestão"
					rows={4} onChange={handleChange}
					id="dsSugestao" multiline
					name="dsSugestao" value={form.dsSugestao}
					autoComplete="dsSugestao" fullWidth
				/>
				<TextField margin="normal" fullWidth
					name="nmPessoa" label="Digite seu nome"
					id="nmPessoa" value={form.nmPessoa}
					onChange={handleChange} disabled={anonimo}
					required={!anonimo}
				/>
				<FormControlLabel
					sx={{ display: 'block' }}
					control={<Checkbox onChange={handleAnonimo} />}
					label="Manter sugestão anônima"
				/>
				<Toolbar className={classes.toolbar}>
					<Button variant="contained" type="submit">
						Enviar<SendIcon sx={{ marginLeft: '10px' }} />
					</Button>
				</Toolbar>
			</Box>
		</form >
	)
}