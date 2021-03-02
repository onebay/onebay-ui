declare const Range: import("vue").DefineComponent<{
    customStyle: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    className: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    sliderStyle: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    railStyle: {
        type: StringConstructor;
        default: string;
    };
    trackStyle: {
        type: StringConstructor;
        default: string;
    };
    value: {
        type: ArrayConstructor;
        default: () => number[];
    };
    blockSize: {
        type: NumberConstructor;
        default: number;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    onAfterChange: {
        type: FunctionConstructor;
        default: () => void;
    };
    onChange: {
        type: FunctionConstructor;
    };
}, {
    width: import("vue").Ref<number>;
    left: import("vue").Ref<number>;
    deltaValue: import("vue").Ref<number>;
    currentSlider: import("vue").Ref<"" | "aX" | "bX">;
    state: {
        aX: number;
        bX: number;
    };
    rootCls: import("vue").ComputedRef<string>;
    sliderCommonStyle: import("vue").ComputedRef<{
        width: string;
        height: string;
        marginLeft: string;
    }>;
    sliderAStyle: import("vue").ComputedRef<{
        left: string;
        width: string;
        height: string;
        marginLeft: string;
    }>;
    sliderBStyle: import("vue").ComputedRef<{
        left: string;
        width: string;
        height: string;
        marginLeft: string;
    }>;
    containerStyle: import("vue").ComputedRef<{
        height: string;
    }>;
    atTrackStyle: import("vue").ComputedRef<{
        left: string;
        width: string;
    }>;
}, unknown, {}, {
    handleClick(event: Event): void;
    handleTouchMove(sliderName: "aX" | "bX", event: TouchEvent): void;
    handleTouchEnd(sliderName: "aX" | "bX"): void;
    setSliderValue(sliderName: "aX" | "bX", targetValue: number, funcName: string): void;
    setValue(value: number[]): void;
    triggerEvent(funcName: string): void;
    updatePos(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    max: number;
    disabled: boolean;
    value: unknown[];
    blockSize: number;
    customStyle: string;
    className: string;
    min: number;
    trackStyle: string;
    sliderStyle: string;
    railStyle: string;
    onAfterChange: Function;
} & {
    onChange?: Function;
}>, {
    max: number;
    disabled: boolean;
    value: unknown[];
    blockSize: number;
    customStyle: string;
    className: string;
    min: number;
    trackStyle: string;
    sliderStyle: string;
    railStyle: string;
    onAfterChange: Function;
}>;
export default Range;
