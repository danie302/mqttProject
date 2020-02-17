// Dependencies
import React, { Component } from "react";
import Axios from "axios";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const User = {
            email: this.state.email,
            password: this.state.password
        };
        Axios.post("http://localhost:5000/api/login", User)
            .then(data => {
                console.log(data);
                if (data.data.success === true) {
                    this.props.history.push("/data");
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Log In</h1>
                            <p className="lead text-center">
                                Sign in to visualize data
                            </p>
                            <form noValidate onSubmit={this.onSubmit}>
                                <input
                                    type="email"
                                    className="form-control form-control-lg"
                                    name="email"
                                    value={this.state.email}
                                    placeholder="Email Address"
                                    onChange={this.onChange}
                                />
                                <input
                                    type="password"
                                    className="form-control form-control-lg"
                                    name="password"
                                    value={this.state.password}
                                    placeholder="Password"
                                    onChange={this.onChange}
                                />
                                <input
                                    type="submit"
                                    value="Submit"
                                    className="btn btn-info btn-block mt-4"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
