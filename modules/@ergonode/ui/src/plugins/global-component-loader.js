/*
 * Copyright © Ergonode Sp. z o.o. All rights reserved.
 * See LICENSE for license details.
 */
import ActionBaseButton from '@UI/components/ActionButton/ActionBaseButton';
import ActionButton from '@UI/components/ActionButton/ActionButton';
import ActionFab from '@UI/components/ActionFab/ActionFab';
import ActionIconButton from '@UI/components/ActionIconButton/ActionIconButton';
import AdvancedFilters from '@UI/components/AdvancedFilters/AdvancedFilters';
import Alert from '@UI/components/Alert/Alert';
import Autocomplete from '@UI/components/Autocomplete/Autocomplete';
import BadgeLabel from '@UI/components/Badges/BadgeLabel';
import InformationBadge from '@UI/components/Badges/InformationBadge';
import InformationIconBadge from '@UI/components/Badges/InformationIconBadge';
import NotificationBadge from '@UI/components/Badges/NotificationBadge';
import NumericBadge from '@UI/components/Badges/NumericBadge';
import PointBadge from '@UI/components/Badges/PointBadge';
import ReadOnlyBadge from '@UI/components/Badges/ReadOnlyBadge';
import RoundedBadge from '@UI/components/Badges/RoundedBadge';
import Button from '@UI/components/Button/Button';
import Card from '@UI/components/Card/Card';
import Carousel from '@UI/components/Carousel/Carousel';
import CheckBox from '@UI/components/CheckBox/CheckBox';
import ColorPicker from '@UI/components/ColorPicker/ColorPicker';
import DatePicker from '@UI/components/DatePicker/DatePicker';
import DefaultImage from '@UI/components/DefaultImage/DefaultImage';
import Divider from '@UI/components/Dividers/Divider';
import DraggableForm from '@UI/components/DraggableForm/DraggableForm';
import DropZone from '@UI/components/DropZone/DropZone';
import Fab from '@UI/components/Fab/Fab';
import FeedbackProvider from '@UI/components/Feedback/FeedbackProvider';
import FluidBlob from '@UI/components/FluidBlob/FluidBlob';
import Form from '@UI/components/Form/Form';
import FormFieldset from '@UI/components/Form/FormFieldset';
import FormHeader from '@UI/components/Form/FormHeader';
import JSONSchemaForm from '@UI/components/Form/JSONSchemaForm/JSONSchemaForm';
import FormListSection from '@UI/components/Form/Section/FormListSection';
import FormSection from '@UI/components/Form/Section/FormSection';
import FormListSubsection from '@UI/components/Form/Subsection/FormListSubsection';
import FormSubsection from '@UI/components/Form/Subsection/FormSubsection';
import AddFilterDropZone from '@UI/components/Grid/DropZone/AddFilterDropZone';
import AddGridColumnDropZone from '@UI/components/Grid/DropZone/AddGridColumnDropZone';
import RemoveFilterAndColumnDropZone from '@UI/components/Grid/DropZone/RemoveFilterAndColumnDropZone';
import GridFooterText from '@UI/components/Grid/Footer/GridFooterText';
import GridPageSelector from '@UI/components/Grid/Footer/GridPageSelector';
import GridPageSelectorArrowsPanel from '@UI/components/Grid/Footer/GridPageSelectorArrowsPanel';
import GridPagination from '@UI/components/Grid/Footer/GridPagination';
import Grid from '@UI/components/Grid/Grid';
import GridBody from '@UI/components/Grid/GridBody';
import GridFooter from '@UI/components/Grid/GridFooter';
import GridNoDataPlaceholder from '@UI/components/Grid/GridNoDataPlaceholder';
import GridNoResultsPlaceholder from '@UI/components/Grid/GridNoResultsPlaceholder';
import GridHeader from '@UI/components/Grid/Header/GridHeader';
import GridHeaderSettings from '@UI/components/Grid/Header/GridHeaderSettings';
import GridPanelHeader from '@UI/components/Grid/Header/GridPanelHeader';
import GridCollectionCell from '@UI/components/Grid/Layout/Collection/Cells/GridCollectionCell';
import GridCollectionCellActionsPanel from '@UI/components/Grid/Layout/Collection/Cells/GridCollectionCellActionsPanel';
import GridCollectionDefaultCell from '@UI/components/Grid/Layout/Collection/Cells/GridCollectionDefaultCell';
import GridSelectCollectionHeaderCell
    from '@UI/components/Grid/Layout/Collection/Cells/Header/GridSelectCollectionHeaderCell';
