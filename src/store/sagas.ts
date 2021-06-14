import { all, call, put, takeLatest} from 'redux-saga/effects';
import { event } from './actions';

async function createLS(acao){
   const data = JSON.stringify(acao);
   localStorage.setItem('alunos',data);
}

async function getLS(acao){
   let data = [];
   if(localStorage.getItem('alunos')==null){
      localStorage.setItem('alunos',JSON.stringify(data));
      return;
   }
   let dados = JSON.parse(JSON.stringify(localStorage.getItem('alunos')));
   return JSON.parse(dados);
}

function* salveAluno(action){
   const localStorageData = yield call(getLS, action);
   const salve = localStorageData.concat(action.payload);
   yield call(createLS, salve);
   yield put({
      type: 'SET_DADOS_SALVOS',
      payload: salve
   })
}

function* deletarAluno(action){
   const localStorageData = yield call(getLS, action);
   const alunoApagado = localStorageData.filter((e)=>e.id !== action.payload.id);
   yield call(createLS, alunoApagado);
   yield put({
      type: 'SET_DADOS_SALVOS',
      payload: alunoApagado
   })
}
/**
 * Esta saga garantirá sincronia
 * entre o LocalStorage e a tabela.
 */
function* updateOnLoadSaga(){
   const payload = yield call<any>(getLS);
   yield put({
      type: 'SET_DADOS_SALVOS',
      payload: payload
   })
}

export default function* rootSaga(){
   yield all([
      updateOnLoadSaga(),
      yield takeLatest(event.SALVAR_DADOS, salveAluno),
      yield takeLatest(event.DELETAR_ALUNO, deletarAluno)
   ]);
}