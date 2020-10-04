import React , { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Geocode from "react-geocode";

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBAnimation,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
MDBCardText,
MDBCardTitle
} from "mdbreact";
import slider2 from "../Images/slider2.jpg";
import pro1 from "../Images/pro1.jpg";
import pro2 from "../Images/pro2.jpg";
import pro3 from "../Images/pro3.jpg";
import pro4 from "../Images/pro4.jpg";
import pro5 from "../Images/pro5.jpg";
import pro6 from "../Images/pro6.jpg";
import "../Components/intro.css";
import Footer from"../Components/footer";
Geocode.setApiKey("AIzaSyCqwnvooV8AX55NN1HHgMWNwyuZfbUWCEU");
Geocode.setLanguage("en");
Geocode.setRegion("es");

 
// Enable or disable logs. Its optional.
Geocode.enableDebug();

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = { country: "", region: "" , intervalId: 0};
  }
 
 
 
  selectCountry(val) {
    this.setState({ country: val });
  }

  selectRegion(val) {
    this.setState({ region: val });
    Geocode.fromAddress("Colombo").then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
      },
      error => {
        console.error(error);
      }
    );
    // const geocoder = new google.maps.Geocoder();
    // geocodeAddress(geocoder)
  }
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    const { collapsed } = this.state;

    this.setState({
      collapsed: !collapsed
    });
    
  };
  
  componentDidMount() {
    
    document.querySelector("nav").style.height = "65px";
  }

  componentWillUnmount() {
    document.querySelector("nav").style.height = "auto";
  }
  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }
  
  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }

   geocodeAddress(geocoder) {
   // const address = document.getElementById("address").value;
    geocoder.geocode({ address: this.state.region }, (results, status) => {
      if (status === "OK") {
        console.log(results[0].geometry.location);
       // resultsMap.setCenter(results[0].geometry.location);
        // new google.maps.Marker({
        //   map: resultsMap,
        //   position: results[0].geometry.location,
        // });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }

  render() {
    const { collapsed } = this.state;
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );

    return (
      <div id="minimalistintro">
        
        <Router>
       
          <div>
       
            <MDBNavbar
              color="primary-color"
              dark
              expand="md"
              fixed="top"
              transparent
            >
                <MDBAnimation type="fadeInDown" >
              <MDBContainer>
            
                <MDBNavbarBrand>
                  <strong className="white-text">Observe Earth</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.handleTogglerClick} />
                <MDBCollapse isOpen={collapsed} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem style={{ paddingLeft: "2rem" ,paddingTop:'0.5rem'}}>
                    <a href="/" style={{color:'white'}}>Overview</a>
                    </MDBNavItem>
                    <MDBNavItem style={{ paddingLeft: "2rem" ,paddingTop:'0.5rem'}}>
                       <a href="/" style={{color:'white'}}>Pollution</a>
                    </MDBNavItem>
                    <MDBNavItem style={{ paddingLeft: "2rem" ,paddingTop:'0.5rem'}}>
                    <a href="/" style={{color:'white'}}>Climate</a>
                    </MDBNavItem>
                    <MDBNavItem style={{ paddingLeft: "2rem" ,paddingTop:'0.5rem'}}>
                    <a href="/" style={{color:'white'}}>Oceans</a>
                    </MDBNavItem>
                    <MDBNavItem  active style={{ paddingLeft: "2rem" ,paddingTop:'0.5rem'}}>
                      <a href="/team" style={{color:'white'}}>Meet the team</a>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
               
              </MDBContainer>
              </MDBAnimation>
            </MDBNavbar>
            
            {collapsed && overlay}
          </div>
        
        </Router>
      
        <MDBView src={slider2}>
          <MDBMask className="rgba-black-light" />
          <MDBContainer
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100%", width: "100%",paddingTop:'5%'}}
          >
            <MDBRow>
              <MDBCol md="12" className="mb-4 white-text text-center">
              <MDBAnimation type="fadeInUp">
              <h1 className="h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 ">
                Meet the Team.
                </h1>
                <hr className="hr-light my-4" />
                <h5 className="text-uppercase mb-4 white-text ">
                 RESPONSIBLE TO MAKE THE MAGIC HAPPEN
                </h5>
                <div>
              </div>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
        <div style={{marginTop:'5rem',paddingLeft:'5rem',paddingRight:'5rem',marginBottom:'3rem'}}>
    
       <MDBRow>
       <MDBCol md='4'>
        <MDBCard>
          <MDBCardImage
            hover
            overlay='white-light'
            className='card-img-top'
            src={pro1}
            alt='man'
          />

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>ARSHAD AIYOOB</strong>
            </MDBCardTitle>

            <p className='font-weight-bold blue-text'>TECH LEAD</p>

            <MDBCardText>
            Well experienced in Leading the development of the department's curriculum. Assessing lesson plans and current teaching methods.Supporting, guiding, and reviewing other members of teaching staff. Teaching demonstration lessons for the edification of fellow members and guiding them through the implementation of technology stacks.
            </MDBCardText>

          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol md='4'>
        <MDBCard>
          <MDBCardImage
            hover
            overlay='white-light'
            className='card-img-top'
            src={pro2}
            alt='man'
          />

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>IDREES NAFLY</strong>
            </MDBCardTitle>

            <p className='font-weight-bold blue-text'>PROJECT MANAGER</p>

            <MDBCardText>
            good in Performing project design and development activities according to customer specifications. Work with Manager in developing project plan, budget and schedule. Coordinate with management in preparing project proposals and contractual documents.
            </MDBCardText>

          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md='4'>
        <MDBCard>
          <MDBCardImage
            hover
            overlay='white-light'
            className='card-img-top'
            src={pro3}
            alt='man'
          />

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>MOHAMMAD IZZATH</strong>
            </MDBCardTitle>

            <p className='font-weight-bold blue-text'>DEVELOPER</p>

            <MDBCardText>
            Well experienced in Researching, designing, implementing and managing software programs. Testing and evaluating new programs. Identifying areas for modification in existing programs and subsequently developing these modifications. Writing and implementing efficient code. 
            </MDBCardText>

          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow> 
    <MDBRow style={{marginTop:'2rem'}}>
    <MDBCol md='4'>
        <MDBCard>
          <MDBCardImage
            hover
            overlay='white-light'
            className='card-img-top'
            src={pro4}
            alt='man'
          />

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>SIDRA MOWLANA</strong>
            </MDBCardTitle>

            <p className='font-weight-bold blue-text'>DEVELOPER</p>

            <MDBCardText>
            She is a  creative minded person behind software programs, and hasthe technical skills to build those programs or to oversee their creation by a team. she creates software that enables users to perform specific tasks on computer devices effiecntly.  
            </MDBCardText>

          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol md='4'>
        <MDBCard>
          <MDBCardImage
            hover
            overlay='white-light'
            className='card-img-top'
            src={pro5}
            alt='man'
          />

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>NADIR MARIKKAR</strong>
            </MDBCardTitle>

            <p className='font-weight-bold blue-text'>DEVELOPER</p>

            <MDBCardText>
            Ability to  Work with developers to design algorithms and flowcharts · Produce clean, efficient code based on specifications · Integrate software components.  Develop, test and implement new software programs · Clearly and regularly communicate with management and technical leads.
            </MDBCardText>

          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md='4'>
        <MDBCard>
          <MDBCardImage
            hover
            overlay='white-light'
            className='card-img-top'
            src={pro6}
            alt='man'
          />

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>SHAAKIRA MUBARAK</strong>
            </MDBCardTitle>

            <p className='font-weight-bold blue-text'>UI/UX DESIGNER</p>

            <MDBCardText>
            A great team player, experienced in working with agile teams. Ability to collaborate closely with developers, team leads and UX designers. Create, improve and use wireframes, prototypes, style guides, user flows, and effectively communicate your interaction ideas using any of these methods. 
            </MDBCardText>

          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow> 
    </div>
        <Footer/>
      </div>
      
    );
  }
}

export default Team;
