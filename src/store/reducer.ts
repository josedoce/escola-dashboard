import {IDadosInput, ITopDez} from '../types/index';
import { event } from './actions';
interface IStateInicial {
    presidente?: IDadosInput;
    topDez: ITopDez[];
    dados: IDadosInput[]; 
}
const stateInicial: IStateInicial = {
    presidente: undefined,
    topDez: [],
    dados: []
}

const reducer = (state=stateInicial, action: any)=>{
    switch (action.type) {
        case event.DETALHE:
            /**
             * detalhes nao tem nada de especial
             * por enquanto.
             */
            return state;
        
        case event.TIRAR_DO_TOP:
            const filtrado = state.topDez.filter((e)=>e.id !== action.payload.id);
            return {
                ...state,
                topDez: filtrado
            };

        case event.BOTAR_NO_TOP:
            /**
             * Essa funcionalidade ficou sem sentido,
             * entao optei por desabilita-la por
             * enquanto.
             */
            return {
                ...state,
            }
        
        case event.ADD_PRESIDENTE:
            
            if(state.presidente){
                alert('Já existe um presidente!');
                return {...state};
            }
            
            return {
                ...state,
                presidente: action.payload
            };
        
        case event.ADD_REPRESENTANTE:
            state.topDez.push(action.payload)
            return {
                ...state
            };
        
        case 'SET_DADOS_SALVOS':
            return {
                ...state,
                dados: action.payload
            }
            
        default:
            return state;
    } 
}

export default reducer;