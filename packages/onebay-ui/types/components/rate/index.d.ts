declare const Rate: import("vue").DefineComponent<{
    customStyle: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    className: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    value: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    margin: {
        type: NumberConstructor;
        default: number;
    };
    onChange: {
        type: FunctionConstructor;
    };
}, {
    rootCls: import("vue").ComputedRef<string>;
    iconStyle: import("vue").ComputedRef<{
        marginRight: number;
    }>;
    starIconStyle: import("vue").ComputedRef<{
        fontSize: string;
    }>;
    classNameArr: import("vue").ComputedRef<string[]>;
}, unknown, {}, {
    handleClick(index: number, event: Event): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    max: number;
    value: number;
    size: string | number;
    margin: number;
    customStyle: string;
    className: string;
} & {
    onChange?: Function;
}>, {
    max: number;
    value: number;
    size: string | number;
    margin: number;
    customStyle: string;
    className: string;
}>;
export default Rate;
