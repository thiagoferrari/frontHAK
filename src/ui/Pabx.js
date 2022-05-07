import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import imgFaixada from '../img/background.png';
import { makeStyles } from '@mui/styles';
import Carousel from 'react-material-ui-carousel';
import ImageSlider from './Components/ImageSlider/ImageSlider';
import { SliderData } from './Components/ImageSlider/SliderData';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import axios from 'axios';

import './Components/ImageSlider/style.css'
import { Height } from '@material-ui/icons';

const useStyles = makeStyles({
	box: {
		border: '5px',
		backgroundColor: 'red',
		/* float: 'center',
		textAlign: 'center', */
		width: '100px',
		height: '250px'
	},
	titulo: {
		color: 'red',
		marginTop: "5%"/* ,
		textAlign: 'center' */
	},
	div: {
		textAlign: 'center'
	}
});

export default function BasicCard() {

	const classes = useStyles();

	const [dados, setDados] = React.useState(null)

	React.useEffect(async () => {
		let { data } = await axios.get('http://localhost:3333/Pabx')
		setDados(data)
	}, [])

	return (
		<div className={classes.div}>
			<h1 className={classes.titulo}>Operações do PABX</h1>
			{dados &&
				dados.map((obj, index) => {
					delete obj.id
					delete obj.stAtivo
					console.log(dados)
					return (
						<Accordion defaultExpanded={true} key={index}>
							<AccordionSummary expandIcon={<ExpandMoreIcon />}>
								<Typography className={classes.assunto}><b>{Object.values(obj)[0]}</b></Typography>
							</AccordionSummary>
							<AccordionDetails><Typography>{Object.values(obj)[1]}</Typography></AccordionDetails>
						</Accordion>
					)
				})
			}
		</div>
	)
}