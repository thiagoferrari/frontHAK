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
import letreirodeutro from '../img/Carousel/letreirodeutro.png'
import letreiroprotan from '../img/Carousel/letreiroprotan.png'
import letreirotritano from '../img/Carousel/letreirotritano.png'

import axios from 'axios';

import './Components/ImageSlider/style.css'
import { Height } from '@material-ui/icons';

let letreiroImg, bkgImg, appBarColor
let bkgCorrection = localStorage.getItem('bkgCorrection')
switch (bkgCorrection) {
	case 'deutro':
		letreiroImg = letreirodeutro
		bkgImg = Imagemdeutro
		appBarColor = '#D9C10D'
		break;
	case 'protan':
		letreiroImg = letreiroprotan
		bkgImg = Imagemprotan
		appBarColor = '#c2ab00'
		break;
	case 'tritano':
		letreiroImg = letreirotritano
		bkgImg = Imagemtritano
		appBarColor = '#ff918f'
		break;
	default:
		letreiroImg = letreiro
		bkgImg = Imagem
		appBarColor = '#ffa600'
		break;
}

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
		color: 'black',
		filter: `drop-shadow(2px 2px white)`,
		marginBottom: "0",
		textAlign: 'center'
	},
	div: {
		textAlign: 'center'
	}
});

export default function BasicCard() {

	const classes = useStyles()

	const [dados, setDados] = React.useState(null)

	React.useEffect(async () => {
		let { data } = await axios.get('http://localhost:3333/Comunicado')
		setDados(data)
	}, [])

	const MyDiv = styled(Box)({
		backgroundColor: 'white', opacity: 1,
		backgroundImage: `repeating-radial-gradient( circle at 0 0, transparent 0, white 40px ), repeating-linear-gradient( ${appBarColor}, ${appBarColor}  )`,
	});

	return (
		<div className={classes.div} >
			<div>
				<img src={bkgImg} style={{
					marginTop: '-50px', float: 'top',
					width: '100%', maxWidth: '800px',
					borderBottomLeftRadius: `15px`,
					borderBottomRightRadius: `15px`
				}} />
				<img src={letreiroImg} style={{
					marginTop: '-50px', position: 'absolute',
					left: '50%',
					top: '28%',
					width: '25%',
					minWidth: '150px',
					transform: 'translate(-50%, -50%)',/* , float: 'top' */
					filter: `drop-shadow(5px 5px 5px ${appBarColor})`
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