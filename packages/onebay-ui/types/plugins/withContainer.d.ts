import { Component } from 'vue';
export declare type ContainerCallback = () => HTMLElement | Promise<HTMLElement>;
export interface Config {
    container?: HTMLElement | ContainerCallback;
}
export default function withContainer(component: Component, containerClass: string, config: Config): {
    close: () => void;
} | void;
export declare type WithContainerType = ReturnType<typeof withContainer>;
