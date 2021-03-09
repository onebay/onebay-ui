declare const _default: import("vue").DefineComponent<{
    dot: {
        type: BooleanConstructor;
        default: boolean;
    };
    value: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    maxValue: {
        type: NumberConstructor;
        default: number;
    };
    style: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    className: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
}, {
    val: import("vue").ComputedRef<string | number>;
    rootClass: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    value: string | number;
    dot: boolean;
    style: string;
    className: string;
    maxValue: number;
} & {}>, {
    value: string | number;
    dot: boolean;
    style: string;
    className: string;
    maxValue: number;
}>;
export default _default;
