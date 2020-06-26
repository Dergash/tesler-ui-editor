// import {coreActions} from '@tesler-ui/core'
import {BcMetaState} from '@tesler-ui/core/interfaces/bc'
import {ObjectMap} from '@tesler-ui/core/interfaces/objectMap'
import {EditorScreenState} from '../interfaces/screen'
import {AppState} from './index'
import {  smActionTypes, CustomAnyAction } from '../actions/actions'

export const initialState: EditorScreenState = {
    screenName: 'tutorial',
    bo: {
        activeBcName: '',
        bc: {} as ObjectMap<BcMetaState>
    },
    cachedBc: {},
    views: [],
    primaryView: '',
    filters: {},
    sorters: {},
    pendingScreens: [{
        name: 'tutorial',
        title: 'Tutorial',
        fileName: 'tutorial.screen.json',
        directoryName: 'tutorial'
    }]
}

export default function screenReducer(
    state: EditorScreenState = initialState,
    action: CustomAnyAction,
    store: Readonly<AppState>
): EditorScreenState {
    switch (action.type) {
        case smActionTypes.addScreen: {
            return {
                ...state,
                showScreenBuilder: !state.showScreenBuilder
            }
        }
        case smActionTypes.addScreenSuccess: {
            return {
                ...state,
                showScreenBuilder: false,
                pendingScreens: [ ...state.pendingScreens, action.payload.screen ]
            }
        }
        case smActionTypes.customSelectScreen: {
            return { ...state, screenName: action.payload.screenName }
        }
        default:
            return state
    }
}

