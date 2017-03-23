import Icon from './components/Icon/'
import Form from './components/Form/'
import Layout from './components/Layout/'
import Button from './components/Button/'
import Input from './components/Input/'
import Searchbox from './components/Searchbox/'
import Uploader from './components/Uploader/'
import Slider from './components/Slider/'
import Switch from './components/Switch/'
import Dropdown from './components/Dropdown/'
import Select from './components/Select/'
import Calendar from './components/Calendar/'
import TimePicker from './components/TimePicker/'
import DatePicker from './components/DatePicker/'

// 展示类
import Cascader from './components/Cascader/'
import Message from './components/Message/'
import Modal from './components/Modal/'
import Table from './components/Table/'
import Badge from './components/Badge/'
import Carousel from './components/Carousel/'
import Spin from './components/Spin/'
import Textarea from './components/Textarea/'
import Tag from './components/Tag/'
import Tooltip from './components/Tooltip/'
import Trigger from './components/Trigger/'
import Accordion from './components/Accordion/'

// 导航类
import Popover from './components/Popover/'
import Tabs from './components/Tabs/'
import Steps from './components/Steps/'
import Tree from './components/Tree/'
import Menu from './components/Menu/'
import Breadcrumb from './components/Breadcrumb/'
import Pagination from './components/Pagination/'

// 处理子组件
const { Col, Row } = Layout

const { ButtonGroup } = Button

const { BreadcrumbItem } = Breadcrumb

const { Slide } = Carousel

const { RangePicker } = DatePicker

const { FormItem } = Form

const { SubMenu, MenuItem, MenuItemGroup } = Menu

const { Option } = Select

const { Step } = Steps

const { Tab } = Tabs

const { TreeNode } = Tree

const VueComponent = {
  Layout,
  Col,
  Row,
  Icon,
  Form,
  FormItem,
  Searchbox,
  Uploader,
  Slider,
  Switch,
  Dropdown,
  Select,
  Option,
  Calendar,
  TimePicker,
  DatePicker,
  RangePicker,
  Message,
  Cascader,
  Modal,
  Table,
  Badge,
  Carousel,
  Slide,
  Spin,
  Textarea,
  Input,
  Button,
  ButtonGroup,
  Tag,
  Tooltip,
  Trigger,
  Accordion,
  Popover,
  Tabs,
  Tab,
  Steps,
  Step,
  Tree,
  TreeNode,
  Menu,
  SubMenu,
  MenuItem,
  MenuItemGroup,
  Breadcrumb,
  BreadcrumbItem,
  Pagination
}

module.exports = { ...VueComponent }
module.exports.version = '0.0.40'

module.exports.install = (Vue, opts) => {
  let prefix = opts && opts.prefix || 'v'
  Object.keys(VueComponent).forEach((key) => {
    // prefix component name with 'v'  <v-button></v-button>
    let comp = VueComponent[key]
    let compName = comp.name
    if (compName) {
      let dashCompName = prefix + '-' + camel2Dash(compName)
      Vue.component(dashCompName, comp)
    }
  })
}

function camel2Dash (_str) {
  const str = _str[0].toLowerCase() + _str.substr(1)
  return str.replace(/([A-Z])/g, ($1) => `-${$1.toLowerCase()}`)
}

// ie10以及以下，对某些样式支持有问题，需要降级
function getIEVersion () {
  var agent = navigator.userAgent
  var reg = /MSIE\s?(\d+)(?:\.(\d+))?/i
  var matches = agent.match(reg)
  if (matches != null) {
    return { major: matches[1], minor: matches[2] }
  }
  return { major: '-1', minor: '-1' }
}

let ieVersion = getIEVersion()

document.addEventListener('DOMContentLoaded', function (event) {
  if (ieVersion.major === '9' || ieVersion.major === '10') {
    document.body.className += 'let-ie11 ie' + ieVersion.major
  }
})
