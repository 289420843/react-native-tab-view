Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src\\TabViewAnimated.js';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var React=_interopRequireWildcard(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');
var _TabViewPropTypes=require('./TabViewPropTypes');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}



































var TabViewPager=void 0;

switch(_reactNative.Platform.OS){
case'android':
TabViewPager=require('./TabViewPagerAndroid').default;
break;
case'ios':
TabViewPager=require('./TabViewPagerScroll').default;
break;
default:
TabViewPager=require('./TabViewPagerPan').default;
break;}var


TabViewAnimated=function(_React$Component){_inherits(TabViewAnimated,_React$Component);




























function TabViewAnimated(props){_classCallCheck(this,TabViewAnimated);var _this=_possibleConstructorReturn(this,(TabViewAnimated.__proto__||Object.getPrototypeOf(TabViewAnimated)).call(this,
props));_initialiseProps.call(_this);var

navigationState=_this.props.navigationState;
var layout=_extends({},
_this.props.initialLayout,{
measured:false});


var panX=new _reactNative.Animated.Value(0);
var offsetX=new _reactNative.Animated.Value(-navigationState.index*layout.width);
var layoutXY=new _reactNative.Animated.ValueXY({
x:layout.width||0.001,
y:layout.height||0.001});

var position=_reactNative.Animated.multiply(
_reactNative.Animated.divide(_reactNative.Animated.add(panX,offsetX),layoutXY.x),
-1);


_this.state={
loaded:[navigationState.index],
layout:layout,
layoutXY:layoutXY,
panX:panX,
offsetX:offsetX,
position:position};return _this;

}_createClass(TabViewAnimated,[{key:'componentDidMount',value:function componentDidMount()

{
this._mounted=true;
this._panXListener=this.state.panX.addListener(this._trackPanX);
this._offsetXListener=this.state.offsetX.addListener(this._trackOffsetX);
npm;

this.props.onTabCreate&&this.props.onTabCreate(this.props.navigationState.routeName,this);
}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
this._mounted=false;
this.state.panX.removeListener(this._panXListener);
this.state.offsetX.removeListener(this._offsetXListener);


this.props.onTabDestroy&&this.props.onTabDestroy(this.props.navigationState.routeName);
}},{key:'render',value:function render()













































































































































{var _this2=this;var _props=














this.props,navigationState=_props.navigationState,onIndexChange=_props.onIndexChange,onPositionChange=_props.onPositionChange,canJumpToTab=_props.canJumpToTab,lazy=_props.lazy,initialLayout=_props.initialLayout,renderScene=_props.renderScene,renderPager=_props.renderPager,renderHeader=_props.renderHeader,renderFooter=_props.renderFooter,rest=_objectWithoutProperties(_props,['navigationState','onIndexChange','onPositionChange','canJumpToTab','lazy','initialLayout','renderScene','renderPager','renderHeader','renderFooter']);
var props=this._buildSceneRendererProps();

return(
React.createElement(_reactNative.View,{
onLayout:this._handleLayout,
loaded:this.state.loaded,
style:[styles.container,this.props.style],__source:{fileName:_jsxFileName,lineNumber:292}},

renderHeader&&renderHeader(props),
renderPager(_extends({},
props,
rest,{
panX:this.state.panX,
offsetX:this.state.offsetX,
children:navigationState.routes.map(function(route,index){return(
_this2._renderScene(_extends({},
props,{
route:route,
index:index,
focused:index===navigationState.index})));})})),



renderFooter&&renderFooter(props)));


}}]);return TabViewAnimated;}(React.Component);TabViewAnimated.propTypes={navigationState:_TabViewPropTypes.NavigationStatePropType.isRequired,onIndexChange:_propTypes2.default.func.isRequired,onPositionChange:_propTypes2.default.func,initialLayout:_propTypes2.default.shape({height:_propTypes2.default.number.isRequired,width:_propTypes2.default.number.isRequired}),canJumpToTab:_propTypes2.default.func,renderPager:_propTypes2.default.func.isRequired,renderScene:_propTypes2.default.func.isRequired,renderHeader:_propTypes2.default.func,renderFooter:_propTypes2.default.func,lazy:_propTypes2.default.bool};TabViewAnimated.defaultProps={renderPager:function renderPager(props){return React.createElement(TabViewPager,_extends({},props,{__source:{fileName:_jsxFileName,lineNumber:77}}));},initialLayout:{height:0,width:0},useNativeDriver:false};var _initialiseProps=function _initialiseProps(){var _this3=this;this._mounted=false;this._subscriptions={};this._trackPanX=function(e){_this3._lastPanX=e.value;_this3._trackPosition();};this._trackOffsetX=function(e){_this3._lastOffsetX=e.value;_this3._trackPosition();};this._trackPosition=function(){var value=_this3._getLastPosition();_this3._handlePositionChange(value);_this3._triggerEvent('position',value);};this._getLastPosition=function(){var navigationState=_this3.props.navigationState;var layout=_this3.state.layout;var panX=typeof _this3._lastPanX==='number'?_this3._lastPanX:0;var offsetX=typeof _this3._lastOffsetX==='number'?_this3._lastOffsetX:-navigationState.index*layout.width;return(panX+offsetX)/-(layout.width||0.001);};this._renderScene=function(props){var _props2=_this3.props,renderScene=_props2.renderScene,lazy=_props2.lazy;var navigationState=props.navigationState;var loaded=_this3.state.loaded;if(lazy){if(loaded.includes(navigationState.routes.indexOf(props.route))){return renderScene(props);}return null;}return renderScene(props);};this._handlePositionChange=function(value){var _props3=_this3.props,onPositionChange=_props3.onPositionChange,navigationState=_props3.navigationState,lazy=_props3.lazy;if(onPositionChange){onPositionChange({value:value});}var loaded=_this3.state.loaded;if(lazy){var next=Math.ceil(value);if(next===navigationState.index){next=Math.floor(value);}if(loaded.includes(next)){return;}_this3.setState({loaded:[].concat(_toConsumableArray(loaded),[next])});}};this._handleLayout=function(e){var _e$nativeEvent$layout=e.nativeEvent.layout,height=_e$nativeEvent$layout.height,width=_e$nativeEvent$layout.width;if(_this3.state.layout.width===width&&_this3.state.layout.height===height){return;}_this3.state.offsetX.setValue(-_this3.props.navigationState.index*width);_this3.state.layoutXY.setValue({x:width,y:height});_this3.setState({layout:{measured:true,height:height,width:width}});};this._buildSceneRendererProps=function(){return{layout:_this3.state.layout,navigationState:_this3.props.navigationState,position:_this3.state.position,jumpToIndex:_this3._jumpToIndex,getLastPosition:_this3._getLastPosition,subscribe:_this3._addSubscription,useNativeDriver:_this3.props.useNativeDriver===true};};this._jumpToIndex=function(index){if(!_this3._mounted){return;}var _props4=_this3.props,canJumpToTab=_props4.canJumpToTab,navigationState=_props4.navigationState;if(canJumpToTab&&!canJumpToTab(navigationState.routes[index])){_this3._triggerEvent('reset',navigationState.index);return;}if(index!==navigationState.index){_this3.props.onIndexChange(index);}};this._addSubscription=function(event,callback){if(!_this3._subscriptions[event]){_this3._subscriptions[event]=[];}_this3._subscriptions[event].push(callback);return{remove:function remove(){var index=_this3._subscriptions[event].indexOf(callback);if(index>-1){_this3._subscriptions[event].splice(index,1);}}};};this._triggerEvent=function(event,value){if(_this3._subscriptions[event]){_this3._subscriptions[event].forEach(function(fn){return fn(value);});}};};exports.default=TabViewAnimated;


var styles=_reactNative.StyleSheet.create({
container:{
flex:1,
overflow:'hidden'}});