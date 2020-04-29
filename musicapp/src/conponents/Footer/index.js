import React from 'react';
import './index.less'
import { connect } from 'react-redux'
import { StepBackwardOutlined, StepForwardOutlined, CaretRightOutlined, PauseOutlined } from '@ant-design/icons'
import { Button, Slider } from 'antd';
import utils from '../../utils';

class Footer extends React.Component {
  state = {
    play: false,
    currentTime: 0,
    duration: 0,
    timer: null,
    mute: false,
  }

  componentDidMount(){
    let audio = document.querySelector('#myAudio');
    this.setState({audio });

  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    let audio = document.querySelector('#myAudio');
    //获取音频当前时间
    let currentTime = audio.currentTime;
    //清除定时器
    const { timer } = this.state;
    clearInterval(timer);
    this.setState({ play: true, timer: null, currentTime, audio });

  }

  play = () => {
    const { play, audio } = this.state;
    if(!audio.src) {
      return false
    };
    this.setState({ play: !play });
    if (audio.paused) {
      audio.play();
    } else {
      const { timer } = this.state;
      audio.pause();
      clearInterval(timer);
      this.setState({ timer: null })
    }
  }

  goBack = () => {
  }

  goNext = () => {

  }
  changeTime = () => {
    const { audio } = this.state;
    let currentTime = parseInt(audio.currentTime);
    let duration = parseInt(audio.duration);
    let slider1 = parseInt(currentTime * 100 / duration);
    this.setState({ currentTime, slider1, duration });
  }

  handleChangeSlider1 = (value) => {
    const { audio } = this.state;
    let duration = audio.duration;
    let currentTime = duration * value / 100;
    audio.currentTime = currentTime;
  }

  handleChangeSlider2 = (value) => {
    const { audio } = this.state;
    audio.volume = value / 100;
  }

  closeSound = () => {
    const { audio, mute } = this.state;
    audio.volume = mute ? 1 : 0;
    this.setState({ mute: !mute })
  }

  render() {
    const { songUrl } = this.props;
    const { duration, mute } = this.state;
    const { play, currentTime, slider1 } = this.state;

    return (
      <div className="footer">
        <audio id="myAudio" src={songUrl} autoPlay onTimeUpdate={(e) => this.changeTime(e)} />
        <Button
          onClick={this.goBack}
          type="circle"
          icon={<StepBackwardOutlined />}
        />
        <Button
          onClick={this.play}
          style={{ margin: '0 20px' }}
          type="circle"
          icon={play ? <PauseOutlined /> : <CaretRightOutlined />} />
        <Button
          onClick={this.goNext}
          type="circle"
          icon={<StepForwardOutlined />}
        />
        <span className="duration_start">{utils.getDuration(currentTime)}</span>
        <Slider
          tipFormatter={null}
          style={{ width: 900 }}
          value={slider1}
          onChange={(value) => this.handleChangeSlider1(value)}
        />
        <span className="duration_all">{utils.getDuration(duration)}</span>
        <div className="sound" onClick={this.closeSound}>
          <img alt="img" style={{ display: mute ? 'none' : 'inline' }} src="./img/sound.svg" />
          <img alt="img" style={{ display: mute ? 'inline' : 'none' }} src="./img/mute.svg" />
        </div>
        <Slider
          tipFormatter={null}
          style={{ width: 70 }}
          onChange={(value) => this.handleChangeSlider2(value)}
        />
        <span className="standard">标准</span>
        <span className="lyric">词</span>
        <svg className="bi bi-text-left" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" clipRule="evenodd" />
        </svg>
      </div>
    )
  }
}
const mapStateProps = (state) => {

  return {
    songUrl: state.songUrl,
    duration_all: state.duration,
    index: state.index,
    play: true
  }
}

export default connect(mapStateProps)(Footer)