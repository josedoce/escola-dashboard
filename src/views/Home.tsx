import {connect} from 'react-redux'
import {
	Button,
	Card,
	Container,
} from 'react-bootstrap';
import {Nav} from '../components/Nav';
import styled from 'styled-components';
import { TableComponent } from '../components/TableComponent';
import { IDadosInput } from '../types';

interface Seila{
	topDez: any[];
	presidente: IDadosInput
}
const Titulo = styled.h1`
	color: #28a745;
`;
const NovoCard = styled(Card)`
	padding: 10px;
	margin: 5px 0;
	strong{
		color: #28a745;
	}
`;

function Home({topDez, presidente}:Seila){

  return(
    <Container>
      <Nav/>
        <Titulo>Home</Titulo>
          <NovoCard>
			<h4>Foco do projeto:</h4>
			<p>✔Aprender a usar o <strong>redux</strong>👮🏻</p>
			<p>✔Aprender incorporar <strong>redux</strong> com <strong>redux saga</strong>🧑‍⚖️</p>
			<p>✔Aprender a usar tudo isso no <strong>reactjs</strong> 🤗</p>
			<p>✔E tambem da um gás no visual com o <strong>bootstrap</strong> e <strong>styled-components</strong>💅</p>
			<Button 
				variant="outline-success" 
				role="a" 
				href="https://github.com/josedoce">
				meu github😁
			</Button>
		</NovoCard>
		<NovoCard>
			<p>O <strong>redux</strong> e <strong>redux-saga</strong> estarão agindo aqui, teste:</p>	
			<NovoCard>
					<h3>Presidente do gremio estudantil: <strong>{presidente!==undefined?presidente.nome:'Fulano'}</strong> </h3>
			</NovoCard>
			<NovoCard>
				<h3>Representantes de classe</h3>
				<TableComponent dados={topDez}/>
			</NovoCard>
		</NovoCard>
    </Container>
  )
} 

const stateProps = (state:Seila) => {
  return state;
}
export default connect(
  stateProps,
)(Home);