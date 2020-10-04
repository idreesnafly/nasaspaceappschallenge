import React from "react";
import { CardDeck, Card,Spinner } from "react-bootstrap";
import { Spin} from 'antd';
import card1 from "../Images/card1.jpg";
import card2 from "../Images/card2.jpg";
import card3 from "../Images/card3.jpg";
import card4 from "../Images/card4.jpg";
import card5 from "../Images/card5.jpg";
import card6 from "../Images/card6.jpg";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import "../Components/card.css";
import world from "../Images/worldb.png";

class card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      floodsS: [],
      wildFireS: [],
      carbonEmmisionS: [],
      airPollutionS: [],
      hurricaneS: [],
      tornadoS: [],
      loading: true,
      loadingw: true,
      loadingc: true,
      loadinga: true,
      loadingh: true,
      loadingt: true
    };
  }
  async apifetch() {
    let today = new Date().toISOString().slice(0, 10);
    console.log(today);
    var floods =
      "http://newsapi.org/v2/everything?" +
      "q=floods&" +
      "from=" +
      `${today}&` +
      "apiKey=4c73c5f5fb284b3e8c5d75bcd2674dbf";

    var wildFire =
      "http://newsapi.org/v2/everything?" +
      "q=wild fire&" +
      "from=" +
      `${today}&` +
      "apiKey=4c73c5f5fb284b3e8c5d75bcd2674dbf";

    var carbonEmmision =
      "http://newsapi.org/v2/everything?" +
      "q=carbon emissions&" +
      "from=" +
      `${today}&` +
      "apiKey=4c73c5f5fb284b3e8c5d75bcd2674dbf";

    var airPollution =
      "http://newsapi.org/v2/everything?" +
      "q=air pollution&" +
      "from=" +
      `${today}&` +
      "apiKey=4c73c5f5fb284b3e8c5d75bcd2674dbf";

    var hurricane =
      "http://newsapi.org/v2/everything?" +
      "q=hurricane&" +
      "from=" +
      `${today}&` +
      "apiKey=4c73c5f5fb284b3e8c5d75bcd2674dbf";

    var tornado =
      "http://newsapi.org/v2/everything?" +
      "q=tornado&" +
      "from=" +
      `${today}&` +
      "apiKey=4c73c5f5fb284b3e8c5d75bcd2674dbf";

    var url =
      "http://newsapi.org/v2/top-headlines?" +
      "country=us&" +
      "apiKey=4c73c5f5fb284b3e8c5d75bcd2674dbf";
    var floodsreq = new Request(floods);
    await fetch(floodsreq).then(response => {
      response.json().then(data => {
        this.setState({ floodsS: data.articles, loading: false });
       
      });
    });

    var wildFirereq = new Request(wildFire);
    await fetch(wildFirereq).then(response => {
      response.json().then(data => {
        this.setState({ wildFireS: data.articles, loadingw: false });
        console.log(this.state.wildFireS);
      });
     //   console.log(response.body());
      // this.setState({
      //   wildFire: response.json()
      // });
    });

    var carbonEmmisionreq = new Request(carbonEmmision);
    await fetch(carbonEmmisionreq).then(response => {
      response.json().then(data => {
        this.setState({ carbonEmmisionS: data.articles, loadingc: false });
      
      });
    });

    var hurricanereq = new Request(hurricane);
    await fetch(hurricanereq).then(response => {
      response.json().then(data => {
        this.setState({ hurricaneS: data.articles , loadingh: false});
      
      });
      //   console.log(response.json());
    });

    var airPollutionreq = new Request(airPollution);
    await fetch(airPollutionreq).then(response => {
      response.json().then(data => {
        this.setState({ airPollutionS: data.articles, loadinga: false});
       
      });
      //   console.log(response.json());
      // console.log("air pollution");
    });

    var tornadoreq = new Request(tornado);
    await fetch(tornadoreq).then(response => {
      response.json().then(data => {
        this.setState({ tornadoS: data.articles, loadingt: false});
        
      });
      //   console.log(response.json());
    });
  }
  componentDidMount() {
    this.apifetch();
  }

  // componentDidUpdate() {
  //   this.apifetch();
  // }
  

  render() {
   let loader=<div style={{height:'15rem', textAlign:'center', marginTop:'10rem'}}><Spinner animation="border" style={{textAlign:'center'}}><img src={world} width='20px' height='20px'/></Spinner></div>;
    if (this.state.loading) {
    return loader;
    }
    else if (this.state.loadingw) {
      return loader;

    }
    else if (this.state.loadingc) {
      return loader;

    }
    else if (this.state.loadingh) {
      return loader;

    }
    else if (this.state.loadinga) {
      return loader;

    }
    else if (this.state.loadingt) {
      return loader;

    }
    const flood = this.state.floodsS;
    const wildfire = this.state.wildFireS;
    const carbonemmision = this.state.carbonEmmisionS;
    const airpollution = this.state.airPollutionS;
    const hurricanes = this.state.hurricaneS;
    const tornados = this.state.tornadoS;
    console.log(flood);
    console.log("shaakira i love u");
    console.log(tornados);
  return (

  <MDBContainer>
    <div className="text-center" style={{marginTop:'3rem'}}>
    <h1>OBSERVE EARTH</h1>
    <h5>- News Feeds -</h5>
    <hr className="hr-dark my-4" />
    </div>
    
  <MDBCarousel
  activeItem={1}
  length={2}
  showControls={true}
  showIndicators={false}
>
  <MDBCarouselInner>
    <MDBCarouselItem itemId="1">
      <MDBView>
      
     <CardDeck style={{ paddingTop: "5rem", margin: 0, paddingBottom: "5rem", paddingLeft:'5rem',paddingRight:'5rem' }}>
   <Card >
 <div style={{position:'relative'}}>
      <Card.Img variant="top" src={card1} width='100px' height='190px' />
      <div class="text-block">
    <p style={{fontSize:'1.5rem', fontWeight:'bold'}}>Carbon Emmision</p>
  </div>
  </div>
      <Card.Body>
     <Card.Title>{carbonemmision[0].title}</Card.Title>
     <Card.Text>
     {carbonemmision[0].description}
      </Card.Text>
     </Card.Body>
 </Card>
  <Card>
  <div style={{position:'relative'}}>
      <Card.Img variant="top" src={card2} width='100px' height='190px' />
      <div class="text-block">
    <p style={{fontSize:'1.5rem', fontWeight:'bold'}}>wild fire</p>
  </div>
  </div>
 <Card.Body>
     <Card.Title>{wildfire[0].title}</Card.Title>
     <Card.Text>
     {wildfire[0].description}
      </Card.Text>
     </Card.Body>
   </Card>
   <Card>
   <div style={{position:'relative'}}>
      <Card.Img variant="top" src={card3} width='100px' height='190px' />
      <div class="text-block">
    <p style={{fontSize:'1.5rem', fontWeight:'bold'}}>flood</p>
  </div>
  </div>
      <Card.Body>
     <Card.Title> {flood[1].title}</Card.Title>
     <Card.Text>
     {flood[1].description}
      </Card.Text>
     </Card.Body>
      </Card>
    </CardDeck>
      </MDBView>
    
    </MDBCarouselItem>
    <MDBCarouselItem itemId="2">
      <MDBView>
        
     <CardDeck style={{ paddingTop: "5rem", margin: 0, paddingBottom: "5rem", paddingLeft:'5rem',paddingRight:'5rem' }}>
   <Card>
   <div style={{position:'relative'}}>
      <Card.Img variant="top" src={card4} width='100px' height='190px' />
      <div class="text-block">
    <p style={{fontSize:'1.5rem', fontWeight:'bold'}}>Air pollution</p>
  </div>
  </div>
      <Card.Body>
  <Card.Title>{airpollution[1].title}</Card.Title>
     <Card.Text>
     {airpollution[1].description}
      </Card.Text>
     </Card.Body>
 </Card>
  <Card>
  <div style={{position:'relative'}}>
      <Card.Img variant="top" src={card5} width='100px' height='190px' />
      <div class="text-block">
    <p style={{fontSize:'1.5rem', fontWeight:'bold'}}>tornado</p>
  </div>
  </div>
 <Card.Body>
     <Card.Title>{tornados[0].title}</Card.Title>
     <Card.Text>
     {tornados[0].description}
      </Card.Text>
     </Card.Body>
   </Card>
   <Card>
   <div style={{position:'relative'}}>
      <Card.Img variant="top" src={card6} width='100px' height='190px' />
      <div class="text-block">
    <p style={{fontSize:'1.5rem', fontWeight:'bold'}}>hurricane</p>
  </div>
  </div>
        <Card.Body>
         <Card.Title>{hurricanes[0].title}</Card.Title>
         <Card.Text>
         {hurricanes[0].description}
      </Card.Text>
        
       </Card.Body>
      </Card>
    </CardDeck>
      </MDBView>
    </MDBCarouselItem>
  </MDBCarouselInner>
</MDBCarousel>
</MDBContainer>
  );
}
}
export default card;
