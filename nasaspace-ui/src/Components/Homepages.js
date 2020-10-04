import React, { Component } from 'react';
import IntroPg from '../Components/Intro';
import Card from '../Components/card';
import Footer from '../Components/footer';
import TopFooter from '../Components/topFooter';
class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
                console.log("Latitude is :", position.coords.latitude);
                console.log("Longitude is :", position.coords.longitude);
                
              });
          } else {
            console.log("Not Available");
          }
    }
    render() { 
        return ( 
            <div>
            <IntroPg/>
                <div style={{flex:1}}>
                <Card/>
                <TopFooter/>
            <Footer/>
                        </div>
                        </div>
           
         );
    }
}
 
export default Homepage;