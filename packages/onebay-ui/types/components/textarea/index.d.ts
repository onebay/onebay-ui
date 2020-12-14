declare const Textarea: import("vue").DefineComponent<{
    customStyle: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    className: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    value: {
        type: StringConstructor;
        default: string;
        required: true;
    };
    maxLength: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    focus: {
        type: BooleanConstructor;
        default: boolean;
    };
    count: {
        type: BooleanConstructor;
        default: boolean;
    };
    fixed: {
        type: BooleanConstructor;
        default: boolean;
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    textOverflowForbidden: {
        type: BooleanConstructor;
        default: boolean;
    };
    onChange: {
        type: FunctionConstructor;
    };
}, {
    maxLen: import("vue").ComputedRef<number>;
    rootCls: import("vue").ComputedRef<string>;
    textareaStyle: import("vue").ComputedRef<string>;
    actualMaxLength: import("vue").ComputedRef<number>;
}, unknown, {}, {
    handleInput(event: Event): void;
    handleFocus(event: Event): void;
    handleBlur(event: Event): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "blur" | "focus" | "confirm")[], "change" | "blur" | "focus" | "confirm", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    fixed: boolean;
    disabled: boolean;
    focus: boolean;
    value: string;
    height: string | number;
    customStyle: string;
    className: string;
    placeholder: string;
    maxLength: string | number;
    autoFocus: boolean;
    count: boolean;
    textOverflowForbidden: boolean;
} & {
    onChange?: Function;
}>, {
    fixed: boolean;
    disabled: boolean;
    focus: boolean;
    value: string;
    height: string | number;
    customStyle: string;
    className: string;
    placeholder: string;
    maxLength: string | number;
    autoFocus: boolean;
    count: boolean;
    textOverflowForbidden: boolean;
}>;
export default Textarea;
