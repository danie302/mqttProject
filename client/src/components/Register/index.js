// Dependencies
import React, { Component } from "react";
import axios from "axios";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
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

        const newUser = {
            username: this.state.name,
            email: this.state.email,
            password: this.state.password
        };

        axios
            .post("http://localhost:5000/api/register", newUser)
            .then(res => {
                this.props.history.push("/login");
            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">
                                Create your account
                            </p>
                            <form noValidate onSubmit={this.onSubmit}>
                                <input
                                    type="name"
                                    className="form-control form-control-lg"
                                    name="name"
                                    value={this.state.name}
                                    placeholder="Username"
                                    onChange={this.onChange}
                                />
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

export default Register;
