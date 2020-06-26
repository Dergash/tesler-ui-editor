import {AppState} from '../reducers'
import { CustomAnyAction } from '../actions/actions'

export declare type TeslerCoreReducer<ReducerState, ClientActions, State = Readonly<AppState>> =
    (state: ReducerState, action: CustomAnyAction & ClientActions, store?: Readonly<State>) => ReducerState

export interface TeslerClientReducer<ReducerState, ClientActions> {
    initialState: ReducerState
    override?: boolean
    reducer: TeslerCoreReducer<ReducerState, ClientActions>
}

export declare type TeslerClientReducersMapObject<ClientStore, ClientActions> = {
    [reducerName in keyof ClientStore]: TeslerClientReducer<ClientStore[keyof ClientStore], ClientActions>;
}
