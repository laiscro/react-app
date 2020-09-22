import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import Rodape from './componentes/Rodape'
import Cabecalho from './componentes/Cabecalho'
import Inicio from './componentes/Inicio'
import Servico from './componentes/Servico'
import Portfolio from './componentes/Portfolio'
import Precos from './componentes/Precos'
import Contatos from './componentes/Contatos'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Cabecalho />

      <Route path='/' exact component={Inicio} />
      <Route path='/servico' component={Servico} />
      <Route path='/portfolio' component={Portfolio} />
      <Route path='/precos' component={Precos} />
      <Route path='/contatos' component={Contatos} />

      <Rodape />
      
    </div>
    </BrowserRouter>
  );
}

export default App;
