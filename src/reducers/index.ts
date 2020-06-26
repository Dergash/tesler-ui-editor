import screenReducer, {initialState as screenInitialState} from './screen'
// import viewReducer, {initialState as viewInitialState} from 'reducers/view'
import {Store} from '@tesler-ui/core/interfaces/store'
import {EditorScreenState} from '../interfaces/screen'
import {TeslerClientReducersMapObject} from '../interfaces/store'

export const reducers: TeslerClientReducersMapObject<AppReducers, any> = {
    screen: {
        initialState: screenInitialState,
        reducer: screenReducer
    },
/*    view: {
        initialState: viewInitialState,
        reducer: viewReducer
    }
*/
}

export interface AppReducers extends Partial<Store> {
    screen: EditorScreenState
}

export type AppState = Store & AppReducers
