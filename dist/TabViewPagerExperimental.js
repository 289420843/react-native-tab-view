Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src\\TabViewPagerExperimental.js';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var React=_interopRequireWildcard(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');
var _reactNativeGestureHandler=require('react-native-gesture-handler');var GestureHandler=_interopRequireWildcard(_reactNativeGestureHandler);
var _TabViewPropTypes=require('./TabViewPropTypes');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}







var DefaultTransitionSpec={
timing:_reactNative.Animated.spring,
tension:300,
friction:35};var


TabViewPagerExperimental=function(_React$Component){_inherits(TabViewPagerExperimental,_React$Component);function TabViewPagerExperimental(){var _ref;var _temp,_this,_ret;_classCallCheck(this,TabViewPagerExperimental);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=TabViewPagerExperimental.__proto__||Object.getPrototypeOf(TabViewPagerExperimental)).call.apply(_ref,[this].concat(args))),_this),_this.






















_handleHandlerStateChange=function(event){
if(event.nativeEvent.state===GestureHandler.State.END){var _this$props=





_this.props,navigationState=_this$props.navigationState,layout=_this$props.layout,_this$props$swipeDist=_this$props.swipeDistanceThreshold,_swipeDistanceThreshold=_this$props$swipeDist===undefined?layout.width/1.75:_this$props$swipeDist,_this$props$swipeVelo=_this$props.swipeVelocityThreshold,_swipeVelocityThreshold=_this$props$swipeVelo===undefined?150:_this$props$swipeVelo;var _event$nativeEvent=





event.nativeEvent,translationX=_event$nativeEvent.translationX,translationY=_event$nativeEvent.translationY,velocityX=_event$nativeEvent.velocityX,velocityY=_event$nativeEvent.velocityY;
var currentIndex=
typeof _this._pendingIndex==='number'?
_this._pendingIndex:
navigationState.index;

var nextIndex=currentIndex;

if(
Math.abs(translationX)>Math.abs(translationY)&&
Math.abs(velocityX)>Math.abs(velocityY)&&(
Math.abs(translationX)>_swipeDistanceThreshold||
Math.abs(velocityX)>_swipeVelocityThreshold))
{
nextIndex=Math.round(
Math.min(
Math.max(0,currentIndex-translationX/Math.abs(translationX)),
navigationState.routes.length-1));


}

_this._transitionTo(isFinite(nextIndex)?nextIndex:currentIndex);
}
},_this.

_transitionTo=function(index){
var offset=-index*_this.props.layout.width;

if(_this.props.animationEnabled===false){
_this.props.panX.setValue(0);
_this.props.offsetX.setValue(offset);
return;
}var

timing=DefaultTransitionSpec.timing,transitionConfig=_objectWithoutProperties(DefaultTransitionSpec,['timing']);var
useNativeDriver=_this.props.useNativeDriver;

_reactNative.Animated.parallel([
timing(_this.props.panX,_extends({},
transitionConfig,{
toValue:0,
useNativeDriver:useNativeDriver})),

timing(_this.props.offsetX,_extends({},
transitionConfig,{
toValue:offset,
useNativeDriver:useNativeDriver}))]).

start(function(_ref2){var finished=_ref2.finished;
if(finished){
_this.props.jumpToIndex(index);
_this._pendingIndex=null;
}
});

_this._pendingIndex=index;
},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(TabViewPagerExperimental,[{key:'componentDidMount',value:function componentDidMount(){this._resetListener=this.props.subscribe('reset',this._transitionTo);}},{key:'componentDidUpdate',value:function componentDidUpdate(prevProps){if(prevProps.navigationState.index!==this.props.navigationState.index){this._transitionTo(this.props.navigationState.index);}}},{key:'componentWillUnmount',value:function componentWillUnmount(){this._resetListener.remove();}},{key:'render',value:function render()




{var _props=







this.props,panX=_props.panX,offsetX=_props.offsetX,layout=_props.layout,navigationState=_props.navigationState,swipeEnabled=_props.swipeEnabled,children=_props.children;var
width=layout.width;var
routes=navigationState.routes;
var maxTranslate=width*(routes.length-1);
var translateX=_reactNative.Animated.add(panX,offsetX).interpolate({
inputRange:[-maxTranslate,0],
outputRange:[-maxTranslate,0],
extrapolate:'clamp'});


return(
React.createElement(GestureHandler.PanGestureHandler,{
enabled:layout.width!==0&&swipeEnabled!==false,
minDeltaX:10,
onGestureEvent:_reactNative.Animated.event(
[{nativeEvent:{translationX:this.props.panX}}],
{useNativeDriver:this.props.useNativeDriver}),

onHandlerStateChange:this._handleHandlerStateChange,__source:{fileName:_jsxFileName,lineNumber:138}},

React.createElement(_reactNative.Animated.View,{
style:[
styles.sheet,
width?
{width:routes.length*width,transform:[{translateX:translateX}]}:
null],__source:{fileName:_jsxFileName,lineNumber:147}},


React.Children.map(children,function(child,i){return(
React.createElement(_reactNative.View,{
key:navigationState.routes[i].key,
testID:navigationState.routes[i].testID,
style:
width?
{width:width}:
i===navigationState.index?_reactNative.StyleSheet.absoluteFill:null,__source:{fileName:_jsxFileName,lineNumber:156}},


i===navigationState.index||width?child:null));}))));





}}]);return TabViewPagerExperimental;}(React.Component);TabViewPagerExperimental.propTypes=_extends({},_TabViewPropTypes.PagerRendererPropType,{swipeDistanceThreshold:_propTypes2.default.number,swipeVelocityThreshold:_propTypes2.default.number});exports.default=TabViewPagerExperimental;


var styles=_reactNative.StyleSheet.create({
sheet:{
flex:1,
flexDirection:'row',
alignItems:'stretch'}});