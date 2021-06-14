import {
    DropdownButton,
	Dropdown,
    Table,
    Spinner
} from 'react-bootstrap';
import { event } from '../store/actions';
import styled from 'styled-components';
const TdId = styled.th`
	font-size: 10px;
	display: inline-block;
	white-space: nowrap;
	width: 56px;
	height: 55px;
	overflow: hidden;
	text-overflow: ellipsis;
	color: red;
`;

function TableActionsComponent({dados,onUserAction}){
    return(
        <Table striped bordered hover>
			<thead>
				<tr>
					<th>id</th>
					<th>nome</th>
					<th>sobrenome</th>
					<th>sala</th>
					<th>votos cdt|adv</th>
					<th>ano</th>
					<th>acões</th>
				</tr>
			</thead>
			<tbody>
				{dados.length!==0?dados.map((d:any)=>(
					<tr key={d.id}>
						<TdId>{d.id}</TdId>
						<td>{d.nome}</td>
						<td>{d.sobrenome}</td>
						<td>{d.sala}</td>
						<td>{d.candidato}/{d.adversario}</td>
						<td>{d.ano}</td>
						<td>
						<DropdownButton
							id="dropdown-button-dark-example2"
							variant="secondary"
							title="ações"
							size="sm"
						>
							<Dropdown.Item
							onClick={()=>onUserAction({acao: event.DETALHE, aluno: d})}
							
							active>
								detalhes
							</Dropdown.Item>
							<Dropdown.Item
							disabled
							onClick={()=>onUserAction({acao: event.TIRAR_DO_TOP, aluno: d})}
							>
								- top 10
							</Dropdown.Item>
							<Dropdown.Item
							disabled
							onClick={()=>onUserAction({acao: event.BOTAR_NO_TOP, aluno: d})}
							>
								+ top 10
							</Dropdown.Item>

							<Dropdown.Item
							onClick={()=>onUserAction({acao: event.ADD_PRESIDENTE, aluno: d})}
							>
								add presidente
							</Dropdown.Item>
							<Dropdown.Item
							onClick={()=>onUserAction({acao: event.ADD_REPRESENTANTE, aluno: d})}
							>
								add representante
							</Dropdown.Item>
							<Dropdown.Divider />
							<Dropdown.Item
							onClick={()=>onUserAction({acao: event.DELETAR_ALUNO, aluno: d})}
							>
								deletar
							</Dropdown.Item>
						</DropdownButton>
						</td>
					</tr>
				)):<tr><td style={{textAlign: 'center'}} colSpan={7}><Spinner animation="border" variant="success" /></td></tr>
			}
			</tbody>
		</Table>
    )
}


export default TableActionsComponent;