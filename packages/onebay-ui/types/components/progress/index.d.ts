declare const _default: import("vue").DefineComponent<{
    color: {
        type: StringConstructor;
        default: string;
    };
    status: {
        type: StringConstructor;
        default: string;
        validator: (val: string) => boolean;
    };
    percent: {
        type: NumberConstructor;
        default: number;
    };
    strokeWidth: {
        type: NumberConstructor;
        default: number;
    };
    isHidePercent: {
        type: BooleanConstructor;
        default: boolean;
    };
    className: {
        type: (StringConstructor | ArrayConstructor)[];
        default: () => "";
    };
}, {
    progressStyle: import("vue").ComputedRef<{
        width: string;
        height: string;
        backgroundColor: string;
    }>;
    rootClass: import("vue").ComputedRef<string>;
    iconClass: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    color: string;
    strokeWidth: number;
    className: string | unknown[];
    status: string;
    percent: number;
    isHidePercent: boolean;
} & {}>, {
    color: string;
    strokeWidth: number;
    className: string | unknown[];
    status: string;
    percent: number;
    isHidePercent: boolean;
}>;
export default _default;
