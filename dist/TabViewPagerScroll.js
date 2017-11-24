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

{var _this2=this;
global.requestAnimationFrame(function(){return(
_this2._scrollTo(
_this2.props.navigationState.index*_this2.props.layout.width,
false));});


this._resetListener=this.props.subscribe('reset',this._scrollTo);
}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

nextProps){
if(!this.props.layout.measured&&nextProps.layout.measured){var
navigationState=nextProps.navigationState,layout=nextProps.layout;
this.setState({
initialOffset:{
x:navigationState.index*layout.width,
y:0}});


}
}},{key:'componentDidUpdate',value:function componentDidUpdate(

prevProps){
if(
prevProps.navigationState!==this.props.navigationState||
prevProps.layout!==this.props.layout)
{var _props=
this.props,navigationState=_props.navigationState,layout=_props.layout;
var offset=navigationState.index*layout.width;
this._scrollTo(offset);
}
}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
this._resetListener&&this._resetListener.remove();
}},{key:'render',value:function render()


















































{var _this3=this;var _props2=
this.props,children=_props2.children,layout=_props2.layout,navigationState=_props2.navigationState;
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
scrollEventThrottle:16,
onScroll:this._handleScroll,
onScrollAnimationEnd:this._handleScrollAnimationEnd,
onMomentumScrollEnd:this._handleMomentumScrollEnd,
contentOffset:this.state.initialOffset,
style:styles.container,
contentContainerStyle:layout.width?null:styles.container,
ref:function ref(el){return _this3._scrollView=el;},__source:{fileName:_jsxFileName,lineNumber:131}},

React.Children.map(children,function(child,i){return(
React.createElement(_reactNative.View,{
key:navigationState.routes[i].key,
testID:navigationState.routes[i].testID,
style:
layout.width?
{width:layout.width,overflow:'hidden'}:
i===navigationState.index?styles.page:null,__source:{fileName:_jsxFileName,lineNumber:154}},


i===navigationState.index||layout.width?child:null));})));




}}]);return TabViewPagerScroll;}(React.Component);TabViewPagerScroll.propTypes=_TabViewPropTypes.PagerRendererPropType;var _initialiseProps=function _initialiseProps(){var _this4=this;this._isIdle=true;this._isFirst=_reactNative.Platform.OS==='ios';this._scrollTo=function(x){var animated=arguments.length>1&&arguments[1]!==undefined?arguments[1]:_this4.props.animationEnabled!==false;if(animated&&!_this4._isIdle){return;}_this4.props.offsetX.setValue(-x);_this4.props.panX.setValue(0);if(x!==_this4._currentOffset&&_this4._scrollView){_this4._scrollView.scrollTo({x:x,animated:animated});}};this._handleMomentumScrollEnd=function(e){var nextIndex=Math.round(e.nativeEvent.contentOffset.x/_this4.props.layout.width);_this4._isIdle=true;_this4.props.jumpToIndex(nextIndex);};this._handleScrollAnimationEnd=function(){_this4._isIdle=true;};this._handleScroll=function(e){if(_this4._isFirst){_this4._isFirst=false;return;}var _props3=_this4.props,navigationState=_props3.navigationState,layout=_props3.layout;var offset=navigationState.index*layout.width;_this4.props.panX.setValue(offset-e.nativeEvent.contentOffset.x);_this4._isIdle=false;_this4._currentOffset=e.nativeEvent.contentOffset.x;};};exports.default=TabViewPagerScroll;


var styles=_reactNative.StyleSheet.create({
container:{
flex:1},


page:{
flex:1,
overflow:'hidden'}});