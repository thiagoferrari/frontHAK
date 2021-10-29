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
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

import axios from 'axios';

export default function () {
	const [anonimo, setAnonimo] = React.useState(false)
	const [form, setForm] = React.useState({
		stAtivo: "S",
		nmPessoa: '',
		dsSugestao: ''
	})

	const handleAnonimo = () => {
		const { nmPessoa } = form
		setAnonimo(!anonimo)
		setForm({ ...form, nmPessoa: '' })
	}

	async function hanldeSubmit() {
		event.preventDefault()
		await axios.post('http://192.168.1.196:3333/Sugestao', form)
	}

	function handleChange({ target }) {
		const { id, value } = target
		setForm({ ...form, [id]: value })
		/* esse [id] recebe o id do input */
	}

	return (
		<form onSubmit={hanldeSubmit}>
			<Box sx={{ textAlign: 'center', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
				<h1>Escreva sua Sugestão:</h1>
				<TextField
					margin="normal"
					required
					multiline
					rows={4}
					fullWidth
					id="dsSugestao"
					label="Digite sua Sugestão"
					name="dsSugestao"
					value={form.dsSugestao}
					autoComplete="dsSugestao"
					onChange={handleChange}
					autoFocus
				/>
				<TextField
					margin="normal"
					multiline
					fullWidth
					name="nmPessoa"
					label="Digite seu nome"
					id="nmPessoa"
					value={form.nmPessoa}
					onChange={handleChange}
					disabled={anonimo}
					required={!anonimo}
				/>
				<FormControlLabel
					sx={{ display: 'block' }}
					control={<Checkbox onChange={handleAnonimo} />}
					label="Manter sugestão anônima"
				/>
				<button className="mdc-button mdc-button--unelevated"
					style={{ backgroundColor: 'orange', marginTop: '10px' }}>
					<Box sx={{ paddingRight: '10px' }}>
						Enviar
					</Box>
					<SendIcon />
				</button>
			</Box>
		</form>
	)
}