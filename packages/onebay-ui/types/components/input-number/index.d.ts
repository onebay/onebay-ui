import { PropType } from 'vue';
export interface InputError {
    type: 'OVER' | 'LOW' | 'DISABLED';
    errorValue: number;
}
declare const InputNumber: import("vue").DefineComponent<{
    customStyle: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    className: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledInput: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: PropType<"number" | "digit">;
        default: string;
    };
    size: {
        type: PropType<"normal" | "large">;
        default: string;
    };
    value: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    step: {
        type: NumberConstructor;
        default: number;
    };
    onErrorInput: {
        type: FunctionConstructor;
        default: () => void;
    };
    onChange: {
        type: FunctionConstructor;
    };
}, {
    inputValue: import("vue").ComputedRef<number>;
    inputStyle: import("vue").ComputedRef<{
        width: string;
    }>;
    rootCls: import("vue").ComputedRef<string>;
    minusBtnCls: import("vue").ComputedRef<string>;
    plusBtnCls: import("vue").ComputedRef<string>;
    handleValue: (value: string | number) => string;
    handleError: (errorValue: InputError) => void;
}, unknown, {}, {
    handleClick(clickType: "minus" | "plus"): void;
    handleInput(e: Event): string | number | void;
    handleBlur(event: FocusEvent): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "blur")[], "change" | "blur", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    max: number;
    disabled: boolean;
    type: "number" | "digit";
    value: string | number;
    size: "normal" | "large";
    step: number;
    width: number;
    customStyle: string;
    className: string;
    min: number;
    disabledInput: boolean;
    onErrorInput: Function;
} & {
    onChange?: Function;
}>, {
    max: number;
    disabled: boolean;
    type: "number" | "digit";
    value: string | number;
    size: "normal" | "large";
    step: number;
    width: number;
    customStyle: string;
    className: string;
    min: number;
    disabledInput: boolean;
    onErrorInput: Function;
}>;
export default InputNumber;
