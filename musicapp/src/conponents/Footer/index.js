import React from 'react';
import './index.less'
import { connect } from 'react-redux'
import { StepBackwardOutlined, StepForwardOutlined, CaretRightOutlined, PauseOutlined } from '@ant-design/icons'
import { Button, Progress } from 'antd';
import utils from '../../utils';

class Footer extends React.Component {
  state = {
    play: false,
    duration_start: 0,
    duration_all: 0,
    timer: null,
    progress1: 0,
  }



  componentWillReceiveProps(nextProps) {
    const {timer} = this.state;
    clearInterval(timer);
    let duration = nextProps.duration_all ? nextProps.duration_all : 0;
    this.setState({ play: true, duration_all: duration ,timer:null});
    this.getDuration();
  }

  getDuration = () => {
    var start = new Date().getTime();
    const { duration_start } = this.state;
    let audio = document.querySelector('#myAudio');

    let timer = setInterval(() => {
      const { duration_all } = this.state;
      let currentTime = parseInt(audio.currentTime);
      let progress1 = currentTime*10000/duration_all;
      this.setState({ duration_start: currentTime,progress1 });

    }, 1000);
    this.setState({ timer });
  }

  play = () => {
    const { play, duration_start } = this.state;
    this.setState({ play: !play });
    let audio = document.querySelector('#myAudio');
    if (audio.paused) {
      audio.play();
      this.getDuration();
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
  render() {
    const { songUrl } = this.props;
    const { duration_all } = this.state;
    const { play, duration_start, progress1 } = this.state;
    return (
      <div className="footer">
        <audio id="myAudio" src={songUrl} autoPlay />
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
        <span className="duration_start">{utils.getDuration(duration_start)}</span>
        <Progress style={{ width: 900 }} size="small" percent={progress1} showInfo={false} />
        <span className="duration_all">{utils.getDuration(duration_all)}</span>
        <svg className="bi bi-volume-up-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" />
          <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" />
          <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707z" />
          <path fillRule="evenodd" d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z" clipRule="evenodd" />
        </svg>
        {/* <svg className="bi bi-volume-mute-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 1.596a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708l4-4a.5.5 0 0 1 .708 0z" clipRule="evenodd" />
          <path fill-rule="evenodd" d="M9.146 5.146a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0z" clipRule="evenodd" />
        </svg> */}
        <Progress style={{ width: 80 }} size="small" percent={100} showInfo={false} />
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