import React from 'react';
import './HomePage.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { userActions } from '../../_actions/index';
import Navbar from "../../component/Navbar/Navbar";

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    render() {
        const { user, users } = this.props;
        return (
            <div className="">
              <Navbar user={user} />
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