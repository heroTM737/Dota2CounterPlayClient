import React, { Component } from 'react';

export class Tabs extends Component {
    constructor(props) {
        super(props);

        this.changeTab = this.changeTab.bind(this);
    }

    changeTab(title) {
        console.log("change to tab: " + title);
    }

    render() {
        var children = this.props.children;

        var titles = children.map(child => {
            var title = child.props.title;
            return (
                <li key={title} onClick={() => this.changeTab(title)}>{title}</li>
            )
        });

        var body = children.map(child => {
            var title = child.props.title;
            return (
                <li key={title}>{child.props.component}</li>
            )
        });

        return (
            <div className="Tabs">
                <ul>{titles}</ul>
                {body}
            </div>
        );
    }
}

export class Tab {

}
