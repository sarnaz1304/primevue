import {createApp} from 'vue';
import {reactive} from 'vue';
import router from './router';
import AppWrapper from './AppWrapper.vue';
import PrimeVue from './components/config/PrimeVue';
import AutoComplete from './components/autocomplete/AutoComplete';
import Accordion from './components/accordion/Accordion';
import AccordionTab from './components/accordiontab/AccordionTab';
import Avatar from './components/avatar/Avatar';
import AvatarGroup from './components/avatargroup/AvatarGroup';
import Badge from './components/badge/Badge';
import BadgeDirective from './components/badgedirective/BadgeDirective';
import BlockUI from './components/blockui/BlockUI';
import Breadcrumb from './components/breadcrumb/Breadcrumb';
import Button from './components/button/Button';
import Calendar from './components/calendar/Calendar';
import Card from './components/card/Card';
import Carousel from './components/carousel/Carousel';
import CascadeSelect from './components/cascadeselect/CascadeSelect';
import Chart from './components/chart/Chart';
import Checkbox from './components/checkbox/Checkbox';
import Chip from './components/chip/Chip';
import Chips from './components/chips/Chips';
import ColorPicker from './components/colorpicker/ColorPicker';
import Column from './components/column/Column';
import ColumnGroup from './components/columngroup/ColumnGroup';
import ConfirmDialog from './components/confirmdialog/ConfirmDialog';
import ConfirmPopup from './components/confirmpopup/ConfirmPopup';
import ConfirmationService from './components/confirmationservice/ConfirmationService';
import ContextMenu from './components/contextmenu/ContextMenu';
import DataTable from './components/datatable/DataTable';
import DataView from './components/dataview/DataView';
import DataViewLayoutOptions from './components/dataviewlayoutoptions/DataViewLayoutOptions';
import DeferredContent from './components/deferredcontent/DeferredContent';
import Dialog from './components/dialog/Dialog';
import DynamicDialog from './components/dynamicdialog/DynamicDialog';
import DialogService from './components/dialogservice/DialogService';
import Divider from './components/divider/Divider';
import Dock from './components/dock/Dock';
import Dropdown from './components/dropdown/Dropdown';
import Editor from './components/editor/Editor';
import Fieldset from './components/fieldset/Fieldset';
import FileUpload from './components/fileupload/FileUpload';
import FullCalendar from './components/fullcalendar/FullCalendar';
import Image from './components/image/Image';
import InlineMessage from './components/inlinemessage/InlineMessage';
import Inplace from './components/inplace/Inplace';
import InputMask from './components/inputmask/InputMask';
import InputNumber from './components/inputnumber/InputNumber';
import InputSwitch from './components/inputswitch/InputSwitch';
import InputText from './components/inputtext/InputText';
import Knob from './components/knob/Knob';
import Listbox from './components/listbox/Listbox';
import MegaMenu from './components/megamenu/MegaMenu';
import Menu from './components/menu/Menu';
import Menubar from './components/menubar/Menubar';
import Message from './components/message/Message';
import MultiSelect from './components/multiselect/MultiSelect';
import OrderList from './components/orderlist/OrderList';
import OrganizationChart from './components/organizationchart/OrganizationChart';
import OverlayPanel from './components/overlaypanel/OverlayPanel';
import Paginator from './components/paginator/Paginator';
import Panel from './components/panel/Panel';
import PanelMenu from './components/panelmenu/PanelMenu';
import Password from './components/password/Password';
import PickList from './components/picklist/PickList';
import ProgressBar from './components/progressbar/ProgressBar';
import ProgressSpinner from './components/progressspinner/ProgressSpinner';
import Rating from './components/rating/Rating';
import RadioButton from './components/radiobutton/RadioButton';
import Ripple from './components/ripple/Ripple';
import Row from './components/row/Row';
import ScrollPanel from './components/scrollpanel/ScrollPanel';
import ScrollTop from './components/scrolltop/ScrollTop';
import SelectButton from './components/selectbutton/SelectButton';
import Skeleton from './components/skeleton/Skeleton';
import Slider from './components/slider/Slider';
import Sidebar from './components/sidebar/Sidebar';
import SplitButton from './components/splitbutton/SplitButton';
import SpeedDial from './components/speeddial/SpeedDial';
import Splitter from './components/splitter/Splitter';
import SplitterPanel from './components/splitterpanel/SplitterPanel';
import Steps from './components/steps/Steps';
import StyleClass from './components/styleclass/StyleClass';
import TabMenu from './components/tabmenu/TabMenu';
import TabView from './components/tabview/TabView';
import TabPanel from './components/tabpanel/TabPanel';
import Tag from './components/tag/Tag';
import Terminal from './components/terminal/Terminal';
import Textarea from './components/textarea/Textarea';
import TieredMenu from './components/tieredmenu/TieredMenu';
import Timeline from './components/timeline/Timeline';
import Tree from './components/tree/Tree';
import TreeSelect from './components/treeselect/TreeSelect';
import TreeTable from './components/treetable/TreeTable';
import Toast from './components/toast/Toast';
import ToastService from './components/toastservice/ToastService';
import ToggleButton from './components/togglebutton/ToggleButton';
import Toolbar from './components/toolbar/Toolbar';
import Tooltip from './components/tooltip/Tooltip';
import TriStateCheckbox from './components/tristatecheckbox/TriStateCheckbox';
import Galleria from './components/galleria/Galleria';
import VirtualScroller from './components/virtualscroller/VirtualScroller';

