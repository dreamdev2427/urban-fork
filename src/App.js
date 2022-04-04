
import { useState } from 'react';
import Slider from '@mui/material/Slider';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Web3 from 'web3';
import { makeStyles } from '@mui/styles';
import Gallery from "./components/SwiperCarousel";
import SingleGallery from './components/SingleGallery';

const useStyles = makeStyles({
  aa: {
    width: "20% !important",
    border: "#000 solid",
    borderRadius: "20px",
    height: "100px",
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: 'white',
  },
  bb: {
    width: "20% !important",
    border: "#000 solid",
    borderRadius: "20px",
    height: "100px",
    background: 'linear-gradient(180deg, #541113 0%, #4729F2 100%)',
    color: 'white',
  },
  cc: {
    width: "20% !important",
    border: "#000 solid",
    borderRadius: "20px",
    height: "100px",
    background: 'linear-gradient(180deg, #900EB6 0%, #29D3F2 100%)',
    color: 'white',
  },
  dd: {
    width: "20% !important",
    border: "#000 solid",
    borderRadius: "20px",
    height: "100px",
    background: 'linear-gradient(180deg, #65019C 0%, #F27829 100%)',
    color: 'white',
  },
  ee: {
    width: "30% !important",
    height: "70px",
    borderRadius: "0 !important",
    background: 'linear-gradient(180deg, #29D3F2 0%, #900EB6 100%)',
    color: 'white !important',
    fontFamily: " 'Aldrich' , 'Sans-serif' ",
    fontWeight: "600",
    fontSize: "25px !important",
  },
});

const connectTheme = createTheme({
  palette: {
    primary: {
      main: "#ffbd59",
    },
  },
});

const mintTheme = createTheme({
  palette: {
    primary: {
      main: "#ff9a3d"
    }
  }
})

const loadmapTheme = createTheme({
  palette: {
    primary: {
      main: "#ff9a3d"
    }
  }
})

