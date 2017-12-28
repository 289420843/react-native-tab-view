Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src\\TabViewPagerAndroid.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var React=_interopRequireWildcard(_react);
var _reactNative=require('react-native');
var _TabViewPropTypes=require('./TabViewPropTypes');function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var













TabViewPagerAndroid=function(_React$Component){_inherits(TabViewPagerAndroid,_React$Component);








function TabViewPagerAndroid(props){_classCallCheck(this,TabViewPagerAndroid);var _this=_possibleConstructorReturn(this,(TabViewPagerAndroid.__proto__||Object.getPrototypeOf(TabViewPagerAndroid)).call(this,
props));_this.
















_isIdle=true;_this.
_currentIndex=0;_this.

_getPageIndex=function(index){return(
_reactNative.I18nManager.isRTL?
_this.props.navigationState.routes.length-(index+1):
index);};_this.

_setPage=function(index){var animated=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;
var pager=_this._viewPager;

if(pager){
var page=_this._getPageIndex(index);

if(_this.props.animationEnabled===false||animated===false){
pager.setPageWithoutAnimation(page);
}else{
pager.setPage(page);
}
}
};_this.

_handlePageChange=function(index){
if(_this._isIdle&&_this._currentIndex!==index){
_this._setPage(index);
_this._currentIndex=index;
}
};_this.

_handlePageScroll=function(e){
_this.props.offsetX.setValue(
e.nativeEvent.position*
_this.props.layout.width*(
_reactNative.I18nManager.isRTL?1:-1));

_this.props.panX.setValue(
e.nativeEvent.offset*
_this.props.layout.width*(
_reactNative.I18nManager.isRTL?1:-1));

};_this.

_handlePageScrollStateChanged=function(e){
_this._isIdle=e==='idle';

var nextIndex=_this._currentIndex;

if(_this.props.canJumpToTab(_this.props.navigationState.routes[nextIndex])){
_this.props.jumpToIndex(nextIndex);
}else{
_this._setPage(_this.props.navigationState.index);
_this._currentIndex=_this.props.navigationState.index;
}
};_this.

_handlePageSelected=function(e){
var index=_this._getPageIndex(e.nativeEvent.position);
_this._currentIndex=index;
};_this.

_setRef=function(el){return _this._viewPager=el;};_this._currentIndex=_this.props.navigationState.index;return _this;}_createClass(TabViewPagerAndroid,[{key:'componentDidUpdate',value:function componentDidUpdate(prevProps){if(this.props.layout!==prevProps.layout||this.props.navigationState.routes.length!==prevProps.navigationState.routes.length||this.props.navigationState.index!==prevProps.navigationState.index){this._handlePageChange(this.props.navigationState.index);}}},{key:'render',value:function render()

{var _props=
this.props,children=_props.children,navigationState=_props.navigationState,swipeEnabled=_props.swipeEnabled;
var content=React.Children.map(children,function(child,i){return(
React.createElement(_reactNative.View,{
key:navigationState.routes[i].key,
testID:navigationState.routes[i].testID,
style:styles.page,__source:{fileName:_jsxFileName,lineNumber:111}},

child));});



if(_reactNative.I18nManager.isRTL){
content.reverse();
}

var initialPage=this._getPageIndex(navigationState.index);

return(
React.createElement(_reactNative.ViewPagerAndroid,{
key:navigationState.routes.length,
keyboardDismissMode:'on-drag',
initialPage:initialPage,
scrollEnabled:swipeEnabled!==false,
onPageScroll:this._handlePageScroll,
onPageScrollStateChanged:this._handlePageScrollStateChanged,
onPageSelected:this._handlePageSelected,
style:styles.container,
ref:this._setRef,__source:{fileName:_jsxFileName,lineNumber:127}},

content));


}}]);return TabViewPagerAndroid;}(React.Component);TabViewPagerAndroid.propTypes=_TabViewPropTypes.PagerRendererPropType;TabViewPagerAndroid.defaultProps={canJumpToTab:function canJumpToTab(){return true;}};exports.default=TabViewPagerAndroid;


var styles=_reactNative.StyleSheet.create({
container:{
flexGrow:1},


page:{
overflow:'hidden'}});