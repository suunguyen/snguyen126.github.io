import React from 'react';
import ContactItem from '../components/ContactItem';
import phone from '../assets/img/phone.svg';
import email from '../assets/img/emailme.svg';
import location from '../assets/img/location.svg';
import Tittle from '../components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className='title'>
                <Tittle title={'Contact me'} span={'Contact me'} />
            </div>
            <div className='ContactPage'>
                <div className='map-sect'>
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.052567389416!2d106.77932541524142!3d10.883606460181191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d89aad780e49%3A0x54542761d4c22175!2zS8O9IHTDumMgeMOhIEtodSBCIMSQ4bqhaSBo4buNYyBRdeG7kWMgZ2lhIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1630738918044!5m2!1svi!2s'
                        width='600'
                        height='450'
                        style={{ border: 0 }}
                        allowFullScreen=''
                        area-hidden='false'
                    ></iframe>
                </div>
                <div className='contact-sect'>
                    <ContactItem
                        icon={phone}
                        text={'(037) 4586 530'}
                        title={'Phone'}
                    />
                    <ContactItem
                        icon={email}
                        text={'itdev.126@gmail.com'}
                        title={'Email'}
                    />
                    <ContactItem
                        icon={location}
                        text={'KTX Khu B DHQG, Linh Trung, Thu Duc, TP. HCM'}
                        title={'Address'}
                    />
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
