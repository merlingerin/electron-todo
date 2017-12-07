import React from 'react';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import {List, ListItem} from 'material-ui/List';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import PlayCircleFilled from 'material-ui/svg-icons/av/play-circle-filled';
import PauseCircleFilled from 'material-ui/svg-icons/av/pause-circle-filled';
import Timer from '../Timer/Timer';

<i class="material-icons">play_circle_filled</i>
const iconButtonElement = (
    <IconButton
        touch={true}
        tooltip="more"
        tooltipPosition="bottom-left"
        >
        <MoreVertIcon color={grey400} />
    </IconButton>
);
  
const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem>Start</MenuItem>
        <MenuItem>Stop</MenuItem>
        <MenuItem>Delete</MenuItem>
    </IconMenu>
);

const TodoItem = (props) => {
    let completed =  props.completed ? 'completed' : '';
    return (
        <ListItem
            className={`todo__item ${completed}`}
            leftAvatar={<Timer {...props} />}
            rightIconButton={rightIconMenu}
            primaryText={props.title}
            secondaryText={
                <p>
                    {props.description}
                </p>
            }
            secondaryTextLines={2}
        />
    );
}

export default TodoItem;