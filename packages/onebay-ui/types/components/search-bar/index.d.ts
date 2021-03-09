import { PropType } from 'vue';
import { CSSProperties } from '../../../global';
declare type ExtendEvent = {
    target: {
        value: string;
    };
};
declare const SearchBar: import("vue").DefineComponent<{
    style: {
        type: PropType<CSSProperties>;
        default: string;
    };
    className: {
        type: StringConstructor;
        default: string;
    };
    value: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    actionName: {
        type: StringConstructor;
        default: string;
    };
    maxLength: {
        type: NumberConstructor;
        default: number;
    };
    fixed: {
        type: BooleanConstructor;
        default: boolean;
    };
    focus: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    showActionButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    inputType: {
        type: StringConstructor;
        default: string;
    };
    onClear: {
        type: PropType<() => void>;
        default: any;
    };
    onActionClick: {
        type: FunctionConstructor;
        default: () => void;
    };
    onChange: {
        type: FunctionConstructor;
    };
}, {
    rootCls: import("vue").ComputedRef<string>;
    placeholderWrapStyle: import("vue").ComputedRef<CSSProperties>;
    isFocus: import("vue").Ref<boolean>;
    actionStyle: import("vue").ComputedRef<CSSProperties>;
    clearIconStyle: import("vue").ComputedRef<CSSProperties>;
    placeholderStyle: import("vue").ComputedRef<CSSProperties>;
    actionBtnRef: any;
    actionBtnInitMarginleft: string;
}, unknown, {}, {
    handleFocus(event: Event): void;
    handleBlur(event: Event): void;
    handleChange(e: Event & ExtendEvent): void;
    handleClear(event: Event): void;
    handleActionClick(event: Event): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "blur" | "focus")[], "change" | "blur" | "focus", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    fixed: boolean;
    disabled: boolean;
    focus: boolean;
    value: string;
    style: string;
    className: string;
    placeholder: string;
    maxLength: number;
    actionName: string;
    showActionButton: boolean;
    inputType: string;
    onClear: () => void;
    onActionClick: Function;
} & {
    onChange?: Function;
}>, {
    fixed: boolean;
    disabled: boolean;
    focus: boolean;
    value: string;
    style: string;
    className: string;
    placeholder: string;
    maxLength: number;
    actionName: string;
    showActionButton: boolean;
    inputType: string;
    onClear: () => void;
    onActionClick: Function;
}>;
export default SearchBar;
