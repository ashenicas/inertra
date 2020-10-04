import React, { Component } from 'react';

import './Topbar.scss'
import { Button, ButtonGroup } from '@material-ui/core';

export default class Topbar extends Component {
    render() {
        return (
            <div className='pageHeader'>
                <div className='logo'>
                    <img src='logoWhite.png'></img>
                </div>
                <div className="options">
                    <div className='sign'>
                        <ButtonGroup variant="text" color="default" aria-label="text primary button group">
                            <Button>About</Button>
                            <Button>Resources</Button>
                            <Button>Sign In</Button>
                        </ButtonGroup>
                    </div>

                </div>
            </div>
        )
    }
}
