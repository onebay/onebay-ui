declare type Icon = {
    prefixClass?: string;
    value?: string;
};
export interface AccordionProps {
    open?: boolean;
    title?: string;
    className?: string;
    icon?: Icon;
    note?: string;
    hasBorder?: boolean;
    isAnimation?: boolean;
}
declare const _default: import("vue").DefineComponent<{
    open: {
        type: BooleanConstructor;
        default: boolean;
    };
    customStyle: {
        type: StringConstructor;
        default: string;
    };
    className: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    note: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: ObjectConstructor;
        default: () => {
            value: string;
        };
    };
    hasBorder: {
        type: BooleanConstructor;
        default: boolean;
    };
    isAnimation: {
        type: BooleanConstructor;
        default: boolean;
    };
    onClick: {
        type: FunctionConstructor;
    };
}, {
    isCompleted: import("vue").Ref<boolean>;
    startOpen: import("vue").Ref<boolean>;
    wrapperHeight: import("vue").Ref<number>;
    contentStyle: import("vue").ComputedRef<{
        height: string;
    }>;
    iconCls: import("vue").ComputedRef<string>;
}, unknown, {}, {
    classNames: import("classnames/types").ClassNamesExport;
    handleClick(event: any): void;
    toggleWithAnimation(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    open: boolean;
    title: string;
    icon: Record<string, any>;
    customStyle: string;
    className: string;
    note: string;
    hasBorder: boolean;
    isAnimation: boolean;
} & {
    onClick?: Function;
}>, {
    open: boolean;
    title: string;
    icon: Record<string, any>;
    customStyle: string;
    className: string;
    note: string;
    hasBorder: boolean;
    isAnimation: boolean;
}>;
export default _default;
