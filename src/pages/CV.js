import React from 'react';
import Title from '../components/Tittle';
import CVPDF from '../assets/pdf/CV.pdf';
const CV = () => {
    return (
        <div className='title'>
            <Title title={'CURRICULUM VITAE'} span={'CURRICULUM VITAE'} />
            <object
                width='100%'
                height='700vh'
                data={CVPDF}
                type='application/pdf'
                style={{ marginTop: '70px' }}
            ></object>
        </div>
    );
};

export default CV;
