/**
 * 从本地相册选择图片或使用相机拍照。
 * @param {Object} object 参数
 * @param {string[]} [object.sourceType=['album', 'camera']] 选择图片的来源（h5端未实现）
 * @param {string[]} [object.sizeType=['original', 'compressed']] 所选的图片的尺寸（h5端未实现）
 * @param {number} [object.count=9] 最多可以选择的图片张数
 * @param {function} [object.success] 接口调用成功的回调函数
 * @param {function} [object.fail] 接口调用失败的回调函数
 * @param {function} [object.complete] 接口调用结束的回调函数（调用成功、失败都会执行）
 * @param {string} [object.imageId] 用来上传的input元素ID（仅h5端）
 */
export interface TempFile {
    path: string;
    size: number;
    type: string;
}
export interface ChooseImageResponse {
    errMsg: string;
    tempFilePaths: string[];
    tempFiles: TempFile[];
}
export interface ChooseImageOptions {
    count?: number;
    success?: (resp: ChooseImageResponse) => unknown;
    fail?: (resp: ChooseImageResponse) => unknown;
    complete?: (resp: ChooseImageResponse) => unknown;
    imageId?: string;
}
declare const chooseImage: (options: ChooseImageOptions) => Promise<ChooseImageResponse>;
export default chooseImage;
