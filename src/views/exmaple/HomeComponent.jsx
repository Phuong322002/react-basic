import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from '../../assets/images/mascos.png'

import { connect } from "react-redux";
import { toast } from "react-toastify";

class Homepage extends React.Component {

    state = {
        name: ''
    }

    componentDidMount() {
        // setTimeout(()=>{
        //     this.props.history.push('/todo')
        // },3000)
    }
    // state = {
    //     name: 'Phuong'
    // }
    handleDelete = (user) => {
        console.log('>>> check props: ', this.props)
        this.props.deleteUserRedux(user)
        toast.success('Delete successful')
    }

    handleInputValue = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleAddUser = () => {
        if (this.state.name === '') {
            toast.error('Missing value');
            return;
        }
        this.props.createUserRedux({ id: Math.floor(Math.random() * 1000), name: this.state.name })
        this.setState({
            name: ''
        })
        toast.success('You have added successful')
    }

    render() {

        console.log('>>>> Chekc props khi co ham HOC', this.props)
        const { dataRedux } = this.props
        console.log("dataRedux", dataRedux)
        return (
            <div>
                Hello wellcome to Homepage
                <div><img src={logo} style={{ width: "200px", height: "200px" }} alt="" /></div>
                <div className="content">
                    <div className="add-user">
                        <input type="text" value={this.state.name} onChange={(e) => { this.handleInputValue(e) }} />
                        <button onClick={() => { this.handleAddUser() }}>Add</button>
                    </div>
                    {dataRedux && dataRedux.length > 0 && dataRedux.map((item, index) => {
                        return (
                            <div className=" child" key={item.id}>
                                {index + 1} - {item.name} <></>
                                <button onClick={() => { this.handleDelete(item) }}>Delete</button>
                            </div>
                        )
                    })}
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispathToProps = (dispath) => {
    return {
        deleteUserRedux: (userDelete) => { return dispath({ type: 'DELETE_USER', payload: userDelete }) },
        createUserRedux: (newUser) => { return dispath({ type: 'CREATE_USER', payload: newUser }) }
    }
}
console.log('mapStateToProps', mapStateToProps)
console.log('mapDispathToProps', mapDispathToProps)
export default connect(mapStateToProps, mapDispathToProps)(Color(Homepage));
/*
-------------------------------
-) để kết nối giữa redux và component:
export default connect(mapStateToProps, mapDispathToProps)(Color(Homepage)); 
-------------------------------

-) mapStateToProps: để kết nối với redux và để lấy data từ redux xuống component để sử dụng

-) mapDispathToProps: để khai hỏa actions bên redux ta cần dispath() trong hàm này mapDispathToProps. 
-) Action trong file rootReducer.js sẽ lấy được type và payload ở dispath bắn qua từ component



*/