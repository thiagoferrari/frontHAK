import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import kardecLogo from '../img/kardec.png';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { LensTwoTone } from '@material-ui/icons';
import { LegendToggleRounded } from '@mui/icons-material';

export default function MediaCard() {
	const [dense, setDense] = React.useState(false);
	const [secondary, setSecondary] = React.useState(true);

	const dados = {
		'Fantasia': 'Hospital Psiquiátrico Allan Kardec',
		'Razão Social': 'Fundação Espírita Allan Kardec',
		'CNPJ': '47.957.667/0001-40',
		'CEP': '14401-080',
		'Endereço': 'Rua José Marques Garcia, Nº 675. Cidade Nova. Franca - SP',
		'E-mail': 'contato@kardec.org.br',
		'E-mail NF': 'nf@kardec.org.br'
	}

	function dadosEmpresa() {
		let dadosComponente = []

		for (let [key, value] of Object.entries(dados)) {
			dadosComponente.push(
				<ListItem>
					<ListItemText
						primary={<b>{key}</b>}
						secondary={value}
					/>
				</ListItem>)
		}

		return dadosComponente
	}

	return (
		<Box sx={{ flexGrow: 1, maxWidth: 752 }}>
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia
					component="img"
					height="140"
					image={kardecLogo}
				/>
				<CardContent>
					<Grid container spacing={2}>
						<Grid item >
							<List dense={dense}>
								{dadosEmpresa()}
							</List>
						</Grid>
					</Grid>
				</CardContent>
				<CardActions>
					<Button size="small">SITE</Button>
					<Button size="small">INSTAGRAM</Button>
				</CardActions>
			</Card>
		</Box>
	);
}