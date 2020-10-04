import React, { Component } from 'react'

import './Page.scss';

import Topbar from '../Topbar/Topbar';

export default class Page extends Component {
    render() {
        return (
            <div className="page">
                <Topbar />

                <div className="pageContent">
                    {this.props.children}
                </div>
            </div>
        )
    }
}