import React, { Component } from "react";
import ParentRegistration from "./ParentRegistration";

class Child1 extends Component implements ParentRegistration{
    private parent: any;
    private greet: string = 'Hello world';

    constructor(props: any) {
        super(props);

        this.hello = this.hello.bind(this);
        this.registerParent = this.registerParent.bind(this);
    }

    registerParent(parent: any): void {
        this.parent = parent;
    }

    hello() {
        console.error('Hello from child1');
    }

    render() {
        return (
        <div>I am child 1: {this.greet}</div>
        );
    }
}

export default Child1;