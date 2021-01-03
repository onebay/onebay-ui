import ModalContainer from './ModalContainer';
import withContainer from '../../plugins/withContainer';
const MODAL_CONTAINER_CLASS = 'modal-container';
export var MessageStatus;
(function (MessageStatus) {
    MessageStatus["Success"] = "success";
    MessageStatus["Error"] = "error";
    MessageStatus["Loading"] = "loading";
})(MessageStatus || (MessageStatus = {}));
const modal = (config = {}) => {
    return withContainer(ModalContainer, MODAL_CONTAINER_CLASS, config);
};
export default modal;
