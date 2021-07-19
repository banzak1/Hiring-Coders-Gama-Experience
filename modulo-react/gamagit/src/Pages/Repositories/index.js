import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

export default function Repositories() {
    const history = useHistory();
    const [ repositories, setRepositories ] = useState([]);

    useEffect(() => {
        
        let repositoriesName = localStorage.getItem('repositoriesName');
        if (repositoriesName != null) {
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName);
            localStorage.clear();
        } else {
            history.push('/')
        }

    }, []);

    return (
        <S.container>
        <S.title>Repositórios</S.title>
        <S.list>
            { repositories.map(repository => {
                return (
                    <S.listItem>Repositório: { repository }</S.listItem>
                )
            }) }
        </S.list>
        <S.LinkHome to="/">Voltar</S.LinkHome>
        </S.container>
    );
};