import GridCollectionLayout from '@UI/components/Grid/Layout/Collection/GridCollectionLayout';
import GridCollectionLayoutActivator from '@UI/components/Grid/Layout/Collection/GridCollectionLayoutActivator';
import GridSelectRowActionFabCell from '@UI/components/Grid/Layout/Table/Cells/GridSelectRowActionFabCell';
import GridTableCell from '@UI/components/Grid/Layout/Table/Cells/GridTableCell';
import GridHeaderCell from '@UI/components/Grid/Layout/Table/Cells/Header/GridHeaderCell';
import GridSelectRowHeaderCell from '@UI/components/Grid/Layout/Table/Cells/Header/GridSelectRowHeaderCell';
import GridTitleHeaderCell from '@UI/components/Grid/Layout/Table/Cells/Header/GridTitleHeaderCell';
import GridEditNavigationCell from '@UI/components/Grid/Layout/Table/Cells/Navigation/GridEditNavigationCell';
import GridFilterPresentationCell from '@UI/components/Grid/Layout/Table/Cells/Presentation/GridFilterPresentationCell';
import GridHintPresentationCell from '@UI/components/Grid/Layout/Table/Cells/Presentation/GridHintPresentationCell';
import GridImagePresentationCell from '@UI/components/Grid/Layout/Table/Cells/Presentation/GridImagePresentationCell';
import GridPresentationCell from '@UI/components/Grid/Layout/Table/Cells/Presentation/GridPresentationCell';
import GridSuffixPresentationCell from '@UI/components/Grid/Layout/Table/Cells/Presentation/GridSuffixPresentationCell';
import GridCellResizer from '@UI/components/Grid/Layout/Table/Cells/Resizer/GridCellResizer';
import GridColumnResizer from '@UI/components/Grid/Layout/Table/Columns/Resizer/GridColumnResizer';
import GridTableLayout from '@UI/components/Grid/Layout/Table/GridTableLayout';
import GridTableLayoutActivator from '@UI/components/Grid/Layout/Table/GridTableLayoutActivator';
import GridTableLayoutColumnsSection from '@UI/components/Grid/Layout/Table/Sections/GridTableLayoutColumnsSection';
import GridTableLayoutPinnedSection from '@UI/components/Grid/Layout/Table/Sections/GridTableLayoutPinnedSection';
import GridSettingsModalForm from '@UI/components/Grid/Modals/GridSettingsModalForm';
import ErrorHint from '@UI/components/Hints/ErrorHint';
import InfoHint from '@UI/components/Hints/InfoHint';
import IconButton from '@UI/components/IconButton/IconButton';
import IconAdd from '@UI/components/Icons/Actions/IconAdd';
import IconAddColumn from '@UI/components/Icons/Actions/IconAddColumn';
import IconAddFilter from '@UI/components/Icons/Actions/IconAddFilter';
import IconCancel from '@UI/components/Icons/Actions/IconCancel';
import IconDelete from '@UI/components/Icons/Actions/IconDelete';
import IconDragDrop from '@UI/components/Icons/Actions/IconDragDrop';
import IconEdit from '@UI/components/Icons/Actions/IconEdit';
import IconPreview from '@UI/components/Icons/Actions/IconPreview';
import IconRefresh from '@UI/components/Icons/Actions/IconRefresh';
import IconRemoveColumn from '@UI/components/Icons/Actions/IconRemoveColumn';
import IconRemoveFilter from '@UI/components/Icons/Actions/IconRemoveFilter';
import IconRestore from '@UI/components/Icons/Actions/IconRestore';
import IconSearch from '@UI/components/Icons/Actions/IconSearch';
import IconSettings from '@UI/components/Icons/Actions/IconSettings';
import IconUploadCloudFile from '@UI/components/Icons/Actions/IconUploadCloudFile';
import IconUploadFile from '@UI/components/Icons/Actions/IconUploadFile';
import IconArrowDouble from '@UI/components/Icons/Arrows/IconArrowDouble';
import IconArrowDropdown from '@UI/components/Icons/Arrows/IconArrowDropdown';
import IconArrowPointer from '@UI/components/Icons/Arrows/IconArrowPointer';
import IconArrowPointerBlock from '@UI/components/Icons/Arrows/IconArrowPointerBlock';
import IconArrowRoundedDropdown from '@UI/components/Icons/Arrows/IconArrowRoundedDropdown';
import IconArrowSingle from '@UI/components/Icons/Arrows/IconArrowSingle';
import IconArrowSort from '@UI/components/Icons/Arrows/IconArrowSort';
import IconCheck from '@UI/components/Icons/Feedback/IconCheck';
import IconError from '@UI/components/Icons/Feedback/IconError';
import IconInfo from '@UI/components/Icons/Feedback/IconInfo';
import IconLoader from '@UI/components/Icons/Feedback/IconLoader';
import IconLock from '@UI/components/Icons/Feedback/IconLock';
import IconMark from '@UI/components/Icons/Feedback/IconMark';
import IconSpinner from '@UI/components/Icons/Feedback/IconSpinner';
import IconSuccess from '@UI/components/Icons/Feedback/IconSuccess';
import IconSync from '@UI/components/Icons/Feedback/IconSync';
import IconTooltip from '@UI/components/Icons/Feedback/IconTooltip';
import IconWarning from '@UI/components/Icons/Feedback/IconWarning';
import Icon from '@UI/components/Icons/Icon';
import IconDots from '@UI/components/Icons/Others/IconDots';
import IconFile from '@UI/components/Icons/Others/IconFile';
import IconGrid from '@UI/components/Icons/Others/IconGrid';
import IconListMedium from '@UI/components/Icons/Others/IconListMedium';
import IconProcessing from '@UI/components/Icons/Others/IconProcessing';
import IconResize from '@UI/components/Icons/Others/IconResize';
import IconTranslate from '@UI/components/Icons/Others/IconTranslate';
import IconClose from '@UI/components/Icons/Window/IconClose';
import IconFilledClose from '@UI/components/Icons/Window/IconFilledClose';
import ImageCarousel from '@UI/components/ImageCarousel/ImageCarousel';
import InputController from '@UI/components/Input/InputController';
import InputImageController from '@UI/components/Input/InputImageController';
import InputLabel from '@UI/components/Input/InputLabel';
import InputSelectValue from '@UI/components/Input/InputSelectValue';
import InputSolidStyle from '@UI/components/Input/InputSolidStyle';
import InputUnderlineStyle from '@UI/components/Input/InputUnderlineStyle';
import InputUploadPlaceholder from '@UI/components/Input/InputUploadPlaceholder';
import InputUploadSpinner from '@UI/components/Input/InputUploadSpinner';
import InputUUIDProvider from '@UI/components/Input/InputUUIDProvider';
import Page from '@UI/components/Layout/Page';
import CenterViewTemplate from '@UI/components/Layout/Templates/CenterViewTemplate';
import LazyImage from '@UI/components/LazyImage/LazyImage';
import LinkButton from '@UI/components/LinkButton/LinkButton';
import List from '@UI/components/List/List';
import ListDraggableElement from '@UI/components/List/ListDraggableElement';
import ListElement from '@UI/components/List/ListElement';
import ListElementAction from '@UI/components/List/ListElementAction';
import ListElementDescription from '@UI/components/List/ListElementDescription';
import ListElementHint from '@UI/components/List/ListElementHint';
import ListElementIcon from '@UI/components/List/ListElementIcon';
import ListElementTitle from '@UI/components/List/ListElementTitle';
import ListElementTree from '@UI/components/List/ListElementTree';
import ListGroupElement from '@UI/components/List/ListGroupElement';
import ListHeader from '@UI/components/List/ListHeader';
import ListScrollableContainer from '@UI/components/List/ListScrollableContainer';
import ListSearchHeader from '@UI/components/List/ListSearchHeader';
import ListSearchSelectHeader from '@UI/components/List/ListSearchSelectHeader';
import MenuList from '@UI/components/MenuList/MenuList';
import MenuListElement from '@UI/components/MenuList/MenuListElement';
import MenuListHeader from '@UI/components/MenuList/MenuListHeader';
import Modal from '@UI/components/Modal/Modal';
import ModalBody from '@UI/components/Modal/ModalBody';
import ModalFooter from '@UI/components/Modal/ModalFooter';
import ModalForm from '@UI/components/Modal/ModalForm';
import ModalGrid from '@UI/components/Modal/ModalGrid';
import ModalHeader from '@UI/components/Modal/ModalHeader';
import ModalOverlay from '@UI/components/Modal/ModalOverlay';
import ModalTabBar from '@UI/components/Modal/ModalTabBar';
import NavigationSideBar from '@UI/components/NavigationSideBar/NavigationSideBar';
import IntersectionObserver from '@UI/components/Observers/IntersectionObserver';
import ResizeObserver from '@UI/components/Observers/ResizeObserver';
import Paragraph from '@UI/components/Paragraph/Paragraph';
import Placeholder from '@UI/components/Placeholder/Placeholder';
import PlaceholderClearSearchButton from '@UI/components/Placeholder/PlaceholderClearSearchButton';
import PlaceholderSubtitle from '@UI/components/Placeholder/PlaceholderSubtitle';
import PlaceholderTitle from '@UI/components/Placeholder/PlaceholderTitle';
import Preloader from '@UI/components/Preloader/Preloader';
import CircleProgressBar from '@UI/components/ProgressBar/Circle/CircleProgressBar';
import ComplexProgressBar from '@UI/components/ProgressBar/Complex/ComplexProgressBar';
import ProgressBar from '@UI/components/ProgressBar/ProgressBar';
import ProgressList from '@UI/components/ProgressList/ProgressList';
import RangeSlider from '@UI/components/RangeSlider/RangeSlider';
import Resizer from '@UI/components/Resizer/Resizer';
import RichTextEditor from '@UI/components/RichTextEditor/RichTextEditor';
import Dropdown from '@UI/components/Select/Dropdown/Dropdown';
import Select from '@UI/components/Select/Select';
import TranslationSelect from '@UI/components/Select/TranslationSelect';
import TreeSelect from '@UI/components/Select/Tree/TreeSelect';
import SelectList from '@UI/components/SelectList/SelectList';
import SelectListElement from '@UI/components/SelectList/SelectListElement';
import SelectListNoDataPlaceholder from '@UI/components/SelectList/SelectListNoDataPlaceholder';
import SelectListNoResultsPlaceholder from '@UI/components/SelectList/SelectListNoResultsPlaceholder';
import SelectListSearch from '@UI/components/SelectList/SelectListSearch';
import SideBar from '@UI/components/SideBar/SideBar';
import SideBarFooter from '@UI/components/SideBar/SideBarFooter';
import SideBarNoDataPlaceholder from '@UI/components/SideBar/SideBarNoDataPlaceholder';
import SideBarNoResultsPlaceholder from '@UI/components/SideBar/SideBarNoResultsPlaceholder';
import SideBarStickyHeader from '@UI/components/SideBar/SideBarStickyHeader';
import Slider from '@UI/components/Slider/Slider';
import StaticImage from '@UI/components/StaticImage/StaticImage';
import HorizontalTabBar from '@UI/components/TabBar/HorizontalTabBar';
import HorizontalTabBarContent from '@UI/components/TabBar/HorizontalTabBarContent';
import HorizontalTabBarItem from '@UI/components/TabBar/HorizontalTabBarItem';
import HorizontalTabBarItemResizeObserver from '@UI/components/TabBar/HorizontalTabBarItemResizeObserver';
import HorizontalTabBarItems from '@UI/components/TabBar/HorizontalTabBarItems';
import HorizontalRoutingTabBar from '@UI/components/TabBar/Routing/HorizontalRoutingTabBar';
import HorizontalRoutingTabBarItem from '@UI/components/TabBar/Routing/HorizontalRoutingTabBarItem';
import TabBarItemSlider from '@UI/components/TabBar/TabBarItemSlider';
import TabBarNoDataPlaceholder from '@UI/components/TabBar/TabBarNoDataPlaceholder';
import VerticalTabBar from '@UI/components/TabBar/VerticalTabBar';
import VerticalTabBarItem from '@UI/components/TabBar/VerticalTabBarItem';
import VerticalTabBarList from '@UI/components/TabBar/VerticalTabBarList';
import VerticalTabContent from '@UI/components/TabBar/VerticalTabContent';
import TextArea from '@UI/components/TextArea/TextArea';
import TextField from '@UI/components/TextField/TextField';
import TextFieldSuffix from '@UI/components/TextField/TextFieldSuffix';
import Tile from '@UI/components/Tile/Tile';
import TitleBar from '@UI/components/TitleBar/TitleBar';
import TitleBarActions from '@UI/components/TitleBar/TitleBarActions';
import TitleBarBreadcrumb from '@UI/components/TitleBar/TitleBarBreadcrumb';
import TitleBarHeader from '@UI/components/TitleBar/TitleBarHeader';
import TitleBarSubActions from '@UI/components/TitleBar/TitleBarSubActions';
import Toggler from '@UI/components/Toggler/Toggler';
import ToolBar from '@UI/components/ToolBar/ToolBar';
import ToolBarBreadcrumb from '@UI/components/ToolBar/ToolBarBreadcrumb';
import ToolBarButton from '@UI/components/ToolBar/ToolBarButton';
import ToolBarSelectButton from '@UI/components/ToolBar/ToolBarSelectButton';
import Tooltip from '@UI/components/Tooltip/Tooltip';
import AutoHeightTransition from '@UI/components/Transitions/AutoHeightTransition';
import AutoWidthTransition from '@UI/components/Transitions/AutoWidthTransition';
import FadeGroupTransition from '@UI/components/Transitions/FadeGroupTransition';
import FadeNavigationSideBarTextTransition from '@UI/components/Transitions/FadeNavigationSideBarTextTransition';
import FadeTransition from '@UI/components/Transitions/FadeTransition';
import TreeAccordion from '@UI/components/TreeAccordion/TreeAccordion';
import TreeAccordionItem from '@UI/components/TreeAccordion/TreeAccordionItem';
import TreeAccordionItemArrowExpander from '@UI/components/TreeAccordion/TreeAccordionItemArrowExpander';
import TreeAccordionItemBadge from '@UI/components/TreeAccordion/TreeAccordionItemBadge';
import TreeAccordionItemNode from '@UI/components/TreeAccordion/TreeAccordionItemNode';
import TreeDesigner from '@UI/components/TreeDesigner/TreeDesigner';
import TreeDesignerConnectionLine from '@UI/components/TreeDesigner/TreeDesignerConnectionLine';
import TreeDesignerDraggableLayer from '@UI/components/TreeDesigner/TreeDesignerDraggableLayer';
import TreeDesignerItem from '@UI/components/TreeDesigner/TreeDesignerItem';
import Typer from '@UI/components/Typer/Typer';
import UploadFile from '@UI/components/UploadFile/UploadFile';
import UploadFileList from '@UI/components/UploadFileList/UploadFileList';
import UploadFileListElement from '@UI/components/UploadFileList/UploadFileListElement';
import UploadFileListLoadingElement from '@UI/components/UploadFileList/UploadFileListLoadingElement';
import Widget from '@UI/components/Widget/Widget';
import WidgetNoDataPlaceholder from '@UI/components/Widget/WidgetNoDataPlaceholder';
import Vue from 'vue';

