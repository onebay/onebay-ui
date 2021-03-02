import { Config } from '../../plugins/withContainer';
export declare enum MessageStatus {
    Success = "success",
    Error = "error",
    Loading = "loading"
}
export interface ModalConfig extends Config {
    title?: string | JSX.Element;
    content?: string | JSX.Element;
    isOpened?: boolean;
    cancelText?: string;
    confirmText?: string;
    onClose?: () => void;
    onCancel?: () => void;
    onConfirm?: (e: Event) => unknown;
}
declare const modal: (config?: ModalConfig) => void | {
    close: () => void;
};
export default modal;
