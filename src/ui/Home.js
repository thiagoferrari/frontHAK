import * as React from 'react';
import { styled } from '@mui/styles';
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
import Input from '@mui/material/Input';

import Skeleton from '@mui/material/Skeleton';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Imagem from '../img/Carousel/Imagem2.png'
import Imagemdeutro from '../img/Carousel/Imagem2deutro.png'
import Imagemprotan from '../img/Carousel/Imagem2protan.png'
import Imagemtritano from '../img/Carousel/Imagem2tritano.png'

import letreiro from '../img/Carousel/letreiro.png'

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
		height: '250px',
	},
	titulo: {
		color: 'orange',
		marginTop: "5%",
		textAlign: 'center'
	},
	div: {
		textAlign: 'center'
	}
});

export default function BasicCard() {

	let bkgCorrection = localStorage.getItem('bkgCorrection')

	switch (bkgCorrection) {
		case 'deutro':
			bkgCorrection = Imagemdeutro
			break;
		case 'protan':
			bkgCorrection = Imagemprotan
			break;
		case 'tritano':
			bkgCorrection = Imagemtritano
			break;
		default:
			bkgCorrection = Imagem2
			break;
	}

	const classes = useStyles()

	const [dados, setDados] = React.useState(null)

	React.useEffect(async () => {
		let { data } = await axios.get('http://localhost:3333/Comunicado')
		setDados(data)
	}, [])

	const MyDiv = styled(Box)({
		backgroundColor: '#fffef6', opacity: 1,
		backgroundImage: 'repeating-radial-gradient( circle at 0 0, transparent 0, #fffef6 40px ), repeating-linear-gradient( #ffecbb55, #ffecbb )',
	});

	return (
		<div className={classes.div} >
			<div>
				<img src={bkgCorrection} style={{
					marginTop: '-50px', float: 'top',
					width: '100%', maxWidth: '800px',
					borderBottomLeftRadius: `15px`,
					borderBottomRightRadius: `15px`
				}} />
				<img src={letreiro} style={{
					marginTop: '-50px', position: 'absolute',
					left: '50%',
					top: '25%',
					width: '25%',
					minWidth: '150px',
					transform: 'translate(-50%, -50%)'/* , float: 'top' */
				}} />
			</div>

			<MyDiv style={{
				maxWidth: '650px', marginLeft: 'auto', marginRight: 'auto',
				borderTopLeftRadius: '10px', borderTopRightRadius: '10px'
			}}>
				<h1 className={classes.titulo}>Comunicados Importantes</h1>
				{dados &&
					dados.map((obj, index) => {
						console.log(dados)
						return (
							<Accordion defaultExpanded={true} key={index}>
								<AccordionSummary expandIcon={<ExpandMoreIcon />}>
									<Typography className={classes.assunto}><b>{Object.values(obj)[2]}</b></Typography>
								</AccordionSummary>
								<AccordionDetails><Typography>{Object.values(obj)[3]}</Typography></AccordionDetails>
							</Accordion>
						)
					})
				}
			</MyDiv>
		</div >
	)
}