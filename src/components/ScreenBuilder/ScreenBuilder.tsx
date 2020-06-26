import React from 'react'
import {Dispatch} from 'redux'
import {useDispatch, useSelector} from 'react-redux'
import {Modal, Form, Input, Collapse, Empty} from 'antd'
import styles from './ScreenBuilder.module.css'
import { LockedInput } from '../LockedInput/LockedInput'
import { kebabStyle } from '../../utils/strings'
import { CustomAnyAction, $smDo } from '../../actions/actions'
import { AppState } from '../../reducers'

export const ScreenBuilder: React.FC = (props) => {
    const [name, setName] = React.useState('')
    const [title, setTitle] = React.useState('')
    const [nameLock, setNameLock] = React.useState(true)
    const [fileName, setFileName] = React.useState('')
    const [fileNameLock, setFileNameLock] = React.useState(true)
    const [directoryName, setDirectoryName] = React.useState('')
    const [directoryNameLock, setDirectoryNameLock] = React.useState(true)
    const handleCancel = () => dispatch($smDo.addScreen(null))

    const handleName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setName(e.currentTarget.value)
    }

    const handleTitle: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setTitle(e.currentTarget.value)
        if (nameLock) {
            setName(kebabStyle(e.currentTarget.value))
        }
        if (fileNameLock) {
            setFileName(`${kebabStyle(e.currentTarget.value)}.screen.json`)
        }
        if (directoryNameLock) {
            setDirectoryName(kebabStyle(e.currentTarget.value))
        }
    }

    const handleFileName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setFileName(e.currentTarget.value)
    }

    const handleDirectoryName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setDirectoryName(e.currentTarget.value)
    }
    
    const dispatch = useDispatch<Dispatch<CustomAnyAction>>()
    const handleSave = () => {
        dispatch($smDo.addScreenSuccess({
            screen: {
                name,
                title,
                fileName,
                directoryName
            }
        }))
    }
    const visible = useSelector((state: AppState) => state.screen.showScreenBuilder)
    return <Modal visible={visible} title="Add new screen" onOk={handleSave} onCancel={handleCancel}>
        <Form layout='vertical' >
            <Form.Item className={styles.title}>
                <Input placeholder="Title" onChange={handleTitle} value={title} />
            </Form.Item>
            <Form.Item className={styles.title}>
            <Collapse bordered={false} className={styles.collapse}>
                <Collapse.Panel key="1" header="More options" className={styles.panel}>
                    <Form.Item label="Name">
                        <LockedInput
                            placeholder="Name"
                            value={name}
                            onChange={handleName}
                            locked={nameLock}
                            onLock={setNameLock}
                        />
                    </Form.Item>
                    <Form.Item label="File name">
                        <LockedInput
                            placeholder="File name"
                            value={fileName}
                            locked={fileNameLock}
                            onLock={setFileNameLock}
                            onChange={handleFileName}
                        />
                    </Form.Item>
                    <Form.Item label="Directory name">
                        <LockedInput
                            placeholder="Directory name"
                            value={directoryName}
                            locked={directoryNameLock}
                            onLock={setDirectoryNameLock}
                            onChange={handleDirectoryName}
                        />
                    </Form.Item>
                    <Form.Item label="Primary view(s)">
                        <Input placeholder="Primary view(s)" disabled />
                    </Form.Item>
                </Collapse.Panel>
            </Collapse>
            </Form.Item>
            <Form.Item label="Navigation">
                <Empty />
            </Form.Item>
        </Form>
    </Modal>
}

