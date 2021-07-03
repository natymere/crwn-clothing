import React from 'react';
import { connect } from 'react-redux';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = ({ loading, currentUser }) => (
    !loading ?
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
        : null
);

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser,
    loading: user.loading
});


export default connect(mapStateToProps)(SignInAndSignUpPage);
