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
                        <img width="100%" src='./img/c1-thumb-300x300.jpg' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{color: 'white'}}>
                        <img width="100%" src='./img/c3-thumb-300x300.jpg' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{color: 'white'}}>
                        <img width="100%" src='./img/c4-thumb-300x300.jpg' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{color: 'white'}}>
                        <img width="100%" src='./img/c5-thumb-300x300.jpg' />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div style={{color: 'white'}}>
                        <img width="100%" src='./img/c6-thumb-300x300.jpg' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{color: 'white' }}>
                        <img width="100%" src='./img/c1-thumb-300x300.jpg' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{color: 'white'}}>
                        <img width="100%" src='./img/c3-thumb-300x300.jpg' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{color: 'white'}}>
                        <img width="100%" src='./img/c4-thumb-300x300.jpg' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{color: 'white'}}>
                        <img width="100%" src='./img/c5-thumb-300x300.jpg' />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div style={{color: 'white'}}>
                        <img width="100%" src='./img/c6-thumb-300x300.jpg' />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
