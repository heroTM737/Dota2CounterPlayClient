import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

var base_url = "http://127.0.0.1:7000";
var base_img_src = base_url + "/assets/img/heroes";
var API = base_url + "/api/counter";

class CounterView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            target: {},
            counter: []
        }

        this.fetchCounter = this.fetchCounter.bind(this);
    }

    fetchCounter(name) {
        var self = this;
        axios.get(API + "?name=" + name)
            .then(function (response) {
                self.setState({
                    target: response.data.target,
                    counter: response.data.counter_list
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        var name = this.props.pick_hero.pick;

        if (name && name != "") {
            var img_src;

            var list = this.state.counter.map((hero) => {
                img_src = `${base_img_src}/${hero.name}.jpg`;
                return (
                    <div key={hero.name} className="ImageContainer" >
                        <img src={img_src} className="HeroIcon" />
                    </div>
                );
            });

            if (name != this.state.target.name) {
                this.fetchCounter(name);
            }

            img_src = `${base_img_src}/${name}.jpg`;
            return (
                <div className="CounterView">
                    <div className="CounterViewTarget">
                        <img src={img_src} className="HeroIcon" />
                        {this.state.target.localized_name}
                    </div>
                    <div>{list}</div>
                </div>
            );
        }

        return (<div className="CounterView" ></div>);
    }
}

function mapStateToProps({pick_hero}) {
    return { pick_hero };
}

export default connect(mapStateToProps)(CounterView);