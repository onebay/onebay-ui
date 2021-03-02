export interface LoadingProps {
    color: string | number;
    size: string | number;
}
declare const _default: import("vue").DefineComponent<{
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    color: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
}, {
    sizeStyle: import("vue").ComputedRef<{
        width: string;
        height: string;
    }>;
    ringStyle: import("vue").ComputedRef<{
        border: string;
        'border-color': string;
    } & {
        width: string;
        height: string;
    }>;
    transformStyle: (style?: {}) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    color: string | number;
    size: string | number;
} & {}>, {
    color: string | number;
    size: string | number;
}>;
export default _default;
