import { useState, useEffect } from 'react'
import axios from 'axios'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import AddBoxIcon from '@material-ui/icons/AddBox';
import { useHistory } from 'react-router-dom'
import ConfirmDialog from '../Components/ConfirmDialog'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { DataGrid } from '@material-ui/data-grid'

const useStyles = makeStyles(theme => ({
	table: {
		minWidth: 650,
	},
	dataGrid: {
		'& .MuiDataGrid-row button': {       // Esconde os botões na linha de tabela "normal"
			visibility: 'hidden'
		},
		'& .MuiDataGrid-row:hover button': { // Exibe os botões de volta quando o mouse passar por cima
			visibility: 'visible'
		}
	},
	toolbar: {
		justifyContent: 'flex-end',
		paddingRight: 0,
		margin: theme.spacing(2, 0)
	}
}));

export default function DadosList() {
	const classes = useStyles()

	// Variáveis que conterão dados PRECISAM ser inicializadas como vetores vazios
	const [dados, setDados] = useState([])
	const [deletable, setDeletable] = useState()        // Código do registro a ser excluído
	const [dialogOpen, setDialogOpen] = useState(false) // O diálogo de confirmação está aberto?
	const [sbOpen, setSbOpen] = useState(false)
	const [sbSeverity, setSbSeverity] = useState('success')
	const [sbMessage, setSbMessage] = useState('Exclusão realizada com sucesso.')
	const [gridLoading, setGridLoading] = useState(false)

	const history = useHistory()

	useEffect(() => {
		setTimeout(() => getData(), 100)
	}, [])

	async function getData() {
		setGridLoading(true)
		try {
			let { data } = await axios.get('http://localhost:3333/Colaborador')

			// Tratar Dados:
			data.map((d) => {
				d.dsSetor = d.fkSetor.dsSetor
				delete d.fkSetor
			})

			//console.log(data)
			if (data.length > 0) setDados(data)
		}
		catch (error) {
			console.error(error)
		}
		setGridLoading(false)
	}

	async function deleteItem() {
		try {
			await axios.delete(`https://api.faustocintra.com.br/dados/${deletable}`)
			getData()     // Atualiza os dados da tabela
			setSbSeverity('success')
			setSbMessage('Exclusão efetuada com sucesso.')
		}
		catch (error) {
			setSbSeverity('error')
			setSbMessage('ERRO: ' + error.message)
		}
		setSbOpen(true)   // Exibe a snackbar
	}

	function handleDialogClose(result) {
		setDialogOpen(false)

		// Se o usuário concordou com a exclusão 
		if (result) deleteItem()
	}

	function handleDelete(id) {
		setDeletable(id)
		setDialogOpen(true)
	}

	function handleSbClose() {
		setSbOpen(false)    // Fecha a snackbar
	}

	const columns = [
		{
			field: 'id',
			headerName: 'Cód.',
			align: 'right',
			headerAlign: 'right',
			flex: true,
		},
		{
			field: 'stAtivo',
			headerName: 'Ativo?',
			flex: true,
			renderCell: params => (
				<Checkbox checked={params.value === "S"} readOnly disabled />
			)
		},
		{
			field: 'dsEmail',
			headerName: 'Email',
			flex: true
		},
		{
			field: 'dsColaborador',
			headerName: 'Nome',
			/* align: 'center',
			headerAlign: 'center', */
			flex: true
		},
		{
			field: 'dsSetor',
			headerName: 'Setor',
			flex: true,
		},
		{
			field: 'editar',
			headerName: 'Editar',
			align: 'center',
			headerAlign: 'center',
			flex: true,
			renderCell: params => (
				<IconButton onClick={() => window.location.href = `http://localhost:3000/Colaborador/edit/${params.id}`}>
					<EditIcon />
				</IconButton>
			)
		},
		{
			field: 'excluir',
			headerName: 'Excluir',
			align: 'center',
			headerAlign: 'center',
			flex: true,
			renderCell: params => (
				<IconButton onClick={() => handleDelete(params.id)}>
					<DeleteIcon color="error" />
				</IconButton>
			)
		},
	];

	return (
		<>
			<ConfirmDialog isOpen={dialogOpen} onClose={handleDialogClose}>
				Deseja realmente excluir este karango?
			</ConfirmDialog>

			<Snackbar open={sbOpen} autoHideDuration={6000} onClose={handleSbClose}>
				<MuiAlert elevation={6} variant="filled" onClose={handleSbClose} severity={sbSeverity}>
					{sbMessage}
				</MuiAlert>
			</Snackbar>

			<h1 onClick={() => getData()}>Listagem de Colaboradores</h1>
			<Toolbar className={classes.toolbar}>
				<Button color="secondary" variant="contained" size="large"
					startIcon={<AddBoxIcon />} onClick={() => history.push('/new')}>
					Novo Colaborador
				</Button>
			</Toolbar>
			<Paper elevation={4}>
				<DataGrid className={classes.dataGrid} rows={dados}
					columns={columns} pageSize={10} autoHeight={true}
					loading={gridLoading} disableSelectionOnClick={true} />
			</Paper>
		</>
	)
}