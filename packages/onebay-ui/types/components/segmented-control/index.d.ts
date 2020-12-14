import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    customStyle: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    className: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
    };
    current: {
        type: NumberConstructor;
        default: number;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    fontSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectedColor: {
        type: StringConstructor;
        default: string;
    };
    values: {
        type: PropType<(string | number)[]>;
        default: () => any[];
    };
}, {
    rootCls: import("vue").ComputedRef<string>;
    rootStyle: import("vue").ComputedRef<unknown>;
    itemStyle: import("vue").ComputedRef<{
        color: string;
        fontSize: string | number;
        borderColor: string;
        backgroundColor: string;
    }>;
    selectedItemStyle: import("vue").ComputedRef<{
        color: string;
        fontSize: string | number;
        borderColor: string;
        backgroundColor: string;
    }>;
}, unknown, {}, {
    classNames: import("classnames/types").ClassNamesExport;
    handleClick(index: number, event: Event): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    disabled: boolean;
    values: (string | number)[];
    color: string;
    fontSize: string | number;
    customStyle: string;
    className: string | unknown[];
    current: number;
    selectedColor: string;
} & {}>, {
    disabled: boolean;
    values: (string | number)[];
    color: string;
    fontSize: string | number;
    customStyle: string;
    className: string | unknown[];
    current: number;
    selectedColor: string;
}>;
export default _default;
