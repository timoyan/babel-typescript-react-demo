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
  border: 'none',
  width: '100%',
  height: '100%',
  fontSize: '14px',
  outline: 'none'
});

var TextBox = _react["default"].memo(function () {
  return _react["default"].createElement(Wrapper, null, _react["default"].createElement(InputWrapper, null, _react["default"].createElement(Input, {
    type: "input"
  })));
});

exports.TextBox = TextBox;
TextBox.displayName = 'TextBox';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3RleHRib3gvaW5kZXgudHN4Il0sIm5hbWVzIjpbIldyYXBwZXIiLCJkaXNwbGF5IiwicG9zaXRpb24iLCJ3aWR0aCIsIklucHV0V3JhcHBlciIsImhlaWdodCIsImFsaWduSXRlbXMiLCJwYWRkaW5nIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiSW5wdXQiLCJib3JkZXIiLCJmb250U2l6ZSIsIm91dGxpbmUiLCJUZXh0Qm94IiwiUmVhY3QiLCJtZW1vIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBLElBQU1BLE9BQU8sR0FBRyw4QkFBTyxLQUFQLEVBQWM7QUFDMUJDLEVBQUFBLE9BQU8sRUFBRSxjQURpQjtBQUUxQkMsRUFBQUEsUUFBUSxFQUFFLFVBRmdCO0FBRzFCQyxFQUFBQSxLQUFLLEVBQUU7QUFIbUIsQ0FBZCxDQUFoQjtBQU1BLElBQU1DLFlBQVksR0FBRyw4QkFBTyxLQUFQLEVBQWM7QUFDL0JDLEVBQUFBLE1BQU0sRUFBRSxNQUR1QjtBQUUvQkosRUFBQUEsT0FBTyxFQUFFLE1BRnNCO0FBRy9CSyxFQUFBQSxVQUFVLEVBQUUsUUFIbUI7QUFJL0JDLEVBQUFBLE9BQU8sRUFBRSxVQUpzQjtBQUsvQixXQUFTO0FBQ0xDLElBQUFBLFVBQVUsRUFBRSxLQURQO0FBRUxDLElBQUFBLFdBQVcsRUFBRTtBQUZSLEdBTHNCO0FBUy9CLGlCQUFlO0FBQ1hELElBQUFBLFVBQVUsRUFBRTtBQUREO0FBVGdCLENBQWQsQ0FBckI7QUFjQSxJQUFNRSxLQUFLLEdBQUcsOEJBQU8sT0FBUCxFQUFnQjtBQUMxQkMsRUFBQUEsTUFBTSxFQUFFLE1BRGtCO0FBRTFCUixFQUFBQSxLQUFLLEVBQUUsTUFGbUI7QUFHMUJFLEVBQUFBLE1BQU0sRUFBRSxNQUhrQjtBQUkxQk8sRUFBQUEsUUFBUSxFQUFFLE1BSmdCO0FBSzFCQyxFQUFBQSxPQUFPLEVBQUU7QUFMaUIsQ0FBaEIsQ0FBZDs7QUFZTyxJQUFNQyxPQUFPLEdBQUdDLGtCQUFNQyxJQUFOLENBQTBCLFlBQU07QUFDbkQsU0FDSSxnQ0FBQyxPQUFELFFBQ0ksZ0NBQUMsWUFBRCxRQUNJLGdDQUFDLEtBQUQ7QUFBTyxJQUFBLElBQUksRUFBQztBQUFaLElBREosQ0FESixDQURKO0FBT0gsQ0FSc0IsQ0FBaEI7OztBQVVQRixPQUFPLENBQUNHLFdBQVIsR0FBc0IsU0FBdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdyZWFjdC1lbW90aW9uJztcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZCgnZGl2Jykoe1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHdpZHRoOiAnMTAwJScsXG59KTtcblxuY29uc3QgSW5wdXRXcmFwcGVyID0gc3R5bGVkKCdkaXYnKSh7XG4gICAgaGVpZ2h0OiAnMzhweCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHBhZGRpbmc6ICc4cHggMTJweCcsXG4gICAgJyYgc3ZnJzoge1xuICAgICAgICBtYXJnaW5MZWZ0OiAnOHB4JyxcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICc4cHgnLFxuICAgIH0sXG4gICAgJyYgc3ZnICsgc3ZnJzoge1xuICAgICAgICBtYXJnaW5MZWZ0OiAnMHB4JyxcbiAgICB9LFxufSk7XG5cbmNvbnN0IElucHV0ID0gc3R5bGVkKCdpbnB1dCcpKHtcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgb3V0bGluZTogJ25vbmUnLFxufSk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRleHRCb3hQcm9wcyB7XG4gICAgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgVGV4dEJveCA9IFJlYWN0Lm1lbW88SVRleHRCb3hQcm9wcz4oKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxXcmFwcGVyPlxuICAgICAgICAgICAgPElucHV0V3JhcHBlcj5cbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImlucHV0XCIgLz5cbiAgICAgICAgICAgIDwvSW5wdXRXcmFwcGVyPlxuICAgICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbn0pO1xuXG5UZXh0Qm94LmRpc3BsYXlOYW1lID0gJ1RleHRCb3gnO1xuIl19