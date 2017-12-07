import React from 'react';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import {List, ListItem} from 'material-ui/List';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

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
        <MenuItem>Reply</MenuItem>
        <MenuItem>Forward</MenuItem>
        <MenuItem>Delete</MenuItem>
    </IconMenu>
);

const TodoItem = (props) => {
    console.log('props', props)
    return (
        <ListItem
            // leftAvatar={<Avatar src="images/ok-128.jpg" />}
            rightIconButton={rightIconMenu}
            primaryText={props.title}
            secondaryText={
                <p>
                    <hr style={{color: lightBlack}} />
                    {props.description}
                </p>
            }
            secondaryTextLines={2}
        />
    );
}

export default TodoItem;