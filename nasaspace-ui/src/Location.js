import { Drawer, Button, Radio, Space ,Form,Input,Checkbox,Select,DatePicker} from 'antd';
import React, { Component } from 'react';
import IFrame from './Components/IFrame';
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
class Location extends Component {
    state = {  };

    
    constructor(props) {
        super(props);
        this.state = {
            latitude:null,
            longitude:null,
            visible: false,
            placement: 'bottom'
        };
      }
      showDrawer = () => {
        this.setState({
          visible: true,
        });
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
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
                console.log("Latitude is :", position.coords.latitude);
                console.log("Longitude is :", position.coords.longitude);
                
              });
          } else {
            console.log("Not Available");
          }
    }
    state = {  }
    
    render() { 

        const { placement, visible } = this.state;
       
            const onFinish = values => {
              console.log('Success:', values);
            };
          
            const onFinishFailed = errorInfo => {
              console.log('Failed:', errorInfo);
            };
        return ( 
            <div >
<Button type="primary" onClick={this.showDrawer}>
            Open
          </Button>            
          <Drawer
            height={800}
            title="Earth Data"
            placement={placement}
            closable={false}
            onClose={this.onClose}
            visible={visible}
            key={placement}
          >
          <div>
          <Form
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
      <IFrame/>
    </Form>
          </div>
          </Drawer>
          </div>
        );
    }
}
 
export default Location;


