import Drawer from './ui/Components/Drawer';
import Home from './ui/Home';
import Empresa from './ui/Empresa';
import Sugestoes from './ui/Sugestoes';
import Politicas from './ui/Politicas';
import Pabx from './ui/Pabx';
import Ramais from './ui/Ramais';
import Emails from './ui/Emails';
import Login from './ui/Login';

// ADM:
import ADMDrawer from './ui/Components/ADMDrawer';
import ADMColaboradorList from './ui/AreaADM/ADMColaboradorList'
import ADMColaboradorForm from './ui/AreaADM/ADMColaboradorForm'
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
import ADMAcessoList from './ui/AreaADM/ADMAcessoList'
import ADMAcessoForm from './ui/AreaADM/ADMAcessoForm'


import * as React from 'react';
import { render } from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Box } from '@mui/material';

import { MuiThemeProvider, createTheme, makeStyles } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan'
import orange from '@material-ui/core/colors/red'


const theme = createTheme({
  palette: {
    /* type: 'dark', */
    primary: {
      main: orange[500],
    },
    secondary: {
      main: cyan[500],
    },
  },
  typography: {
    "fontFamily": `'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', sans-serif`,
  }
});


render(
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <Box id="routed" >
        <Switch>
          <Route exact path="/">
            <Drawer corpo={<Home />} />
          </Route>
          <Route exact path="/app-sugestoes">
            <Drawer corpo={<Sugestoes />} />
          </Route>
          <Route exact path="/app-empresas">
            <Drawer corpo={<Empresa />} />
          </Route>
          <Route exact path="/app-ramais">
            <Drawer corpo={<Ramais />} />
          </Route>
          <Route exact path="/app-emails">
            <Drawer corpo={<Emails />} />
          </Route>
          <Route exact path="/app-politicas">
            <Drawer corpo={<Politicas />} />
          </Route>
          <Route exact path="/app-pabx">
            <Drawer corpo={<Pabx />} />
          </Route>



          {/*ÁREA ADM*/}
          <Route exact path="/app-login">
            <Drawer corpo={<Login />} />
            {/* <ADMDrawer corpo={<ADMAcessoList />} /> */}
          </Route>
          <Route exact path="/Colaborador">
            <ADMDrawer corpo={<ADMColaboradorList />} />
          </Route>
          <Route exact path="/Colaborador/novo">
            <ADMDrawer corpo={<ADMColaboradorForm />} />
          </Route>
          <Route exact path="/Colaborador/edit/:id">
            <ADMDrawer corpo={<ADMColaboradorForm />} />
          </Route>

          <Route exact path="/Comunicado">
            <ADMDrawer corpo={<ADMComunicadoList />} />
          </Route>
          <Route exact path="/Comunicado/novo">
            <ADMDrawer corpo={<ADMComunicadoForm />} />
          </Route>
          <Route exact path="/Comunicado/edit/:id">
            <ADMDrawer corpo={<ADMComunicadoForm />} />
          </Route>

          <Route exact path="/Empresa">
            <ADMDrawer corpo={<ADMEmpresaList />} />
          </Route>
          <Route exact path="/Empresa/novo">
            <ADMDrawer corpo={<ADMEmpresaForm />} />
          </Route>
          <Route exact path="/Empresa/edit/:id">
            <ADMDrawer corpo={<ADMEmpresaForm />} />
          </Route>

          <Route exact path="/Setor">
            <ADMDrawer corpo={<ADMSetorList />} />
          </Route>
          <Route exact path="/Setor/novo">
            <ADMDrawer corpo={<ADMSetorForm />} />
          </Route>
          <Route exact path="/Setor/edit/:id">
            <ADMDrawer corpo={<ADMSetorForm />} />
          </Route>

          <Route exact path="/Politica">
            <ADMDrawer corpo={<ADMPoliticaList />} />
          </Route>
          <Route exact path="/Politica/novo">
            <ADMDrawer corpo={<ADMPoliticaForm />} />
          </Route>
          <Route exact path="/Politica/edit/:id">
            <ADMDrawer corpo={<ADMPoliticaForm />} />
          </Route>

          <Route exact path="/Ramal">
            <ADMDrawer corpo={<ADMRamalList />} />
          </Route>
          <Route exact path="/Ramal/novo">
            <ADMDrawer corpo={<ADMRamalForm />} />
          </Route>
          <Route exact path="/Ramal/edit/:id">
            <ADMDrawer corpo={<ADMRamalForm />} />
          </Route>

          <Route exact path="/Pabx">
            <ADMDrawer corpo={<ADMPabxList />} />
          </Route>
          <Route exact path="/Pabx/novo">
            <ADMDrawer corpo={<ADMPabxForm />} />
          </Route>
          <Route exact path="/Pabx/edit/:id">
            <ADMDrawer corpo={<ADMPabxForm />} />
          </Route>

          <Route exact path="/Pabx">
            <ADMDrawer corpo={<ADMPabxList />} />
          </Route>
          <Route exact path="/Pabx/novo">
            <ADMDrawer corpo={<ADMPabxForm />} />
          </Route>
          <Route exact path="/Pabx/edit/:id">
            <ADMDrawer corpo={<ADMPabxForm />} />
          </Route>

          <Route exact path="/Login">
            <ADMDrawer corpo={<ADMAcessoList />} />
          </Route>
          <Route exact path="/Login/novo">
            <ADMDrawer corpo={<ADMAcessoForm />} />
          </Route>
          <Route exact path="/Login/edit/:id">
            <ADMDrawer corpo={<ADMAcessoForm />} />
          </Route>

          <Route exact path="/Sugestao">
            <ADMDrawer corpo={<ADMSugestaoList />} />
          </Route>
        </Switch>
      </Box>
    </MuiThemeProvider>
  </BrowserRouter>,
  document.querySelector("#root")
);