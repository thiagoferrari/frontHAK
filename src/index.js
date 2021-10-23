import * as React from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import Drawer from './ui/Drawer';
import Home from './ui/Home';
import Empresa from './ui/Empresa';
import Sugestoes from './ui/Sugestoes';
import Politicas from './ui/Politicas';
import Pabx from './ui/Pabx';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Box } from '@mui/material';

ReactDOM.render(
  <StyledEngineProvider injectFirst>
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
        </Switch>
      </Box>
    </BrowserRouter>
  </StyledEngineProvider>,
  document.querySelector("#root")
);