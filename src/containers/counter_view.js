import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

var base_img_src = "http://128.88.242.23:7000/assets/img/heroes";

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
        axios.get("http://128.88.242.23:7000/api/counter?name=" + name)
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
        var name = this.props.counter;

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
                <div className="CounterView" style={{ width: "50%" }}>
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

function mapStateToProps({counter}) {
    return { counter };
}

export default connect(mapStateToProps)(CounterView);