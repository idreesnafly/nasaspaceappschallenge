import Globe from 'worldwind-react-globe'
import OlLayerTile from "ol/layer/Tile";
import OlSourceOSM from "ol/source/OSM";
import { Drawer,Card, Button, Radio, Space ,Form,Input,Checkbox,Select,DatePicker, Spin} from 'antd';
import React, { Component } from 'react';
import IFrame from './IFrame';
import { Overlay,Modal } from 'react-bootstrap';
import { none } from 'ol/centerconstraint';
import world from "../Images/world.png";
import heat from "../Images/heat.png";
import covid from "../Images/covid.png";
import Corona from '../Components/Corona'
import "../Components/map.css";

const { RangePicker } = DatePicker;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}
const rangeConfig = {
    rules: [{ type: 'array', required: true, message: 'Please select time!' }],
  };
const layers = [
    'coordinates',
    'stars',
    'atmosphere-day-night'
  ];

  const cardViewStyle={
    height: "15rem",
width: "19rem",
backgroundColor: "transparent",
position: "absolute",
marginLeft: "1rem",
left: 0,
bottom: 0,
color:'white',
border:'none',
  }
  const cardRightViewStyle={
    height: "23rem",
width: "19rem",
backgroundColor: "transparent",
position: "absolute",
right: 0,
bottom: 0,
color:'white',
border:'none',
fontWeight:'700'
  }

  const btnRightStyle={
    backgroundColor:'transparent',
  marginBottom:'0.5rem',
  color:'white',
  textTransform:'uppercase',
  height:'2rem',
  width:'16rem',
  fontSize:14,
  fontWeight:'bold'
  }
  const homeBtnStyle={
    height: "3rem",
    width: "18rem",
    position: "absolute",
    marginLeft: "2rem",
    left: 0,
    top: 30,
    backgroundColor: 'transparent',
    textTransform:'uppercase',
    fontWeight:'normal',
    paddingTop:'0.25rem'
   
  
  }
  const btnStyle={
    backgroundColor:'white',
  marginBottom:'0.5rem',
  color:'#0c1147',
  textTransform:'uppercase',
  height:'2.0rem',
  borderRadius:'1rem',
  fontSize:10,
  fontWeight:'bold'
  }
class Map extends React.Component {

    
  constructor(props) {
    super(props);
    this.state = {
        latitude:null,
        longitude:null,
        NILayer: null,
        visible: false,
        placement: 'bottom',
        loading:true,
        visibility:false,
        show:false
    };
  }
   NLayer = (dat) =>{
    this.setState({
      NILayer: dat
    })
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  handleShow = () => {
    this.setState({
      show: true,
    });
  };
  handleClose = () => {
    this.setState({
      show: false,
    });
  };
  showField = () => {
      this.setState({
        visibility:!this.state.visibility
      })
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onChange = e => {
    this.setState({
      placement: e.target.value,
    });
  };
  
  componentDidMount(){

    setTimeout(()=>this.setState({loading:false}),10000);
  }
  
    render() {
      let data=[{name:"Temperature",image:heat, click:this.showDrawer},{name:"Humidity",image:heat}, {name:"Covid-19",image:covid,click:this.handleShow}, {name:"Floods",image:heat}, {name:"Natural Disasters",image:world}];
     
      // let icon=[icon1,icon2,icon3,icon4,icon5];
      const { placement, visible } = this.state;
       
      const onFinish = values => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };
      return (
        <div style={{height:"100vh"}}>
        <Globe
            layers={layers}
            NGII={"NDH_Volcano_Mortality_Risks_Distribution_2000"}
        />
        
        <Card 
        style={cardViewStyle}
        >
<div style={{display:"flex",flexDirection:"column"}}>
  {
    data.map(dat=>{
    return (
      <div>
<Drawer
            height={850}
            title="Earth Data"
            placement={placement}
            closable={false}
            onClose={this.onClose}
            visible={visible}
            key={placement}
          >
          <div>
          {/* <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
        <div style={{display:"flex",flexDirection:"row"}}>
      <Form.Item
        label="Select region"
        name="region"
        rules={[{ required: true, message: 'Please input region!' }]}
      >
        <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Select a region"
    optionFilterProp="children"
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="jack">Jack</Option>
    <Option value="lucy">Lucy</Option>
    <Option value="tom">Tom</Option>
  </Select>
      </Form.Item>

      <Form.Item name="range-picker" label="Select Date Range" {...rangeConfig}>
        <RangePicker />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary">
          Search
        </Button>
      </Form.Item>
      </div>
      
      
    </Form> */}
    {
       this.state && this.state.loading ? <div style={{display:"flex",flex:1,justifyContent:"center",alignItems:"center",height:"40rem",flexDirection:"column"}}><Spin/><span>Loading...</span> </div>:  <IFrame/>
        }
          </div>
          </Drawer>
    <Button onClick={dat.click} style={btnStyle}><img style={{height:"1rem",width:"1rem", marginRight:'1rem',}} src={dat.image}/>{dat.name}</Button>
    </div>)
    })
  }
  
</div>
        </Card>
          
        <Card 
        style={cardRightViewStyle}
        >
<div style={{display:"flex",flexDirection:"column"}}>
 { this.state && this.state.visibility ?<div>
  <div className="row" style={{marginLeft:'140px'}} onClick={()=>this.NLayer("NLDAS_Near_Surface_Air_Temperature_Primary_Monthly")}><p>Air Temp</p><span class="dot"></span></div>
  <div className="row" style={{marginLeft:'133px'}}  onClick={()=>this.NLayer("NDH_Volcano_Mortality_Risks_Distribution_2000")}><p>Volcano</p><span class="dot"></span></div>
  <div className="row" style={{marginLeft:'140px'}} onClick={()=>this.NLayer("MODIS_Aqua_Land_Surface_Temp_Night")}><p>LST</p><span class="dot"></span></div>
  <div className="row" style={{marginLeft:'142px'}} onClick={()=>this.NLayer("MODIS_Terra_L3_Ice_Surface_Temp_Daily_Night")}><p>ICT</p><span class="dot"></span></div>
  <div className="row" style={{marginLeft:'145px'}} onClick={()=>this.NLayer("Agricultural_Lands_Pastures_2000")}><p>GAL</p><span class="dot"></span></div></div>:null
 } 
 {this.state && this.state.visibility ?<img src={world} width="70px" height="70px" style={{marginLeft:'10.5rem'}} onClick={this.showField}/>:<img src={world} width="70px" height="70px" style={{marginLeft:'10.5rem',marginTop:'15.7rem'}} onClick={this.showField}/>}
  
  
</div>

        </Card>
       
        <div
        style={homeBtnStyle}>
 <a href="/"><div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
  <img style={{height:"2rem",width:"2rem", marginRight:'1rem',}} src={world}/>
  <span style={{fontSize:"1.3rem",color:"white"}}>Observe Earth</span>
</div>   </a>
        </div>
        <Modal show={this.state.show}  onHide={this.handleClose} style={{marginTop:'15%'}}>
    <Corona/>
        </Modal>
     
        </div>
      )
    }
  }

export default Map;