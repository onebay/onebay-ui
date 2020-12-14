declare const Drawer: import("vue").DefineComponent<{
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    mask: {
        type: BooleanConstructor;
        default: boolean;
    };
    right: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    items: {
        type: ArrayConstructor;
        default: () => any[];
    };
    className: {
        type: StringConstructor;
        default: string;
    };
    onItemClick: {
        type: FunctionConstructor;
        default: () => void;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    right: boolean;
    show: boolean;
    mask: boolean;
    width: string | number;
    className: string;
    items: unknown[];
    onItemClick: Function;
} & {}>, {
    right: boolean;
    show: boolean;
    mask: boolean;
    width: string | number;
    className: string;
    items: unknown[];
    onItemClick: Function;
}>;
export default Drawer;
