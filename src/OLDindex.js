import * as React from 'react';
import { render } from 'react-dom';

import { BrowserRouter, Redirect, Route, Router, Switch } from 'react-router-dom'
import { Box } from '@mui/material';

import { MuiThemeProvider, createTheme, makeStyles } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan'
import orange from '@material-ui/core/colors/red'

/* páginas: */
import Drawer from './ui/Components/Drawer'
import Home from './ui/Home'
import Empresa from './ui/Empresa'
import Sugestoes from './ui/Sugestoes'
import Politicas from './ui/Politicas'
import Pabx from './ui/Pabx'

// ADM:
import ADMDrawer from './ui/Components/ADMDrawer';
import ADMColaboradorList from './ui/AreaADM/ADMColaboradorList'
import ADMColaboradorForm from './ui/AreaADM/ADMColaboradorList'
import ADMComunicadoList from './ui/AreaADM/ADMComunicadoList'
import ADMComunicadoForm from './ui/AreaADM/ADMComunicadoForm'
import ADMEmpresaList from './ui/AreaADM/ADMEmpresaList'
import ADMEmpresaForm from './ui/AreaADM/ADMEmpresaForm'
import ADMSetorList from './ui/AreaADM/ADMSetorList'
import ADMSetorForm from './ui/AreaADM/ADMSetorForm'
import ADMPoliticaList from './ui/AreaADM/ADMPoliticaList'
import ADMPoliticaForm from './ui/AreaADM/ADMPoliticaForm'
import ADMRamalList from './ui/AreaADM/ADMRamalList'
import ADMRamalForm from './ui/AreaADM/ADMRamalForm'
import ADMPabxList from './ui/AreaADM/ADMPabxList'
import ADMPabxForm from './ui/AreaADM/ADMPabxForm'
import ADMSugestaoList from './ui/AreaADM/ADMSugestaoList'
import ADMSugestaoForm from './ui/AreaADM/ADMSugestaoForm'
import ADMAcessoList from './ui/AreaADM/ADMAcessoList'
import ADMAcessoForm from './ui/AreaADM/ADMAcessoForm'


const theme = createTheme({
  palette: {
    /* type: 'dark', */
    primary: {
      main: orange[300],
    },
    secondary: {
      main: cyan[500],
    },
  },
})

render(
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <Box id="routed" >
        <Drawer>
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/app-sugestoes">
              <Sugestoes />
            </Route>
            <Route exact path="/app-empresas">
              <Empresa />
            </Route>
            {/* <Route exact path="/app-ramais">
          <Ramais />
        </Route> */}
            {/* <Route exact path="/app-emails">
          <Emails />
        </Route> */}
            <Route exact path="/app-politicas">
              <Politicas />
            </Route>
            <Route exact path="/app-pabx">
              <Pabx />
            </Route>
            <Route exact path="/app-login">
              {/* <Drawer corpo={<Login /> */}
            </Route>


            {/* ADM: */}
            <Route exact path="/ADM">
              {/* <Drawer corpo={<ADMHome /> */}
            </Route>
            <Route exact path="/Colaborador" component={ADMColaboradorList} />
            <Route exact path="/Colaborador/novo" component={ADMColaboradorForm} />
            <Route exact path="/Colaborador/edit/:id" component={ADMColaboradorForm} />

            <Route exact path="/Comunicado">
              <ADMComunicadoList />
            </Route>
            <Route exact path="/Comunicado/novo">
              <ADMComunicadoForm />
            </Route>
            <Route exact path="/Comunicado/edit/:id">
              <ADMComunicadoForm />
            </Route>
            <Route exact path="/Empresa">
              <ADMEmpresaList />
            </Route>
            <Route exact path="/Empresa/novo">
              <ADMEmpresaForm />
            </Route>
            <Route exact path="/Empresa/edit/:id">
              <ADMEmpresaForm />
            </Route>
            <Route exact path="/Setor">
              <ADMSetorList />
            </Route>
            <Route exact path="/Setor/novo">
              <ADMSetorForm />
            </Route>
            <Route exact path="/Setor/edit/:id">
              <ADMSetorForm />
            </Route>
            <Route exact path="/Politica">
              <ADMPoliticaList />
            </Route>
            <Route exact path="/Politica/novo">
              <ADMPoliticaForm />
            </Route>
            <Route exact path="/Politica/edit/:id">
              <ADMPoliticaForm />
            </Route>
            <Route exact path="/Ramal">
              <ADMRamalList />
            </Route>
            <Route exact path="/Ramal/novo">
              <ADMRamalForm />
            </Route>
            <Route exact path="/Ramal/edit/:id">
              <ADMRamalForm />
            </Route>
            <Route exact path="/Pabx">
              <ADMPabxList />
            </Route>
            <Route exact path="/Pabx/novo">
              <ADMPabxForm />
            </Route>
            <Route exact path="/Pabx/edit/:id">
              <ADMPabxForm />
            </Route>
            <Route exact path="/Sugestao">
              <ADMSugestaoList />
            </Route>
            <Route exact path="/AcessoADM">
              <ADMAcessoList />
            </Route>
            <Route exact path="/AcessoADM/novo">
              <ADMAcessoForm />
            </Route>
            <Route exact path="/AcessoADM/edit/:id">
              <ADMAcessoForm />
            </Route>
            {/* <Redirect from="*" to="/" /> */}
          </Switch>

        </Drawer>
      </Box>
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'))