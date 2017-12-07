import React from 'react';
import PlayCircleFilled from 'material-ui/svg-icons/av/play-circle-filled';
import PauseCircleFilled from 'material-ui/svg-icons/av/pause-circle-filled';
import IconButton from 'material-ui/IconButton';
import Moment from 'react-moment';

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
        console.log('_handleClick Play');
    }

    _handleClickPause = () => {
        console.log('_handleClick Pause');
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
        let time = this.state.time;
        return (
            <div className="timer">
                <span 
                    className="timer__time"
                    style={controlsStyle.timer}
                >
                    <Moment format="hh:mm:ss">
                        {time - 20000000000}                        
                    </Moment>
                </span>
                {
                    this.props.completed ? '' : controlls
                }
            </div>
        )
    }
}

export default Timer;