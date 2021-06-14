import {
    Form,
    Row,
    Col,
    Card,
    Button,
} from 'react-bootstrap';
import styled from 'styled-components';

const NovoCard = styled(Card)`
  padding: 10px;
  margin: 4px 0;
  strong{
    color: #28a745;
  }
`;

const NovoSubCard = styled(NovoCard)`
    margin-top: 10px;
    margin-right: 15px;
`;
const NovoSubCardOne = styled(NovoCard)`
    margin-top: 10px;
`;
const Titulo = styled.h2`
    color: #28a745;
    text-align: center;
`;
interface IEspacim {
    espacinho?: string;
}
const Espacim = styled.div`
    margin: ${({espacinho}:IEspacim)=>espacinho} 0px;
`;


export default function FormularioComponent({coloqueDados, salveBotao, formulario, limpeForm}){
    const salas:string[] = [
        "0-A", "1-A", "2-A", "3-A", "4-A", "5-A", "6-A", "7-A", "8-A", "9-A",
        "0-B", "1-B", "2-B", "3-B", "4-B", "5-B", "6-B", "7-B", "8-B", "9-B"
    ];
    const anos:number[] = [2015, 2016, 2017, 2018, 2019, 2020, 2021];
    return (
        <>
        <Form>
            <Row>
                <Col>
                    <Form.Control 
                        placeholder="nome"
                        value={formulario.nome}
                        onChange={(e)=>coloqueDados({nome: e.target.value})}
                    />
                </Col>
                <Col>
                    <Form.Control 
                        placeholder="sobrenome"
                        value={formulario.sobrenome}
                        onChange={(e)=>coloqueDados({sobrenome: e.target.value})} 
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <NovoSubCardOne>
                        <Form.Group controlId="formGridState">
                            <Form.Control as="select" defaultValue="Sala"
                            onChange={(e)=>coloqueDados({sala: e.target.value})}
                            >
                                <option>Salas</option>
                                {salas.map((e)=>(
                                    <option key={e} value={e}>{e}</option>
                                ))}
                            </Form.Control>
                            <Espacim espacinho="10px"/>
                            <Form.Control as="select" defaultValue="Ano"
                            onChange={(e)=>coloqueDados({ano: e.target.value})}>
                                <option value="Ano">Ano</option>
                                {anos.map((e)=>(
                                    <option value={e} key={e}>{e}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </NovoSubCardOne>
                </Col>
                <NovoSubCard>
                    <Row>
                        <Col>
                            <Titulo>Votos do <strong>aluno</strong></Titulo>
                        </Col>
                    </Row>
                    <Row>
                    <Col >
                        <Form.Control 
                            placeholder="candidato"
                            value={formulario.candidato} 
                            onChange={(e)=>coloqueDados({candidato: e.target.value})}
                        />
                        </Col>
                        <Col>
                        <Form.Control 
                            placeholder="adversário"
                            value={formulario.adversario}
                            onChange={(e)=>coloqueDados({adversario: e.target.value})}
                        />
                        </Col>
                    </Row>
                </NovoSubCard>
            </Row>
            <Row>
                <Col>
                    <Espacim espacinho="5px"/>
                    <Button onClick={salveBotao}>Salvar</Button>
                    <Button className="ml-1" variant="danger" onClick={limpeForm}>Limpar</Button>
                </Col>
                
            </Row>
        </Form>
        </>
    )
}