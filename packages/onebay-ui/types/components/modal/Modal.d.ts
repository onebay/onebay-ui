declare const Modal: import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        default: string;
    };
    isOpened: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    content: {
        type: StringConstructor;
        default: string;
    };
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    confirmText: {
        type: StringConstructor;
        default: string;
    };
    className: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
    };
    onClose: {
        type: FunctionConstructor;
        default: () => void;
    };
}, {
    rootClass: import("vue").ComputedRef<string>;
    visible: import("vue").Ref<boolean>;
}, unknown, {}, {
    handleClickOverlay(): void;
    handleClose(): void;
    handleCancel(): void;
    handleConfirm(): void;
    handleTouchMove(e: TouchEvent): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("cancel" | "close" | "confirm")[], "cancel" | "close" | "confirm", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    title: string;
    content: string;
    className: string | unknown[];
    cancelText: string;
    isOpened: boolean;
    onClose: Function;
    closeOnClickOverlay: boolean;
    confirmText: string;
} & {}>, {
    title: string;
    content: string;
    className: string | unknown[];
    cancelText: string;
    isOpened: boolean;
    onClose: Function;
    closeOnClickOverlay: boolean;
    confirmText: string;
}>;
export default Modal;
