declare const Switch: import("vue").DefineComponent<{
    customStyle: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    className: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    checked: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    onChange: {
        type: FunctionConstructor;
    };
}, {
    isChecked: import("vue").Ref<boolean>;
    switchChange: (e: Event) => void;
    containerCls: import("vue").ComputedRef<string>;
    rootCls: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    disabled: boolean;
    title: string;
    name: string;
    color: string;
    border: boolean;
    customStyle: string;
    className: string;
    checked: boolean;
} & {
    onChange?: Function;
}>, {
    disabled: boolean;
    title: string;
    name: string;
    color: string;
    border: boolean;
    customStyle: string;
    className: string;
    checked: boolean;
}>;
export default Switch;
