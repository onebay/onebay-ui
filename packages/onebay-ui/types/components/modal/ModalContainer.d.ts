declare const _default: import("vue").DefineComponent<{
    config: {
        type: ObjectConstructor;
        default: () => {
            content: string;
            title: string;
        };
    };
    close: {
        type: FunctionConstructor;
        default: () => void;
    };
}, {
    showToast: import("vue").Ref<boolean>;
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
