import React from 'react';
import PropTypes from 'prop-types';
import {Input, Label} from "reactstrap";
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';

function Message(props) {
    return (
        <>
            <Label for="name">Message</Label>
            <HelpOutlineOutlinedIcon color="primary"/>
            <Input
                type="textarea"
                name="message"
                onChange={props.onChange}
            />
        </>
    );
}



Message.propsTypes ={
    onChange: PropTypes.func.isRequired
};

export default Message;
