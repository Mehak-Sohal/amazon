import React from 'react'
import './Home.css'
import Product from './Product'

const Home = () => {
    return (
        <div className='home'>
            <div className='home-container'>
                <img className='home-image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='' />

                <div className='home-row'>
                    <Product
                      title='Amazon Echo Dot (3rd Gen) with Alexa - Charcoal'
                      price={39.99}
                      image='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSgl287aYkH5cFs0hOnGsc2EiHDNAukKajUjev9VCUr7Pw5P7qOmtpeZBJfypHhNhTgtTgp3jPLsg40Qn9rrRIJj2brzXjnuLj4VyhyZn-_T4q0koH08SeEYQ&usqp=CAE'
                      rating={4}
                    />
                     <Product
                      title='Amazon Echo Dot (3rd Gen) with Alexa - Charcoal'
                      price={39.99}
                      image='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSgl287aYkH5cFs0hOnGsc2EiHDNAukKajUjev9VCUr7Pw5P7qOmtpeZBJfypHhNhTgtTgp3jPLsg40Qn9rrRIJj2brzXjnuLj4VyhyZn-_T4q0koH08SeEYQ&usqp=CAE'
                      rating={4}
                    />
                </div>

                <div className='home-row'>
                <Product
                      title='Amazon Echo Dot (3rd Gen) with Alexa - Charcoal'
                      price={39.99}
                      image='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSgl287aYkH5cFs0hOnGsc2EiHDNAukKajUjev9VCUr7Pw5P7qOmtpeZBJfypHhNhTgtTgp3jPLsg40Qn9rrRIJj2brzXjnuLj4VyhyZn-_T4q0koH08SeEYQ&usqp=CAE'
                      rating={4}
                    />
                </div>

                <div className='home-row'>
                <Product
                      title='Amazon Echo Dot (3rd Gen) with Alexa - Charcoal'
                      price={39.99}
                      image='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSgl287aYkH5cFs0hOnGsc2EiHDNAukKajUjev9VCUr7Pw5P7qOmtpeZBJfypHhNhTgtTgp3jPLsg40Qn9rrRIJj2brzXjnuLj4VyhyZn-_T4q0koH08SeEYQ&usqp=CAE'
                      rating={4}
                    />
                 <Product
                      title='Amazon Echo Dot (3rd Gen) with Alexa - Charcoal'
                      price={39.99}
                      image='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSgl287aYkH5cFs0hOnGsc2EiHDNAukKajUjev9VCUr7Pw5P7qOmtpeZBJfypHhNhTgtTgp3jPLsg40Qn9rrRIJj2brzXjnuLj4VyhyZn-_T4q0koH08SeEYQ&usqp=CAE'
                      rating={4}
                    />
                 <Product
                      title='Amazon Echo Dot (3rd Gen) with Alexa - Charcoal'
                      price={39.99}
                      image='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSgl287aYkH5cFs0hOnGsc2EiHDNAukKajUjev9VCUr7Pw5P7qOmtpeZBJfypHhNhTgtTgp3jPLsg40Qn9rrRIJj2brzXjnuLj4VyhyZn-_T4q0koH08SeEYQ&usqp=CAE'
                      rating={4}
                    />
                </div>
            </div>
            
        </div>
    )
}

export default Home
