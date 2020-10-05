import React, { Component } from "react";
import ParentRegistration from "./ParentRegistration";

class Child2 extends Component implements ParentRegistration{
    private parent: any;

    constructor(props: any) {
        super(props);

        this.callChild1 = this.callChild1.bind(this);
        this.registerParent = this.registerParent.bind(this);
    }
    
    registerParent(parent: any): void {
        this.parent = parent;
    }

    callChild1() {
        this.parent.child1.current.hello();
    }

    render() {
        return (
            <div>
                <div>I am child 2</div>
                <button onClick={this.callChild1}>Call child 1</button>
            </div>
        );
    }
}

export default Child2;