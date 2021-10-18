import * as React from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import Drawer from './ui/Drawer';
import Home from './ui/Home';
import Empresa from './ui/Empresa';
import Sugestoes from './ui/Sugestoes';
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
        </Switch>
      </Box>
    </BrowserRouter>
  </StyledEngineProvider>,
  document.querySelector("#root")
);