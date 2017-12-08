import React from 'react';
import {connect} from 'react-redux';
import {taimerActivated} from '../../actions/index';

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
    smallIcon: {
        width: 24,
        height: 24,
    },
    small: {
        width: 24,
        height: 24,
        padding: 0,
    },
    timer: {
        verticalAlign: "super",
        marginRight: "0.5rem"
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
        this.timerId = setInterval(() => {
            this.setState((prevState) => {
                return {time: prevState.time++}
            })
        }, 1000);
        this.props.onTimerActivated();
    }

    _handleClickPause = () => {
        if(this.timerId) {
            clearInterval(this.timerId);
        }
        this.props.onTimerActivated();        
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
        const controlls = (
            <div 
                className="timer__controlls"
                style={{
                    position: "absolute",
                    left: 0
                }}
            >
                <IconButton 
                    onClick={this._handleClickPlay}
                    style={controlsStyle.small} 
                    iconStyle={controlsStyle.smallIcon}
                >
                    <PlayCircleFilled />
                </IconButton>
                <IconButton 
                    onClick={this._handleClickPause}
                    style={controlsStyle.small} 
                    iconStyle={controlsStyle.smallIcon}
                >
                    <PauseCircleFilled />
                </IconButton>
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
                    this.props.completed ? '' : controlls
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = dispatch => {
    return {
        onTimerActivated: () => {
            dispatch(taimerActivated())
        }  
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Timer);