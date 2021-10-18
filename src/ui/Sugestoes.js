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
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export default function () {
	const [anonimo, setAnonimo] = React.useState(false)

	const handleChange = () => {
		setAnonimo(!anonimo)
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get('email'),
			password: data.get('password'),
		});
	};

	return (
		<Container component="main" maxWidth="xs">
			<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, marginTop: '100px' }}>
				<TextField
					margin="normal"
					required
					multiline
					rows={4}
					fullWidth
					id="sugestao"
					label="Digite sua Sugestão"
					name="sugestao"
					autoComplete="sugestao"
					autoFocus
				/>
				<TextField
					margin="normal"
					required
					multiline
					fullWidth
					name="nome"
					label="Digite seu nome"
					id="nome"
					autoComplete="current-password"
					disabled={anonimo}
				/>
				<FormControlLabel
					control={<Checkbox value="remember" color="primary" onChange={handleChange} />}
					label="Manter sugestão anônima"
				/>
				<Stack direction="row" spacing={2}>
					<Button variant="contained" endIcon={<SendIcon />}>
						Send
					</Button>
				</Stack>
			</Box>
		</Container>
	)
}