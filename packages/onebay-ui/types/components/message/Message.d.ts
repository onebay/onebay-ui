declare const _default: import("vue").DefineComponent<{
    style: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    className: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
    };
    isOpened: {
        type: BooleanConstructor;
        default: boolean;
    };
    message: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
}, {
    timer: import("vue").Ref<number>;
    visible: import("vue").Ref<boolean>;
}, unknown, {}, {
    clearTimmer(): void;
    makeTimer(duration: number): void;
    close(): void;
    handleClose(): void;
    handleClick(event: MouseEvent): void;
    handleChange(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "close")[], "click" | "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    message: string;
    type: string;
    duration: number;
    style: string;
    className: string | unknown[];
    isOpened: boolean;
} & {}>, {
    message: string;
    type: string;
    duration: number;
    style: string;
    className: string | unknown[];
    isOpened: boolean;
}>;
export default _default;
