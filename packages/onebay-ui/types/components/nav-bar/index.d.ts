import { PropType } from 'vue';
export interface NavBarProps {
    fixed?: boolean;
    border?: boolean;
    color?: string;
    title?: string;
    customStyle?: string | unknown;
    onClickLeftIcon?: () => void;
    className?: any;
    leftContent?: any;
    rightContent?: any;
}
declare const _default: import("vue").DefineComponent<{
    customStyle: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    className: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
    };
    fixed: {
        type: PropType<boolean>;
        default: boolean;
    };
    border: {
        type: PropType<boolean>;
        default: boolean;
    };
    color: {
        type: PropType<string>;
        default: string;
    };
    title: {
        type: PropType<string>;
        default: string;
    };
    onClickLeftIcon: {
        type: PropType<() => void>;
        default: () => () => void;
    };
    leftContent: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    rightContent: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
}, {
    linkStyle: import("vue").ComputedRef<{
        color: string;
    }>;
    rootCls: import("vue").ComputedRef<string>;
}, unknown, {}, {
    handleClickLeftView(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    fixed: boolean;
    title: string;
    color: string;
    border: boolean;
    customStyle: string;
    className: string | unknown[];
    onClickLeftIcon: () => void;
    leftContent: string;
    rightContent: string;
} & {}>, {
    fixed: boolean;
    title: string;
    color: string;
    border: boolean;
    customStyle: string;
    className: string | unknown[];
    onClickLeftIcon: () => void;
    leftContent: string;
    rightContent: string;
}>;
export default _default;
