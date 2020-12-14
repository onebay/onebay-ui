import { PropType } from 'vue';
export declare enum SIZE_CLASS {
    normal = "normal",
    small = "small"
}
export declare enum TYPE_CLASS {
    primary = "primary",
    secondary = "secondary"
}
export declare type ButtonType = 'primary' | 'secondary';
declare const _default: import("vue").DefineComponent<{
    size: {
        type: PropType<string>;
        default: string;
    };
    type: {
        type: PropType<ButtonType>;
        default: any;
    };
    circle: {
        type: BooleanConstructor;
        default: boolean;
    };
    full: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    customStyle: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    className: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    onClick: {
        type: PropType<() => void>;
        default: () => void;
    };
}, {
    loadingColor: import("vue").ComputedRef<"" | "#fff">;
    loadingSize: import("vue").ComputedRef<0 | "15">;
    rootClassName: import("vue").ComputedRef<string[]>;
    classObject: import("vue").ComputedRef<{
        [x: string]: any;
        'ob-button--disabled': boolean;
        'ob-button--circle': boolean;
        'ob-button--full': boolean;
    }>;
}, unknown, {}, {
    classNames: import("classnames/types").ClassNamesExport;
    handelOnClick(event: MouseEvent): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    disabled: boolean;
    loading: boolean;
    circle: boolean;
    type: ButtonType;
    size: string;
    onClick: () => void;
    customStyle: string;
    className: string;
    full: boolean;
} & {}>, {
    disabled: boolean;
    loading: boolean;
    circle: boolean;
    type: ButtonType;
    size: string;
    onClick: () => void;
    customStyle: string;
    className: string;
    full: boolean;
}>;
export default _default;
