import MessageContainer from './MessageContainer';
import withContainer from '../../plugins/withContainer';
const MESSAGE_CONTAINER_CLASS = 'message-container';
export var MessageType;
(function (MessageType) {
    MessageType["Info"] = "info";
    MessageType["Success"] = "success";
    MessageType["Error"] = "error";
    MessageType["Loading"] = "loading";
})(MessageType || (MessageType = {}));
const message = (config = {}) => {
    return withContainer(MessageContainer, MESSAGE_CONTAINER_CLASS, config);
};
message.info = (config = {}) => {
    config.type = MessageType.Info;
    return message(config);
};
message.success = (config = {}) => {
    config.type = MessageType.Success;
    return message(config);
};
message.error = (config = {}) => {
    config.type = MessageType.Error;
    return message(config);
};
message.loading = (config = {}) => {
    config.type = MessageType.Loading;
    return message(config);
};
export default message;
