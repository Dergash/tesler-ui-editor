import React from 'react'
import {Input, Icon} from 'antd'
import styles from './LockedInput.module.css'
import { InputProps } from 'antd/lib/input'

interface LockedInputProps extends InputProps {
    locked?: boolean,
    onLock?: (locked: boolean) => void
}

export const LockedInput: React.FC<LockedInputProps> = (props) => {
    const { locked, onLock, ...rest } = props
    const handleLock = () => {
        onLock?.(!locked)
    }
    const lock = <Icon
        className={styles.lock} 
        type={locked ? 'lock' : 'unlock'}
        onClick={handleLock}
    />
    return <Input
        disabled={locked}
        addonAfter={lock}
        {...rest}
    >

    </Input>
}