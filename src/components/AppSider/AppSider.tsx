import React from 'react'
import {Button, Menu} from 'antd'
import styles from './AppSider.module.css'
import { ScreenBuilder } from '../ScreenBuilder/ScreenBuilder'
import {useDispatch, useSelector} from 'react-redux'
import { Dispatch } from 'redux'
import { CustomAnyAction, $smDo } from '../../actions/actions'
import { AppState } from '../../reducers'
import { SelectParam } from 'antd/lib/menu'

interface AppSiderProps {
    
}

export const AppSider: React.FC = (props) => {
    const dispatch = useDispatch<Dispatch<CustomAnyAction>>()
    const handleAdd = () => dispatch($smDo.addScreen(null))
    const handleSelect = (e: SelectParam) => dispatch($smDo.customSelectScreen({ screenName: e.key }))
    const screens = useSelector((store: AppState) => store.screen.pendingScreens)
    return <aside className={styles.container}>
        <div className={styles.header}>
        </div>
        <div className={styles.screens}>
            <Menu mode="inline" className={styles.menu} defaultSelectedKeys={[screens[0]?.name]} onSelect={handleSelect}>
            { screens.map(screen => {
                return <Menu.Item key={screen.name} className={styles.screen}>
                    {screen.title}
                </Menu.Item>
            })}
            </Menu>
            <Button type="primary" icon="plus" onClick={handleAdd}>
                Add screen
            </Button>
            <ScreenBuilder />
        </div>
    </aside>
}
