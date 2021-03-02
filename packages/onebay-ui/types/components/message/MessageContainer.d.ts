declare const _default: import("vue").DefineComponent<{
    config: {
        type: ObjectConstructor;
        default: () => {
            messasge: string;
            type: string;
            isOpened: boolean;
            duration: number;
        };
    };
    close: {
        type: FunctionConstructor;
        default: () => void;
    };
}, {
    showMessage: import("vue").Ref<boolean>;
}, unknown, {}, {
    handleClose(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    close: Function;
    config: Record<string, any>;
} & {}>, {
    close: Function;
    config: Record<string, any>;
}>;
export default _default;
