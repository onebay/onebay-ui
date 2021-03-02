import { PropType } from 'vue';
export interface TabListItem {
    title?: string;
    iconType?: string;
    dot?: boolean;
    text?: string;
    max?: number;
    iconPrefixClass?: string;
    selectedIconType?: string;
    selectedImage?: string;
    image?: string;
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
        type: BooleanConstructor;
        default: boolean;
    };
    current: {
        type: NumberConstructor;
        default: number;
    };
    iconSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    fontSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    selectedColor: {
        type: StringConstructor;
        default: string;
    };
    tabList: {
        type: PropType<TabListItem[]>;
        default: () => any[];
    };
    backgroundColor: {
        type: StringConstructor;
        default: string;
    };
    onClick: {
        type: FunctionConstructor;
        default: () => void;
    };
}, {
    rootCls: import("vue").ComputedRef<string>;
    rootSty: import("vue").ComputedRef<unknown>;
    titleStyle: import("vue").ComputedRef<{
        fontSize: string;
    }>;
    imgStyle: import("vue").ComputedRef<{
        width: string;
        height: string;
    }>;
    selectedStyle: import("vue").ComputedRef<{
        color: string;
    }>;
    defaultStyle: import("vue").ComputedRef<{
        color: string;
    }>;
}, unknown, {}, {
    handleClick(index: number, event: Event): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    fixed: boolean;
    color: string;
    onClick: Function;
    backgroundColor: string;
    fontSize: string | number;
    customStyle: string;
    className: string | unknown[];
    current: number;
    selectedColor: string;
    iconSize: string | number;
    tabList: TabListItem[];
} & {}>, {
    fixed: boolean;
    color: string;
    onClick: Function;
    backgroundColor: string;
    fontSize: string | number;
    customStyle: string;
    className: string | unknown[];
    current: number;
    selectedColor: string;
    iconSize: string | number;
    tabList: TabListItem[];
}>;
export default _default;
