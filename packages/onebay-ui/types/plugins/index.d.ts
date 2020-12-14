import { App } from 'vue';
import toast from './toast/index';
import message from './message/index';
import modal from './modal/index';
import imagePreview from './image-preview/index';
export { toast, message, modal, imagePreview };
declare const _default: {
    install: (app: App<any>) => void;
};
export default _default;
