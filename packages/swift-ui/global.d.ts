import Vue, { VNode } from 'vue'
import * as CSS from 'csstype'

declare module "*.png";
declare module "*.gif";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.css";
declare module "*.less";
declare module "*.scss";
declare module "*.sass";
declare module "*.styl";

declare namespace JSX {
  interface Element extends VNode { }
  interface ElementClass extends Vue { }
  interface IntrinsicElements {
    [elem: string]: any;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    [propName: string]: any;
  }
}

export type CSSProperties = CSS.Properties