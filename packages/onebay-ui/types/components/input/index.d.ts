import { PropType } from 'vue';
interface ActualProps {
    type: string;
    maxLength: number;
    disabled?: boolean;
    password: boolean;
    editable?: boolean;
}
declare const Input: import("vue").DefineComponent<{
    customStyle: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    className: {
        type: StringConstructor;
        default: string;
    };
    value: {
        type: PropType<string | number>;
        default: string;
    };
    name: {
        type: PropType<string>;
        default: string;
    };
    placeholder: {
        type: PropType<string>;
        default: string;
    };
    placeholderStyle: {
        type: PropType<string>;
        default: string;
    };
    placeholderClass: {
        type: PropType<string>;
        default: string;
    };
    title: {
        type: PropType<string>;
        default: string;
    };
    cursor: {
        type: PropType<string | number>;
        default: number;
    };
    maxLength: {
        type: PropType<number>;
        default: number;
    };
    type: {
        type: PropType<string>;
        default: string;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    border: {
        type: PropType<boolean>;
        default: boolean;
    };
    editable: {
        type: PropType<boolean>;
        default: boolean;
    };
    error: {
        type: PropType<boolean>;
        default: boolean;
    };
    clear: {
        type: PropType<boolean>;
        default: boolean;
    };
    autoFocus: {
        type: PropType<boolean>;
        default: boolean;
    };
    focus: {
        type: PropType<boolean>;
        default: boolean;
    };
    required: {
        type: PropType<boolean>;
        default: boolean;
    };
    onErrorClick: {
        type: FunctionConstructor;
        default: () => void;
    };
    onChange: {
        type: FunctionConstructor;
    };
}, {
    inputProps: import("vue").ComputedRef<ActualProps>;
    rootCls: import("vue").ComputedRef<string>;
    containerCls: import("vue").ComputedRef<string>;
    overlayCls: import("vue").ComputedRef<string>;
    inputClearing: import("vue").Ref<boolean>;
}, unknown, {}, {
    handleChange(event: Event): void;
    handleInput(event: Event): void;
    handleFocus(event: Event): void;
    handleBlur(event: MouseEvent): void;
    handleClick(event: MouseEvent): void;
    handleClearValue(event: MouseEvent): void;
    handleErrorClick(event: MouseEvent): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "input" | "blur" | "click" | "focus")[], "change" | "input" | "blur" | "click" | "focus", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    required: boolean;
    disabled: boolean;
    error: boolean;
    title: string;
    focus: boolean;
    type: string;
    value: string | number;
    name: string;
    clear: boolean;
    border: boolean;
    cursor: string | number;
    customStyle: string;
    className: string;
    placeholder: string;
    placeholderStyle: string;
    placeholderClass: string;
    maxLength: number;
    editable: boolean;
    autoFocus: boolean;
    onErrorClick: Function;
} & {
    onChange?: Function;
}>, {
    required: boolean;
    disabled: boolean;
    error: boolean;
    title: string;
    focus: boolean;
    type: string;
    value: string | number;
    name: string;
    clear: boolean;
    border: boolean;
    cursor: string | number;
    customStyle: string;
    className: string;
    placeholder: string;
    placeholderStyle: string;
    placeholderClass: string;
    maxLength: number;
    editable: boolean;
    autoFocus: boolean;
    onErrorClick: Function;
}>;
export default Input;
