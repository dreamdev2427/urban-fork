import SwiperCore, { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.scss';

import "./swiperstyles.css";

export default function SingleGallery() {
    SwiperCore.use([Autoplay]);
    return (
        <>
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                navigation={false}
                duration={800}
                className="mySwiper"
                autoplay={true}
                loop
                style={{ width: "250px", height: "250px", border: "#0BFFF9 solid 2px" }}
            >
                <SwiperSlide>
                    <div style={{color: 'white' }}>
                        <img width="100%" src='./img/7750.png' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{color: 'white'}}>
                        <img width="100%" src='./img/7751.png' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{color: 'white'}}>
                        <img width="100%" src='./img/7753.png' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{color: 'white'}}>
                        <img width="100%" src='./img/7756.png' />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div style={{color: 'white'}}>
                        <img width="100%" src='./img/7757.png' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{color: 'white' }}>
                        <img width="100%" src='./img/7758.png' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{color: 'white'}}>
                        <img width="100%" src='./img/7759.png' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{color: 'white'}}>
                        <img width="100%" src='./img/7760.png' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{color: 'white'}}>
                        <img width="100%" src='./img/7761.png' />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div style={{color: 'white'}}>
                        <img width="100%" src='./img/7763.png' />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
