import React from "react";
import { InputField, Column, Button } from "../../elements";
import { FormWrapper, ButtonWrapper } from "./styles";

export default class AddShareholderForm extends React.Component {
    constructor(props) {
        super(props);

        const { shareholder } = this.props;

        this.state = {
            id: shareholder ? shareholder.id : null,
            firstName: shareholder ? shareholder.firstName : "",
            lastName: shareholder ? shareholder.lastName : "",
            email: shareholder ? shareholder.email : ""
        };
    }

    handleChange = (value, field) => {
        this.setState({
            [field]: value
        });
    };

    handleClick = () => {
        const { addShareholder, updateShareholder, id } = this.props;

        if (addShareholder) {
            addShareholder({ ...this.state });
            this.setState({ id: null, firstName: "", lastName: "", email: "" });
        } else {
            updateShareholder({ ...this.state, id });
        }
    };

    render() {
        const { firstName, lastName, email } = this.state;
        const { shareholder, formText, title } = this.props;
        const emptyFields = !firstName || !lastName || !email;

        const disabled = shareholder
            ? (firstName === shareholder.firstName &&
                  lastName === shareholder.lastName &&
                  email === shareholder.email) ||
              emptyFields
            : emptyFields;

        return (
            <>
                <h2>{title}</h2>
                <FormWrapper>
                    <Column flex={1}>
                        <InputField
                            label={formText.firstName}
                            value={firstName}
                            handleChange={e =>
                                this.handleChange(e.target.value, "firstName")
                            }
                        />
                    </Column>
                    <Column flex={1}>
                        <InputField
                            label={formText.lastName}
                            value={lastName}
                            handleChange={e =>
                                this.handleChange(e.target.value, "lastName")
                            }
                        />
                    </Column>
                </FormWrapper>

                <FormWrapper>
                    <Column flex={1}>
                        <InputField
                            label={formText.email}
                            value={email}
                            handleChange={e =>
                                this.handleChange(e.target.value, "email")
                            }
                        />
                    </Column>
                    <Column flex={1}>
                        <ButtonWrapper>
                            <Button
                                text={
                                    shareholder
                                        ? formText.button.update
                                        : formText.button.add
                                }
                                large
                                plus={!shareholder}
                                handleClick={this.handleClick}
                                disabled={disabled}
                            />
                        </ButtonWrapper>
                    </Column>
                </FormWrapper>
            </>
        );
    }
}
