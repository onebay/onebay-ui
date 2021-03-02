export interface ToastProps {
    text?: string;
    icon?: string;
    hasMask?: boolean;
    image?: string;
    isOpened?: boolean;
    duration?: number;
    status?: string;
    className: any;
    customStyle: any;
}
export declare enum ToastStatus {
    default = "",
    error = "error",
    loading = "loading",
    success = "success"
}
declare const _default: import("vue").DefineComponent<{
    text: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    hasMask: {
        type: BooleanConstructor;
        default: boolean;
    };
    image: {
        type: StringConstructor;
        default: string;
    };
    isOpened: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    status: {
        type: StringConstructor;
        default: ToastStatus;
        validator: (val: string) => boolean;
    };
    onClick: {
        type: FunctionConstructor;
        default: any;
    };
    className: {
        type: (ObjectConstructor | StringConstructor)[];
        default: () => string;
    };
    customStyle: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    onClose: {
        type: FunctionConstructor;
    };
}, {
    timer: import("vue").Ref<number>;
    visible: import("vue").Ref<boolean>;
    rootCls: import("vue").ComputedRef<string>;
    bodyClass: import("vue").ComputedRef<string>;
    realImg: import("vue").ComputedRef<any>;
    iconClass: import("vue").ComputedRef<string>;
    isRenderIcon: import("vue").ComputedRef<boolean>;
}, unknown, {}, {
    clearTimmer(): void;
    makeTimer(duration: number): void;
    close(): void;
    handleClose(): void;
    handleClick(event: MouseEvent): void;
    handleChange(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "close")[], "click" | "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    image: string;
    text: string;
    icon: string;
    duration: number;
    onClick: Function;
    customStyle: string;
    className: string;
    isOpened: boolean;
    hasMask: boolean;
    status: string;
} & {
    onClose?: Function;
}>, {
    image: string;
    text: string;
    icon: string;
    duration: number;
    onClick: Function;
    customStyle: string;
    className: string;
    isOpened: boolean;
    hasMask: boolean;
    status: string;
}>;
export default _default;
