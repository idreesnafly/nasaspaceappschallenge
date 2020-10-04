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

} from "mdbreact";
import slider3 from "../Images/slider3.jpg";

import "../Components/intro.css";
import Footer from"../Components/footer";
Geocode.setApiKey("AIzaSyCqwnvooV8AX55NN1HHgMWNwyuZfbUWCEU");
Geocode.setLanguage("en");
Geocode.setRegion("es");

 
// Enable or disable logs. Its optional.
Geocode.enableDebug();

class FeaturesAndSolutions extends React.Component {
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
              <a href="/"><strong className="white-text">Observe Earth</strong></a>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.handleTogglerClick} />
            <MDBCollapse isOpen={collapsed} navbar>
            <MDBNavbarNav left>
                <MDBNavItem active style={{ paddingLeft: "2rem" ,paddingTop:'0.5rem'}}>
                <a href="/features" style={{color:'white'}}>Features & Solutions</a>
                </MDBNavItem>
                <MDBNavItem style={{ paddingLeft: "2rem" ,paddingTop:'0.5rem'}}>
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
      
        <MDBView src={slider3}>
          <MDBMask className="rgba-black-light" />
          <MDBContainer
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100%", width: "100%",paddingTop:'5%'}}
          >
            <MDBRow>
              <MDBCol md="12" className="mb-4 white-text text-center">
              <MDBAnimation type="fadeInUp">
              <h1 className="h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 ">
                Features & Solutions
                </h1>
                <hr className="hr-light my-4" />
               
                <div>
              </div>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
        <div style={{marginTop:'5rem',paddingLeft:'5rem',paddingRight:'5rem',marginBottom:'3rem'}}>
    <h3>SOLUTIONS</h3>
       <p>Over the past few years, NASA has launched several Earth-observing satellites to monitor our planets activities and conditions on a global scale. However, the users don’t find related data of a geo location in a single platform. User-friendly tools and applications can broaden the use of NASA data, maximize the societal benefits, and motivate the next generation to pursue science and science applications.
Our solution delivers the users to simply monitor our planet in your fingertips. The real-time dashboard provides data and analytics of the critical factors using artificial intelligence.</p>
       <h3 style={{paddingTop:'4rem'}}>FEATURES</h3>
       <p>•  Nasa global imaginary is used by mapping the Nasa world wind.
<br/>


•  Geo location where Covid 19 is spread.

<br/>

•  Monitoring wind speed and density.

<br/>

•  Monitoring the vegetation

<br/>

•  Monitoring Fire data and displaying if any fire has taken place,
<br/>


•  Monitoring Carbon Emission


<br/>
•  Monitoring the Air Quality data

<br/>

•  Monitoring the deforestation process taken place around the globe. 

<br/>

•  Monitoring the water bodies and ice glaciers

<br/>

•  Monitors the thickness of the ozone layer.

<br/>

•  Monitors hazards and disasters such as 

<br/>

    o  earth quacks

    <br/>

    o  hurricanes 

    <br/>

    o  Sandstorm


    <br/>
    o  Wildfire
    <br/>
    o  Floods


    <br/>
    o  Volcanic actives

    <br/>

•  Displays the user pinpointed locations, temperature, humidity air quality.</p>
    </div>
        <Footer/>
      </div>
      
    );
  }
}

export default FeaturesAndSolutions;
