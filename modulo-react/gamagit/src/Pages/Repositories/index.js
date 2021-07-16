import React, { useEffect, useState } from 'react';
import * as S from './styled';


export default function Repositories() {

    const [ repositories, setRepositories ] = useState([]);

    useEffect(() => {
        
        let repositoriesName = localStorage.getItem('repositoriesName');
        repositoriesName = JSON.parse(repositoriesName);
        setRepositories(repositoriesName);
        localStorage.clear();
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