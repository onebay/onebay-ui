declare const _default: import("vue").DefineComponent<{
    customStyle: {
        type: (ObjectConstructor | StringConstructor)[];
        default: () => {};
    };
    className: {
        type: (ObjectConstructor | StringConstructor)[];
        default: () => {};
    };
    reportSubmit: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    rootCls: import("vue").ComputedRef<string>;
}, unknown, {}, {
    handleSubmit(): void;
    handleReset(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("reset" | "submit")[], "reset" | "submit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    customStyle: {};
    className: {};
    reportSubmit: boolean;
} & {}>, {
    customStyle: {};
    className: {};
    reportSubmit: boolean;
}>;
export default _default;