Vue.component('TextField', TextField);
Vue.component('TextFieldSuffix', TextFieldSuffix);
Vue.component('TextArea', TextArea);
Vue.component('RichTextEditor', RichTextEditor);
Vue.component('Select', Select);
Vue.component('TranslationSelect', TranslationSelect);
Vue.component('TreeSelect', TreeSelect);
Vue.component('Dropdown', Dropdown);
Vue.component('Toggler', Toggler);
Vue.component('Button', Button);
Vue.component('ActionButton', ActionButton);
Vue.component('ActionBaseButton', ActionBaseButton);
Vue.component('ActionIconButton', ActionIconButton);
Vue.component('ActionFab', ActionFab);
Vue.component('Alert', Alert);
Vue.component('Autocomplete', Autocomplete);
Vue.component('BadgeLabel', BadgeLabel);
Vue.component('InformationBadge', InformationBadge);
Vue.component('InformationIconBadge', InformationIconBadge);
Vue.component('NotificationBadge', NotificationBadge);
Vue.component('NumericBadge', NumericBadge);
Vue.component('PointBadge', PointBadge);
Vue.component('ReadOnlyBadge', ReadOnlyBadge);
Vue.component('RoundedBadge', RoundedBadge);
Vue.component('Card', Card);
Vue.component('Carousel', Carousel);
Vue.component('CheckBox', CheckBox);
Vue.component('ColorPicker', ColorPicker);
Vue.component('DatePicker', DatePicker);
Vue.component('DefaultImage', DefaultImage);
Vue.component('Divider', Divider);
Vue.component('DraggableForm', DraggableForm);
Vue.component('DropZone', DropZone);
Vue.component('Fab', Fab);
Vue.component('FeedbackProvider', FeedbackProvider);
Vue.component('FluidBlob', FluidBlob);
Vue.component('Form', Form);
Vue.component('FormHeader', FormHeader);
Vue.component('FormFieldset', FormFieldset);
Vue.component('FormSubsection', FormSubsection);
Vue.component('FormListSubsection', FormListSubsection);
Vue.component('FormSection', FormSection);
Vue.component('FormListSection', FormListSection);
Vue.component('JSONSchemaForm', JSONSchemaForm);
Vue.component('ErrorHint', ErrorHint);
Vue.component('InfoHint', InfoHint);
Vue.component('IconButton', IconButton);
Vue.component('Icon', Icon);
Vue.component('IconClose', IconClose);
Vue.component('IconFilledClose', IconFilledClose);
Vue.component('IconDots', IconDots);
Vue.component('IconFile', IconFile);
Vue.component('IconGrid', IconGrid);
Vue.component('IconListMedium', IconListMedium);
Vue.component('IconProcessing', IconProcessing);
Vue.component('IconResize', IconResize);
Vue.component('IconTranslate', IconTranslate);
Vue.component('IconCheck', IconCheck);
Vue.component('IconError', IconError);
Vue.component('IconInfo', IconInfo);
Vue.component('IconLoader', IconLoader);
Vue.component('IconLock', IconLock);
Vue.component('IconMark', IconMark);
Vue.component('IconSpinner', IconSpinner);
Vue.component('IconSuccess', IconSuccess);
Vue.component('IconSync', IconSync);
Vue.component('IconTooltip', IconTooltip);
Vue.component('IconWarning', IconWarning);
Vue.component('IconArrowDouble', IconArrowDouble);
Vue.component('IconArrowDropdown', IconArrowDropdown);
Vue.component('IconArrowPointer', IconArrowPointer);
Vue.component('IconArrowPointerBlock', IconArrowPointerBlock);
Vue.component('IconArrowRoundedDropdown', IconArrowRoundedDropdown);
Vue.component('IconArrowSingle', IconArrowSingle);
Vue.component('IconArrowSort', IconArrowSort);
Vue.component('IconAdd', IconAdd);
Vue.component('IconAddColumn', IconAddColumn);
Vue.component('IconAddFilter', IconAddFilter);
Vue.component('IconCancel', IconCancel);
Vue.component('IconDelete', IconDelete);
Vue.component('IconDragDrop', IconDragDrop);
Vue.component('IconEdit', IconEdit);
Vue.component('IconPreview', IconPreview);
Vue.component('IconRefresh', IconRefresh);
Vue.component('IconRemoveColumn', IconRemoveColumn);
Vue.component('IconRemoveFilter', IconRemoveFilter);
Vue.component('IconRestore', IconRestore);
Vue.component('IconSearch', IconSearch);
Vue.component('IconSettings', IconSettings);
Vue.component('IconUploadCloudFile', IconUploadCloudFile);
Vue.component('IconUploadFile', IconUploadFile);
Vue.component('LinkButton', LinkButton);
Vue.component('List', List);
Vue.component('ListDraggableElement', ListDraggableElement);
Vue.component('ListElement', ListElement);
Vue.component('ListElementAction', ListElementAction);
Vue.component('ListElementDescription', ListElementDescription);
Vue.component('ListElementHint', ListElementHint);
Vue.component('ListElementIcon', ListElementIcon);
Vue.component('ListElementTitle', ListElementTitle);
Vue.component('ListElementTree', ListElementTree);
Vue.component('ListGroupElement', ListGroupElement);
Vue.component('ListHeader', ListHeader);
Vue.component('ListScrollableContainer', ListScrollableContainer);
Vue.component('ListSearchHeader', ListSearchHeader);
Vue.component('ListSearchSelectHeader', ListSearchSelectHeader);
Vue.component('MenuList', MenuList);
Vue.component('MenuListElement', MenuListElement);
Vue.component('MenuListHeader', MenuListHeader);
Vue.component('Modal', Modal);
Vue.component('ModalBody', ModalBody);
Vue.component('ModalFooter', ModalFooter);
Vue.component('ModalForm', ModalForm);
Vue.component('ModalGrid', ModalGrid);
Vue.component('ModalHeader', ModalHeader);
Vue.component('ModalOverlay', ModalOverlay);
Vue.component('ModalTabBar', ModalTabBar);
Vue.component('NavigationSideBar', NavigationSideBar);
Vue.component('IntersectionObserver', IntersectionObserver);
Vue.component('ResizeObserver', ResizeObserver);
Vue.component('Paragraph', Paragraph);
Vue.component('Placeholder', Placeholder);
Vue.component('PlaceholderClearSearchButton', PlaceholderClearSearchButton);
Vue.component('PlaceholderSubtitle', PlaceholderSubtitle);
Vue.component('PlaceholderTitle', PlaceholderTitle);
Vue.component('Preloader', Preloader);
Vue.component('ProgressBar', ProgressBar);
Vue.component('CircleProgressBar', CircleProgressBar);
Vue.component('ComplexProgressBar', ComplexProgressBar);
Vue.component('ProgressList', ProgressList);
Vue.component('RangeSlider', RangeSlider);
Vue.component('Resizer', Resizer);
Vue.component('SelectList', SelectList);
Vue.component('SelectListElement', SelectListElement);
Vue.component('SelectListSearch', SelectListSearch);
Vue.component('SelectListNoDataPlaceholder', SelectListNoDataPlaceholder);
Vue.component('SelectListNoResultsPlaceholder', SelectListNoResultsPlaceholder);
Vue.component('SideBar', SideBar);
Vue.component('SideBarFooter', SideBarFooter);
Vue.component('SideBarStickyHeader', SideBarStickyHeader);
Vue.component('SideBarNoDataPlaceholder', SideBarNoDataPlaceholder);
Vue.component('SideBarNoResultsPlaceholder', SideBarNoResultsPlaceholder);
Vue.component('Slider', Slider);
Vue.component('StaticImage', StaticImage);
Vue.component('HorizontalRoutingTabBar', HorizontalRoutingTabBar);
Vue.component('HorizontalRoutingTabBarItem', HorizontalRoutingTabBarItem);
Vue.component('HorizontalTabBar', HorizontalTabBar);
Vue.component('HorizontalTabBarContent', HorizontalTabBarContent);
Vue.component('HorizontalTabBarItem', HorizontalTabBarItem);
Vue.component('HorizontalTabBarItemResizeObserver', HorizontalTabBarItemResizeObserver);
Vue.component('HorizontalTabBarItems', HorizontalTabBarItems);
Vue.component('TabBarItemSlider', TabBarItemSlider);
Vue.component('TabBarNoDataPlaceholder', TabBarNoDataPlaceholder);
Vue.component('VerticalTabBar', VerticalTabBar);
Vue.component('VerticalTabBarItem', VerticalTabBarItem);
Vue.component('VerticalTabBarList', VerticalTabBarList);
Vue.component('VerticalTabContent', VerticalTabContent);
Vue.component('Tile', Tile);
Vue.component('TitleBar', TitleBar);
Vue.component('TitleBarHeader', TitleBarHeader);
Vue.component('TitleBarActions', TitleBarActions);
Vue.component('TitleBarBreadcrumb', TitleBarBreadcrumb);
Vue.component('TitleBarSubActions', TitleBarSubActions);
Vue.component('ToolBar', ToolBar);
Vue.component('ToolBarButton', ToolBarButton);
Vue.component('ToolBarBreadcrumb', ToolBarBreadcrumb);
Vue.component('ToolBarSelectButton', ToolBarSelectButton);
Vue.component('Tooltip', Tooltip);
Vue.component('AutoHeightTransition', AutoHeightTransition);
Vue.component('AutoWidthTransition', AutoWidthTransition);
Vue.component('FadeGroupTransition', FadeGroupTransition);
Vue.component('FadeNavigationSideBarTextTransition', FadeNavigationSideBarTextTransition);
Vue.component('FadeTransition', FadeTransition);
Vue.component('TreeAccordion', TreeAccordion);
Vue.component('TreeAccordionItem', TreeAccordionItem);
Vue.component('TreeAccordionItemBadge', TreeAccordionItemBadge);
Vue.component('TreeAccordionItemNode', TreeAccordionItemNode);
Vue.component('TreeAccordionItemArrowExpander', TreeAccordionItemArrowExpander);
Vue.component('TreeDesigner', TreeDesigner);
Vue.component('TreeDesignerConnectionLine', TreeDesignerConnectionLine);
Vue.component('TreeDesignerItem', TreeDesignerItem);
Vue.component('TreeDesignerDraggableLayer', TreeDesignerDraggableLayer);
Vue.component('Typer', Typer);
Vue.component('UploadFile', UploadFile);
Vue.component('UploadFileList', UploadFileList);
Vue.component('UploadFileListElement', UploadFileListElement);
Vue.component('UploadFileListLoadingElement', UploadFileListLoadingElement);
Vue.component('WidgetNoDataPlaceholder', WidgetNoDataPlaceholder);
Vue.component('Widget', Widget);
Vue.component('ImageCarousel', ImageCarousel);
Vue.component('LazyImage', LazyImage);
Vue.component('AdvancedFilters', AdvancedFilters);
Vue.component('InputController', InputController);
Vue.component('InputImageController', InputImageController);
Vue.component('InputLabel', InputLabel);
Vue.component('InputSelectValue', InputSelectValue);
Vue.component('InputSolidStyle', InputSolidStyle);
Vue.component('InputUnderlineStyle', InputUnderlineStyle);
Vue.component('InputUploadPlaceholder', InputUploadPlaceholder);
Vue.component('InputUploadSpinner', InputUploadSpinner);
Vue.component('InputUUIDProvider', InputUUIDProvider);
Vue.component('Grid', Grid);
Vue.component('GridSettingsModalForm', GridSettingsModalForm);
Vue.component('GridNoDataPlaceholder', GridNoDataPlaceholder);
Vue.component('GridNoResultsPlaceholder', GridNoResultsPlaceholder);
Vue.component('AddFilterDropZone', AddFilterDropZone);
Vue.component('AddGridColumnDropZone', AddGridColumnDropZone);
Vue.component('RemoveFilterAndColumnDropZone', RemoveFilterAndColumnDropZone);
Vue.component('GridBody', GridBody);
Vue.component('GridFooter', GridFooter);
Vue.component('GridHeader', GridHeader);
Vue.component('GridHeaderSettings', GridHeaderSettings);
Vue.component('GridPanelHeader', GridPanelHeader);
Vue.component('GridFooterText', GridFooterText);
Vue.component('GridPageSelector', GridPageSelector);
Vue.component('GridPageSelectorArrowsPanel', GridPageSelectorArrowsPanel);
Vue.component('GridPagination', GridPagination);
Vue.component('GridCollectionLayout', GridCollectionLayout);
Vue.component('GridCollectionLayoutActivator', GridCollectionLayoutActivator);
Vue.component('GridCollectionCell', GridCollectionCell);
Vue.component('GridCollectionCellActionsPanel', GridCollectionCellActionsPanel);
Vue.component('GridCollectionDefaultCell', GridCollectionDefaultCell);
Vue.component('GridSelectCollectionHeaderCell', GridSelectCollectionHeaderCell);
Vue.component('GridTableLayout', GridTableLayout);
Vue.component('GridTableLayoutActivator', GridTableLayoutActivator);
Vue.component('GridTableLayoutColumnsSection', GridTableLayoutColumnsSection);
Vue.component('GridTableLayoutPinnedSection', GridTableLayoutPinnedSection);
Vue.component('GridColumnResizer', GridColumnResizer);
Vue.component('GridCellResizer', GridCellResizer);
Vue.component('GridSuffixPresentationCell', GridSuffixPresentationCell);
Vue.component('GridPresentationCell', GridPresentationCell);
Vue.component('GridImagePresentationCell', GridImagePresentationCell);
Vue.component('GridHintPresentationCell', GridHintPresentationCell);
Vue.component('GridFilterPresentationCell', GridFilterPresentationCell);
Vue.component('GridEditNavigationCell', GridEditNavigationCell);
Vue.component('GridHeaderCell', GridHeaderCell);
Vue.component('GridSelectRowHeaderCell', GridSelectRowHeaderCell);
Vue.component('GridTitleHeaderCell', GridTitleHeaderCell);
Vue.component('GridSelectRowActionFabCell', GridSelectRowActionFabCell);
Vue.component('GridTableCell', GridTableCell);
Vue.component('Page', Page);
Vue.component('CenterViewTemplate', CenterViewTemplate);
