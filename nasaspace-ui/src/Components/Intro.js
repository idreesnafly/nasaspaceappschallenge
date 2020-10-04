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
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselCaption
} from "mdbreact";
import slider1 from "../Images/slider1.jpg";
import "../Components/intro.css";
import {
  CountryDropdown,
  RegionDropdown
} from "react-country-region-selector";
import top from "../Images/startup.png";
Geocode.setApiKey("AIzaSyCqwnvooV8AX55NN1HHgMWNwyuZfbUWCEU");
Geocode.setLanguage("en");
Geocode.setRegion("es");
 
// Enable or disable logs. Its optional.
Geocode.enableDebug();

class Intro extends React.Component {
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
    const { country, region} = this.state;
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
          <button title='Back to top' className='scroll' 
               onClick={ () => { this.scrollToTop(); }}>
                 <img src={top} width={"60px"} height={"60px"}/>
               </button>
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
                    <MDBNavItem active style={{ paddingLeft: "2rem" ,paddingTop:'0.5rem'}}>
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
      
        <MDBView src={slider1}>
          <MDBMask className="rgba-black-light" />
          <MDBContainer
            className="d-flex  align-items-center"
            style={{ height: "100%", width: "100%",paddingTop:'15%'}}
          >
            <MDBRow>
              <MDBCol md="12" className="mb-4 white-text text-center">
              <MDBAnimation type="fadeInUp">
              <h1 className="h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 ">
                Observe The Earth with Detailed Globe
                </h1>
           
               
                <hr className="hr-light my-4" />
                <h5 className="text-uppercase mb-4 white-text ">
                  <strong>Dive into the worlds deepest canyons </strong>
                </h5>
                <div>
                
                <CountryDropdown
                  value={country}
                  onChange={val => this.selectCountry(val)}
                  className="ok"
                  
                />
                
                <RegionDropdown
                  country={country}
                  value={region}
                  onChange={val => this.selectRegion(val)}
                  className="ok"
                />
              </div>
              <a href="/map">
                <MDBBtn  color="white" >
                  Launch Earth
                </MDBBtn>
                </a>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
      </div>
    );
  }
}

export default Intro;
