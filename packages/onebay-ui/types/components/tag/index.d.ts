import { PropType } from 'vue';
export declare enum SIZE_CLASS {
    normal = "normal",
    small = "small"
}
export declare enum TYPE_CLASS {
    primary = "primary"
}
declare const Tag: import("vue").DefineComponent<{
    size: {
        type: PropType<SIZE_CLASS>;
        default: string;
        validator: (val: string) => boolean;
    };
    type: {
        type: PropType<TYPE_CLASS>;
        default: string;
        validator: (val: string) => boolean;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    circle: {
        type: BooleanConstructor;
        default: boolean;
    };
    active: {
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
}, {
    rootCls: import("vue").ComputedRef<string>;
}, unknown, {}, {
    handleClick(event: Event): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    active: boolean;
    disabled: boolean;
    circle: boolean;
    type: TYPE_CLASS;
    name: string;
    size: SIZE_CLASS;
    customStyle: string;
    className: string;
} & {}>, {
    active: boolean;
    disabled: boolean;
    circle: boolean;
    type: TYPE_CLASS;
    name: string;
    size: SIZE_CLASS;
    customStyle: string;
    className: string;
}>;
export default Tag;
