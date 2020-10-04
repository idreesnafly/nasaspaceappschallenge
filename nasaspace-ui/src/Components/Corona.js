import React, { Component } from 'react';
import { Statistic, Row, Col, Button, Spin } from 'antd';
import axios from 'axios';


class Corono extends Component {

    state={
        error:false,
        loading:true,
        datumLK:null    
    }
    componentDidMount(){
        axios.get('https://hpb.health.gov.lk/api/get-current-statistical').then(res=>{
            if(res.status===200){
                this.setState({
                    loading:false,
                    datumLK:res.data,
                    error:false
                })
            }
            
        }).catch(res=>{
            this.setState
            ({
                loading:true,
                error:true
            })
        })
    }
    render() { 
        const {datumLK,loading,error}=this.state;
        let arr=[]
        if(!loading){
            // const dat=Object.entries(datumLK.data).forEach((data,index)=>{});

        }
        return (
        <div>
            {
                !loading && !error ? 
                <div style={{display:"flex",flexDirection:"column",flex:1}}>
                    <span>Sri Lanka Statistics</span>
                    <div style={{display:"flex",flexDirection:"row",flex:1}}>
                    <Statistic style={{margin:"2rem"}} value={datumLK.data ? datumLK.data['local_new_cases']: null} title={"Total New Cases"} />
                    <Statistic style={{margin:"2rem"}} value={datumLK.data ? datumLK.data['local_total_cases']: null} title={"Local Total Cases"} />
                    <Statistic  style={{margin:"2rem"}} value={datumLK.data ? datumLK.data['local_total_number_of_individuals_in_hospitals']: null} title={"In Hospital"} />
                    <Statistic style={{margin:"2rem"}} value={datumLK.data ? datumLK.data['local_deaths']: null} title={"Local Deaths"} />
                    <Statistic style={{margin:"2rem"}} value={datumLK.data ? datumLK.data['local_recovered']: null} title={"Local Recovered"} />
                    <Statistic style={{margin:"2rem"}} value={datumLK.data ? datumLK.data['local_active_cases']: null} title={"Local Active cases"} />
                    </div>
                    <span>Global Statistics</span>
                    <div style={{display:"flex",flexDirection:"row",flex:1}}>
                    <Statistic style={{margin:"2rem"}}  value={datumLK.data ? datumLK.data['global_new_cases']: null} title={"Global New Cases"} />
                    <Statistic style={{margin:"2rem"}} value={datumLK.data ? datumLK.data['global_total_cases']: null} title={"Global Total Cases"} />
                    <Statistic style={{margin:"2rem"}} value={datumLK.data ? datumLK.data['global_deaths']: null} title={"Global Deaths"} />
                    <Statistic style={{margin:"2rem"}} value={datumLK.data ? datumLK.data['global_new_deaths']: null} title={"Global New Deaths"} />
                    <Statistic style={{margin:"2rem"}} value={datumLK.data ? datumLK.data['global_recovered']: null} title={"Global Recovered"} />
                    <Statistic style={{margin:"2rem"}} value={datumLK.data ? datumLK.data['total_pcr_testing_count']: null} title={"Total PCR Test Count"} />
                    </div>
                    {/* <Statistic value={datumLK.data ? datumLK.data['update_date_time']: null} title={} /> */}
                    
                    



                    {/* <Statistic title={ar[0]} value={ar[1]} />
                    <Statistic title={ar[0]} value={ar[1]} />
                    <Statistic title={ar[0]} value={ar[1]} />
                    <Statistic title={ar[0]} value={ar[1]} />
                    <Statistic title={ar[0]} value={ar[1]} />
                    <Statistic title={ar[0]} value={ar[1]} />
                    <Statistic title={ar[0]} value={ar[1]} />
                    <Statistic title={ar[0]} value={ar[1]} /> */}

                    
                </div>
                :loading ? <Spin/> : <div>error</div>
            }
        </div>
        );
    }

}


 
export default Corono;