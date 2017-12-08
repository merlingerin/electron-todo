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
    <IconButton>
        <MoreVertIcon color={grey400} />
    </IconButton>
);

const TodoItem = (props) => {
    let completed =  props.completed ? 'completed' : '';
    let renderTimer = () => {
        if(props.timerActived) {
            if(props.active === props.timerActived) {
                return <Timer {...props} />;
            } else {
                return <Timer type={'hidden'} {...props} />;
            };
        } else {
            return <Timer {...props} />
        }
    }

    const rightIconMenu = (
        <IconMenu menuStyle={{minWidth: 150}}  iconButtonElement={iconButtonElement}>
            {props.completed ? <MenuItem onClick={() => {props.onToggleTodo(props.id)}}>Uncompleted</MenuItem> : <MenuItem onClick={() => {props.onToggleTodo(props.id)}}>Completed</MenuItem>}
            <MenuItem>Delete</MenuItem>
        </IconMenu>
    );
    return (
        <ListItem
            className={`todo__item ${completed}`}
            leftAvatar={renderTimer()}
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