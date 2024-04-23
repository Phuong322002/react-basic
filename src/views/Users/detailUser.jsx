import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom";
import Color from "../HOC/Color";

class DetailUser extends React.Component {

    state = {
        user: {}
    }

    async componentDidMount() {
        console.log('cc', this.props)
        // lấy id được qua withROuter và sủ dụng hàm match
        const id = this.props.match.params.id
        console.log('id', id)
        // lấy thông tin của người dùng đó thông qua id
        let res = await axios.get(`https://reqres.in/api/users/${id}`)
        console.log('res', res.data.data)
        this.setState({
            user: res && res.data && res.data.data ? res.data.data : {}
        })

    }

    handleBack = () => {
        this.props.history.push('/user')
    }

    render() {
        const { user } = this.state
        console.log('user', user)
        const isEmptyObject = Object.keys(user).length === 0
        return (
            <div>
                <h2 className="title">Detail User</h2>
                {isEmptyObject === false &&
                    <div className="detail-user">
                        <div>User's name: {user.first_name} {user.last_name}</div>
                        <div style={{ margin: '10px' }}>User's email: {user.email}</div>
                        <img src={user.avatar} alt="" />
                        <div><button onClick={() => { this.handleBack() }}>Back</button></div>
                    </div>}

            </div>
        )
    }
}

export default withRouter(Color(DetailUser));