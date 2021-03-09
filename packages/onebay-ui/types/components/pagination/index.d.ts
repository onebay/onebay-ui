declare const _default: import("vue").DefineComponent<{
    style: {
        type: (ObjectConstructor | StringConstructor)[];
        default: () => "";
    };
    className: {
        type: (StringConstructor | ArrayConstructor)[];
        default: () => "";
    };
    current: {
        type: NumberConstructor;
        default: number;
    };
    total: {
        type: NumberConstructor;
        default: number;
    };
    pageSize: {
        type: NumberConstructor;
        default: number;
    };
    icon: {
        type: BooleanConstructor;
        default: boolean;
    };
    onPageChange: {
        type: FunctionConstructor;
        default: () => void;
    };
    preText: {
        type: StringConstructor;
        default: string;
    };
    nextText: {
        type: StringConstructor;
        default: string;
    };
}, {
    state: {
        currentPage: number;
        maxPage: number;
        pickerRange: number[];
    };
    rootCls: import("vue").ComputedRef<string>;
    prevDisabled: import("vue").ComputedRef<boolean>;
    nextDisabled: import("vue").ComputedRef<boolean>;
}, unknown, {}, {
    onPrev(): void;
    onNext(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    icon: boolean;
    style: "";
    className: string | unknown[];
    current: number;
    total: number;
    pageSize: number;
    onPageChange: Function;
    preText: string;
    nextText: string;
} & {}>, {
    icon: boolean;
    style: "";
    className: string | unknown[];
    current: number;
    total: number;
    pageSize: number;
    onPageChange: Function;
    preText: string;
    nextText: string;
}>;
export default _default;
