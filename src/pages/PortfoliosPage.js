import React from 'react';
import MenuItems from '../components/MenuItems';
import Tittle from '../components/Tittle';

function PortfoliosPage() {
    return (
        <div className='PortfolioPage'>
            <div className='title'>
                <Tittle title={'Portfolios'} span={'portfolios'} />
            </div>
            <div className='portfolios-data'>
                <MenuItems />
            </div>
        </div>
    );
}

export default PortfoliosPage;
