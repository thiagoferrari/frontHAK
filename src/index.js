import * as React from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import Drawer from './ui/Components/Drawer';
import Home from './ui/Home';
import Empresa from './ui/Empresa';
import Sugestoes from './ui/Sugestoes';
import Politicas from './ui/Politicas';
import Pabx from './ui/Pabx';

// ADM:
import ADMDrawer from './ui/Components/ADMDrawer';
import ADMColaborador from  './ui/AreaADM/ADMColaborador'


import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Box } from '@mui/material';

ReactDOM.render(
  <BrowserRouter>
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


        <Route exact path="/login">
          {/* <Drawer corpo={<Login />} /> */}
        </Route>
        <Route exact path="/Colaborador">
          {/* <Drawer corpo={<ADMHome />} /> */}
          <ADMDrawer corpo={<ADMColaborador />} />
        </Route>

      </Switch>
    </Box>
  </BrowserRouter>,
  document.querySelector("#root")
);