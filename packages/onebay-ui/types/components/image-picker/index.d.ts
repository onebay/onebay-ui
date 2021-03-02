import { PropType } from 'vue';
interface MatrixFile extends Partial<File> {
    type?: 'blank' | 'btn';
    uuid?: string;
    url?: string;
}
declare const ImagePicker: import("vue").DefineComponent<{
    customStyle: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    className: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    files: {
        type: PropType<MatrixFile[]>;
        default: () => any[];
    };
    showAddBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    length: {
        type: NumberConstructor;
        default: number;
    };
    onChange: {
        type: FunctionConstructor;
        default: () => void;
    };
    onImageClick: {
        type: FunctionConstructor;
        default: () => void;
    };
    onFail: {
        type: PropType<(reason: any) => any>;
        default: () => void;
    };
    count: {
        type: NumberConstructor;
        default: number;
    };
}, {
    rootCls: import("vue").ComputedRef<string>;
    matrix: import("vue").ComputedRef<MatrixFile[][]>;
}, unknown, {}, {
    chooseFile(): void;
    handleImageClick(idx: number): void;
    handleRemoveImg(idx: number): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    length: number;
    multiple: boolean;
    onChange: Function;
    customStyle: string;
    className: string;
    count: number;
    files: MatrixFile[];
    showAddBtn: boolean;
    onImageClick: Function;
    onFail: (reason: any) => any;
} & {}>, {
    length: number;
    multiple: boolean;
    onChange: Function;
    customStyle: string;
    className: string;
    count: number;
    files: MatrixFile[];
    showAddBtn: boolean;
    onImageClick: Function;
    onFail: (reason: any) => any;
}>;
export default ImagePicker;
