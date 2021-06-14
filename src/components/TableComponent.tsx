import {
	Table,
	Spinner,
} from 'react-bootstrap';

export function TableComponent({dados}){
    return(
        <Table striped bordered hover>
			<thead>
				<tr>
					<th>ranking</th>
					<th>nome</th>
					<th>sobrenome</th>
					<th>sala</th>
					<th>votos cdt|adv</th>
					<th>ano</th>
				</tr>
			</thead>
			<tbody>
				{dados.length!==0?dados.map((d:any)=>(
					<tr key={d.id}>
						<td>{d.id}</td>
						<td>{d.nome}</td>
						<td>{d.sobrenome}</td>
						<td>{d.sala}</td>
						<td>{d.candidato}/{d.adversario}</td>
						<td>{d.ano}</td>
					</tr>
				)):<tr><td style={{textAlign: 'center'}} colSpan={6}><Spinner animation="border" variant="success" /></td></tr>
			}
			</tbody>
		</Table>
    )
}

