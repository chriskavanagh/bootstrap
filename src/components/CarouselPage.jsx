import React from "react";
import unsplash0 from "../unsplash-3.jpg";
import unsplash2 from "../unsplash-2.jpg";
import unsplash3 from "../unsplash-44.jpg";

import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer
} from "mdbreact";

const CarouselPage = props => {
  return (
    <MDBContainer className="mt-1">
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={false}
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src={unsplash0}
                alt="First slide"
                width={500}
                height={600}
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src={unsplash2}
                alt="Second slide"
                width={500}
                height={600}
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src={unsplash3}
                alt="Third slide"
                width={500}
                height={600}
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default CarouselPage;
