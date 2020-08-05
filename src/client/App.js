import React from 'react';
import { connect } from 'react-redux';
import Table from './components/table/Table';
import SideMenu from './components/sidemenu/SideMenu';

const App = (props) => {
    return (
        <>
            <SideMenu />
            <div className={'app-container'}>
                <Table />
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.appStatus.isLoading,
    };
};

export default connect(mapStateToProps)(App);
