declare const _default: import("vue").DefineComponent<{
    direction: {
        type: StringConstructor;
        default: string;
    };
    paginationVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    paginationClickable: {
        type: BooleanConstructor;
        default: boolean;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    speed: {
        type: NumberConstructor;
        default: number;
    };
    canDragging: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoPlay: {
        type: NumberConstructor;
        default: number;
    };
    initPage: {
        type: NumberConstructor;
        default: number;
    };
    lazyLoad: {
        type: BooleanConstructor;
        default: boolean;
    };
    lazyLoadUrl: {
        type: StringConstructor;
        default: string;
    };
    swiperData: {
        type: ArrayConstructor[];
        default: () => any[];
    };
}, {
    dragging: boolean;
    currentPage: number;
    lastPage: number;
    translateX: number;
    translateY: number;
    startTranslate: number;
    slideEls: any[];
    translateOffset: number;
    transitionDuration: number;
    startPos: any;
    delta: number;
    startTime: any;
    isLoop: boolean;
    timer: any;
    domTimer: any;
    stopAutoPlay: boolean;
    swiperWrap: any;
    oneSlideTranslate: number;
}, unknown, {}, {
    next(): void;
    prev(): void;
    setPage(page: any, isHasAnimation: any, type: any): void;
    isHorizontal(): boolean;
    renderLazyDom(slideEls: any): true;
    updateEvent(): void;
    _slideClassHandle(): void;
    _getSlideDistance(el: HTMLElement): void;
    _onTouchStart(e: any): void;
    _onTouchMove(e: any): void;
    _onTouchEnd(): void;
    _revert(): void;
    _computePreventDefault(e: any): boolean;
    _getTouchPos(e: any): {
        x: any;
        y: any;
    };
    _onTransitionStart(type: any): void;
    _onTransitionEnd(): void;
    _isPageChanged(): boolean;
    _setTranslate(value: any): void;
    _getTranslate(): any;
    _getTranslateOfPage(page: any): any;
    _createLoop(): void;
    _createAutoPlay(): void;
    _requestAniFrame(): (callback: FrameRequestCallback) => void;
    _imgLazyLoad(type: any): void;
    _checkInView(imgItem: any): boolean;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("slide-move" | "slide-change-start" | "slide-change-end" | "slide-revert-start" | "slide-revert-end")[], "slide-move" | "slide-change-start" | "slide-change-end" | "slide-revert-start" | "slide-revert-end", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    direction: string;
    speed: number;
    paginationVisible: boolean;
    paginationClickable: boolean;
    loop: boolean;
    canDragging: boolean;
    autoPlay: number;
    initPage: number;
    lazyLoad: boolean;
    lazyLoadUrl: string;
    swiperData: unknown[];
} & {}>, {
    direction: string;
    speed: number;
    paginationVisible: boolean;
    paginationClickable: boolean;
    loop: boolean;
    canDragging: boolean;
    autoPlay: number;
    initPage: number;
    lazyLoad: boolean;
    lazyLoadUrl: string;
    swiperData: unknown[];
}>;
export default _default;
