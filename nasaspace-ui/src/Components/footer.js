import React from "react";
import { MDBCol, MDBContainer,MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    
    <MDBFooter  className="font-small pt-4 mt-4" style={{backgroundColor:'#212020'}}>
      <MDBContainer fluid className="text-center text-md-left">
        <MDBCol md="12" className="mb-4 white-text ">
          <div class="row">
            <div class="col-md-6 mt-md-0 mt-3">
              <h5 class="text-uppercase font-weight-bold" style={{color:'white'}}>Observe Earth</h5>
            </div>

            <hr class="clearfix w-100 d-md-none pb-3" />

            <div class="col-md-6 mb-md-0 mb-3">
              <h5 class="text-uppercase font-weight-bold" style={{color:'white'}}>Observe Earth Globaly</h5>
              <p>
              Explore worldwide satellite imagery and 3D buildings and terrain for hundreds of cities. Zoom to your house or anywhere else, then dive in for a 360° perspective with Street View.
              </p>
            </div>
          </div>
          <hr className="hr-light my-4" />
        </MDBCol>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.google.lk/"> 501 Not Implemented</a>
        </MDBContainer>
      </div>
    </MDBFooter>
    
  );
};

export default FooterPage;
