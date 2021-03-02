declare const List: import("vue").DefineComponent<{
    hasBorder: {
        type: BooleanConstructor;
        default: boolean;
    };
    className: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
    };
}, {
    rootClass: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    className: string | unknown[];
    hasBorder: boolean;
} & {}>, {
    className: string | unknown[];
    hasBorder: boolean;
}>;
export default List;
