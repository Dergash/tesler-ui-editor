import {ScreenState} from "@tesler-ui/core/interfaces/screen";

export interface EditorScreenState extends ScreenState {
    showScreenBuilder?: boolean,
    pendingScreens?: ScreenDescriptor[],
}

export interface ScreenDescriptor {
    name: string,
    title: string,
    fileName: string,
    directoryName: string
}