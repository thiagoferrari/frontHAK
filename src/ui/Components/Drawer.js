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
import Link from "@material-ui/core/Link";
import { useHistory } from "react-router-dom";

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
		},
		color: 'white'
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
	const history = useHistory();
	const classes = useStyles();
	const theme = useTheme();
	const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
	const [logged, setLogged] = React.useState(true);

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

				<Link onClick={() => history.push('/')}>
					<ListItem button>
						<ListItemIcon>
							<HomeIcon />
						</ListItemIcon>
						<ListItemText primary={'Página Inicial'} />
					</ListItem>
				</Link>

				<Link onClick={() => history.push('/app-sugestoes')}>
					<ListItem button>
						<ListItemIcon>
							<LightbulbIcon />
						</ListItemIcon>
						<ListItemText primary={'Sugestões'} />
					</ListItem>
				</Link>

				<Divider />

				<Link onClick={() => history.push('/app-empresas')}>
					<ListItem button>
						<ListItemIcon>
							<InfoIcon />
						</ListItemIcon>
						<ListItemText primary={'Dados da Empresa'} />
					</ListItem>
				</Link>

				<Link onClick={() => history.push('/app-ramais')}>
					<ListItem button>
						<ListItemIcon>
							<AddIcCallIcon />
						</ListItemIcon>
						<ListItemText primary={'Lista de Ramais'} />
					</ListItem>
				</Link>

				<Link onClick={() => history.push('/app-emails')}>
					<ListItem button>
						<ListItemIcon>
							<AlternateEmailIcon />
						</ListItemIcon>
						<ListItemText primary={'Lista de E-mails'} />
					</ListItem>
				</Link>

				<Link onClick={() => history.push('/app-politicas')}>
					<ListItem button>
						<ListItemIcon>
							<LocalPoliceIcon />
						</ListItemIcon>
						<ListItemText primary={'Políticas Internas'} />
					</ListItem>
				</Link>

				<Link onClick={() => history.push('/app-pabx')}>
					<ListItem button>
						<ListItemIcon>
							<DialerSipIcon />
						</ListItemIcon>
						<ListItemText primary={'Operações do PABX'} />
					</ListItem>
				</Link>

				<Divider />

				<Link href='http://refeicao.feak.local/#!/'>
					<ListItem button>
						<ListItemIcon>
							<FoodBankIcon />
						</ListItemIcon>
						<ListItemText primary={'Portal Refeição'} />
					</ListItem>
				</Link>

				<Link href='http://ponto.feak.local/#!/'>
					<ListItem button>
						<ListItemIcon>
							<WatchLaterIcon />
						</ListItemIcon>
						<ListItemText primary={'Ocorrência de Ponto'} />
					</ListItem>
				</Link>

				<Link href='http://acidente.feak.local/#!/'>
					<ListItem button>
						<ListItemIcon>
							<NewReleasesIcon />
						</ListItemIcon>
						<ListItemText primary={'Ocorrência de Acidente'} />
					</ListItem>
				</Link>

				<Link href='http://gestaopessoas.feak.local/#!/'>
					<ListItem button>
						<ListItemIcon>
							<AssignmentIndIcon />
						</ListItemIcon>
						<ListItemText primary={'Gestão de Pessoas'} />
					</ListItem>
				</Link>

				<Divider />

				<Link onClick={() => history.push('/app-login')}>
					<ListItem button>
						<ListItemIcon>
							<ExtensionIcon />
						</ListItemIcon>
						<ListItemText primary={'Área Administrativa'} />
					</ListItem>
				</Link>

				{logged &&
					<>
						<Link onClick={() => history.push('/Colaborador')}>
							<ListItem button>
								<ListItemIcon>
									<HomeIcon />
								</ListItemIcon>
								<ListItemText primary={'Colaboradores'} />
							</ListItem>
						</Link>

						<Link onClick={() => history.push('/Comunicado')}>
							<ListItem button>
								<ListItemIcon>
									<LightbulbIcon />
								</ListItemIcon>
								<ListItemText primary={'Comunicados'} />
							</ListItem>
						</Link>

						<Link onClick={() => history.push('/Empresa')}>
							<ListItem button>
								<ListItemIcon>
									<InfoIcon />
								</ListItemIcon>
								<ListItemText primary={'Empresas'} />
							</ListItem>
						</Link>

						<Link onClick={() => history.push('/Setor')}>
							<ListItem button>
								<ListItemIcon>
									<AddIcCallIcon />
								</ListItemIcon>
								<ListItemText primary={'Setores'} />
							</ListItem>
						</Link>

						<Link onClick={() => history.push('/Politica')}>
							<ListItem button>
								<ListItemIcon>
									<AlternateEmailIcon />
								</ListItemIcon>
								<ListItemText primary={'Políticas'} />
							</ListItem>
						</Link>

						<Link onClick={() => history.push('/Ramal')}>
							<ListItem button>
								<ListItemIcon>
									<LocalPoliceIcon />
								</ListItemIcon>
								<ListItemText primary={'Ramais'} />
							</ListItem>
						</Link>

						<Link onClick={() => history.push('/Pabx')}>
							<ListItem button>
								<ListItemIcon>
									<DialerSipIcon />
								</ListItemIcon>
								<ListItemText primary={'Instruções PABX'} />
							</ListItem>
						</Link>

						<Link onClick={() => history.push('/Sugestao')}>
							<ListItem button>
								<ListItemIcon>
									<ExtensionIcon />
								</ListItemIcon>
								<ListItemText primary={'Sugest. Recebidas'} />
							</ListItem>
						</Link>

						<Link onClick={() => history.push('/AcessoADM')} >
							<ListItem button>
								<ListItemIcon>
									<ExtensionIcon />
								</ListItemIcon>
								<ListItemText primary={'Acesso ADM'} />
							</ListItem>
						</Link>
					</>
				}

			</Drawer>
			<Box sx={{ flexGrow: 1, p: 3, marginY: '5%' }}>
				{props.children}
			</Box>
		</div>
	);
}
