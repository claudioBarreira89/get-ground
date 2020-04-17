import React from "react";
import {
    Overlay,
    StyledModal,
    StyledHeader,
    Cross,
    Row,
    StyledParagraph,
    ButtonsWrapper,
    Button
} from "./styles";

export default ({ handleClick }) => (
    <Overlay>
        <StyledModal>
            <StyledHeader>
                <h3>Confirm details</h3>
                <Cross onClick={handleClick} />
            </StyledHeader>
            <div>
                <Row>
                    <div className="label">Account name:</div>
                    <div className="value">Sir Ian McKellen</div>
                </Row>
                <Row>
                    <div className="label">Sort Code:</div>
                    <div className="value">00-00-00</div>
                </Row>
                <Row>
                    <div className="label">Account number:</div>
                    <div className="value">12344567</div>
                </Row>
                <Row>
                    <div className="label">Amount:</div>
                    <div className="value">£3,500.00</div>
                </Row>
                <Row>
                    <div className="label">Reference:</div>
                    <div className="value">8293fh98ye9h9</div>
                </Row>
            </div>
            <StyledParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                vitae mauris eu nibh sagittis lobortis at id tortor. Sed vitae
                diam vel sapien interdum tincidunt. Vivamus ligula lectus,
                faucibus a lectus dapibus, vehicula vulputate sapien. Quisque
                blandit, lectus interdum mollis feugiat, turpis dolor venenatis
                elit, nec pellentesque odio enim nec eros.
            </StyledParagraph>
            <ButtonsWrapper>
                <Button secondary onClick={handleClick}>
                    Cancel
                </Button>
                <Button onClick={handleClick}>Confirm details</Button>
            </ButtonsWrapper>
        </StyledModal>
    </Overlay>
);
