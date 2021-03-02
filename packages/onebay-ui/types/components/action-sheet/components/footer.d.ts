declare const _default: import("vue").DefineComponent<{
    className: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
    };
    onClick: {
        type: FunctionConstructor;
        default: () => void;
    };
}, {
    rootClass: import("vue").ComputedRef<string>;
}, unknown, {}, {
    handleClick(e: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    onClick: Function;
    className: string | unknown[];
} & {}>, {
    onClick: Function;
    className: string | unknown[];
}>;
export default _default;
