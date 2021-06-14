export interface IDadosInput{
    id: string|number;
    nome: string;
    sobrenome: string;
    sala: string;
    ano: string|number;
    candidato: string;
    adversario: string;
    situacao: string;
}

export interface ITopDez {
    id: string|number;
    nome: string;
    sobrenome: string;
    sala: string;
    votos: string;
    ano: string;
}