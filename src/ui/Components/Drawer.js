import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Drawer from "@material-ui/core/Drawer";
import Box from '@mui/material/Box';
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";

import logo from '../../img/logo.png'

import HomeIcon from '@mui/icons-material/Home'; //Página Inicial
import LightbulbIcon from '@mui/icons-material/Lightbulb'; //Sugestões

import InfoIcon from '@mui/icons-material/Info'; //Dados da Empresa
import AddIcCallIcon from '@mui/icons-material/AddIcCall'; //Lista de Ramais
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'; //Lista de E-mails
import LocalPoliceIcon from '@mui/icons-material/LocalPolice'; //Normas e Políticas Internas
import DialerSipIcon from '@mui/icons-material/DialerSip'; //Operações do PABX

import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'; //Gestão de Pessoas
import WatchLaterIcon from '@mui/icons-material/WatchLater'; //Ocorrência de Ponto
import NewReleasesIcon from '@mui/icons-material/NewReleases'; //Ocorrência de Acidente
import FoodBankIcon from '@mui/icons-material/FoodBank'; //Portal Refeição
import ExtensionIcon from '@mui/icons-material/Extension'; //Area Administrativa

import { Button } from "@mui/material";


const drawerWidth = 280;

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex"
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		background: 'orange'
	},
	drawer: {
		flexShrink: 0,
		width: drawerWidth
	},
	drawerPaper: {
		width: drawerWidth
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up("md")]: {
			display: "none"
		}
	},
	toolbar: {
		...theme.mixins.toolbar,
		[theme.breakpoints.down("sm")]: {
			display: "none"
		}
	},
	logo: {
		marginLeft: '5%',
		maxWidth: '30%'
	},
	logoHorizontallyCenter: {
		position: 'fixed',
		left: '50%',
		top: '4%',
		transform: 'translate(-20%, -50%)',
	}
}));

export default function (props) {
	const classes = useStyles();
	const theme = useTheme();
	const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

	const [open, setOpen] = React.useState(false);

	const toggleDrawer = event => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setOpen(!open);
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={toggleDrawer}
						className={classes.menuButton}
					>
						<MenuIcon />
					</IconButton>
					<div className={classes.logoHorizontallyCenter}>
						<img src={logo} className={classes.logo} />
					</div>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant={isMdUp ? "permanent" : "temporary"}
				classes={{
					paper: classes.drawerPaper
				}}
				anchor="left"
				open={open}
				onClose={toggleDrawer}
			>
				<div className={classes.toolbar} />

				<Divider />

				<Button href='/' sx={{ textTransform: 'none' }}>
					<ListItem button>
						<ListItemIcon>
							<HomeIcon />
						</ListItemIcon>
						<ListItemText primary={'Página Inicial'} />
					</ListItem>
				</Button>

				<Button href='/sugestoes' sx={{ textTransform: 'none' }}>
					<ListItem button>
						<ListItemIcon>
							<LightbulbIcon />
						</ListItemIcon>
						<ListItemText primary={'Sugestões'} />
					</ListItem>
				</Button>

				<Divider />

				<Button href='/empresa' sx={{ textTransform: 'none' }}>
					<ListItem button>
						<ListItemIcon>
							<InfoIcon />
						</ListItemIcon>
						<ListItemText primary={'Dados da Empresa'} />
					</ListItem>
				</Button>

				<Button href='/ramais' sx={{ textTransform: 'none' }}>
					<ListItem button>
						<ListItemIcon>
							<AddIcCallIcon />
						</ListItemIcon>
						<ListItemText primary={'Lista de Ramais'} />
					</ListItem>
				</Button>

				<Button href='/emails' sx={{ textTransform: 'none' }}>
					<ListItem button>
						<ListItemIcon>
							<AlternateEmailIcon />
						</ListItemIcon>
						<ListItemText primary={'Lista de E-mails'} />
					</ListItem>
				</Button>

				<Button href='/politicas' sx={{ textTransform: 'none' }}>
					<ListItem button>
						<ListItemIcon>
							<LocalPoliceIcon />
						</ListItemIcon>
						<ListItemText primary={'Políticas Internas'} />
					</ListItem>
				</Button>

				<Button href='/pabx' sx={{ textTransform: 'none' }}>
					<ListItem button>
						<ListItemIcon>
							<DialerSipIcon />
						</ListItemIcon>
						<ListItemText primary={'Operações do PABX'} />
					</ListItem>
				</Button>

				<Divider />

				<Button href='http://refeicao.feak.local/#!/' sx={{ textTransform: 'none' }}>
					<ListItem button>
						<ListItemIcon>
							<FoodBankIcon />
						</ListItemIcon>
						<ListItemText primary={'Portal Refeição'} />
					</ListItem>
				</Button>

				<Button href='http://ponto.feak.local/#!/' sx={{ textTransform: 'none' }}>
					<ListItem button>
						<ListItemIcon>
							<WatchLaterIcon />
						</ListItemIcon>
						<ListItemText primary={'Ocorrência de Ponto'} />
					</ListItem>
				</Button>

				<Button href='http://acidente.feak.local/#!/' sx={{ textTransform: 'none' }}>
					<ListItem button>
						<ListItemIcon>
							<NewReleasesIcon />
						</ListItemIcon>
						<ListItemText primary={'Ocorrência de Acidente'} />
					</ListItem>
				</Button>

				<Button href='http://gestaopessoas.feak.local/#!/' sx={{ textTransform: 'none' }}>
					<ListItem button>
						<ListItemIcon>
							<AssignmentIndIcon />
						</ListItemIcon>
						<ListItemText primary={'Gestão de Pessoas'} />
					</ListItem>
				</Button>

				<Divider />

				<Button href='/login' sx={{ textTransform: 'none' }}>
					<ListItem button>
						<ListItemIcon>
							<ExtensionIcon />
						</ListItemIcon>
						<ListItemText primary={'Área Administrativa'} />
					</ListItem>
				</Button>

			</Drawer>
			<Box sx={{ flexGrow: 1, p: 3, marginY: '5%' }}>
				{props.corpo}
			</Box>
		</div>
	);
}
