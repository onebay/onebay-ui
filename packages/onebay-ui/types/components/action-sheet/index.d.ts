declare const ActionSheet: import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        default: string;
    };
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    isOpened: {
        type: BooleanConstructor;
        default: boolean;
    };
    className: {
        type: (StringConstructor | ArrayConstructor)[];
        default: () => "";
    };
    onClose: {
        type: FunctionConstructor;
        default: () => void;
    };
}, {
    show: import("vue").Ref<boolean>;
    rootClass: import("vue").ComputedRef<string>;
}, unknown, {}, {
    handleClose(): void;
    handleCancel(): void;
    close(): void;
    handleTouchMove(e: Event): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("cancel" | "close")[], "cancel" | "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    title: string;
    className: string | unknown[];
    cancelText: string;
    isOpened: boolean;
    onClose: Function;
} & {}>, {
    title: string;
    className: string | unknown[];
    cancelText: string;
    isOpened: boolean;
    onClose: Function;
}>;
export default ActionSheet;
