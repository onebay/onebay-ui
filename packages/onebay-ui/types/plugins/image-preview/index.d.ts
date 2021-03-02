import { Config } from '../withContainer';
export declare enum MessageStatus {
    Success = "success",
    Error = "error",
    Loading = "loading"
}
export interface ImagePreviewConfig extends Config {
    startPosition?: number;
    paginationVisible?: boolean;
    images?: string[];
}
declare const modal: (config?: ImagePreviewConfig) => void | {
    close: () => void;
};
export default modal;
