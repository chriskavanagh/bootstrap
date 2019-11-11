import React from "react";
import styled from "styled-components";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBListGroup,
  MDBListGroupItem
} from "mdbreact";

const Titlediv = styled.div`
  margin-bottom: 12rem;
  color: #ff8800;

  h1 {
    font-size: 5.5rem;
    text-decoration: underline;
  }
`;
const ContactPage = () => {
  return (
    <MDBContainer className="container">
      <Titlediv className="text-center">
        <h1>Webworx Development</h1>
      </Titlediv>
      <MDBRow>
        <MDBCol size="8">
          <p className="pb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ad
            eveniet quia! Inventore temporibus possimus doloremque eaque autem a
            maxime, illo praesentium, dolores alias eum aliquam eius dolorem!
            Doloribus, aliquam.
          </p>
          <p className="pb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ad
            eveniet quia! Inventore temporibus possimus doloremque eaque autem a
            maxime, illo praesentium, dolores alias eum aliquam eius dolorem!
            Doloribus, aliquam.
          </p>
        </MDBCol>
        <MDBCol size="4">
          <MDBListGroup style={{ width: "22rem" }}>
            <MDBListGroupItem active color="primary">
              Cras justo odio
            </MDBListGroupItem>
            <MDBListGroupItem color="secondary">
              Morbi leo risus
            </MDBListGroupItem>
            <MDBListGroupItem color="danger">
              Porta ac consectetur ac
            </MDBListGroupItem>
            <MDBListGroupItem color="warning">
              Vestibulum at eros
            </MDBListGroupItem>
            <MDBListGroupItem color="info">
              Dapibus ac facilisis in
            </MDBListGroupItem>
          </MDBListGroup>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol size="8">
          <p className="pb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ad
            eveniet quia! Inventore temporibus possimus doloremque eaque autem a
            maxime, illo praesentium, dolores alias eum aliquam eius dolorem!
            Doloribus, aliquam.
          </p>
          <p className="pb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ad
            eveniet quia! Inventore temporibus possimus doloremque eaque autem a
            maxime, illo praesentium, dolores alias eum aliquam eius dolorem!
            Doloribus, aliquam.
          </p>
        </MDBCol>
        <MDBCol size="4">
          <MDBListGroup style={{ width: "22rem" }}>
            <MDBListGroupItem active color="primary">
              Cras justo odio
            </MDBListGroupItem>
            <MDBListGroupItem color="secondary">
              Dapibus ac facilisis in
            </MDBListGroupItem>
            <MDBListGroupItem color="danger">Morbi leo risus</MDBListGroupItem>
            <MDBListGroupItem color="dark">
              Porta ac consectetur ac
            </MDBListGroupItem>
            <MDBListGroupItem color="info">Vestibulum at eros</MDBListGroupItem>
          </MDBListGroup>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ContactPage;
