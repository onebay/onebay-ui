declare const _default: import("vue").DefineComponent<{
    close: {
        type: BooleanConstructor;
        default: boolean;
    };
    single: {
        type: BooleanConstructor;
        default: boolean;
    };
    marquee: {
        type: BooleanConstructor;
        default: boolean;
    };
    speed: {
        type: NumberConstructor;
        default: number;
    };
    moreText: {
        type: StringConstructor;
        default: string;
    };
    showMore: {
        type: BooleanConstructor;
        default: boolean;
    };
    className: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    style: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    onGotoMore: {
        type: FunctionConstructor;
        default: () => void;
    };
}, {
    classObject: import("vue").ComputedRef<{
        'ob-noticebar--marquee': boolean;
        'ob-noticebar--single': boolean;
    }>;
    iconClass: import("vue").ComputedRef<string[]>;
    innerClassName: import("vue").ComputedRef<string[]>;
    style: import("vue").ComputedRef<{
        'animation-duration'?: string;
    }>;
    timeout: import("vue").Ref<number>;
    state: {
        show: boolean;
        animElemId: string;
        animationData: {}[];
        dura: number;
    };
}, unknown, {}, {
    classNames: import("classnames/types").ClassNamesExport;
    handleClose(event: Event): void;
    handleGotoMore(event: unknown): void;
    initAnimation(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    marquee: boolean;
    close: boolean;
    icon: string;
    single: boolean;
    style: string;
    className: string;
    speed: number;
    moreText: string;
    showMore: boolean;
    onGotoMore: Function;
} & {}>, {
    marquee: boolean;
    close: boolean;
    icon: string;
    single: boolean;
    style: string;
    className: string;
    speed: number;
    moreText: string;
    showMore: boolean;
    onGotoMore: Function;
}>;
export default _default;
