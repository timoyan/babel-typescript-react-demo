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

var TextBox = _react["default"].memo(function () {
  return _react["default"].createElement(Wrapper, null, _react["default"].createElement(InputWrapper, null, _react["default"].createElement(Input, {
    type: "input"
  })));
});

exports.TextBox = TextBox;
TextBox.displayName = 'TextBox';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3RleHRib3gvaW5kZXgudHN4Il0sIm5hbWVzIjpbIldyYXBwZXIiLCJkaXNwbGF5IiwicG9zaXRpb24iLCJ3aWR0aCIsIklucHV0V3JhcHBlciIsImhlaWdodCIsImFsaWduSXRlbXMiLCJwYWRkaW5nIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiSW5wdXQiLCJib3JkZXIiLCJmb250U2l6ZSIsIm91dGxpbmUiLCJUZXh0Qm94IiwiUmVhY3QiLCJtZW1vIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVBLElBQU1BLE9BQU8sR0FBRyw4QkFBTyxLQUFQLEVBQWM7QUFDMUJDLEVBQUFBLE9BQU8sRUFBRSxjQURpQjtBQUUxQkMsRUFBQUEsUUFBUSxFQUFFLFVBRmdCO0FBRzFCQyxFQUFBQSxLQUFLLEVBQUU7QUFIbUIsQ0FBZCxDQUFoQjtBQU1BLElBQU1DLFlBQVksR0FBRyw4QkFBTyxLQUFQLEVBQWM7QUFDL0JDLEVBQUFBLE1BQU0sRUFBRSxNQUR1QjtBQUUvQkosRUFBQUEsT0FBTyxFQUFFLE1BRnNCO0FBRy9CSyxFQUFBQSxVQUFVLEVBQUUsUUFIbUI7QUFJL0JDLEVBQUFBLE9BQU8sRUFBRSxVQUpzQjtBQUsvQixXQUFTO0FBQ0xDLElBQUFBLFVBQVUsRUFBRSxLQURQO0FBRUxDLElBQUFBLFdBQVcsRUFBRTtBQUZSLEdBTHNCO0FBUy9CLGlCQUFlO0FBQ1hELElBQUFBLFVBQVUsRUFBRTtBQUREO0FBVGdCLENBQWQsQ0FBckI7QUFjQSxJQUFNRSxLQUFLLEdBQUcsOEJBQU8sT0FBUCxFQUFnQjtBQUMxQkMsRUFBQUEsTUFBTSxFQUFFLGlCQURrQjtBQUUxQlIsRUFBQUEsS0FBSyxFQUFFLE1BRm1CO0FBRzFCRSxFQUFBQSxNQUFNLEVBQUUsTUFIa0I7QUFJMUJPLEVBQUFBLFFBQVEsRUFBRSxNQUpnQjtBQUsxQkMsRUFBQUEsT0FBTyxFQUFFO0FBTGlCLENBQWhCLENBQWQ7O0FBWU8sSUFBTUMsT0FBTyxHQUFHQyxrQkFBTUMsSUFBTixDQUEwQixZQUFNO0FBQ25ELFNBQ0ksZ0NBQUMsT0FBRCxRQUNJLGdDQUFDLFlBQUQsUUFDSSxnQ0FBQyxLQUFEO0FBQU8sSUFBQSxJQUFJLEVBQUM7QUFBWixJQURKLENBREosQ0FESjtBQU9ILENBUnNCLENBQWhCOzs7QUFVUEYsT0FBTyxDQUFDRyxXQUFSLEdBQXNCLFNBQXRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAncmVhY3QtZW1vdGlvbic7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQoJ2RpdicpKHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB3aWR0aDogJzEwMCUnLFxufSk7XG5cbmNvbnN0IElucHV0V3JhcHBlciA9IHN0eWxlZCgnZGl2Jykoe1xuICAgIGhlaWdodDogJzM4cHgnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBwYWRkaW5nOiAnOHB4IDEycHgnLFxuICAgICcmIHN2Zyc6IHtcbiAgICAgICAgbWFyZ2luTGVmdDogJzhweCcsXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnOHB4JyxcbiAgICB9LFxuICAgICcmIHN2ZyArIHN2Zyc6IHtcbiAgICAgICAgbWFyZ2luTGVmdDogJzBweCcsXG4gICAgfSxcbn0pO1xuXG5jb25zdCBJbnB1dCA9IHN0eWxlZCgnaW5wdXQnKSh7XG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgb3V0bGluZTogJ25vbmUnLFxufSk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRleHRCb3hQcm9wcyB7XG4gICAgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgVGV4dEJveCA9IFJlYWN0Lm1lbW88SVRleHRCb3hQcm9wcz4oKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxXcmFwcGVyPlxuICAgICAgICAgICAgPElucHV0V3JhcHBlcj5cbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImlucHV0XCIgLz5cbiAgICAgICAgICAgIDwvSW5wdXRXcmFwcGVyPlxuICAgICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbn0pO1xuXG5UZXh0Qm94LmRpc3BsYXlOYW1lID0gJ1RleHRCb3gnO1xuIl19