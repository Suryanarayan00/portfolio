import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import Jeevancareweb from "../../img/jeevancareweb.jpeg";
import Jeevancareapp from "../../img/jeevancareapp.jpeg";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://jeevancare.herokuapp.com"><img style={{height: 200}}  src={Jeevancareweb} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://play.google.com/store/apps/details?id=com.jeevancare.surya"><img style={{height: 200}} src={Jeevancareapp} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://play.google.com/store/apps/details?id=com.royo.lancer"><img style={{height: 200}}  src={MusicApp} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://play.google.com/store/apps/details?id=com.royofood.restaurant"><img style={{height: 200}}  src={Ecommerce} alt="" /></a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
