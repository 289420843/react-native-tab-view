Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src\\TabViewPagerScroll.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var React=_interopRequireWildcard(_react);
var _reactNative=require('react-native');
var _TabViewPropTypes=require('./TabViewPropTypes');function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

















TabViewPagerScroll=function(_React$Component){_inherits(TabViewPagerScroll,_React$Component);









function TabViewPagerScroll(props){_classCallCheck(this,TabViewPagerScroll);var _this=_possibleConstructorReturn(this,(TabViewPagerScroll.__proto__||Object.getPrototypeOf(TabViewPagerScroll)).call(this,
props));_initialiseProps.call(_this);var _this$props=

_this.props,navigationState=_this$props.navigationState,layout=_this$props.layout;

_this.state={
initialOffset:{
x:navigationState.index*layout.width,
y:0}};return _this;


}_createClass(TabViewPagerScroll,[{key:'componentDidMount',value:function componentDidMount()

{
this._setInitialPage();
}},{key:'componentDidUpdate',value:function componentDidUpdate(

prevProps){
if(
prevProps.layout.width!==this.props.layout.width||
prevProps.navigationState!==this.props.navigationState)
{
this._scrollTo(
this.props.navigationState.index*this.props.layout.width,
prevProps.layout.width===this.props.layout.width);

}
}},{key:'render',value:function render()
































































{var _this2=this;var _props=
this.props,children=_props.children,layout=_props.layout,navigationState=_props.navigationState;
return(
React.createElement(_reactNative.ScrollView,{
horizontal:true,
pagingEnabled:true,
directionalLockEnabled:true,
keyboardDismissMode:'on-drag',
keyboardShouldPersistTaps:'always',
overScrollMode:'never',
scrollEnabled:this.props.swipeEnabled,
automaticallyAdjustContentInsets:false,
bounces:false,
alwaysBounceHorizontal:false,
scrollsToTop:false,
showsHorizontalScrollIndicator:false,
scrollEventThrottle:1,
onScroll:this._handleScroll,
onMomentumScrollEnd:this._handleMomentumScrollEnd,
contentOffset:this.state.initialOffset,
style:styles.container,
contentContainerStyle:layout.width?null:styles.container,
ref:function ref(el){return _this2._scrollView=el;},__source:{fileName:_jsxFileName,lineNumber:128}},

React.Children.map(children,function(child,i){return(
React.createElement(_reactNative.View,{
key:navigationState.routes[i].key,
testID:navigationState.routes[i].testID,
style:
layout.width?
{width:layout.width,overflow:'hidden'}:
i===navigationState.index?styles.page:null,__source:{fileName:_jsxFileName,lineNumber:150}},


i===navigationState.index||layout.width?child:null));})));




}}]);return TabViewPagerScroll;}(React.Component);TabViewPagerScroll.propTypes=_TabViewPropTypes.PagerRendererPropType;TabViewPagerScroll.defaultProps={canJumpToTab:function canJumpToTab(){return true;}};var _initialiseProps=function _initialiseProps(){var _this3=this;this._isIdle=true;this._isInitial=true;this._setInitialPage=function(){if(_this3.props.layout.width){_this3._isInitial=true;_this3._scrollTo(_this3.props.navigationState.index*_this3.props.layout.width,false);}setTimeout(function(){_this3._isInitial=false;},50);};this._scrollTo=function(x,animated){if(_this3._isIdle&&_this3._scrollView){_this3._scrollView.scrollTo({x:x,animated:animated&&_this3.props.animationEnabled!==false});}};this._handleMomentumScrollEnd=function(e){var nextIndex=Math.round(e.nativeEvent.contentOffset.x/_this3.props.layout.width);if(_this3.props.canJumpToTab(_this3.props.navigationState.routes[nextIndex])){_this3.props.jumpToIndex(nextIndex);}else{global.requestAnimationFrame(function(){_this3._scrollTo(_this3.props.navigationState.index*_this3.props.layout.width);});}};this._handleScroll=function(e){if(_this3._isInitial){return;}var _props2=_this3.props,navigationState=_props2.navigationState,layout=_props2.layout;var offset=navigationState.index*layout.width;_this3.props.offsetX.setValue(-offset);_this3.props.panX.setValue(offset-e.nativeEvent.contentOffset.x);global.cancelAnimationFrame(_this3._idleCallback);_this3._isIdle=false;_this3._idleCallback=global.requestAnimationFrame(function(){_this3._isIdle=true;});};};exports.default=TabViewPagerScroll;


var styles=_reactNative.StyleSheet.create({
container:{
flex:1},

page:{
flex:1,
overflow:'hidden'}});