const PrettoSlider = styled(Slider)({
  color: '#ff9a3d',
  height: 4,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#ff9a3d',
    border: '2px solid #df7a1d',
    borderRadius: "0",
    transform: "translate(-50%, -50%) rotate(45deg)",
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#ff9a3d',
    transformOrigin: 'bottom left',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(0%, -90%) rotate(270deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

const web3 = new Web3();

function App() {

  const classes = useStyles();

  return (
    <>
      <header id="qodef-page-header">
        <div id="qodef-page-header-inner" className=" qodef-skin--light">
          <a className="qodef-header-logo-link qodef-height--set qodef-source--image" href="#" rel="home">
            <img width="1000" height="150" src="https://urbanfuturists.com/wp-content/uploads/2022/02/logo-3.png" className="qodef-header-logo-image qodef--main" alt="logo main" sizes="(max-width: 1000px) 100vw, 1000px" />
          </a>
          <nav className="qodef-header-navigation" role="navigation" aria-label="Top Menu">
            <ul id="menu-primary-menu-1" className="menu">
              <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-8087"><a href="#home"><span className="qodef-menu-item-text">Home</span></a></li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-8054"><a href="#timeline"><span className="qodef-menu-item-text">Timeline</span></a></li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-8344"><a href="#sneak"><span className="qodef-menu-item-text">Sneak Peek</span></a></li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-8319"><a href="#mint"><span className="qodef-menu-item-text">Mint</span></a></li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-8317"><a href="#team"><span className="qodef-menu-item-text">Our Team</span></a></li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-8318"><a href="#faqs"><span className="qodef-menu-item-text">FAQ’s</span></a></li>
            </ul>
          </nav>
          <div className="qodef-widget-holder qodef--one">
            <div className="widget widget_block" data-area="social-icons-sidebar">
              <p>
                <a href="#">
                  <img src="./img/Logomark-Transparent-White.png" alt="" width="22px" className="wp-image-8095 osicon eds-on-hover" />
                </a>
              </p>
            </div>
            <div className="  widget widget_gracey_core_icon" data-area="social-icons-sidebar">
              <span className="qodef-shortcode qodef-m eds-on-hover qodef-icon-holder qodef-size--tiny qodef-layout--normal" style={{ margin: "2" }} >
                <a href="#" rel="noopener noreferrer" >
                  <span className="qodef-icon-font-awesome fab fa-discord qodef-icon qodef-e" style={{ color: "white" }} ></span>
                </a>
              </span>
            </div>
            <div className="  widget widget_gracey_core_icon" data-area="social-icons-sidebar">
              <span className="qodef-shortcode qodef-m eds-on-hover qodef-icon-holder qodef-size--tiny qodef-layout--normal">
                <a href="#" rel="noopener noreferrer" >
                  <span className="qodef-icon-font-awesome fab fa-twitter qodef-icon qodef-e" style={{ color: "white", fontSize: "22px" }}></span>
                </a>
              </span>
            </div>
            <div className="widget widget_block" data-area="social-icons-sidebar">
              <ul className="wp-container-6247692e5b96d wp-block-social-links"></ul>
            </div>
          </div>
        </div>
      </header>
      <header id="qodef-page-mobile-header">
        <div id="qodef-page-mobile-header-inner" className="">
          <a className="qodef-mobile-header-logo-link qodef-height--not-set qodef-source--image" href="#" rel="home">
            <img width="1000" height="150" src="https://urbanfuturists.com/wp-content/uploads/2022/02/logo-3.png" className="qodef-header-logo-image qodef--main" alt="logo main" sizes="(max-width: 1000px) 100vw, 1000px" data-xblocker="passed" style={{ visibility: "visible" }} />
          </a>
          <a href="javascript:void(0)" className="qodef-opener-icon qodef-m qodef-source--predefined qodef-mobile-header-opener">
            <span className="qodef-m-icon qodef--open">
              <span className="qodef-m-lines">
                <span className="qodef-m-line qodef--1"></span>
                <span className="qodef-m-line qodef--2"></span>
              </span>
            </span>
            <span className="qodef-m-icon qodef--close">
              <span className="qodef-m-lines">
                <span className="qodef-m-line qodef--1"></span>
                <span className="qodef-m-line qodef--2"></span>
              </span>
            </span>
          </a>
          <nav className="qodef-mobile-header-navigation" role="navigation" aria-label="Mobile Menu">
            <ul id="menu-primary-menu-4" className="qodef-content-grid">
              <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-8087"><a href="#home"><span className="qodef-menu-item-text">Home</span></a></li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-8054"><a href="#timeline"><span className="qodef-menu-item-text">Timeline</span></a></li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-8344"><a href="#sneak"><span className="qodef-menu-item-text">Sneak Peek</span></a></li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-8319"><a href="#mint"><span className="qodef-menu-item-text">Mint</span></a></li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-8317"><a href="#team"><span className="qodef-menu-item-text">Our Team</span></a></li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-8318"><a href="#faqs"><span className="qodef-menu-item-text">FAQ’s</span></a></li>
            </ul>
          </nav>
        </div>
      </header>
      <section data-marvy_enable_drop_animation="false" data-marvy_enable_fancy_rotate="false" data-marvy_enable_flying_object="false" data-marvy_enable_ripples_animation="false" data-marvy_enable_waves_animation="false" data-marvy_enable_rings_animation="false" data-marvy_enable_topology_animation="false" data-marvy_enable_gradient_animation="false" data-marvy_enable_snow_animation="true" data-marvy_snow_animation_count="200" data-marvy_snow_animation_size="10" data-marvy_snow_animation_color="#ffffff" data-marvy_snow_animation_shadow_color="#FFFFFF" data-marvy_snow_animation_shadow_size="10" data-marvy_enable_firework_animation="false" className="elementor-section elementor-top-section elementor-element elementor-element-1529de6 elementor-section-full_width elementor-section-stretched elementor-section-content-middle elementor-section-height-min-height elementor-section-height-default elementor-section-items-middle qodef-elementor-content-no marvy-snow-animtion-section marvy-custom-snow-section-1529de6" data-id="1529de6" data-element_type="section" id="home" data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;video&quot;,&quot;background_video_link&quot;:&quot;https:\/\/urbanfuturists.com\/wp-content\/uploads\/2022\/03\/BANNER2.mp4&quot;}" style={{ position: "relative", width: "100%" }}>
        <div className="elementor-background-video-container elementor-hidden-phone" >
          <video className="elementor-background-video-hosted elementor-html5-video" autoPlay={true} muted playsInline="" loop={true} src="./response.mp4" style={{ width: "100%" }} ></video>
        </div>
        <div className="elementor-container elementor-column-gap-default" style={{ zIndex: "99", width: "100%", position: "absolute", left: "0px", top: "0px", alignContent: "center", alignItems: "center" }}>
          <div className="elementor-row">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a338f7f" data-id="a338f7f" data-element_type="column">
              <div className="elementor-column-wrap elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <div className="elementor-element elementor-element-1c82ef5 elementor-widget elementor-widget-heading" data-id="1c82ef5" data-element_type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h3 className="elementor-heading-title elementor-size-medium">Urban Futurists NFT</h3>		</div>
                  </div>
                  <div className="elementor-element elementor-element-cebe92c elementor-widget elementor-widget-text-editor" data-id="cebe92c" data-element_type="widget" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                      <div className="elementor-text-editor elementor-clearfix">
                        <p style={{ textAlign: "center" }} >
                          <strong>
                            <span style={{ fontFamily: "Oxanium" }} >Where Art Meets The Future.</span>
                          </strong>
                        </p>
                        <p style={{ textAlign: "center" }} >
                          <strong>A Collection Of 5555 Hand Drawn Avatars.</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-22850e7 eds-on-hover elementor-widget elementor-widget-eael-creative-button" data-id="22850e7" data-element_type="widget" data-widget_type="eael-creative-button.default">
                    <div className="elementor-widget-container">
                      <div className="eael-creative-button-wrapper">
                        <a className="eael-creative-button eael-creative-button--default" href="#" data-text="">
                          <div className="creative-button-inner">
                            <span className="eael-creative-button-icon-left"><i aria-hidden="true" className="fab fa-discord"></i></span>
                            <span className="cretive-button-text">Join Our Discord</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="marvy-snow-1529de6"></div>
      </section>

      <div style={{ padding: "20px", background: "#7002da" }} >
        <Gallery />
      </div>

      <div className='gradient_buttons' >
        <Button className={classes.aa}>WL MINT 0.05 ETH</Button>
        <Button className={classes.bb}>PUBLIC MINT 0.07 ETH</Button>
        <Button className={classes.cc}>TOTAL SUPPLY 5555 (PHASE 1)</Button>
        <Button className={classes.dd}>MINT DATE TBD</Button>
      </div>

      <div className="elementor-divider" >
			<span className="elementor-divider-separator">
				</span>
		  </div>

      <div className='timeline_title'>
        OUR TIMELINE
      </div>

      <div className="twae-vertical twae-wrapper twae-one-sided-wrapper">
        <div className="twae-timeline-centered twae-timeline-sm twae-line twae-one-sided-timeline">
          <article className="twae-timeline-entry twae-right-aligned">
            <div className="twae-timeline-entry-inner">
              <div className="twae-label-extra-label">
                <span className="twae-label">Phase 1</span>
                <span className="twae-extra-label">February/March, 2022</span>
              </div>
              <div className="twae-icon"><i aria-hidden="true" className="fas fa-brain"></i></div>
              <div className="twae-data-container ">
                <span className="twae-title">NFT Art Design</span>

                <div className="twae-description"><p>Art Generation and Branding with emphasis on Art x Future.<br></br>Launch Website, Twitter, Discord, Community Development.</p></div>
              </div>
            </div>
          </article>
          <article className="twae-timeline-entry twae-right-aligned">
            <div className="twae-timeline-entry-inner">
              <div className="twae-label-extra-label">
                <span className="twae-label">Phase 2 </span>
                <span className="twae-extra-label">April 2022</span>
              </div>
              <div className="twae-icon"><i aria-hidden="true" className="far fa-object-group"></i></div>
              <div className="twae-data-container ">
                <span className="twae-title">Mint Launch</span>

                <div className="twae-description"><p>Successful First Mint ( 5555 @ 0.05 ETH For Whitelisted &amp;&nbsp; 0.07 ETH Public Sale).<br></br>Secondary Market Listing – Opensea, Rarity Sniper.</p></div>
              </div>
            </div>
          </article>
          <article className="twae-timeline-entry twae-right-aligned">
            <div className="twae-timeline-entry-inner">
              <div className="twae-label-extra-label">
                <span className="twae-label">Perks &amp; Benefits</span>
                <span className="twae-extra-label">May, 2022</span>
              </div>
              <div className="twae-icon"><i aria-hidden="true" className="fa fa-rocket"></i></div>
              <div className="twae-data-container ">
                <span className="twae-title">After Successful Mint</span>

                <div className="twae-description"><p>We welcome holders of the NFT to the Urban Futurists community. We encourage you to use the NFT as your personal profile picture. Our sole aim is to increase the worth of the NFT. For early ‘flippers’ we’ll allocate a % to maintain the floor price of the NFT on secondary sales (if required).</p><p>To our loyal followers, we’re hosting give aways of Oculus Quest 2 VR’s and giveaways of art and weekly merchandise from our store to retain our membership. We’ll start commencing plans for the purchase of land on the metaverse and an online gallery.<br></br><br></br>Any profits from our merchandise shop will go straight into the DAO which the community owns.</p><p>We believe in karma – do good and good things will come to you. We’ll make a charity donation to an arts based charity of 5%. We’ll discuss this with our membership but we already have 2 children’s charities in mind that assist children recover from trauma with drawing and painting programs and are in hospitals.</p><p>As our floor grows we aim to release Phase 2. Only those who are holders of the NFT will be able to access at a discount an NFT for Phase 2.</p></div>
              </div>
            </div>
          </article>
          <article className="twae-timeline-entry twae-right-aligned">
            <div className="twae-timeline-entry-inner">
              <div className="twae-label-extra-label">
                <span className="twae-label">Phase 3</span>
                <span className="twae-extra-label">June, 2022</span>
              </div>
              <div className="twae-icon"><i aria-hidden="true" className="fa fa-brush"></i></div>
              <div className="twae-data-container ">
                <span className="twae-title">The Second Mint</span>

                <div className="twae-description"><p>( More than 0.1 ETH). Price To Be Determined.</p><p>We will purchase land in the metaverse and establish an online store where Art meets Future fashion. We’ll sell Art, Clothing, Custom Wearables, Accessories with 80% of royalties going into DAO. Many of our designs will be featured on the avatars in Mint Phase 2.<br></br>We’ll explore collaborations with major brands that are in our existing network and past clients.</p></div>
              </div>
            </div>
          </article>
          <article className="twae-timeline-entry twae-right-aligned">
            <div className="twae-timeline-entry-inner">
              <div className="twae-label-extra-label">
                <span className="twae-label">Phase 4</span>
                <span className="twae-extra-label">August, 2022</span>
              </div>
              <div className="twae-icon"><i aria-hidden="true" className="fa fa-infinity"></i></div>
              <div className="twae-data-container ">
                <span className="twae-title">More Mints</span>

                <div className="twae-description"><p>Just like successful other mints before us: BAYC, Azuki, WOW – other opportunities present themselves through partnerships. We’ll discuss with our community any ideas that will help raise the value of the NFT.</p></div>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div className="elementor-divider" >
			<span className="elementor-divider-separator">
				</span>
		  </div>

      <div className='sneek_title' style={{ marginTop: "100px", marginBottom: "30px" }}>
        SNEAK PEEK
      </div>

      <div className='sneek_content ' style={{ marginLeft: "100px", marginRight: "100px" }} >
        <div className='colMD7' >
          <div className='sneek_subtitle'>
            <h4>EXCLUSIVE SUCCESS</h4>
          </div>
          <div className='sneek_content' >
            Urban Futurists is a community with an exciting roadmap. Being a member provides you with one of our hand drawn Urban Futurists NFT but also the community benefits, giveaways and preferred status for our metaverse plans into Phase 2. Join us today and get in on this ground floor opportunity.
          </div>
          <div className='sneek_subtitle'>
            <h4>MINT GIVEAWAY</h4>
          </div>
          <div className='sneek_content' >
            If you mint 5, we’ll send you a shirt, cap, or mask from our merchandise shop welcoming you into our community.
          </div>
        </div>
        <div className='colMD5' >
          <SingleGallery />
        </div>
      </div>

      <div className="elementor-divider" >
			<span className="elementor-divider-separator">
				</span>
		  </div>

      <div className='mintingStarttime_title' style={{ marginTop: "100px", marginBottom: "30px" }}>
        MINT STARTING IN
      </div>

      <div className='pink_div_for_time' >
        <div className='golden_time_number' > 26 </div>
        <div className='white_time_number' >Days</div>
      </div>
      <div className='pink_div_for_time' >
        <div className='golden_time_number' > 11 </div>
        <div className='white_time_number' >Hours</div>
      </div>
      <div className='pink_div_for_time' >
        <div className='golden_time_number' > 10 </div>
        <div className='white_time_number' >Minutes</div>
      </div>
      <div className='pink_div_for_time' >
        <div className='golden_time_number' > 31 </div>
        <div className='white_time_number' >Seconds</div>
      </div>

      <div className='mint_button' >
        <Button className={classes.ee}>Mint</Button>
      </div>

      <div className="elementor-divider" >
			<span className="elementor-divider-separator">
				</span>
		  </div>
      
      <div className='mintingStarttime_title' style={{ marginTop: "100px", marginBottom: "30px" }}>
        INSIDE INFO
      </div>
      <div className="insideInfo_text">
        <p style={{ textAlign: "center" }} ><span style={{ color: "#ffffff" }} >Urban Futurists is the conceptualization from Speed Painter and Entertainer, Brad Blaze. He thought of a world combining the type of art he is known to produce on stage (he uses traditional mediums of paints / brushes) and what could happen in the future.</span>
          <br></br><br></br>
          <span style={{ color: "#ffffff" }} >The missing piece of the puzzle came together with the arrival of realistic Virtual Reality and the metaverse. Brad is already honing his skills to release a specific virtual reality show which will tie in with the successful launch of this NFT series. </span>
          <br></br><br></br>
          <span style={{ color: "#ffffff" }} >He wondered when art would meet the future. The time is NOW.</span></p>

      </div>
      <div className="elementor-social-icons-wrapper elementor-grid">
        <span className="elementor-grid-item">
          <a className="elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-repeater-item-6269d4a" href="https://www.facebook.com/bradblazeartist" target="_blank">
            <i className="fab fa-facebook"></i>
          </a>
        </span>
        <span className="elementor-grid-item">
          <a className="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-repeater-item-23a71bb" href="https://twitter.com/bradblaze" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
        </span>
        <span className="elementor-grid-item">
          <a className="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-4f79941" href="https://www.instagram.com/wittypainter/" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
        </span>
      </div>

      <div className="elementor-divider" >
			<span className="elementor-divider-separator">
				</span>
		  </div>

      <div className='mintingStarttime_title' style={{ marginTop: "100px", marginBottom: "-30px" }}>
        OUR TEAM
      </div>

      <div className="qodef-grid-inner ">
        <div className="qodef-e qodef-grid-item post-2396 team type-team status-publish has-post-thumbnail hentry team-category-team">
          <div className="qodef-e-inner">
            <div className="qodef-e-image">
              <div className="qodef-e-media-image">
                <img loading="lazy" width="300" height="300" src="./img/c1-thumb-300x300.jpg" className="attachment-full size-full wp-post-image" alt="" />			</div>
            </div>
            <div className="qodef-e-content">
              <h6 itemProp="name" className="qodef-e-title entry-title">
                Brad Blaze	</h6>
              <p className="qodef-e-role">Artist &amp; Speed Painter</p>
              <div className="qodef-team-member-social-icons">
                <a className="qodef-team-member-social-icon" href="https://www.instagram.com/wittypainter/" target="_blank">
                  <span className="qodef-icon-font-awesome fab fa-instagram-square"></span>					</a>
                <a className="qodef-team-member-social-icon" href="https://twitter.com/bradblaze" target="_blank">
                  <span className="qodef-icon-font-awesome fab fa-twitter"></span>					</a>
                <a className="qodef-team-member-social-icon" href="https://www.facebook.com/bradblazeartist" target="_blank">
                  <span className="qodef-icon-font-awesome fab fa-facebook-square"></span>					</a>
              </div>
            </div>
          </div>
        </div>
        <div className="qodef-e qodef-grid-item post-2395 team type-team status-publish has-post-thumbnail hentry team-category-team">
          <div className="qodef-e-inner">
            <div className="qodef-e-image">
              <div className="qodef-e-media-image">
                <img width="300" height="300" src="./img/c3-thumb-300x300.jpg" className="attachment-full size-full wp-post-image" alt="" loading="lazy" />			</div>
            </div>
            <div className="qodef-e-content">
              <h6 itemProp="name" className="qodef-e-title entry-title">
                Raheel Javed	</h6>
              <p className="qodef-e-role">Web Dev &amp; Smart Contracts</p>
              <div className="qodef-team-member-social-icons">
                <a className="qodef-team-member-social-icon" href="https://twitter.com/GxXxXxX3XXxxXX1" target="_blank">
                  <span className="qodef-icon-font-awesome fab fa-twitter"></span>					</a>
              </div>
            </div>
          </div>
        </div>
        <div className="qodef-e qodef-grid-item post-8829 team type-team status-publish has-post-thumbnail hentry team-category-team">
          <div className="qodef-e-inner">
            <div className="qodef-e-image">
              <div className="qodef-e-media-image">
                <img width="300" height="300" src="./img/c4-thumb-300x300.jpg" className="attachment-full size-full wp-post-image" alt="" loading="lazy" />			</div>
            </div>
            <div className="qodef-e-content">
              <h6 itemProp="name" className="qodef-e-title entry-title">
                Evobelle	</h6>
              <p className="qodef-e-role">Community Moderator</p>
              <div className="qodef-team-member-social-icons">
                <a className="qodef-team-member-social-icon" href="https://twitter.com/evo_belle" target="_blank">
                  <span className="qodef-icon-font-awesome fab fa-twitter"></span>					</a>
              </div>
            </div>
          </div>
        </div>
        <div className="qodef-e qodef-grid-item post-8840 team type-team status-publish has-post-thumbnail hentry team-category-team">
          <div className="qodef-e-inner">
            <div className="qodef-e-image">
              <div className="qodef-e-media-image">
                <img width="300" height="300" src="./img/c5-thumb-300x300.jpg" className="attachment-full size-full wp-post-image" alt="" loading="lazy" />			</div>
            </div>
            <div className="qodef-e-content">
              <h6 itemProp="name" className="qodef-e-title entry-title">
                Bobby	</h6>
              <p className="qodef-e-role">Community Moderator</p>
              <div className="qodef-team-member-social-icons">
                <a className="qodef-team-member-social-icon" href="https://twitter.com/xxWRGxx" target="_blank">
                  <span className="qodef-icon-font-awesome fab fa-twitter"></span>					</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="elementor-divider" >
			<span className="elementor-divider-separator">
				</span>
		  </div>

      <div className='mintingStarttime_title' style={{ marginTop: "50px", marginBottom: "30px" }}>
        WHO WE ARE
      </div>

      <div className='whoWeAre_blocks' >
        <div className='whoWeAre_block'>
          <h4 style={{ textAlign: "justify" }} >
            <span style={{ color: "#00cff6" }} >
              <strong><span style={{ fontFamily: "Oxanium" }} >Brad Blaze</span></strong>
            </span>
          </h4>
          <p style={{ textAlign: "justify" }} >
            <span style={{ color: "#ffffff", fontSize: "12pt" }} >World renowned artist and entertainer is in high demand performing at Corporate and Special Events in over 20 countries. </span></p><p style={{ textAlign: "justify" }}><span style={{ color: "#ffffff", fontSize: "12pt" }} >Has painted four world leaders live onstage at events and celebrities such as Chris Hemsworth and Tiger Woods. He has raised over $3 million dollars for charities.</span></p><p style={{ textAlign: "justify" }} ><span style={{ color: "#ffffff", fontSize: "12pt" }} >Has a passion for art and technology, with NFT’s providing the perfect platform to merge the two.</span>
          </p>
        </div>
        <div className='whoWeAre_block'>
          <h4>
            <span style={{ fontFamily: "Oxanium", color: "#00cff6" }} >
              <strong>Raheel Javed</strong>
            </span>
          </h4>
          <p style={{ textAlign: "justify" }} ><span style={{ fontSize: "12pt" }} ><span style={{ color: "#ffffff" }} >Full time freelance Designer &amp; Developer. Working with tech since Web 2.0. Thousands of websites and design projects done.</span></span></p>
          <p style={{ textAlign: "justify" }} ><span style={{ fontSize: "12pt" }} ><span style={{ color: "#ffffff" }} >Working experience of Java, Python, Php, React. Moving &amp; Learning Web3 technologies, dapps &amp; Smart Contracts.</span></span></p>
          <p style={{ textAlign: "justify" }} ><span style={{ color: "#ffffff", fontSize: "12pt" }} >Always excited for new projects and new technologies to further improve the User Experience online.</span></p>
        </div>
      </div>

      <div className="elementor-divider" >
			<span className="elementor-divider-separator">
				</span>
		  </div>

      <div className='mintingStarttime_title' style={{ marginTop: "50px", marginBottom: "30px" }}>
        FAQ'S
      </div>

      <div style={{ margin: "0 100px 100px 100px" }}>
        <div className="elementor-toggle" role="tablist">
          <div className="elementor-toggle-item">
            <div id="elementor-tab-title-6921" className="elementor-tab-title" data-tab="1" role="tab" aria-controls="elementor-tab-content-6921" aria-expanded="false">
              <span className="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
                <span className="elementor-toggle-icon-closed"><i className="fas fa-caret-right"></i></span>
                <span className="elementor-toggle-icon-opened"><i className="elementor-toggle-icon-opened fas fa-caret-up"></i></span>
              </span>
              <a href="" className="elementor-toggle-title">When Will Urban Futurists Officially Launch?</a>
            </div>
            <div id="elementor-tab-content-6921" className="elementor-tab-content elementor-clearfix" data-tab="1" role="tabpanel" aria-labelledby="elementor-tab-title-6921"><p>Urban Futurists will officially launch on the TBD with a price of 0.5 ETH (Whitelisted) &amp; 0.07 ETH (Public Sale). Please make sure you don’t miss the launch by joining our Discord and Twitter. We will notify you when the project officially goes live.</p></div>
          </div>
          <div className="elementor-toggle-item">
            <div id="elementor-tab-title-6922" className="elementor-tab-title" data-tab="2" role="tab" aria-controls="elementor-tab-content-6922" aria-expanded="false">
              <span className="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
                <span className="elementor-toggle-icon-closed"><i className="fas fa-caret-right"></i></span>
                <span className="elementor-toggle-icon-opened"><i className="elementor-toggle-icon-opened fas fa-caret-up"></i></span>
              </span>
              <a href="" className="elementor-toggle-title">Where Will The Funding From NFT’s Be Put To Use?</a>
            </div>
            <div id="elementor-tab-content-6922" className="elementor-tab-content elementor-clearfix" data-tab="2" role="tabpanel" aria-labelledby="elementor-tab-title-6922"><p style={{ textAlign: "justify" }} >The funds raised from the launch of Urban Futurists are detailed in our roadmap with the Virtual Symposium being planned immediately, the charitable component being distributed and funding for art and tech ventures being decided by the community. Further developments include an online shop with profits going into the DAO. This will only make your NFT worth more and ensure more people the desire to own one of the exclusive Urban Futurists.</p></div>
          </div>
          <div className="elementor-toggle-item">
            <div id="elementor-tab-title-6923" className="elementor-tab-title" data-tab="3" role="tab" aria-controls="elementor-tab-content-6923" aria-expanded="false">
              <span className="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
                <span className="elementor-toggle-icon-closed"><i className="fas fa-caret-right"></i></span>
                <span className="elementor-toggle-icon-opened"><i className="elementor-toggle-icon-opened fas fa-caret-up"></i></span>
              </span>
              <a href="" className="elementor-toggle-title">Can I Earn Money With My Urban Futurist NFT?</a>
            </div>
            <div id="elementor-tab-content-6923" className="elementor-tab-content elementor-clearfix" data-tab="3" role="tabpanel" aria-labelledby="elementor-tab-title-6923"><p style={{ textAlign: "justify" }} >Yes. We are absolutely committed to ensuring your NFT gains as much value as possible by strongly investing in the community and following our roadmap.</p></div>
          </div>
          <div className="elementor-toggle-item">
            <div id="elementor-tab-title-6924" className="elementor-tab-title" data-tab="4" role="tab" aria-controls="elementor-tab-content-6924" aria-expanded="false">
              <span className="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
                <span className="elementor-toggle-icon-closed"><i className="fas fa-caret-right"></i></span>
                <span className="elementor-toggle-icon-opened"><i className="elementor-toggle-icon-opened fas fa-caret-up"></i></span>
              </span>
              <a href="" className="elementor-toggle-title">How Do I Know If This Project Is In Good Hands?</a>
            </div>
            <div id="elementor-tab-content-6924" className="elementor-tab-content elementor-clearfix" data-tab="4" role="tabpanel" aria-labelledby="elementor-tab-title-6924"><p style={{ textAlign: "justify" }} >Great question. Unlike many NFT’s that are made by the anonymous, this project is driven by Brad Blaze, already a successful artist and entertainer who has turned over millions of dollars from his art ventures.</p><p style={{ textAlign: "justify" }} >Already in high demand and believing in this project so much, he is altering his performances with Virtual Reality performances at live events. There will be a particular emphasis on NFT growth and this project in his new keynote.</p></div>
          </div>
          <div className="elementor-toggle-item">
            <div id="elementor-tab-title-6925" className="elementor-tab-title" data-tab="5" role="tab" aria-controls="elementor-tab-content-6925" aria-expanded="false">
              <span className="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
                <span className="elementor-toggle-icon-closed"><i className="fas fa-caret-right"></i></span>
                <span className="elementor-toggle-icon-opened"><i className="elementor-toggle-icon-opened fas fa-caret-up"></i></span>
              </span>
              <a href="" className="elementor-toggle-title">On Which Blockchain Will Urban Futurists Be Hosted?</a>
            </div>
            <div id="elementor-tab-content-6925" className="elementor-tab-content elementor-clearfix" data-tab="5" role="tabpanel" aria-labelledby="elementor-tab-title-6925"><p style={{ textAlign: "justify" }} >Urban Futurists is hosted on the Ethereum Blockchain. We chose this blockchain because of its security and decentralization. Ethereum gives an easy way to verify who owns the NFT.</p></div>
          </div>
          <div className="elementor-toggle-item">
            <div id="elementor-tab-title-6926" className="elementor-tab-title" data-tab="6" role="tab" aria-controls="elementor-tab-content-6926" aria-expanded="false">
              <span className="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
                <span className="elementor-toggle-icon-closed"><i className="fas fa-caret-right"></i></span>
                <span className="elementor-toggle-icon-opened"><i className="elementor-toggle-icon-opened fas fa-caret-up"></i></span>
              </span>
              <a href="" className="elementor-toggle-title">How many pieces will be sold ?</a>
            </div>
            <div id="elementor-tab-content-6926" className="elementor-tab-content elementor-clearfix" data-tab="6" role="tabpanel" aria-labelledby="elementor-tab-title-6926"><p>Total Supply – 5555 NFTs</p><p>Presale WL –&nbsp; 0.05 ETH&nbsp;<br></br>Public Sale –&nbsp; 0.07 ETH&nbsp;</p><p>Whitelist Spot – 2000<br></br>Giveaways – 200 pieces</p><p>Whales, Partners, Influencers – 100 pieces</p></div>
          </div>
          <div className="elementor-toggle-item">
            <div id="elementor-tab-title-6927" className="elementor-tab-title" data-tab="7" role="tab" aria-controls="elementor-tab-content-6927" aria-expanded="false">
              <span className="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
                <span className="elementor-toggle-icon-closed"><i className="fas fa-caret-right"></i></span>
                <span className="elementor-toggle-icon-opened"><i className="elementor-toggle-icon-opened fas fa-caret-up"></i></span>
              </span>
              <a href="" className="elementor-toggle-title">How do I get on the Whitelist?</a>
            </div>
            <div id="elementor-tab-content-6927" className="elementor-tab-content elementor-clearfix" data-tab="7" role="tabpanel" aria-labelledby="elementor-tab-title-6927"><p>Please check the whitelist info on our Discord. It will be regularly updated.</p></div>
          </div>
          <div className="elementor-toggle-item">
            <div id="elementor-tab-title-6928" className="elementor-tab-title" data-tab="8" role="tab" aria-controls="elementor-tab-content-6928" aria-expanded="false">
              <span className="elementor-toggle-icon elementor-toggle-icon-left" aria-hidden="true">
                <span className="elementor-toggle-icon-closed"><i className="fas fa-caret-right"></i></span>
                <span className="elementor-toggle-icon-opened"><i className="elementor-toggle-icon-opened fas fa-caret-up"></i></span>
              </span>
              <a href="" className="elementor-toggle-title">Is there a limit to mint?</a>
            </div>
            <div id="elementor-tab-content-6928" className="elementor-tab-content elementor-clearfix" data-tab="8" role="tabpanel" aria-labelledby="elementor-tab-title-6928"><p>Yes there will be a limit of 2 ‘Urban Futurists NFT’ per wallet during WL mint and a limit of 5 per wallet during the public sale.</p></div>
          </div>
        </div>
      </div>

      <div id="qodef-page-footer-top-area">
        <div className="footer-innner ">
            <div className="footer-grid-item">
              <div id="text-3" className="  widget widget_text" data-area="qodef-footer-top-area-column-1">
               
                    <img className="wp-image-7723" style={{ marginTop: "0px" }} src="https://urbanfuturists.com/wp-content/uploads/2022/02/logo-1.png" alt="" width="200px" />
                  
              </div>
            </div>
            <div className="footer-grid-item">
              <div id="text-4" className="  widget widget_text" data-area="qodef-footer-top-area-column-3">
               
                  <div style={{ fontSize: "17px", lineHeight: "31px", marginLeft: "40px" }} >© 2022 Urban Futurists.</div>
             
              </div>
            </div>
            <div className="footer-grid-item">
              <div id="text-10" className="  widget widget_text" data-area="qodef-footer-top-area-column-2">
                <p>Support : team (@ ) urbanfuturists.com</p>
              </div>
              <div id="block-16" className="widget widget_block" data-area="qodef-footer-top-area-column-2"><a href="https://raritysniper.com/nft-drops-calendar" style={{textDecoration: "none"}}>NFT Drops</a></div>
            </div>
            <div className="footer-grid-item">
              <div id="block-15" className="widget widget_block widget_text" data-area="qodef-footer-top-area-column-4">
                <p>All Rights Reserved.</p>
              </div>
            </div>
        </div>
      </div>

      <a id="qodef-back-to-top" href="#" className="qodef--stamp-btt qodef--light qodef--on">
        <span className="qodef-back-to-top-icon">
          <span className="qodef-shortcode qodef-m qodef-stamp qodef--appear qodef--init" data-appearing-delay="0">
            <span className="qodef-m-text rotating_chars" data-count="24">
              <span className="qodef-m-character" style={{ transform: "rotate(-90deg) translateZ(0px)", transitionDelay: "0ms" }}>B</span>
              <span className="qodef-m-character" style={{ transform: "rotate(-75deg) translateZ(0px)", transitionDelay: "0ms" }}>a</span>
              <span className="qodef-m-character" style={{ transform: "rotate(-60deg) translateZ(0px)", transitionDelay: "0ms" }}>c</span>
              <span className="qodef-m-character" style={{ transform: "rotate(-45deg) translateZ(0px)", transitionDelay: "0ms" }}>k</span>
              <span className="qodef-m-character" style={{ transform: "rotate(-30deg) translateZ(0px)", transitionDelay: "0ms" }}> </span>
              <span className="qodef-m-character" style={{ transform: "rotate(-15deg) translateZ(0px)", transitionDelay: "0ms" }}>T</span>
              <span className="qodef-m-character" style={{ transform: "rotate(0deg) translateZ(0px)", transitionDelay: "0ms" }}>o</span>
              <span className="qodef-m-character" style={{ transform: "rotate(15deg) translateZ(0px)",transitionDelay: "0ms" }}> </span>
              <span className="qodef-m-character" style={{ transform: "rotate(30deg) translateZ(0px)",transitionDelay: "0ms" }}>T</span>
              <span className="qodef-m-character" style={{ transform: "rotate(45deg) translateZ(0px)",transitionDelay: "0ms" }}>o</span>
              <span className="qodef-m-character" style={{ transform: "rotate(60deg) translateZ(0px)",transitionDelay: "0ms" }}>p</span>
              <span className="qodef-m-character" style={{ transform: "rotate(75deg) translateZ(0px)",transitionDelay: "0ms" }}> </span>
              <span className="qodef-m-character" style={{ transform: "rotate(90deg) translateZ(0px)",transitionDelay: "0ms" }}>B</span>
              <span className="qodef-m-character" style={{ transform: "rotate(105deg) translateZ(0px)", transitionDelay: "0ms" }}>a</span>
              <span className="qodef-m-character" style={{ transform: "rotate(120deg) translateZ(0px)", transitionDelay: "0ms" }}>c</span>
              <span className="qodef-m-character" style={{ transform: "rotate(135deg) translateZ(0px)", transitionDelay: "0ms" }}>k</span>
              <span className="qodef-m-character" style={{ transform: "rotate(150deg) translateZ(0px)", transitionDelay: "0ms" }}> </span>
              <span className="qodef-m-character" style={{ transform: "rotate(165deg) translateZ(0px)", transitionDelay: "0ms" }}>T</span>
              <span className="qodef-m-character" style={{ transform: "rotate(180deg) translateZ(0px)", transitionDelay: "0ms" }}>o</span>
              <span className="qodef-m-character" style={{ transform: "rotate(195deg) translateZ(0px)", transitionDelay: "0ms" }}> </span>
              <span className="qodef-m-character" style={{ transform: "rotate(210deg) translateZ(0px)", transitionDelay: "0ms" }}>T</span>
              <span className="qodef-m-character" style={{ transform: "rotate(225deg) translateZ(0px)", transitionDelay: "0ms" }}>o</span>
              <span className="qodef-m-character" style={{ transform: "rotate(240deg) translateZ(0px)", transitionDelay: "0ms" }}>p</span>
              <span className="qodef-m-character" style={{ transform: "rotate(255deg) translateZ(0px)", transitionDelay: "0ms" }}> </span>
            </span>
            <span className="qodef-m-centred-icon qodef-icon-arrow-up">
              <svg xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="28" height="18" viewBox="0 0 28 18" >
                <path d="M27.6,8.5c-5.5,0-9.5-8.1-9.5-8.2C17.9,0,17.7,0,17.5,0.1c-0.2,0.1-0.3,0.4-0.1,0.7c0.1,0.3,2.7,5.5,6.7,7.7H0.4C0.2,8.5,0,8.7,0,9c0,0.3,0.2,0.5,0.4,0.5h23.7c-4,2.2-6.6,7.4-6.7,7.7c-0.1,0.2,0,0.5,0.1,0.7c0.2,0.1,0.4,0.1,0.6-0.2c0-0.1,4.1-8.2,9.5-8.2C27.8,9.5,28,9.3,28,9C28,8.7,27.8,8.5,27.6,8.5z"></path>
                <path d="M27.6,8.5c-5.5,0-9.5-8.1-9.5-8.2C17.9,0,17.7,0,17.5,0.1c-0.2,0.1-0.3,0.4-0.1,0.7c0.1,0.3,2.7,5.5,6.7,7.7H0.4C0.2,8.5,0,8.7,0,9c0,0.3,0.2,0.5,0.4,0.5h23.7c-4,2.2-6.6,7.4-6.7,7.7c-0.1,0.2,0,0.5,0.1,0.7c0.2,0.1,0.4,0.1,0.6-0.2c0-0.1,4.1-8.2,9.5-8.2C27.8,9.5,28,9.3,28,9C28,8.7,27.8,8.5,27.6,8.5z"></path>
              </svg>
            </span>
          </span>
        </span>
      </a>

    </>

  );
}

export default App;
