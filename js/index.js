var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var data = [{
  key: 'Q',
  keyCode: 81,
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  id: 'Heater-1' },
{
  key: 'W',
  keyCode: 87,
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  id: 'Heater-2' },
{
  key: 'E',
  keyCode: 69,
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  id: 'Heater-3' },
{
  key: 'A',
  keyCode: 65,
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  id: 'Heater-4' },
{
  key: 'S',
  keyCode: 83,
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  id: 'Open-H' },
{
  key: 'D',
  keyCode: 68,
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  id: 'Heater-6' },
{
  key: 'Z',
  keyCode: 90,
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  id: 'Kick-n-Hat' },
{
  key: 'X',
  keyCode: 88,
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  id: 'Kick' },
{
  key: 'C',
  keyCode: 67,
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  id: 'Closed-HH' }];var


DrumPad = function (_React$Component) {_inherits(DrumPad, _React$Component);
  function DrumPad(props) {_classCallCheck(this, DrumPad);var _this = _possibleConstructorReturn(this, (DrumPad.__proto__ || Object.getPrototypeOf(DrumPad)).call(this,
    props));_this.







    handleKeyPress = function (event) {
      if (event.keyCode === _this.props.keyCode) {
        _this.playSound();
      }
    };_this.
    playSound = function (event) {
      var sound = document.getElementById(_this.props.keyTrigger);
      sound.volume = _this.props.volume / 50;
      sound.play();
      _this.props.display(_this.props.id);
    };return _this;}_createClass(DrumPad, [{ key: 'componentDidMount', value: function componentDidMount() {document.addEventListener("keydown", this.handleKeyPress);} }, { key: 'componentWillUnmount', value: function componentWillUnmount() {document.removeEventListener("keydown", this.handleKeyPress);} }, { key: 'render', value: function render()

    {
      return (
        React.createElement('div', { className: 'drum-pad btn', id: this.props.id, onClick: this.playSound },
          React.createElement('audio', { className: 'clip', id: this.props.keyTrigger, src: this.props.url }),
          React.createElement('span', { className: 'text' }, this.props.keyTrigger)));


    } }]);return DrumPad;}(React.Component);
;var

PadBank = function (_React$Component2) {_inherits(PadBank, _React$Component2);
  function PadBank(props) {_classCallCheck(this, PadBank);var _this2 = _possibleConstructorReturn(this, (PadBank.__proto__ || Object.getPrototypeOf(PadBank)).call(this,
    props));_this2.

    renderPad = function (sound) {
      return (
        React.createElement(DrumPad, {
          keyTrigger: sound.key,
          keyCode: sound.keyCode,
          url: sound.url,
          id: sound.id,
          volume: _this2.props.volume,
          display: _this2.props.display }));

    };return _this2;}_createClass(PadBank, [{ key: 'render', value: function render()
    {
      return (
        React.createElement('div', null,
          this.props.data.map(this.renderPad)));


    } }]);return PadBank;}(React.Component);
;var

App = function (_React$Component3) {_inherits(App, _React$Component3);
  function App(props) {_classCallCheck(this, App);var _this3 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));_this3.







    nowPlaying = function (id) {
      _this3.setState({ playing: id });
    };_this3.
    handleChange = function (event) {
      _this3.setState({ volume: event.target.value });
    };_this3.state = { data: data, volume: "25", playing: "" };return _this3;}_createClass(App, [{ key: 'render', value: function render()

    {
      console.log(this.state.volume);
      return (
        React.createElement('div', { id: 'drum-machine' },
          React.createElement('input', { className: 'slider', id: 'volume', type: 'range', min: '0', max: '50', value: this.state.volume,
            onChange: this.handleChange }),
          React.createElement('div', { id: 'display' },
            this.state.playing),

          React.createElement(PadBank, { data: this.state.data,
            volume: this.state.volume,
            display: this.nowPlaying })));


    } }]);return App;}(React.Component);
;


ReactDOM.render(React.createElement(App, null), document.getElementById('app'));