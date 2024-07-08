import React from "react";
// Styles
import styled from "styled-components";
// State
import PropTypes from "prop-types";
// Components
import { Element } from "react-scroll";
import { Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
// Import the local avatar image
import AvatarImage from "../images/avatar.jpg";

// #region styled-components
const StyledAboutMe = styled.section`
  p {
    font-size: 1.25rem;
    text-align: left; // Align text to the left
    line-height: 1.6; // Improve readability
    margin-bottom: 1rem; // Add space between paragraphs
  }
  .img {
    width: 15rem;
    height: 15rem;
    object-fit: cover; // Maintain aspect ratio
  }
  .about-text {
    max-width: 800px; // Limit the width for better readability
    margin: 0 auto; // Center the text block
  }
`;
// #endregion

// #region component
const propTypes = {
  bio: PropTypes.string,
  moreInfo: PropTypes.string,
};

const AboutMe = ({ bio, moreInfo }) => {
  return (
    <Element name={"About"} id="about">
      <StyledAboutMe className="section">
        <Container>
          <Container className="d-flex justify-content-center">
            <Title size={"h2"} text={"About Me"} />
          </Container>
          <Row className="align-items-center mt-5">
            <Col className="d-flex flex-column text-center">
              <Container className="about-text">
                {bio && <p>{bio}</p>}
                {moreInfo && <p>{moreInfo}</p>}
              </Container>
            </Col>
            <Col className="d-none d-md-block text-center">
              <img
                src={AvatarImage}
                alt="My Avatar"
                loading="lazy"
                className="mx-auto rounded-circle border border-primary-subtle img"
              />
            </Col>
          </Row>
        </Container>
      </StyledAboutMe>
    </Element>
  );
};

AboutMe.propTypes = propTypes;
// #endregion

export default AboutMe;
