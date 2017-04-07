import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

var base_url = "http://127.0.0.1:7000";
var base_img_src = base_url + "/assets/img/heroes";
var API_COUNTER = base_url + "/api/counter";
var API_ALIES = base_url + "/api/alies";

class CounterView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            target: "",
            counter: [],
            alies: []
        }

        this.fetchCounter = this.fetchCounter.bind(this);
    }

    fetchCounter(name) {
        var self = this;
        axios.get(API_COUNTER + "?name=" + name)
            .then(function (response) {
                self.setState({
                    target: name,
                    counter: response.data.counter_list
                });
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get(API_ALIES + "?name=" + name)
            .then(function (response) {
                self.setState({
                    target: name,
                    alies: response.data.alies_list
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        var name = this.props.pick_hero.pick;
        var hero = _.find(this.props.heroes, (o) => o.name == name);

        if (name && name != "") {
            var img_src;

            var counter_list = this.state.counter.map((hero) => {
                img_src = `${base_img_src}/${hero.name}.jpg`;
                return (
                    <div key={hero.name} className="ImageContainer" >
                        <img src={img_src} className="HeroIcon" />
                    </div>
                );
            });

            var alies_list = this.state.alies.map((hero) => {
                img_src = `${base_img_src}/${hero.name}.jpg`;
                return (
                    <div key={hero.name} className="ImageContainer" >
                        <img src={img_src} className="HeroIcon" />
                    </div>
                );
            });

            if (name != this.state.target) {
                this.fetchCounter(name);
            }

            img_src = `${base_img_src}/${name}.jpg`;
            return (
                <div className="CounterView">
                    <div className="CounterViewTarget">
                        <img src={img_src} className="HeroIcon" />
                        {hero.localized_name}
                    </div>
                    <div className="HeroPicker">{counter_list}</div>
                    <div className="HeroPicker">{alies_list}</div>
                </div>
            );
        }

        return (<div className="CounterView" ></div>);
    }
}

function mapStateToProps({heroes, pick_hero}) {
    return { heroes, pick_hero };
}

export default connect(mapStateToProps)(CounterView);