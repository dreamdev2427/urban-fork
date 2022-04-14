import SwiperCore, { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.scss';

import "./swiperstyles.css";

export default function Gallery() {
    SwiperCore.use([Autoplay]);
    return (
        <>
            <Swiper
                spaceBetween={10}
                slidesPerView={5}
                navigation={false}
                duration={800}
                className="mySwiper"
                autoplay={true}
                loop
                style={{ width: "100%", height: "100%" }}
            >
                <SwiperSlide>
                    <div style={{color: 'white' }}>
                        <img width="100%" src='https://ipfs.infura.io/ipfs/QmZDvKAHXSCZgJ27Pzm5QL4fNxoXosAtCr6Z75o9HS79on/7750.png' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{color: 'white'}}>
                        <img width="100%" src='https://ipfs.infura.io/ipfs/QmZDvKAHXSCZgJ27Pzm5QL4fNxoXosAtCr6Z75o9HS79on/7751.png' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{color: 'white'}}>
                        <img width="100%" src='https://ipfs.infura.io/ipfs/QmZDvKAHXSCZgJ27Pzm5QL4fNxoXosAtCr6Z75o9HS79on/7753.png' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{color: 'white'}}>
                        <img width="100%" src='https://ipfs.infura.io/ipfs/QmZDvKAHXSCZgJ27Pzm5QL4fNxoXosAtCr6Z75o9HS79on/7756.png' />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div style={{color: 'white'}}>
                        <img width="100%" src='https://ipfs.infura.io/ipfs/QmZDvKAHXSCZgJ27Pzm5QL4fNxoXosAtCr6Z75o9HS79on/7757.png' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{color: 'white' }}>
                        <img width="100%" src='https://ipfs.infura.io/ipfs/QmZDvKAHXSCZgJ27Pzm5QL4fNxoXosAtCr6Z75o9HS79on/7758.png' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{color: 'white'}}>
                        <img width="100%" src='https://ipfs.infura.io/ipfs/QmZDvKAHXSCZgJ27Pzm5QL4fNxoXosAtCr6Z75o9HS79on/7759.png' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{color: 'white'}}>
                        <img width="100%" src='https://ipfs.infura.io/ipfs/QmZDvKAHXSCZgJ27Pzm5QL4fNxoXosAtCr6Z75o9HS79on/7760.png' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{color: 'white'}}>
                        <img width="100%" src='https://ipfs.infura.io/ipfs/QmZDvKAHXSCZgJ27Pzm5QL4fNxoXosAtCr6Z75o9HS79on/7761.png' />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div style={{color: 'white'}}>
                        <img width="100%" src='https://ipfs.infura.io/ipfs/QmZDvKAHXSCZgJ27Pzm5QL4fNxoXosAtCr6Z75o9HS79on/7763.png' />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
