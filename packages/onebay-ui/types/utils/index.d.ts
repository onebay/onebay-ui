import baseToString from './baseToString';
export declare function mergeStyle(style1: string | unknown, style2: string | unknown): string | unknown;
export declare function handleTouchScroll(flag: boolean): void;
export declare const isFunction: (value: unknown) => value is Function;
interface EventDetail {
    pageX: number;
    pageY: number;
    clientX: number;
    clientY: number;
    offsetX: number;
    offsetY: number;
    x: number;
    y: number;
}
export declare function getEventDetail(event: any): EventDetail;
interface ParameterErrorType {
    name?: string;
    para?: string;
    correct: string;
    wrong: unknown;
}
export declare function shouleBeObject(target: unknown): Partial<{
    res: boolean;
    msg: string;
}>;
export declare function getParameterError({ name, para, correct, wrong }: ParameterErrorType): string;
/**
 * return a uuid
 */
export declare const uuid: () => string;
export declare const isTest: () => boolean;
export { baseToString };
export declare const getScrollTop: () => number;
export interface Point {
    index: number;
    x: number;
    y: number;
}
interface TouchPoint {
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
export declare const getPoint: (point: Partial<TouchPoint>) => Point;
export declare const getLen: (points: Point[]) => number;
