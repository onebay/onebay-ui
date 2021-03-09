interface OptionItem {
    disabled?: boolean;
    label?: string | number;
    value?: string | number;
    desc?: string;
}
declare const Radio: import("vue").DefineComponent<{
    style: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    className: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    value: {
        type: StringConstructor;
        default: string;
    };
    options: {
        type: ArrayConstructor;
        default: () => any[];
    };
    onClick: {
        type: FunctionConstructor;
    };
}, {
    rootCls: import("vue").ComputedRef<string>;
}, unknown, {}, {
    handleClick(option: OptionItem, event: Event): void;
    getOptionCls(disabled: boolean): string;
    getIconCls(value: string | number): string;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    value: string;
    style: string;
    className: string;
    options: unknown[];
} & {
    onClick?: Function;
}>, {
    value: string;
    style: string;
    className: string;
    options: unknown[];
}>;
export default Radio;