import AppInputStyleSwitch from './AppInputStyleSwitch';
import AppDemoActions from './AppDemoActions';
import AppDocumentation from './AppDocumentation';
import CodeHighlight from './AppCodeHighlight';

import EventBus from '@/AppEventBus';

import './assets/styles/primevue.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'prismjs/themes/prism-coy.css';
import './assets/styles/flags.css';

router.beforeEach(function (to, from, next) {
    if (to.name === 'home' && from.name) {
        const newTheme = app.config.globalProperties.$appState.darkTheme ? 'lara-dark-blue' : 'lara-light-blue';
        EventBus.emit('theme-change', { theme: newTheme, dark: app.config.globalProperties.$appState.darkTheme });
    }
    next();
});

const app = createApp(AppWrapper);

app.config.globalProperties.$appState = reactive({theme: 'lara-light-blue', darkTheme: false, codeSandbox: false, sourceType: 'options-api', newsActive: true, announcement: {}});

app.use(PrimeVue, {ripple: true});
app.use(ToastService);
app.use(ConfirmationService);
app.use(DialogService);
app.use(router);

app.directive('badge', BadgeDirective);
app.directive('tooltip', Tooltip);
app.directive('ripple', Ripple);
app.directive('styleclass', StyleClass);

app.component('Accordion', Accordion);
app.component('AccordionTab', AccordionTab);
app.component('Avatar', Avatar);
app.component('AvatarGroup', AvatarGroup);
app.component('AutoComplete', AutoComplete);
app.component('Badge', Badge);
app.component('BlockUI', BlockUI);
app.component('Breadcrumb', Breadcrumb);
app.component('Button', Button);
app.component('Calendar', Calendar);
app.component('Card', Card);
app.component('Carousel', Carousel);
app.component('CascadeSelect', CascadeSelect);
app.component('Chart', Chart);
app.component('Checkbox', Checkbox);
app.component('Chip', Chip);
app.component('Chips', Chips);
app.component('ColorPicker', ColorPicker);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('ConfirmDialog', ConfirmDialog);
app.component('ConfirmPopup', ConfirmPopup);
app.component('ContextMenu', ContextMenu);
app.component('DataTable', DataTable);
app.component('DataView', DataView);
app.component('DataViewLayoutOptions', DataViewLayoutOptions);
app.component('DeferredContent', DeferredContent);
app.component('Dialog', Dialog);
app.component('DynamicDialog', DynamicDialog);
app.component('Divider', Divider);
app.component('Dock', Dock);
app.component('Dropdown', Dropdown);
app.component('Editor', Editor);
app.component('Fieldset', Fieldset);
app.component('FileUpload', FileUpload);
app.component('FullCalendar', FullCalendar);
app.component('Image', Image);
app.component('InlineMessage', InlineMessage);
app.component('Inplace', Inplace);
app.component('InputMask', InputMask);
app.component('InputNumber', InputNumber);
app.component('InputSwitch', InputSwitch);
app.component('InputText', InputText);
app.component('Knob', Knob);
app.component('Listbox', Listbox);
app.component('MegaMenu', MegaMenu);
app.component('Menu', Menu);
app.component('Menubar', Menubar);
app.component('Message', Message);
app.component('MultiSelect', MultiSelect);
app.component('OrderList', OrderList);
app.component('OrganizationChart', OrganizationChart);
app.component('OverlayPanel', OverlayPanel);
app.component('Paginator', Paginator);
app.component('Panel', Panel);
app.component('PanelMenu', PanelMenu);
app.component('Password', Password);
app.component('PickList', PickList);
app.component('ProgressBar', ProgressBar);
app.component('ProgressSpinner', ProgressSpinner);
app.component('RadioButton', RadioButton);
app.component('Rating', Rating);
app.component('Row', Row);
app.component('ScrollPanel', ScrollPanel);
app.component('ScrollTop', ScrollTop);
app.component('SelectButton', SelectButton);
app.component('Slider', Slider);
app.component('Sidebar', Sidebar);
app.component('Skeleton', Skeleton);
app.component('SpeedDial', SpeedDial);
app.component('SplitButton', SplitButton);
app.component('Splitter', Splitter);
app.component('SplitterPanel', SplitterPanel);
app.component('Steps', Steps);
app.component('TabView', TabView);
app.component('TabPanel', TabPanel);
app.component('TabMenu', TabMenu);
app.component('Tag', Tag);
app.component('Terminal', Terminal);
app.component('Textarea', Textarea);
app.component('TieredMenu', TieredMenu);
app.component('Timeline', Timeline);
app.component('Toast', Toast);
app.component('Toolbar', Toolbar);
app.component('ToggleButton', ToggleButton);
app.component('Tree', Tree);
app.component('TreeSelect', TreeSelect);
app.component('TreeTable', TreeTable);
app.component('TriStateCheckbox', TriStateCheckbox);
app.component('Galleria', Galleria);
app.component('VirtualScroller', VirtualScroller);

app.component('AppDemoActions', AppDemoActions);
app.component('AppInputStyleSwitch', AppInputStyleSwitch);
app.component('AppDoc', AppDocumentation);
app.directive('code', CodeHighlight);

app.mount('#app');
