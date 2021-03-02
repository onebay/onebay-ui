import { FlexItemPropsType } from './PropsType';
import { CSSProperties } from '../../../global';
export interface FlexItemProps extends FlexItemPropsType {
    prefixCls?: string;
    className?: string;
    style?: CSSProperties;
}
declare const FlexItem: import("vue").DefineComponent<{
    style: {
        type: StringConstructor;
        default: string;
    };
    prefixCls: {
        type: StringConstructor;
        default: string;
    };
    className: {
        type: StringConstructor;
        default: string;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    style: string;
    className: string;
    prefixCls: string;
} & {}>, {
    style: string;
    className: string;
    prefixCls: string;
}>;
export default FlexItem;
