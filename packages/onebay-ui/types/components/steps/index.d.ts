import { PropType } from 'vue';
declare type Icon = {
    value?: string;
};
export interface StepItem {
    status?: string;
    icon?: Icon;
    title?: string;
    desc?: string;
}
declare const _default: import("vue").DefineComponent<{
    style: {
        type: (ObjectConstructor | StringConstructor)[];
        default: () => "";
    };
    className: {
        type: (ObjectConstructor | StringConstructor)[];
        default: () => "";
    };
    current: {
        type: NumberConstructor;
        default: number;
    };
    items: {
        type: PropType<StepItem[]>;
        default: () => any[];
    };
    onChange: {
        type: FunctionConstructor;
        default: () => void;
    };
}, unknown, unknown, {}, {
    handleClick(index: number): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    onChange: Function;
    style: "";
    className: "";
    items: StepItem[];
    current: number;
} & {}>, {
    onChange: Function;
    style: "";
    className: "";
    items: StepItem[];
    current: number;
}>;
export default _default;
