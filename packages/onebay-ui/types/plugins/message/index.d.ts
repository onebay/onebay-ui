import { Config } from '../withContainer';
export declare enum MessageType {
    Info = "info",
    Success = "success",
    Error = "error",
    Loading = "loading"
}
export interface MessageConfig extends Config {
    message?: string;
    type?: MessageType;
    duration?: number;
    isOpened?: boolean;
    onClose?: () => void;
    onClick?: (e: MouseEvent) => unknown;
}
declare const message: {
    (config?: MessageConfig): void | {
        close: () => void;
    };
    info(config?: MessageConfig): void | {
        close: () => void;
    };
    success(config?: MessageConfig): void | {
        close: () => void;
    };
    error(config?: MessageConfig): void | {
        close: () => void;
    };
    loading(config?: MessageConfig): void | {
        close: () => void;
    };
};
export default message;
