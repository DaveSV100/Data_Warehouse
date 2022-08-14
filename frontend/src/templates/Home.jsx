import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Table from '../containers/Table';
import Footer from '../components/Footer';

const Home = () => {
    return(
        <div className='Home'>
            <Header />
            <Search />
            <Table />
            <Footer />
        </div>
    );
}

export default Home;