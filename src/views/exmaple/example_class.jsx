import React from "react";
import ChildComponent from "./childComponent";
import ChildFcComponent from "./functionComponent";
import FormComponent from "./formComponent";
import { toast } from "react-toastify";

import Color from "../HOC/Color";

class test2 extends React.Component {
    state =  {
        arrJob: [
            {id:'a1', job:'coder', salary:100},
            {id:'a2', job:'dev', salary:200},
            {id:'a3', job:'tester', salary:300}
        ],
        newjob: [
            {id:'b1', song:'chung ta cua tuong lai', views:'10M'},
            {id:'b2', song:'3 7 0 1 1', views:'20M'},
            {id:'b3', song:'3 7 0 1 2', views:'30M'}

        ]
    }
    
    addjob=(job)=>{
        console.log('job',this)
        this.setState({
            arrJob: [...this.state.arrJob, job]
        })
    }
    deletehob = (job) => {
        let newarrr= this.state.arrJob
        console.log('job', job.id)
        newarrr = newarrr.filter((item)=>{
            console.log('itemID', item.id)
            return item.id !== job.id
        })
        console.log('a',newarrr)
        this.setState({
            arrJob: newarrr
        })
        toast.success('delete successful')
    }
    render(){   
        console.log('>>>>>Call API', this.state)
        let a = ''
        return (
            <>
                <FormComponent
                  addjob= {this.addjob}  
                />
                 <ChildComponent
                    first = {this.state.firstName}
                    last = {this.state.LastName}
                    job = {this.state.arrJob}
                    deletehob = {this.deletehob}
                 />
           {/* <ChildFcComponent 
           sayhi = {'hello'}
           song = {this.state.newjob}/> */}
          </>
          
        )
    }
}

export default Color(test2);