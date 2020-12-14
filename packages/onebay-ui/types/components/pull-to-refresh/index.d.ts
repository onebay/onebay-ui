import { CSSProperties, PropType } from 'vue';
export declare enum Direction {
    Up = "up",
    Down = "down"
}
export declare type DirectionType = 'up' | 'down';
declare const _default: import("vue").DefineComponent<{
    indicator: {
        type: StringConstructor;
        default: string;
    };
    indicatorText: {
        type: StringConstructor;
        default: string;
    };
    className: {
        type: StringConstructor;
        default: string;
    };
    direction: {
        type: PropType<"down" | "up">;
        default: Direction;
    };
    distanceToRefresh: {
        type: NumberConstructor;
        default: number;
    };
    refreshing: {
        type: BooleanConstructor;
        default: boolean;
    };
    style: {
        type: PropType<CSSProperties>;
        default: string;
    };
    onRefresh: {
        type: FunctionConstructor;
        default: () => void;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "refresh"[], "refresh", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    style: string;
    direction: "down" | "up";
    className: string;
    indicator: string;
    indicatorText: string;
    distanceToRefresh: number;
    refreshing: boolean;
    onRefresh: Function;
} & {}>, {
    style: string;
    direction: "down" | "up";
    className: string;
    indicator: string;
    indicatorText: string;
    distanceToRefresh: number;
    refreshing: boolean;
    onRefresh: Function;
}>;
export default _default;
