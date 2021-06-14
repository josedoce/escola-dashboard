import { useState } from 'react';
import { connect } from 'react-redux'
import {Nav} from '../components/Nav';
import {
  Card,
  Container,
  Modal,
  Button
} from 'react-bootstrap';
import styled from 'styled-components';
import TableActionsComponent from '../components/TableActionsComponent';
import FormularioComponent from '../components/FormularioComponent';
import { event } from '../store/actions';
import {IDadosInput} from '../types/index';
import uuid from 'react-uuid';

const Titulo = styled.h1`
  color: #28a745;
`;
const SubTitulo = styled.h2`
  font-size: 25px;
  color: #28a745;
`;
const NovoCard = styled(Card)`
  padding: 10px;
  margin: 4px 0;
  strong{
    color: #28a745;
  }
`;
const ListaModal = styled.ul`
  strong{
    color: #28a745;
  }
`;

interface IDadosModal {
  acao: string;
  aluno: IDadosInput;
}
function Admin({salve, dados, setAcao}:any){
  const dadosDefault: IDadosInput = {
    id: '',
    nome: '',
    sobrenome: '',
    sala: '',
    ano: '',
    candidato: '',
    adversario: '',
    situacao: '',
  }
  const [inputData, setInputData] = useState<IDadosInput>(dadosDefault);
  function setDados(dds){ //aqui pego o input do formulario
    setInputData({
      ...inputData,
      ...dds,
    });
  }

  
  function onLimpar(){
    setInputData(dadosDefault);
  }
  function onSalvar(){// aqui pego o click do salve
    inputData.id = uuid();
    salve(inputData);
    onLimpar();
  }
   
  const [show, setShow] = useState(false);
  const [modelUser, setModelUser] = useState<IDadosModal>({acao: '', aluno: dadosDefault});
  const handleClose = () => setShow(false);
  
  function getAcaoCode(acao, dado){
    switch (acao) {
      case '1':
        return 'Detalhes de '+dado.nome;
      case '3':
        return 'Colocar no top 10 '+dado.nome;
      default:
        return 'Acao invalida.'
    }
  }

  function acao(value){ //aqui pego as ações da tabela
    setModelUser(value);
    setShow(true);
  }
  return (
    <Container>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{getAcaoCode(modelUser.acao, modelUser.aluno)}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListaModal>
            <li><strong>id: </strong>{modelUser.aluno.id}</li>
            <li><strong>nome: </strong>{modelUser.aluno.nome}</li>
            <li><strong>sobrenome: </strong>{modelUser.aluno.sobrenome}</li>
            <li><strong>sala: </strong>{modelUser.aluno.sala}</li>
            <li><strong>votos: </strong>{modelUser.aluno.candidato}/{modelUser.aluno.adversario}</li>
            <li><strong>ano: </strong>{modelUser.aluno.ano}</li>
          </ListaModal>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" 
            onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" 
            onClick={()=>{
              handleClose();
              setAcao(modelUser.acao, modelUser.aluno);
            }}> 
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
      <Nav/>
      <Titulo>Administração</Titulo>
      <NovoCard>
        <p>O <strong>redux</strong> e <strong>redux-saga</strong> estarão agindo aqui de forma global, teste:</p>

        <NovoCard>
          <SubTitulo>Salve um <strong>aluno</strong> aqui</SubTitulo>
          <FormularioComponent
            formulario={inputData}
            limpeForm={onLimpar}  
            coloqueDados={setDados} 
            salveBotao={onSalvar}/>
        </NovoCard>

        <NovoCard>
          <SubTitulo>Ranking de <strong>alunos</strong> aqui</SubTitulo>
          <TableActionsComponent dados={dados} onUserAction={acao}/>
        </NovoCard>
      </NovoCard>
    </Container>
  )
}

function stateProps(state){
  return state;
}

const dispatchProps = {
  salve: (dados)=>({
    type: event.SALVAR_DADOS,
    payload: dados
  }),
  setAcao: (acao,dados)=>({
    type: acao,
    payload: dados
  }),
}

export default connect(
  stateProps,
  dispatchProps
)(Admin);