declare const _default: import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        default: string;
    };
    isOpened: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollY: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollX: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollWithAnimation: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollTop: {
        type: NumberConstructor;
        default: number;
    };
    scrollLeft: {
        type: NumberConstructor;
        default: number;
    };
    upperThreshold: {
        type: NumberConstructor;
        default: number;
    };
    lowerThreshold: {
        type: NumberConstructor;
        default: number;
    };
    className: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
    };
    onClose: {
        type: FunctionConstructor;
    };
    onScrollToLower: {
        type: FunctionConstructor;
    };
    onScrollToUpper: {
        type: FunctionConstructor;
    };
    onScroll: {
        type: FunctionConstructor;
    };
}, {
    rootClass: import("vue").ComputedRef<string>;
    show: import("vue").Ref<boolean>;
}, unknown, {}, {
    close(): void;
    handleTouchMove(e: TouchEvent): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    title: string;
    className: string | unknown[];
    isOpened: boolean;
    scrollY: boolean;
    scrollX: boolean;
    scrollWithAnimation: boolean;
    scrollTop: number;
    scrollLeft: number;
    upperThreshold: number;
    lowerThreshold: number;
} & {
    onScroll?: Function;
    onClose?: Function;
    onScrollToLower?: Function;
    onScrollToUpper?: Function;
}>, {
    title: string;
    className: string | unknown[];
    isOpened: boolean;
    scrollY: boolean;
    scrollX: boolean;
    scrollWithAnimation: boolean;
    scrollTop: number;
    scrollLeft: number;
    upperThreshold: number;
    lowerThreshold: number;
}>;
export default _default;
