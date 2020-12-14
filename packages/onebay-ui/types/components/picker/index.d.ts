import { PropType } from 'vue';
export declare type Mode = 'selector' | 'multiSelector' | 'time' | 'date';
export declare type Fields = 'day' | 'month' | 'year';
export declare type PickerValue = number | number[] | string;
export interface PickerDate {
    _value: Date;
    _start: Date;
    _end: Date;
    _updateValue: [number, number, number];
}
declare const Picker: import("vue").DefineComponent<{
    mode: {
        type: PropType<Mode>;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    range: {
        type: ArrayConstructor;
        default: () => any[];
    };
    value: {
        type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
        default: string;
    };
    start: {
        type: StringConstructor;
        default: string;
    };
    end: {
        type: StringConstructor;
        default: string;
    };
    fields: {
        type: PropType<Fields>;
        default: string;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    okText: {
        type: StringConstructor;
        default: string;
    };
    rangeKey: {
        type: StringConstructor;
        default: string;
    };
    onChange: {
        type: FunctionConstructor;
    };
    onCancel: {
        type: FunctionConstructor;
    };
    onColumnchange: {
        type: FunctionConstructor;
    };
}, {
    pickerValue: import("vue").Ref<string | number | number[]>;
    height: import("vue").Ref<number[]>;
    hidden: import("vue").Ref<boolean>;
    fadeOut: import("vue").Ref<boolean>;
    index: import("vue").Ref<unknown>;
    pickerDate: import("vue").Ref<{
        _value: {
            toString: () => string;
            toDateString: () => string;
            toTimeString: () => string;
            toLocaleString: {
                (): string;
                (locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
            };
            toLocaleDateString: {
                (): string;
                (locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
            };
            toLocaleTimeString: {
                (): string;
                (locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
            };
            valueOf: () => number;
            getTime: () => number;
            getFullYear: () => number;
            getUTCFullYear: () => number;
            getMonth: () => number;
            getUTCMonth: () => number;
            getDate: () => number;
            getUTCDate: () => number;
            getDay: () => number;
            getUTCDay: () => number;
            getHours: () => number;
            getUTCHours: () => number;
            getMinutes: () => number;
            getUTCMinutes: () => number;
            getSeconds: () => number;
            getUTCSeconds: () => number;
            getMilliseconds: () => number;
            getUTCMilliseconds: () => number;
            getTimezoneOffset: () => number;
            setTime: (time: number) => number;
            setMilliseconds: (ms: number) => number;
            setUTCMilliseconds: (ms: number) => number;
            setSeconds: (sec: number, ms?: number) => number;
            setUTCSeconds: (sec: number, ms?: number) => number;
            setMinutes: (min: number, sec?: number, ms?: number) => number;
            setUTCMinutes: (min: number, sec?: number, ms?: number) => number;
            setHours: (hours: number, min?: number, sec?: number, ms?: number) => number;
            setUTCHours: (hours: number, min?: number, sec?: number, ms?: number) => number;
            setDate: (date: number) => number;
            setUTCDate: (date: number) => number;
            setMonth: (month: number, date?: number) => number;
            setUTCMonth: (month: number, date?: number) => number;
            setFullYear: (year: number, month?: number, date?: number) => number;
            setUTCFullYear: (year: number, month?: number, date?: number) => number;
            toUTCString: () => string;
            toISOString: () => string;
            toJSON: (key?: any) => string;
            getVarDate: () => VarDate;
        } & {
            [Symbol.toPrimitive]: {
                (hint: "default"): string;
                (hint: "string"): string;
                (hint: "number"): number;
                (hint: string): string | number;
            };
        };
        _start: {
            toString: () => string;
            toDateString: () => string;
            toTimeString: () => string;
            toLocaleString: {
                (): string;
                (locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
            };
            toLocaleDateString: {
                (): string;
                (locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
            };
            toLocaleTimeString: {
                (): string;
                (locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
            };
            valueOf: () => number;
            getTime: () => number;
            getFullYear: () => number;
            getUTCFullYear: () => number;
            getMonth: () => number;
            getUTCMonth: () => number;
            getDate: () => number;
            getUTCDate: () => number;
            getDay: () => number;
            getUTCDay: () => number;
            getHours: () => number;
            getUTCHours: () => number;
            getMinutes: () => number;
            getUTCMinutes: () => number;
            getSeconds: () => number;
            getUTCSeconds: () => number;
            getMilliseconds: () => number;
            getUTCMilliseconds: () => number;
            getTimezoneOffset: () => number;
            setTime: (time: number) => number;
            setMilliseconds: (ms: number) => number;
            setUTCMilliseconds: (ms: number) => number;
            setSeconds: (sec: number, ms?: number) => number;
            setUTCSeconds: (sec: number, ms?: number) => number;
            setMinutes: (min: number, sec?: number, ms?: number) => number;
            setUTCMinutes: (min: number, sec?: number, ms?: number) => number;
            setHours: (hours: number, min?: number, sec?: number, ms?: number) => number;
            setUTCHours: (hours: number, min?: number, sec?: number, ms?: number) => number;
            setDate: (date: number) => number;
            setUTCDate: (date: number) => number;
            setMonth: (month: number, date?: number) => number;
            setUTCMonth: (month: number, date?: number) => number;
            setFullYear: (year: number, month?: number, date?: number) => number;
            setUTCFullYear: (year: number, month?: number, date?: number) => number;
            toUTCString: () => string;
            toISOString: () => string;
            toJSON: (key?: any) => string;
            getVarDate: () => VarDate;
        } & {
            [Symbol.toPrimitive]: {
                (hint: "default"): string;
                (hint: "string"): string;
                (hint: "number"): number;
                (hint: string): string | number;
            };
        };
        _end: {
            toString: () => string;
            toDateString: () => string;
            toTimeString: () => string;
            toLocaleString: {
                (): string;
                (locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
            };
            toLocaleDateString: {
                (): string;
                (locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
            };
            toLocaleTimeString: {
                (): string;
                (locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;
            };
            valueOf: () => number;
            getTime: () => number;
            getFullYear: () => number;
            getUTCFullYear: () => number;
            getMonth: () => number;
            getUTCMonth: () => number;
            getDate: () => number;
            getUTCDate: () => number;
            getDay: () => number;
            getUTCDay: () => number;
            getHours: () => number;
            getUTCHours: () => number;
            getMinutes: () => number;
            getUTCMinutes: () => number;
            getSeconds: () => number;
            getUTCSeconds: () => number;
            getMilliseconds: () => number;
            getUTCMilliseconds: () => number;
            getTimezoneOffset: () => number;
            setTime: (time: number) => number;
            setMilliseconds: (ms: number) => number;
            setUTCMilliseconds: (ms: number) => number;
            setSeconds: (sec: number, ms?: number) => number;
            setUTCSeconds: (sec: number, ms?: number) => number;
            setMinutes: (min: number, sec?: number, ms?: number) => number;
            setUTCMinutes: (min: number, sec?: number, ms?: number) => number;
            setHours: (hours: number, min?: number, sec?: number, ms?: number) => number;
            setUTCHours: (hours: number, min?: number, sec?: number, ms?: number) => number;
            setDate: (date: number) => number;
            setUTCDate: (date: number) => number;
            setMonth: (month: number, date?: number) => number;
            setUTCMonth: (month: number, date?: number) => number;
            setFullYear: (year: number, month?: number, date?: number) => number;
            setUTCFullYear: (year: number, month?: number, date?: number) => number;
            toUTCString: () => string;
            toISOString: () => string;
            toJSON: (key?: any) => string;
            getVarDate: () => VarDate;
        } & {
            [Symbol.toPrimitive]: {
                (hint: "default"): string;
                (hint: "string"): string;
                (hint: "number"): number;
                (hint: string): string | number;
            };
        };
        _updateValue: [number, number, number];
    }>;
}, unknown, {}, {
    handleProps(): void;
    showPicker(): void;
    getHeightByIndex(): any;
    hidePicker(): void;
    handleChange(): void;
    handleCancel(): void;
    updateHeight(height: number, columnId: string, needRevise?: boolean): void;
    handleColumnChange(height: number, columnId: string): void;
    updateDay(value: number, fields: number): void;
    getSelector(): JSX.Element;
    getMultiSelector(): any;
    getTimeSelector(): JSX.Element[];
    getDateSelector(): JSX.Element[];
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("cancel" | "change" | "columnchange")[], "cancel" | "change" | "columnchange", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    disabled: boolean;
    end: string;
    start: string;
    value: string | number | unknown[];
    name: string;
    mode: Mode;
    range: unknown[];
    cancelText: string;
    rangeKey: string;
    fields: Fields;
    okText: string;
} & {
    onChange?: Function;
    onCancel?: Function;
    onColumnchange?: Function;
}>, {
    disabled: boolean;
    end: string;
    start: string;
    value: string | number | unknown[];
    name: string;
    mode: Mode;
    range: unknown[];
    cancelText: string;
    rangeKey: string;
    fields: Fields;
    okText: string;
}>;
export default Picker;
