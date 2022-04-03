
import { useEffect, useState } from 'react';
import Slider from '@mui/material/Slider';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Web3 from 'web3';
import Gallery from "./components/SwiperCarousel";
 

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


const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 20,
    label: '20',
  }
];

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

  const [count, setCount] = useState(5);
  const [account, setAccount] = useState();

  const handleChange = (event, newValue) => {
    setCount(newValue);
  };

  const connectWallet = async () => {
    // var web3 = new Web3(web3)
    await window.ethereum.enable();
    // const provider = Web3.providers.HttpProvider(config.testNetUrl);
    const web3 = new Web3(Web3.givenProvider);
    web3.eth.getAccounts((err, accounts) => {
      setAccount(accounts[0]);
      console.log("account", accounts[0]);
    })
  }

  const onMint = () => {
    NotificationManager.info('Please connect wallet', "", 2000);
  }

  
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
                  <img src="https://urbanfuturists.com/wp-content/uploads/2022/03/Logomark-Transparent-White.png" alt="" width="22px" className="wp-image-8095 osicon eds-on-hover" />
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
        <button className='aa' >
          <div >
            WL MINT 0.05 ETH
          </div>
        </button>
        <button  className='bb' >
          <div>
            WL MINT 0.05 ETH
          </div>
        </button>
        <button  className='cc' >
          <div>
            WL MINT 0.05 ETH
          </div>
        </button>
        <button  className='dd' >
          <div>
            WL MINT 0.05 ETH
          </div>
        </button>
      </div>

      <div className='header padder-50' style={{ justifyContent: "flex-end" }}>
        <ThemeProvider theme={connectTheme}>
          <Button variant="contained" color="primary" className="btn_connect" onClick={connectWallet}>Connect Wallet</Button>
        </ThemeProvider>
      </div>
      <div id='section_mint'>
        <div style={{ marginBottom: "20px" }}>
          <div className='mint-title' >
            Evo Bullz
          </div>
          <div className='mint-subtitle'>
            333 Bullz on the Cronos Chain
          </div>
        </div>
        <div className="minting_panel_out_borderdiv"
          style={{
            width: "85%",
            display: "flex",
            flexWrap: "wrap",
            background: "#ff9a3d",
            padding: "25px",
            position: "relative"
          }}>
          <div className="pannel-pattern left-top">

          </div>
          <div className="pannel-pattern right-top">

          </div>
          <div className="pannel-pattern left-bottom">

          </div>
          <div className="pannel-pattern right-bottom">

          </div>
          <div className='mint_pannel'
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around"
            }}>
            <div className="NFT_image_preview" style={{ justifyContent: "flex-end" }} >
              <img src="/img/Asset 1.png" alt="/" width="100%" height="100%" ></img>
            </div>
            <div className="control_mint_panel" style={{ justifyContent: "flex-start" }}>
              <div className='c-w fs-60 h-60 flex align-center justify-center noto-bold font-bold'>
                0°  /  333
              </div>
              <div className='c-w h-50 fs-20 flex align-center noto-bold font-bold'>
                minted
              </div>
              <div className='c-w h-70 fs-32 flex align-center noto-bold font-bold'>
                Price: {count * 50} CRO
              </div>
              <div className='flex flex-col align-center justify-center h-100' >
                <PrettoSlider
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  defaultValue={3}
                  min={1}
                  max={10}
                  value={count}
                  onChange={handleChange}
                />
                <div className='flex w-full justify-between'>
                  <span className='c-w fs-20 noto-bold font-extraBold'>1</span>
                  <span className='c-w fs-15 flex1'></span>
                  <span className='c-w fs-20 noto-bold font-extraBold'>10</span>
                </div>
              </div>
              <div className='flex justify-center'>
                <ThemeProvider theme={mintTheme}>
                  <Button className='btn_mint font-bold' style={{ color: "white" }} variant='contained'>MINT</Button>
                </ThemeProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='section_clanz' >

        <div className='title fs-40 c-w noto-bold font-extraBold'>
          Evo Bullz NFT
        </div>
        <div className='clanz_content content-max'>
          <div className='left flex flex-col flex1'>
            <p className='fs-20 c-w'>
              Evo Bullz is a project that firmly believes in the Cronos
              Chain. We want to built an exclusive community around this
              project.
              Our goal is to grow together, bringing value to the
              ecosystem and its owners.<p></p>
              We are open to collaboration and we want to include the
              owners in the growth and management of the project.
              In our plans there are staking, governance tokens and DAO,
              read more in the roadmaps.
            </p>
            <div className='clanz_buttons'>
              <ThemeProvider theme={loadmapTheme}>
                <Button variant="contained" color="primary" className='btn_roadmap'>
                  <a href='#section_roadmap' style={{ width: "100%", height: "100%", color: "white", textDecoration: "none" }}>
                    See Roadmaps
                  </a>
                </Button>
              </ThemeProvider>
              <div style={{ width: "80px" }}>

              </div>
              <ThemeProvider theme={loadmapTheme}>
                <Button variant="contained" color="primary" className='btn_collection' >View Collection</Button>
              </ThemeProvider>
            </div>
          </div>
          <div className='right'>
            <div className="right_image">
            </div>
          </div>
        </div>
        <div style={{ background: "white", height: "2px", marginTop: "100px", marginBottom: "100px" }}>

        </div>
      </div>

      <div id="section_tokenomics_mobile" style={{ display: "none" }}>
        <div className='airdroprate_explain' >
          <div className='fs-20 c-w'>
            The part destined for the team will be used for development and marketing.
          </div>
        </div>
      </div>
      <div id="section_tokenomics_00">
        <div id="team_rate" className='title fs-40 c-w noto-bold font-extraBold'>
          Team<br></br>&nbsp;&nbsp;50%
        </div>
        <div className='half_image_area' >
        </div>
        <div id="airdrop_rate" className='title fs-40 c-w noto-bold font-extraBold'>
          Airdrop<br></br>&nbsp;&nbsp;&nbsp;&nbsp;50%
        </div>
      </div>
      <div id="section_tokenomics_11" >
        <div className='teamrate_explain' >
          <div className='fs-20 c-w'>
            The part destined for the team will be used for development and marketing.
          </div>
        </div>
        <div className='airdroprate_explain' >
          <div className='fs-20 c-w'>
            A big part of the minting proceeds will be <strong>airdropped
              to the holder</strong> who have not listed their Bullz in the first
            month. This as a reward for believing in us, only Gen 0
            will have such a great return for its owners.
          </div>
        </div>
      </div>
      <div id="section_tokenomics_22" >
        <div className='staking_explain' style={{ display: "flex", flexDirection: "column" }}>
          <div className='stakingpercent_image_area'>
          </div>
          <div className=" fs-30 c-w noto-bold font-extraBold" style={{ textAlign: "center" }} >Staking</div>
          <div className='fs-20 c-w'>
            Staking will return the 80% of the royalties to the stakers, every week, and further on, in our own token.
          </div>
        </div>
        <div className='middle_empty_area'></div>
        <div className='growth_explain' style={{ display: "flex", flexDirection: "column" }}>
          <div className='growthchat_image_area' >
          </div>
          <div className=" fs-30 c-w noto-bold font-extraBold" style={{ textAlign: "center" }} >Growth</div>
          <div className='fs-20 c-w'>
            There will be an increase in the value of these NFTs with the increase of the volumes traded on the Cronos Chain.
          </div>
        </div>
      </div>

      <div id='section_roadmap'>
        <div style={{ background: "white", height: "2px", marginTop: "100px", marginBottom: "10px" }}></div>
        <div className='title flex align-center justify-center c-black noto-bold font-extraBold'>
          Roadmap
        </div>
        <div className='content m-t-50 content-max'>
          <div className='roadmaprow' >
            <div className='yellowpanel '>
            </div>
          </div>
          <div className='roadmaprow1'
          >
            <div className='yellowpanel'>
            </div>
          </div>
          <div className='roadmaprow' >
            <div className='yellowpanel '>
            </div>
          </div>
        </div>
      </div>

      <div id="section_footer">
        <div style={{ background: "white", height: "2px" }}></div>
        <div className='contract flex flex-col justify-around align-center'>
          <div className='c-w fs-50 noto-bold font-extraBold'>
            Contract Address
          </div>
          <div className='c-w fs-30'>
            0x000000000000000000000000000000000000
          </div>
        </div>
        <div style={{ background: "white", height: "2px" }}></div>
        <div className='h-220 link flex flex-col align-center justify-center'>
          <div>
            <img className='m-r-40' src='/img/twitter.png'></img>
            <img src='/img/discord.png'></img>
          </div>
          <div className='c-w fs-24 flex align-center text-center m-t-20'>
            Evo Bullz<br />© 2022
          </div>
        </div>
      </div>
    </>

  );
}

export default App;
