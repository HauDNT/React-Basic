import React from "react";
import axios from "axios";
import './ListUser.scss';
import { withRouter } from "react-router-dom";

class ListUser extends React.Component {
    state = {
        listUser: []
    }
    
    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=1');
        this.setState({
            listUser: res && res.data && res.data.data ? res.data.data : []
        })
    }

    // Chuyển đến trang thông tin người dùng:
    handleViewDetailUSer = (user) => {
        this.props.history.push(`/user/${user.id}`)
    }

    render() {
        let {listUser} = this.state;

        return (
            <div className="list-user-container">
                <div className="title">
                    Fetch all list users
                </div>
                <div className="list-user-content">
                    <table id="customers">
                    <tr>
                        <th>STT</th>
                        <th>Full name</th>
                    </tr>
                    {listUser && listUser.length > 0 && listUser.map((item, index) => {
                        return (
                            <>
                                <tr key={item.id}
                                    onClick={() => this.handleViewDetailUSer(item)}>
                                    <td>{index + 1}</td>
                                    <td>{item.first_name} {item.last_name}</td>
                                </tr>
                            </>
                        )
                    })
                    }
                    </table>
                </div>
            </div>
        )
    }
}

export default withRouter(ListUser);