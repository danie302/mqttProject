// Dependencies
import React, { Component } from "react";
import { subscribe } from "mqtt-react";
import { LineChart, YAxis, CartesianGrid, Line } from "recharts";

// Assets
import "./index.css";

class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.onButton = this.onButton.bind(this);
        this.offButton = this.offButton.bind(this);
    }
    onButton() {
        const { mqtt } = this.props;
        this.setState({
            state: "On"
        });
        mqtt.publish("danield", `{ "app": { "code": "DA" } }`);
        console.log(this.props);
    }
    offButton() {
        const { mqtt } = this.props;
        this.setState({
            state: "Off"
        });
        mqtt.publish("danield", `{ "app": { "code": "D0" } }`);

        console.log(this.props);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.data !== this.props.data) {
            if (this.props.data[0].uwi) {
                let newData = this.state.data;
                newData.push({ point: this.props.data[0].uwi.data });
                this.setState({
                    data: [...newData]
                });
            }
        }
    }
    render() {
        return (
            <div className="container">
                <div className="btn btn-success" onClick={this.onButton}>
                    On
                </div>
                <div className="btn btn-danger" onClick={this.offButton}>
                    Off
                </div>
                <LineChart
                    width={400}
                    height={400}
                    data={this.state.data}
                    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                    <YAxis dataKey="point" />
                    <CartesianGrid stroke="#f5f5f5" fill="#f5f5f5" />

                    <Line
                        type="monotone"
                        dataKey="point"
                        stroke="#ff7300"
                        yAxisId={0}
                    />
                    <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="#387908"
                        yAxisId={1}
                    />
                </LineChart>
            </div>
        );
    }
}

export default subscribe({
    topic: "danield"
})(Data);
