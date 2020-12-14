declare const _default: import("vue").DefineComponent<{
    size: {
        type: NumberConstructor;
        default: number;
    };
    mode: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    content: {
        type: StringConstructor;
        default: string;
    };
    className: {
        type: (StringConstructor | ArrayConstructor)[];
        default: () => string;
    };
    isOpened: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    mode: string;
    content: string;
    color: string;
    size: number;
    className: string | unknown[];
    isOpened: boolean;
} & {}>, {
    mode: string;
    content: string;
    color: string;
    size: number;
    className: string | unknown[];
    isOpened: boolean;
}>;
export default _default;
