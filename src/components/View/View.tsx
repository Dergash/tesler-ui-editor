import React from 'react'
import {Card} from 'antd'
import {useDispatch, useSelector} from 'react-redux'
import { AppState } from '../../reducers'
import styles from './View.module.css'

export const View: React.FC = (props) => {
    const { screens, screenName } = useSelector((store: AppState) => {
        return {
            screens: store.screen.pendingScreens,
            screenName: store.screen.screenName
        }
    })
    const screen = screens.find(item => item.name === screenName)
    const screenJson = screen ? JSON.stringify(screen, null, 4) : ''
    const responsibilities = screens.map(item => {
        return {
            name: item.name,
            text: item.title,
            icon: '',
            url: `/screens/${item.name}`
        }
    })
    const responsibilitiesJson = JSON.stringify(responsibilities, null, 4);
    return <div>
        <Card title={`db/migration/liquibase/data/latest/screens/${screen.directoryName}/${screen.fileName}`}>
            <p className={styles.json}>
                {screenJson}
            </p>
        </Card>
        <Card title={`/db/migration/oracle/meta/main/RESPONSIBILITIES.sql`}>
            <p className={styles.json}>
                {responsibilitiesJson}
            </p>
        </Card>
    </div>
}
