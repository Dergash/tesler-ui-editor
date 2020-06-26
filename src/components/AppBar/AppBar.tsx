import React from 'react'
import {Button} from 'antd'
import styles from './AppBar.module.css'

export const AppBar: React.FC = (props) => {
    return <div className={styles.container}>
        <div className={styles.left}>
            <Button type="primary" icon="plus" disabled>
                Add View
            </Button>
        </div>
        <div className={styles.right}>
            <Button type="primary" disabled>
                Import
            </Button>
            <Button type="primary" disabled>
                Export
            </Button>
        </div>
    </div>
}
