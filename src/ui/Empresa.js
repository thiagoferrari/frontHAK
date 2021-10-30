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

import axios from 'axios';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
	card: {
		maxWidth: 345,
		display: 'inline-block',
		marginRight: '10px',
		marginLeft: '10px'
	}
}));

export default function MediaCard() {

	const classes = useStyles();

	const [dados, setDados] = React.useState(null)

	const [titulos, setTitulos] = React.useState(
		['Nome Fantasia', 'Razão Social', 'CNPJ',
			'Inscr. Estadual/Municipal', 'CEP', 'Endereço',
			'Email Contato', 'Email NF-e'])

	React.useEffect(async () => {
		let { data } = await axios.get('http://localhost:3333/Empresa')
		setDados(data)
	}, [])

	return (
		<Box sx={{ flexGrow: 1, maxWidth: 752 }}>
			{dados &&
				dados.map((obj, index) => {
					delete obj.id
					return (
						<Card className={classes.card}>
							<CardMedia
								component="img"
								height="140"
								image={kardecLogo}
							/>
							<CardContent>
								{
									titulos.map((t, index2) => {
										return (
											<ListItem>
												<ListItemText
													primary={<b>{t}</b>}
													secondary={<i>{Object.values(obj)[index2]}</i>} />
											</ListItem>
										)
									})
								}
							</CardContent>
							<CardActions>
								<Button size="small">INSTAGRAM</Button>
								<Button size="small">SITE</Button>
								<Button size="small">FACEBOOK</Button>
							</CardActions>
						</Card>
					)
				})
			}
		</Box >
	);
}