import { App } from 'vue'

import Loading from './components/loading/index'
import Accordion from './components/accordion/index'
import ActionSheet from './components/action-sheet/index'
import ActivityIndicator from './components/activity-indicator/index'
import Badge from './components/badge/index'
import Button from './components/button/index'
import Checkbox from './components/checkbox/index'
import List from './components/list/index'
import Divider from './components/divider/index'
import Drawer from './components/drawer/index'
import FloatLayout from './components/float-layout/index'
import Toast from './components/toast/index'
import Input from './components/input/index'
import Form from './components/form/index'
import Message from './components/message/index'
import Modal from './components/modal/index'
import ModalHeader from './components/modal/header/index'
import ModalAction from './components/modal/action/index'
import ModalContent from './components/modal/content/index'
import NavBar from './components/nav-bar/index'
import Noticebar from './components/noticebar/index'
import Pagination from './components/pagination/index'
import Progress from './components/progress/index'
import Radio from './components/radio/index'
import Rate from './components/rate/index'
import SegmentedControl from './components/segmented-control/index'
import Slider from './components/slider/index'
import Steps from './components/steps/index'
import Tag from './components/tag/index'
import TabBar from './components/tab-bar/index'
import Swiper from './components/swiper/index'
import Picker from './components/picker/index'
import PickerGroup from './components/picker/picker-group'
import InputNumber from './components/input-number/index'
import Switch from './components/switch/index'
import Textarea from './components/textarea/index'
import Range from './components/range/index'
import ImagePicker from './components/image-picker/index'
import SearchBar from './components/search-bar/index'
import ImagePreview from './components/image-preview/index'
import Flex from './components/flex/index'
import BackTop from './components/back-top/index'
import PullToRefresh from './components/pull-to-refresh/index'
import Icon from './components/icon/index'
import { toast, message, modal, imagePreview } from './plugins/index'

export {
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
  ModalHeader,
  ModalAction,
  ModalContent,
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
  PickerGroup,
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
  toast,
  message,
  modal,
  imagePreview
}

export default {
  install: (app: App): void => {
    app.component('Loading', Loading)
    app.component('Accordion', Accordion)
    app.component('ActionSheet', ActionSheet)
    app.component('ActivityIndicator', ActivityIndicator)
    app.component('Badge', Badge)
    app.component('Button', Button)
    app.component('Checkbox', Checkbox)
    app.component('List', List)
    app.component('Divider', Divider)
    app.component('Drawer', Drawer)
    app.component('FloatLayout', FloatLayout)
    app.component('Toast', Toast)
    app.component('Input', Input)
    app.component('Form', Form)
    app.component('Message', Message)
    app.component('Modal', Modal)
    app.component('ModalHeader', ModalHeader)
    app.component('ModalAction', ModalAction)
    app.component('ModalContent', ModalContent)
    app.component('NavBar', NavBar)
    app.component('Noticebar', Noticebar)
    app.component('Pagination', Pagination)
    app.component('Progress', Progress)
    app.component('Radio', Radio)
    app.component('Rate', Rate)
    app.component('SegmentedControl', SegmentedControl)
    app.component('Slider', Slider)
    app.component('Steps', Steps)
    app.component('Tag', Tag)
    app.component('TabBar', TabBar)
    app.component('Swiper', Swiper)
    app.component('Picker', Picker)
    app.component('PickerGroup', PickerGroup)
    app.component('InputNumber', InputNumber)
    app.component('Switch', Switch)
    app.component('Textarea', Textarea)
    app.component('Range', Range)
    app.component('ImagePicker', ImagePicker)
    app.component('SearchBar', SearchBar)
    app.component('ImagePreview', ImagePreview)
    app.component('Flex', Flex)
    app.component('BackTop', BackTop)
    app.component('PullToRefresh', PullToRefresh)
    app.component('Icon', Icon)

    app.config.globalProperties.$toast = toast
    app.config.globalProperties.$message = message
    app.config.globalProperties.$modal = modal
    app.config.globalProperties.$imagePreview = imagePreview
  }
}
