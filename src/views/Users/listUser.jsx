import React from "react";
import Color from "../HOC/Color";
import axios from "axios";
import "./listUser.scss";
import { withRouter } from "react-router-dom";

class ListUser extends React.Component {
  state = {
    listUser: [],
  };

  async componentDidMount() {
    //Cách viết Promise
    // axios.get('https://reqres.in/api/users?page=1')
    //     .then((res)=>{
    //     console.log('>>>check res', res.data.data)
    // })

    ////Cách Viết async await
    const res = await axios.get("https://reqres.in/api/users?page=2");
    console.log(">>>check res", res.data.data);
    this.setState({
      listUser: res && res.data && res.data.data ? res.data.data : [],
    });
  }

  handleDetailUser = (item) => {
    console.log(item)
    if (item) {
      this.props.history.push(`/user/${item.id}`)
    }
  }

  render() {
    const { listUser } = this.state;
    console.log("listUser", listUser);
    return (
      <div className="list-user-container">
        <div className="title">Fetch all user</div>
        <div className="list-user-content">
          {listUser &&
            listUser.length &&
            listUser.map((item, index) => {
              return (
                <div style={{ cursor: 'grabbing' }} className="child" key={item.id} onClick={() => { this.handleDetailUser(item) }}>
                  {index + 1} - {item.first_name} {item.last_name}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default withRouter(ListUser);
