import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Table from '../containers/Table';

const Home = () => {
    return(
        <div className='Home'>
            <Header />
            <Search />
            <Table />
        </div>
    );
}

export default Home;