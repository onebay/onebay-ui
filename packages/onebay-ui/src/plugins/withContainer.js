var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createApp } from 'vue';
import { isFunction } from '../utils';
export default function withContainer(component, containerClass, config) {
    let { container = document.body } = config;
    const getContainer = () => __awaiter(this, void 0, void 0, function* () {
        if (isFunction(container)) {
            container = yield container();
        }
    });
    getContainer();
    if (!(container instanceof HTMLElement)) {
        console.error(`${container} is not an instance of HTMLElement`);
        return;
    }
    const compContainer = document.createElement('div');
    compContainer.classList.add(containerClass);
    container.appendChild(compContainer);
    const close = () => {
        if (compContainer.parentNode) {
            compContainer.parentNode.removeChild(compContainer);
        }
    };
    const app = createApp(component, {
        config,
        close
    });
    app.mount(compContainer);
    return { close };
}
