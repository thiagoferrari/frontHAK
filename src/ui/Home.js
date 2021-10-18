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
	assunto: {
		fontWeight: 'bold'
	},
	div: {
		textAlign: 'center'
	}

});

export default function BasicCard() {
	const classes = useStyles();

	return (
		<div className={classes.div}>
			<h1 className={classes.titulo} >Seja bem vindo ao Intranet</h1>
			<ImageSlider slides={SliderData} />
			<h1 className={classes.titulo} >Comunicados Importantes</h1>
			<Accordion defaultExpanded={true}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography className={classes.assunto}>Ligações Interurbanas</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion defaultExpanded={true}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2a-content"
					id="panel2a-header"
				>
					<Typography className={classes.assunto}>Nota Fiscal Eletrônica</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Comunicamos a todos colaboradores e fornecedores que todas as notas fiscais eletônicas deverão ser encaminhadas para o email nf@kardec.org.br
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	)
}