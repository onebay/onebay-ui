import { PropType } from 'vue';
interface TimelineItem {
    icon?: string;
    color?: string;
    title: string;
    content?: string[];
}
declare const _default: import("vue").DefineComponent<{
    pending: {
        type: BooleanConstructor;
        default: boolean;
    };
    items: {
        type: PropType<TimelineItem[]>;
        default: () => any[];
    };
    customStyle: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    className: {
        type: StringConstructor;
        default: () => string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    pending: boolean;
    customStyle: string;
    className: string;
    items: TimelineItem[];
} & {}>, {
    pending: boolean;
    customStyle: string;
    className: string;
    items: TimelineItem[];
}>;
export default _default;
