import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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


import lgpd from '../img/lgpd.jpg';
import etica from '../img/etica.png';
import { makeStyles } from '@mui/styles';

import axios from 'axios';

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

	const [titulos, setTitulos] = React.useState([`Iterador`])

	React.useEffect(async () => {
		let { data } = await axios.get('http://192.168.1.196:3333/Politicas')
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
								image={etica}
							/>
							<CardContent>
								<ListItem>
									<ListItemText
										primary={<h2><b>{Object.values(obj)[0]}</b></h2>}
										secondary={<i>{Object.values(obj)[1]}</i>} />
								</ListItem>
							</CardContent>
							<CardActions>
								<Button size="small">LER DOC.</Button>
							</CardActions>
						</Card>
					)
				})
			}
		</Box >
	);
}