import React from "react";
import { Wrapper, InputField, Column, Button } from "../../elements";
import maxMinDiff from "../../extras/part1";
import Modal from "../../extras/part3";

export default class Extras extends React.Component {
    state = {
        modalOpen: false,
        a1: [3, 10, 5],
        a2: [20, 7, 15, 8]
    };

    handleChange = (value, a) => {
        var format = /[!@#$%^&*()_+\-=[\]{};':"\\|.<>/?]/;

        if (value.match(/[a-z]/i) || value.match(format)) return;

        const arr = value.split(",");
        this.setState(prevState => ({
            ...prevState,
            [a]: arr
        }));
    };

    handleClick = () => {
        this.setState(prevState => ({ modalOpen: !prevState.modalOpen }));
    };

    render() {
        const { a1, a2 } = this.state;
        const result = maxMinDiff(a1, a2);

        return (
            <>
                <Wrapper>
                    <h1>Part 1</h1>
                    <div style={{ display: "flex", marginBottom: 10 }}>
                        <Column>
                            <InputField
                                label="Array 1"
                                value={a1}
                                handleChange={e =>
                                    this.handleChange(e.target.value, "a1")
                                }
                            />
                        </Column>
                        <Column>
                            <InputField
                                label="Array 2"
                                value={a2}
                                handleChange={e =>
                                    this.handleChange(e.target.value, "a2")
                                }
                            />
                        </Column>
                    </div>
                    <div>Max difference: {result[0]}</div>
                    <div>Min difference: {result[1]}</div>
                </Wrapper>
                <Wrapper>
                    <h1>Part 2</h1>
                    <div style={{ maxWidth: 300 }}>
                        <Button
                            text="Open Modal"
                            large
                            handleClick={this.handleClick}
                        />
                    </div>
                    {this.state.modalOpen && (
                        <Modal handleClick={this.handleClick} />
                    )}
                </Wrapper>
            </>
        );
    }
}
