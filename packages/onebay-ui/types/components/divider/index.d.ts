declare const _default: import("vue").DefineComponent<{
    content: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    fontColor: {
        type: StringConstructor;
        default: string;
    };
    style: {
        type: StringConstructor;
        default: string;
    };
    fontSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    lineColor: {
        type: StringConstructor;
        default: string;
    };
    className: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
}, {
    rootStyle: import("vue").ComputedRef<{
        height: string;
    }>;
    fontStyle: import("vue").ComputedRef<{
        color: string;
        'font-size': string;
    }>;
    lineStyle: import("vue").ComputedRef<{
        backgroundColor: string;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    content: string;
    fontSize: string | number;
    height: string | number;
    style: string;
    className: string;
    fontColor: string;
    lineColor: string;
} & {}>, {
    content: string;
    fontSize: string | number;
    height: string | number;
    style: string;
    className: string;
    fontColor: string;
    lineColor: string;
}>;
export default _default;
