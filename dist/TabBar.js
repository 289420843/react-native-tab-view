Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src\\TabBar.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var React=_interopRequireWildcard(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');







var _TouchableItem=require('./TouchableItem');var _TouchableItem2=_interopRequireDefault(_TouchableItem);
var _TabViewPropTypes=require('./TabViewPropTypes');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var









































TabBar=function(_React$PureComponent){_inherits(TabBar,_React$PureComponent);






















function TabBar(props){_classCallCheck(this,TabBar);var _this=_possibleConstructorReturn(this,(TabBar.__proto__||Object.getPrototypeOf(TabBar)).call(this,
props));_initialiseProps.call(_this);

var initialVisibility=1;

if(_this.props.scrollEnabled){
var tabWidth=_this._getTabWidth(_this.props);
if(!tabWidth){
initialVisibility=0;
}
}

_this.state={
offset:new _reactNative.Animated.Value(0),
visibility:new _reactNative.Animated.Value(initialVisibility),
initialOffset:{
x:_this._getScrollAmount(_this.props,_this.props.navigationState.index),
y:0}};return _this;


}_createClass(TabBar,[{key:'componentDidMount',value:function componentDidMount()

{
this._adjustScroll(this.props.navigationState.index);
this._positionListener=this.props.subscribe(
'position',
this._adjustScroll);

}},{key:'componentDidUpdate',value:function componentDidUpdate(

prevProps){
var prevTabWidth=this._getTabWidth(prevProps);
var currentTabWidth=this._getTabWidth(this.props);

if(prevTabWidth!==currentTabWidth&&currentTabWidth){
this.state.visibility.setValue(1);
}

if(this.props.scrollEnabled){
if(prevProps.navigationState!==this.props.navigationState){
this._resetScrollOffset(this.props);
}else if(
prevProps.layout!==this.props.layout||
prevTabWidth!==currentTabWidth)
{
this._adjustScroll(this.props.navigationState.index);
}
}
}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
this._positionListener.remove();
}},{key:'render',value:function render()

































































































































































































{var _this2=this;var _props=
this.props,position=_props.position,navigationState=_props.navigationState,scrollEnabled=_props.scrollEnabled;var
routes=navigationState.routes,index=navigationState.index;
var maxDistance=this._getMaxScrollableDistance(this.props);
var tabWidth=this._getTabWidth(this.props);
var tabBarWidth=tabWidth*routes.length;


var inputRange=[-1].concat(_toConsumableArray(routes.map(function(x,i){return i;})));
var translateOutputRange=inputRange.map(
function(i){return _this2._getScrollAmount(_this2.props,i)*-1;});


var translateX=_reactNative.Animated.add(
position.interpolate({
inputRange:inputRange,
outputRange:translateOutputRange}),

this.state.offset).
interpolate({
inputRange:[-maxDistance,0],
outputRange:[-maxDistance,0],
extrapolate:'clamp'});


return(
React.createElement(_reactNative.Animated.View,{style:[styles.tabBar,this.props.style],__source:{fileName:_jsxFileName,lineNumber:351}},
React.createElement(_reactNative.Animated.View,{
pointerEvents:'none',
style:[
styles.indicatorContainer,
scrollEnabled?
{width:tabBarWidth,transform:[{translateX:translateX}]}:
null],__source:{fileName:_jsxFileName,lineNumber:352}},


this._renderIndicator(_extends({},
this.props,{
width:tabWidth}))),


React.createElement(_reactNative.View,{style:styles.scroll,__source:{fileName:_jsxFileName,lineNumber:366}},
React.createElement(_reactNative.ScrollView,{
horizontal:true,
keyboardShouldPersistTaps:'handled',
scrollEnabled:scrollEnabled,
bounces:false,
alwaysBounceHorizontal:false,
scrollsToTop:false,
showsHorizontalScrollIndicator:false,
automaticallyAdjustContentInsets:false,
overScrollMode:'never',
contentContainerStyle:[
styles.tabContent,
scrollEnabled?null:styles.container],

scrollEventThrottle:16,
onScroll:this._handleScroll,
onScrollBeginDrag:this._handleBeginDrag,
onScrollEndDrag:this._handleEndDrag,
onMomentumScrollBegin:this._handleMomentumScrollBegin,
onMomentumScrollEnd:this._handleMomentumScrollEnd,
contentOffset:this.state.initialOffset,
ref:this._setRef,__source:{fileName:_jsxFileName,lineNumber:367}},

routes.map(function(route,i){
var focused=index===i;
var outputRange=inputRange.map(
function(inputIndex){return inputIndex===i?1:0.7;});

var opacity=_reactNative.Animated.multiply(
_this2.state.visibility,
position.interpolate({
inputRange:inputRange,
outputRange:outputRange}));


var scene={
route:route,
focused:focused,
index:i};

var label=_this2._renderLabel(scene);
var icon=_this2.props.renderIcon?
_this2.props.renderIcon(scene):
null;
var badge=_this2.props.renderBadge?
_this2.props.renderBadge(scene):
null;

var tabStyle={};

tabStyle.opacity=opacity;

if(icon){
if(label){
tabStyle.paddingTop=8;
}else{
tabStyle.padding=12;
}
}

var passedTabStyle=_reactNative.StyleSheet.flatten(_this2.props.tabStyle);
var isWidthSet=
passedTabStyle&&
typeof passedTabStyle.width!=='undefined'||
scrollEnabled===true;
var tabContainerStyle={};

if(isWidthSet){
tabStyle.width=tabWidth;
}

if(passedTabStyle&&typeof passedTabStyle.flex==='number'){
tabContainerStyle.flex=passedTabStyle.flex;
}else if(!isWidthSet){
tabContainerStyle.flex=1;
}

var accessibilityLabel=
route.accessibilityLabel||route.title;

return(
React.createElement(_TouchableItem2.default,{
borderless:true,
key:route.key,
testID:route.testID,
accessible:route.accessible,
accessibilityLabel:accessibilityLabel,
accessibilityTraits:'button',
pressColor:_this2.props.pressColor,
pressOpacity:_this2.props.pressOpacity,
delayPressIn:0,
onPress:function onPress(){var _props2=
_this2.props,onTabPress=_props2.onTabPress,jumpToIndex=_props2.jumpToIndex;
jumpToIndex(i);
if(onTabPress){
onTabPress(scene);
}
},
style:tabContainerStyle,__source:{fileName:_jsxFileName,lineNumber:448}},

React.createElement(_reactNative.View,{pointerEvents:'none',style:styles.container,__source:{fileName:_jsxFileName,lineNumber:467}},
React.createElement(_reactNative.Animated.View,{
style:[
styles.tabItem,
tabStyle,
passedTabStyle,
styles.container],__source:{fileName:_jsxFileName,lineNumber:468}},


icon,
label),

badge?
React.createElement(_reactNative.Animated.View,{
style:[
styles.badge,
{opacity:_this2.state.visibility}],__source:{fileName:_jsxFileName,lineNumber:480}},


badge):

null)));



})))));




}}]);return TabBar;}(React.PureComponent);TabBar.propTypes=_extends({},_TabViewPropTypes.SceneRendererPropType,{scrollEnabled:_propTypes2.default.bool,pressColor:_TouchableItem2.default.propTypes.pressColor,pressOpacity:_TouchableItem2.default.propTypes.pressOpacity,getLabelText:_propTypes2.default.func,renderIcon:_propTypes2.default.func,renderLabel:_propTypes2.default.func,renderIndicator:_propTypes2.default.func,onTabPress:_propTypes2.default.func,labelStyle:_propTypes2.default.any,style:_propTypes2.default.any});TabBar.defaultProps={getLabelText:function getLabelText(_ref){var route=_ref.route;return route.title?route.title.toUpperCase():null;}};var _initialiseProps=function _initialiseProps(){var _this3=this;this._isManualScroll=false;this._isMomentumScroll=false;this._scrollOffset=0;this._renderLabel=function(scene){if(typeof _this3.props.renderLabel!=='undefined'){return _this3.props.renderLabel(scene);}var label=_this3.props.getLabelText(scene);if(typeof label!=='string'){return null;}return React.createElement(_reactNative.Animated.Text,{style:[styles.tabLabel,_this3.props.labelStyle],__source:{fileName:_jsxFileName,lineNumber:148}},label);};this._renderIndicator=function(props){if(typeof _this3.props.renderIndicator!=='undefined'){return _this3.props.renderIndicator(props);}var width=props.width,position=props.position,navigationState=props.navigationState;var translateX=_reactNative.Animated.multiply(_reactNative.Animated.multiply(position.interpolate({inputRange:[0,navigationState.routes.length-1],outputRange:[0,navigationState.routes.length-1],extrapolate:'clamp'}),width),_reactNative.I18nManager.isRTL?-1:1);return React.createElement(_reactNative.Animated.View,{style:[styles.indicator,{width:width,transform:[{translateX:translateX}]},_this3.props.indicatorStyle],__source:{fileName:_jsxFileName,lineNumber:171}});};this._getTabWidth=function(props){var layout=props.layout,navigationState=props.navigationState,tabStyle=props.tabStyle;var flattened=_reactNative.StyleSheet.flatten(tabStyle);if(flattened){switch(typeof flattened.width){case'number':return flattened.width;case'string':if(flattened.width.endsWith('%')){var _width=parseFloat(flattened.width);if(Number.isFinite(_width)){return layout.width*(_width/100);}}}}if(props.scrollEnabled){return layout.width/5*2;}return layout.width/navigationState.routes.length;};this._getMaxScrollableDistance=function(props){var layout=props.layout,navigationState=props.navigationState;if(layout.width===0){return 0;}var tabWidth=_this3._getTabWidth(props);var tabBarWidth=tabWidth*navigationState.routes.length;var maxDistance=tabBarWidth-layout.width;return Math.max(maxDistance,0);};this._normalizeScrollValue=function(props,value){var maxDistance=_this3._getMaxScrollableDistance(props);return Math.max(Math.min(value,maxDistance),0);};this._getScrollAmount=function(props,i){var layout=props.layout;var tabWidth=_this3._getTabWidth(props);var centerDistance=tabWidth*(i+1/2);var scrollAmount=centerDistance-layout.width/2;return _this3._normalizeScrollValue(props,scrollAmount);};this._resetScrollOffset=function(props){if(!props.scrollEnabled||!_this3._scrollView){return;}var scrollAmount=_this3._getScrollAmount(props,props.navigationState.index);_this3._scrollView&&_this3._scrollView.scrollTo({x:scrollAmount,animated:true});_reactNative.Animated.timing(_this3.state.offset,{toValue:0,duration:150,useNativeDriver:_this3.props.useNativeDriver}).start();};this._adjustScroll=function(index){if(!_this3.props.scrollEnabled||!_this3._scrollView){return;}var scrollAmount=_this3._getScrollAmount(_this3.props,index);_this3._scrollView&&_this3._scrollView.scrollTo({x:scrollAmount+_this3._scrollOffset,animated:false});};this._adjustOffset=function(value){if(!_this3._isManualScroll||!_this3.props.scrollEnabled){return;}var scrollAmount=_this3._getScrollAmount(_this3.props,_this3.props.navigationState.index);var scrollOffset=value-scrollAmount;if(_this3._isMomentumScroll){_reactNative.Animated.spring(_this3.state.offset,{toValue:-scrollOffset,tension:300,friction:35,useNativeDriver:_this3.props.useNativeDriver}).start();}else{_this3.state.offset.setValue(-scrollOffset);}_this3._scrollOffset=scrollOffset;};this._handleScroll=function(e){_this3._adjustOffset(e.nativeEvent.contentOffset.x);};this._handleBeginDrag=function(){_this3._isManualScroll=true;_this3._isMomentumScroll=false;};this._handleEndDrag=function(){global.requestAnimationFrame(function(){if(_this3._isMomentumScroll){return;}_this3._isManualScroll=false;});};this._handleMomentumScrollBegin=function(){_this3._isMomentumScroll=true;};this._handleMomentumScrollEnd=function(){_this3._isMomentumScroll=false;_this3._isManualScroll=false;};this._setRef=function(el){return _this3._scrollView=el;};};exports.default=TabBar;


var styles=_reactNative.StyleSheet.create({
container:{
flex:1},

scroll:{
overflow:_reactNative.Platform.OS==='web'?'auto':'scroll'},

tabBar:{
backgroundColor:'#2196f3',
elevation:4,
shadowColor:'black',
shadowOpacity:0.1,
shadowRadius:_reactNative.StyleSheet.hairlineWidth,
shadowOffset:{
height:_reactNative.StyleSheet.hairlineWidth},


zIndex:_reactNative.Platform.OS==='android'?0:1},

tabContent:{
flexDirection:'row',
flexWrap:'nowrap'},

tabLabel:{
backgroundColor:'transparent',
color:'white',
margin:8},

tabItem:{
flexGrow:1,
padding:8,
alignItems:'center',
justifyContent:'center'},

badge:{
position:'absolute',
top:0,
right:0},

indicatorContainer:{
position:'absolute',
top:0,
left:0,
right:0,
bottom:0},

indicator:{
backgroundColor:'#ffeb3b',
position:'absolute',
left:0,
bottom:0,
right:0,
height:2}});