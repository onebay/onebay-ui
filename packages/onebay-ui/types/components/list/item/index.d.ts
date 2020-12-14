export interface IconInfo {
    prefixClass?: string;
    value?: string;
    className?: string | string[];
}
export interface ListItemProps {
    note?: string;
    thumb?: string;
    disabled?: boolean;
    hasBorder?: boolean;
    className?: string | string[];
    iconInfo?: IconInfo;
    arrow?: string;
    extraText?: string;
    extraThumb?: string;
    title?: string;
    click?: () => void;
}
declare const _default: import("vue").DefineComponent<{
    className: {
        type: StringConstructor;
        default: string;
    };
    note: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    thumb: {
        type: StringConstructor;
        default: string;
    };
    hasBorder: {
        type: BooleanConstructor;
        default: boolean;
    };
    extraText: {
        type: StringConstructor;
        default: string;
    };
    extraThumb: {
        type: StringConstructor;
        default: string;
    };
    iconInfo: {
        type: ObjectConstructor;
        default: () => {
            value: string;
        };
    };
    arrow: {
        type: StringConstructor;
        default: string;
        validator: (val: string) => boolean;
    };
    onClick: {
        type: FunctionConstructor;
    };
}, {
    rootClass: import("vue").ComputedRef<string>;
    iconClass: import("vue").ComputedRef<string>;
    handleClick: (e: any) => void;
}, unknown, {}, {
    getIconStyle(): unknown;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    disabled: boolean;
    title: string;
    className: string;
    note: string;
    hasBorder: boolean;
    thumb: string;
    extraText: string;
    extraThumb: string;
    iconInfo: Record<string, any>;
    arrow: string;
} & {
    onClick?: Function;
}>, {
    disabled: boolean;
    title: string;
    className: string;
    note: string;
    hasBorder: boolean;
    thumb: string;
    extraText: string;
    extraThumb: string;
    iconInfo: Record<string, any>;
    arrow: string;
}>;
export default _default;
