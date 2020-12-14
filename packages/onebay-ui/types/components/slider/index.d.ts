export interface TouchPoint {
    clientX: number;
    clientY: number;
    force: number;
    identifier: number;
    pageX: number;
    pageY: number;
    radiusX: number;
    radiusY: number;
    rotationAngle: number;
    screenX: number;
    screenY: number;
}
declare const _default: import("vue").DefineComponent<{
    value: {
        type: NumberConstructor;
        default: number;
    };
    showValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    handlerColor: {
        type: StringConstructor;
        default: string;
    };
    trackColor: {
        type: StringConstructor;
        default: string;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
}, {
    innerValue: number;
    handlerStyle: import("vue").Ref<{}>;
    trackStyle: import("vue").Ref<{}>;
    touchPoint: TouchPoint;
    innerRef: Element;
    innerWidth: number;
    percent: import("vue").Ref<number>;
    balance: import("vue").ComputedRef<number>;
    innerStyle: import("vue").ComputedRef<{
        backgroundColor: string;
    } | {
        backgroundColor?: undefined;
    }>;
}, unknown, {}, {
    handleTouchStart(event: TouchEvent): void;
    handleTouchMove(event: TouchEvent): void;
    handleTouchEnd(event: TouchEvent): void;
    formatNextWidth(nextWidth: number): number;
    handleTouchChange(event: TouchEvent): any;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    max: number;
    disabled: boolean;
    value: number;
    showValue: boolean;
    activeColor: string;
    handlerColor: string;
    trackColor: string;
    min: number;
} & {}>, {
    max: number;
    disabled: boolean;
    value: number;
    showValue: boolean;
    activeColor: string;
    handlerColor: string;
    trackColor: string;
    min: number;
}>;
export default _default;
