"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextBox = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactEmotion = _interopRequireDefault(require("react-emotion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Wrapper = (0, _reactEmotion["default"])('div')({
  display: 'inline-block',
  position: 'relative',
  width: '100%'
});
var InputWrapper = (0, _reactEmotion["default"])('div')({
  height: '38px',
  display: 'flex',
  alignItems: 'center',
  padding: '8px 12px',
  '& svg': {
    marginLeft: '8px',
    marginRight: '8px'
  },
  '& svg + svg': {
    marginLeft: '0px'
  }
});
var Input = (0, _reactEmotion["default"])('input')({
  border: '1px solid black',
  width: '100%',
  height: '100%',
  fontSize: '14px',
  outline: 'none'
});

var TextBox = _react["default"].memo(function (_ref) {
  var name = _ref.name,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      value = _ref.value;
  return _react["default"].createElement(Wrapper, null, _react["default"].createElement(InputWrapper, null, _react["default"].createElement(Input, {
    type: "input",
    name: name,
    className: className,
    value: value
  })));
});

exports.TextBox = TextBox;
TextBox.displayName = 'TextBox';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3RleHRib3gvaW5kZXgudHN4Il0sIm5hbWVzIjpbIldyYXBwZXIiLCJkaXNwbGF5IiwicG9zaXRpb24iLCJ3aWR0aCIsIklucHV0V3JhcHBlciIsImhlaWdodCIsImFsaWduSXRlbXMiLCJwYWRkaW5nIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiSW5wdXQiLCJib3JkZXIiLCJmb250U2l6ZSIsIm91dGxpbmUiLCJUZXh0Qm94IiwiUmVhY3QiLCJtZW1vIiwibmFtZSIsImNsYXNzTmFtZSIsInZhbHVlIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBLElBQU1BLE9BQU8sR0FBRyw4QkFBTyxLQUFQLEVBQWM7QUFDMUJDLEVBQUFBLE9BQU8sRUFBRSxjQURpQjtBQUUxQkMsRUFBQUEsUUFBUSxFQUFFLFVBRmdCO0FBRzFCQyxFQUFBQSxLQUFLLEVBQUU7QUFIbUIsQ0FBZCxDQUFoQjtBQU1BLElBQU1DLFlBQVksR0FBRyw4QkFBTyxLQUFQLEVBQWM7QUFDL0JDLEVBQUFBLE1BQU0sRUFBRSxNQUR1QjtBQUUvQkosRUFBQUEsT0FBTyxFQUFFLE1BRnNCO0FBRy9CSyxFQUFBQSxVQUFVLEVBQUUsUUFIbUI7QUFJL0JDLEVBQUFBLE9BQU8sRUFBRSxVQUpzQjtBQUsvQixXQUFTO0FBQ0xDLElBQUFBLFVBQVUsRUFBRSxLQURQO0FBRUxDLElBQUFBLFdBQVcsRUFBRTtBQUZSLEdBTHNCO0FBUy9CLGlCQUFlO0FBQ1hELElBQUFBLFVBQVUsRUFBRTtBQUREO0FBVGdCLENBQWQsQ0FBckI7QUFjQSxJQUFNRSxLQUFLLEdBQUcsOEJBQU8sT0FBUCxFQUFnQjtBQUMxQkMsRUFBQUEsTUFBTSxFQUFFLGlCQURrQjtBQUUxQlIsRUFBQUEsS0FBSyxFQUFFLE1BRm1CO0FBRzFCRSxFQUFBQSxNQUFNLEVBQUUsTUFIa0I7QUFJMUJPLEVBQUFBLFFBQVEsRUFBRSxNQUpnQjtBQUsxQkMsRUFBQUEsT0FBTyxFQUFFO0FBTGlCLENBQWhCLENBQWQ7O0FBY08sSUFBTUMsT0FBTyxHQUFHQyxrQkFBTUMsSUFBTixDQUEwQixnQkFBcUM7QUFBQSxNQUFsQ0MsSUFBa0MsUUFBbENBLElBQWtDO0FBQUEsNEJBQTVCQyxTQUE0QjtBQUFBLE1BQTVCQSxTQUE0QiwrQkFBaEIsRUFBZ0I7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDbEYsU0FDSSxnQ0FBQyxPQUFELFFBQ0ksZ0NBQUMsWUFBRCxRQUNJLGdDQUFDLEtBQUQ7QUFBTyxJQUFBLElBQUksRUFBQyxPQUFaO0FBQW9CLElBQUEsSUFBSSxFQUFFRixJQUExQjtBQUFnQyxJQUFBLFNBQVMsRUFBRUMsU0FBM0M7QUFBc0QsSUFBQSxLQUFLLEVBQUVDO0FBQTdELElBREosQ0FESixDQURKO0FBT0gsQ0FSc0IsQ0FBaEI7OztBQVVQTCxPQUFPLENBQUNNLFdBQVIsR0FBc0IsU0FBdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdyZWFjdC1lbW90aW9uJztcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZCgnZGl2Jykoe1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHdpZHRoOiAnMTAwJScsXG59KTtcblxuY29uc3QgSW5wdXRXcmFwcGVyID0gc3R5bGVkKCdkaXYnKSh7XG4gICAgaGVpZ2h0OiAnMzhweCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHBhZGRpbmc6ICc4cHggMTJweCcsXG4gICAgJyYgc3ZnJzoge1xuICAgICAgICBtYXJnaW5MZWZ0OiAnOHB4JyxcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICc4cHgnLFxuICAgIH0sXG4gICAgJyYgc3ZnICsgc3ZnJzoge1xuICAgICAgICBtYXJnaW5MZWZ0OiAnMHB4JyxcbiAgICB9LFxufSk7XG5cbmNvbnN0IElucHV0ID0gc3R5bGVkKCdpbnB1dCcpKHtcbiAgICBib3JkZXI6ICcxcHggc29saWQgYmxhY2snLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICBvdXRsaW5lOiAnbm9uZScsXG59KTtcblxuZXhwb3J0IGludGVyZmFjZSBJVGV4dEJveFByb3BzIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICAgIHZhbHVlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgVGV4dEJveCA9IFJlYWN0Lm1lbW88SVRleHRCb3hQcm9wcz4oKHsgbmFtZSwgY2xhc3NOYW1lID0gJycsIHZhbHVlIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8V3JhcHBlcj5cbiAgICAgICAgICAgIDxJbnB1dFdyYXBwZXI+XG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJpbnB1dFwiIG5hbWU9e25hbWV9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB2YWx1ZT17dmFsdWV9IC8+XG4gICAgICAgICAgICA8L0lucHV0V3JhcHBlcj5cbiAgICAgICAgPC9XcmFwcGVyPlxuICAgICk7XG59KTtcblxuVGV4dEJveC5kaXNwbGF5TmFtZSA9ICdUZXh0Qm94JztcbiJdfQ==