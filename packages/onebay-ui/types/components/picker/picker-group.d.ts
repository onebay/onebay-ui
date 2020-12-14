import { PropType } from 'vue';
declare type UpdateHeight = (height: number, columnId: string, needRevise?: boolean) => void;
declare type OnColumnChange = (height: number, columnId: string) => void;
declare type UpdateDay = (value: number, fields: number) => void;
declare const PickerGroup: import("vue").DefineComponent<{
    mode: {
        type: StringConstructor;
        default: string;
    };
    range: {
        type: ArrayConstructor;
        default: any[];
    };
    rangeKey: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    columnId: {
        type: StringConstructor;
        default: string;
    };
    updateHeight: {
        type: PropType<UpdateHeight>;
        default: () => void;
    };
    onColumnChange: {
        type: PropType<OnColumnChange>;
        default: () => void;
    };
    updateDay: {
        type: PropType<UpdateDay>;
        require: boolean;
    };
}, {
    startY: import("vue").Ref<number>;
    preY: import("vue").Ref<number>;
    hadMove: import("vue").Ref<boolean>;
    touchEnd: import("vue").Ref<boolean>;
}, unknown, {}, {
    getPosition(): {
        transform: string;
        '-webkit-transform': string;
        transition: string;
        '-webkit-transition': string;
    };
    formulaUnlimitedScroll(range: number, absoluteHeight: number, direction: "down" | "up"): void;
    onTouchStart(e: TouchEvent): void;
    onTouchMove(e: TouchEvent): void;
    onTouchEnd(e: TouchEvent): any;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    mode: string;
    range: unknown[];
    height: number;
    rangeKey: string;
    columnId: string;
    updateHeight: UpdateHeight;
    onColumnChange: OnColumnChange;
} & {
    updateDay?: UpdateDay;
}>, {
    mode: string;
    range: unknown[];
    height: number;
    rangeKey: string;
    columnId: string;
    updateHeight: UpdateHeight;
    onColumnChange: OnColumnChange;
}>;
export default PickerGroup;
