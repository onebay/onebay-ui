export interface CheckboxItem {
    value: unknown;
    label: string;
    desc?: string;
}
declare const Checkbox: import("vue").DefineComponent<{
    style: {
        type: (ObjectConstructor | StringConstructor)[];
        default: () => {};
    };
    className: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    options: {
        type: ArrayConstructor;
        default: () => any[];
    };
    selectedList: {
        type: ArrayConstructor;
        default: () => any[];
    };
    onChange: {
        type: FunctionConstructor;
        default: () => void;
    };
}, {
    rootCls: import("vue").ComputedRef<string>;
}, unknown, {}, {
    handleClick(idx: number): void;
    getOptionCls(option: any): string;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    onChange: Function;
    style: {};
    className: string;
    options: unknown[];
    selectedList: unknown[];
} & {}>, {
    onChange: Function;
    style: {};
    className: string;
    options: unknown[];
    selectedList: unknown[];
}>;
export default Checkbox;
