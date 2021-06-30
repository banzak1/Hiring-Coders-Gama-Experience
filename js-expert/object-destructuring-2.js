const filmes = [
    {
        id:1,
        titulo:"Interestelar",
        descricao:"Ficção",
        duracao: 180

    },
    {
        id:2,
        titulo:"Tron",
        descricao:"Ficção",
        duracao: 180

    },
    {
        id:3,
        titulo:"Thor",
        descricao:"Ficção",
        duracao: 180

    }
];

const [{ id, titulo, descricao, duracao }] = filmes;

filmes.map(filme => console.log(filme.descricao));
