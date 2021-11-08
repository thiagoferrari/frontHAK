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
});


render(
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <Box id="routed" >
        <Drawer>
          <Route exact path="/" component={Home} />
          <Route exact path="/app-sugestoes" component={Sugestoes} />
          <Route exact path="/app-empresas" component={Empresa} />
          <Route exact path="/app-ramais" component={Ramais} />
          <Route exact path="/app-emails" component={Emails} />
          <Route exact path="/app-politicas" component={Politicas} />
          <Route exact path="/app-pabx" component={Pabx} />
          <Route exact path="/app-login" component={Login} />

          {/* ADM: */}
          <Route exact path="/ADM" /* component={ADMHome} */ />

          {/* <Route exact path="/Colaborador" component={ADMColaboradorList} />
          <Route path="/Colaborador/novo" component={ADMColaboradorForm} /> */}
          <Route path="/Colaborador/:id" component={ADMColaboradorForm} />

          {/* <Route exact path="/Comunicado" component={ADMComunicadoList} />
            <Route exact path="/Comunicado/novo" component={ADMComunicadoForm} />
            <Route exact path="/Comunicado/edit/:id" component={ADMComunicadoForm} />

            <Route exact path="/Empresa" component={ADMEmpresaList} />
            <Route exact path="/Empresa/novo" component={ADMEmpresaForm} />
            <Route exact path="/Empresa/edit/:id" component={ADMEmpresaForm} />

            <Route exact path="/Setor" component={ADMSetorList} />
            <Route exact path="/Setor/novo" component={ADMSetorForm} />
            <Route exact path="/Setor/edit/:id" component={ADMSetorForm} />

            <Route exact path="/Politica" component={ADMPoliticaList} />
            <Route exact path="/Politica/novo" component={ADMPoliticaForm} />
            <Route exact path="/Politica/edit/:id" component={ADMPoliticaForm} />

            <Route exact path="/Ramal" component={ADMRamalList} />
            <Route exact path="/Ramal/novo" component={ADMRamalForm} />
            <Route exact path="/Ramal/edit/:id" component={ADMRamalForm} />

            <Route exact path="/Pabx" component={ADMPabxList} />
            <Route exact path="/Pabx/novo" component={ADMPabxForm} />
            <Route exact path="/Pabx/edit/:id" component={ADMPabxForm} />

            <Route exact path="/Sugestao" component={ADMSugestaoList} />

            <Route exact path="/AcessoADM" component={ADMAcessoList} />
            <Route exact path="/AcessoADM/novo" component={ADMAcessoForm} />
            <Route exact path="/AcessoADM/edit/:id" component={ADMAcessoForm} /> */}
        </Drawer>
        {/* </Switch> */}
      </Box>
    </MuiThemeProvider>
  </BrowserRouter>,
  document.querySelector("#root")
);