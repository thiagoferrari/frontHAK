import Drawer from './ui/Components/Drawer';
import Home from './ui/Home';
import Empresa from './ui/Empresa';
import Sugestoes from './ui/Sugestoes';
import Politicas from './ui/Politicas';
import Pabx from './ui/Pabx';

// ADM:
import ADMDrawer from './ui/Components/ADMDrawer';
import ADMColaboradorList from './ui/AreaADM/ADMColaboradorList'
import ADMColaboradorForm from './ui/AreaADM/ADMColaboradorForm'

import * as React from 'react';
import { render } from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Box } from '@mui/material';

import { MuiThemeProvider, createTheme, makeStyles } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan'
import orange from '@material-ui/core/colors/red'


const theme = createTheme({
  palette: {
    type: 'dark',
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
        <Switch>
          <Route exact path="/">
            <Drawer corpo={<Home />} />
          </Route>
          <Route exact path="/sugestoes">
            <Drawer corpo={<Sugestoes />} />
          </Route>
          <Route exact path="/empresa">
            <Drawer corpo={<Empresa />} />
          </Route>
          {/*           <Route exact path="/ramais">
            <Drawer corpo={<Ramais />} />
          </Route>
          <Route exact path="/emails">
            <Drawer corpo={<Emails />} />
          </Route> */}
          <Route exact path="/politicas">
            <Drawer corpo={<Politicas />} />
          </Route>
          <Route exact path="/pabx">
            <Drawer corpo={<Pabx />} />
          </Route>




          {/*ÁREA ADM*/}
          <Route exact path="/login">
            {/* <Drawer corpo={<Login />} /> */}
          </Route>
          <Route exact path="/ADM">
            {/* <Drawer corpo={<ADMHome />} /> */}
          </Route>
          <Route exact path="/Colaborador">
            <ADMDrawer corpo={<ADMColaboradorList />} />
          </Route>
          <Route exact path="/Colaborador/novo">
            <ADMDrawer corpo={<ADMColaboradorForm />} />
          </Route>
          <Route path="/Colaborador/edit/:id">
            <ADMDrawer corpo={<ADMColaboradorForm />} />
          </Route>
        </Switch>
      </Box>
    </MuiThemeProvider>
  </BrowserRouter>,
  document.querySelector("#root")
);