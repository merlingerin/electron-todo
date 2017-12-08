import React from 'react';
import {connect} from 'react-redux';
import {taimerActivated, startTodo} from '../../actions/index';

import PlayCircleFilled from 'material-ui/svg-icons/av/play-circle-filled';
import PauseCircleFilled from 'material-ui/svg-icons/av/pause-circle-filled';
import IconButton from 'material-ui/IconButton';

const controlsStyle = {
    buttonPlay: {
        width: "24px",
        height: "24px"
    },
    buttonPause: {
        width: "24px",
        height: "24px"
    },
    timer: {
        verticalAlign: "super",
        marginRight: "0.5rem"
    },
    timerControlls: {
        position: "absolute",
        left: 0,
        top: 0,
        paddingTop: "16px",
        paddingLeft: "16px"
    }
}

class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: props.spendTime
        }
    }

    _handleClickPlay = () => {
        let that = this;
        if(!this.props.active) {
            this.timerId = setInterval(() => {
                this.setState({time: ++that.state.time});
            }, 1000);
            this.props.onTimerActivated(this.props.id);
        }
    }

    _handleClickPause = () => {
        if(this.timerId) {
            clearInterval(this.timerId);
        }
        this.props.onTimerActivated(this.props.id);        
    }

    parseTime() {
        let time = this.state.time;
        let days = parseInt(time / 86400, 10) < 10 ? '0' + parseInt(time / 86400, 10) : parseInt(time / 86400, 10);
        let hours = parseInt(time % 86400 / 3600, 10) < 10 ? '0' + parseInt(time % 86400 / 3600, 10) : parseInt(time % 86400 / 3600, 10);
        let minutes = parseInt(time % 86400 % 3600 / 60, 10) < 10 ? '0' + parseInt(time % 86400 % 3600 / 60, 10) : parseInt(time % 86400 % 3600 / 60, 10);
        let seconds = parseInt(time % 86400 % 3600 % 60, 10) < 10 ? '0' + parseInt(time % 86400 % 3600 % 60, 10) : parseInt(time % 86400 % 3600 % 60, 10);

        return hours + ':' + minutes + ':' + seconds;
    }

    render() {
        let shown = this.props.timerActived === this.props.active;
        const playButton = (
            <IconButton 
                onClick={this._handleClickPlay}
            >
                <PlayCircleFilled />
            </IconButton>
        );
        const pauseButton = (
            <IconButton 
                onClick={this._handleClickPause}
            >
                <PauseCircleFilled />
            </IconButton>
        )
        const controlls = (
            <div 
                className="timer__controlls"
                style={controlsStyle.timerControlls}
            >
                {this.props.active ? pauseButton : playButton}
            </div>
        )
        return (
            <div className="timer">
                <span 
                    className="timer__time"
                    style={controlsStyle.timer}
                >
                    {this.parseTime()}
                </span>
                {
                    this.props.completed || !shown ? '' : controlls
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = dispatch => {
    return {
        onTimerActivated: (id) => {
            dispatch(taimerActivated());
            dispatch(startTodo(id));
        }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Timer);