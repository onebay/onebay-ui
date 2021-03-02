import Loading from './loading/index';
import Accordion from './accordion/index';
import ActionSheet from './action-sheet/index';
import ActivityIndicator from './activity-indicator/index';
import Badge from './badge/index';
import Button from './button/index';
import Checkbox from './checkbox/index';
import List from './list/index';
import Divider from './divider/index';
import Drawer from './drawer/index';
import FloatLayout from './float-layout/index';
import Toast from './toast/index';
import Input from './input/index';
import Form from './form/index';
import Message from './message/index';
import Modal from './modal/index';
import NavBar from './nav-bar/index';
import Noticebar from './noticebar/index';
import Pagination from './pagination/index';
import Progress from './progress/index';
import Radio from './radio/index';
import Rate from './rate/index';
import SegmentedControl from './segmented-control/index';
import Slider from './slider/index';
import Steps from './steps/index';
import Tag from './tag/index';
import TabBar from './tab-bar/index';
import Swiper from './swiper/index';
import Picker from './picker/index';
// import PickerGroup from './picker/picker-group'
import InputNumber from './input-number/index';
import Switch from './switch/index';
import Textarea from './textarea/index';
import Range from './range/index';
import ImagePicker from './image-picker/index';
import SearchBar from './search-bar/index';
import ImagePreview from './image-preview/index';
import Flex from './flex/index';
import BackTop from './back-top/index';
import PullToRefresh from './pull-to-refresh/index';
import Icon from './icon/index';
import Timeline from './timeline/index';
export { Loading, Accordion, ActionSheet, ActivityIndicator, Badge, Button, Checkbox, List, Divider, Drawer, FloatLayout, Toast, Input, Form, Message, Modal, NavBar, Noticebar, Pagination, Progress, Radio, Rate, SegmentedControl, Slider, Steps, Tag, TabBar, Swiper, Picker, 
// PickerGroup,
InputNumber, Switch, Textarea, Range, ImagePicker, SearchBar, ImagePreview, Flex, BackTop, PullToRefresh, Icon, Timeline };
export default {
    install: (app) => {
        const components = [
            Loading,
            Accordion,
            ActionSheet,
            ActivityIndicator,
            Badge,
            Button,
            Checkbox,
            List,
            Divider,
            Drawer,
            FloatLayout,
            Toast,
            Input,
            Form,
            Message,
            Modal,
            NavBar,
            Noticebar,
            Pagination,
            Progress,
            Radio,
            Rate,
            SegmentedControl,
            Slider,
            Steps,
            Tag,
            TabBar,
            Swiper,
            Picker,
            // PickerGroup,
            InputNumber,
            Switch,
            Textarea,
            Range,
            ImagePicker,
            SearchBar,
            ImagePreview,
            Flex,
            BackTop,
            PullToRefresh,
            Icon,
            Timeline
        ];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        components.forEach((item) => {
            if (item.install) {
                app.use(item);
            }
            else {
                app.component(item.name, item);
            }
        });
    }
};
