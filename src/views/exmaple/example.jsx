import React from "react";
import ChildComponent from "./childComponent";


class test1 extends React.Component {
    render(){   
        console.log('>>>>>Call API', this.state)
        // let a = '';
        return (
            <>
          <ChildComponent
            ho = {'Vu DUy Phuong'}
            ten = {'Phuong'}
           />
           
          </>
        )
    }
}

export default test1;