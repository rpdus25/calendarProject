import React, { Component } from 'react';
import './HomePage.css';
import { connect } from 'react-redux';
import { userActions } from '../../actions/index';
import Navbar from "../../component/navbar/Navbar";
import Calenda from "../../container/calenda/Calenda";
import Annual from "../annual/Annual";
import Modal from 'react-modal';
import Popup from "../../component/popup/Popup";

class HomePage extends Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    render() {
        const { user, users } = this.props;
        return (
            <div className="">
              <Navbar user={user} />
              <Annual/>
              <Calenda/>

              <Popup/>


                {/*관리자일 경우 */}
                {/*<h3>Users from secure api end point:</h3>*/}
                {/*{users.loading && <em>Loading users...</em>}*/}
                {/*{users.error && <span className="text-danger">ERROR: {users.error}</span>}*/}
                {/*{users.items &&*/}
                    {/*<ul>*/}
                        {/*{users.items.map((user, index) =>*/}
                            {/*<li key={user.id}>*/}
                                {/*{user.firstName + ' ' + user.lastName}*/}
                            {/*</li>*/}
                        {/*)}*/}
                    {/*</ul>*/}
                {/*}*/}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };