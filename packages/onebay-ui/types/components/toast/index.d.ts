import { Config } from '../../plugins/withContainer';
import { App } from 'vue';
export declare enum ToastStatus {
    Success = "success",
    Error = "error",
    Loading = "loading"
}
export interface ToastConfig extends Config {
    text?: string;
    status?: 'success' | 'error' | 'loading';
    duration?: number;
    isOpened?: boolean;
    hasMask?: boolean;
    onClose?: () => void;
    onClick?: (e: MouseEvent) => unknown;
}
declare const toast: {
    (config?: ToastConfig): void | {
        close: () => void;
    };
    success(config?: ToastConfig): void | {
        close: () => void;
    };
    error(config?: ToastConfig): void | {
        close: () => void;
    };
    loading(config?: ToastConfig): void | {
        close: () => void;
    };
    install(app: App<any>): void;
};
export default toast;
