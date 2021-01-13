import { PropType } from 'vue';
declare const ImagePreview: import("vue").DefineComponent<{
    className: {
        type: StringConstructor;
        default: string;
    };
    images: {
        type: PropType<string[]>;
        default: () => any[];
    };
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    startPosition: {
        type: NumberConstructor;
        default: number;
    };
    paginationVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxScale: {
        type: NumberConstructor;
        default: number;
    };
    minScale: {
        type: NumberConstructor;
        default: number;
    };
}, {
    handleTouchstart: (event: TouchEvent) => void;
    handleTouchmove: (event: TouchEvent) => void;
    handleTouchend: (event: TouchEvent) => void;
    scaleStyle: import("vue").ComputedRef<{
        transform: string;
    }>;
    handleDbClick: () => void;
    visible: import("vue").Ref<boolean>;
    toggleVisible: () => void;
    scale: import("vue").Ref<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("open" | "close")[], "open" | "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    show: boolean;
    className: string;
    paginationVisible: boolean;
    images: string[];
    startPosition: number;
    maxScale: number;
    minScale: number;
} & {}>, {
    show: boolean;
    className: string;
    paginationVisible: boolean;
    images: string[];
    startPosition: number;
    maxScale: number;
    minScale: number;
}>;
export default ImagePreview;
