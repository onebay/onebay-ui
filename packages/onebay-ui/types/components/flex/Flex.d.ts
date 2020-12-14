import { FlexPropsType as BasePropsType } from './PropsType';
import { CSSProperties } from '../../../global';
export interface FlexProps extends BasePropsType {
    alignContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'stretch';
    onClick?: (e: MouseEvent) => void;
    prefixCls?: string;
    className?: string;
    role?: string;
    style?: CSSProperties;
}
declare const Flex: import("vue").DefineComponent<{
    style: {
        type: StringConstructor;
        default: string;
    };
    className: {
        type: StringConstructor;
        default: string;
    };
    prefixCls: {
        type: StringConstructor;
        default: string;
    };
    align: {
        type: StringConstructor;
        default: string;
    };
    direction: {
        type: StringConstructor;
        default: string;
    };
    wrap: {
        type: StringConstructor;
        default: string;
    };
    justify: {
        type: StringConstructor;
        default: string;
    };
    alignContent: {
        type: StringConstructor;
        default: string;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    style: string;
    wrap: string;
    justify: string;
    alignContent: string;
    direction: string;
    className: string;
    prefixCls: string;
    align: string;
} & {}>, {
    style: string;
    wrap: string;
    justify: string;
    alignContent: string;
    direction: string;
    className: string;
    prefixCls: string;
    align: string;
}>;
export default Flex;
