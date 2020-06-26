import {ActionsObservable as rActionsObservable} from 'redux-observable'
import {AppState} from '../reducers'
import {Observable} from 'rxjs/Observable'
import {Store} from 'redux'
import {
    ActionPayloadTypes as CoreActionPayloadTypes,
    AnyAction as CoreAnyAction,
    uActionsMap,
    AnyOfMap,
    createActionCreators,
    createActionTypes
} from '@tesler-ui/core'
import { ScreenDescriptor } from '../interfaces/screen'

const z = null as any

/**
 * ActionName: PayloadType = z
 * @param ActionName Name for an action (redux action "type") and corresponding action creater action
 * @param PayloadType Typescript description for payload
 * @property z Mandatory to prevent typescript from erasing unused class fields (@see https://github.com/microsoft/TypeScript/issues/12437)
 */
export class SmActionPayloadTypes extends CoreActionPayloadTypes {
    addScreen: null = z
    addScreenSuccess: { screen: ScreenDescriptor } = z
    customSelectScreen: { screenName: string } = z
}

export const smActionTypes = createActionTypes(new SmActionPayloadTypes())

export const $smDo = createActionCreators(new SmActionPayloadTypes())

export type SmActionsMap = uActionsMap<SmActionPayloadTypes>

export type CustomAnyAction = AnyOfMap<SmActionsMap> | CoreAnyAction

export interface ActionsObservable<T extends CustomAnyAction> extends rActionsObservable<T> {
    /**
     * TODO
     *
     * @param key
     */
    ofType<K extends keyof SmActionPayloadTypes>(...key: K[]): ActionsObservable<SmActionsMap[K]>
}
export type SmEpic = (action$: ActionsObservable<CustomAnyAction>, store: Store<AppState>) => Observable<CustomAnyAction>
