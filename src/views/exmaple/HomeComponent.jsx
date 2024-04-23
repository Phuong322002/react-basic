import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from '../../assets/images/mascos.png'
class Homepage extends React.Component {

    componentDidMount() {
        // setTimeout(()=>{
        //     this.props.history.push('/todo')
        // },3000)
    }
    state = {
        name: 'Phuong'
    }

    render() {

        console.log('>>>> Chekc props khi co ham withRouter', this.props)
        return (
            <div>
                Hello wellcome to Homepage
                <div><img src={logo} alt="" /></div>
            </div>
        )
    }
}

export default Color(Homepage); 