import { useState } from 'react';
import axios from 'axios';
import * as S from './styled'

function App(props) {
  const [ usuario, setUsuario ] = useState('');

  function handlePesquisa() {
    axios
    .get(`https://api.github.com/users/${usuario}/repos`)
    .then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((reposiory) => {
        repositoriesName.push(reposiory.name);
      })
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
    });
  };

  return (

    <S.container>
      <S.input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
      <S.button type="button" onClick={handlePesquisa}>Pesquisar</S.button>
    </S.container>
  );
}

export default App;