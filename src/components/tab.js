import React, { Component } from 'react';
import _ from 'lodash';

export class Tabs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: null,
            children: {}
        }

        props.children.map(child => {
            this.state.children[child.props.title] = child.props.component;
        });
        this.state.activeTab = props.children[0].props.title;

        this.changeTab = this.changeTab.bind(this);
        this.getOnClickFunction = this.getOnClickFunction.bind(this);
    }

    getOnClickFunction(title) {
        return () => this.changeTab(title);
    }

    changeTab(title) {
        if (this.onTabChange) {
            this.onTabChange(this.state.title, title);
        }

        this.setState({
            activeTab: title
        });
    }

    render() {
        var titles = [];
        for (var key in this.state.children) {
            var className = key == this.state.activeTab ? "active" : "";
            titles.push(<li key={key} className={className} onClick={this.getOnClickFunction(key)}>{key}</li>);
        }

        var child = this.state.children[this.state.activeTab];

        return (
            <div className="Tabs">
                <div className="TabsHeader"><ul>{titles}</ul></div>
                <div className="TabsBody" key={this.state.activeTab}>{child}</div>
            </div>
        );
    }
}

export class Tab {

}
