import { MenuList, MenuItem } from '@material-ui/core';
import {Link} from 'react-router-dom';
import React, { Component } from 'react';

class Navigation extends Component{
    state={

    }
    render (){
    const menush = (
        <div>
            <MenuList>
                <MenuItem component={Link} to={'/signin'}>
                Home1
                </MenuItem>
                <MenuItem component={Link} to={'/signup'}>
                Home2
                </MenuItem>
            </MenuList>
        </div>

    )

    return (
        <div>
        </div>

    )
    }
}

export default Navigation;