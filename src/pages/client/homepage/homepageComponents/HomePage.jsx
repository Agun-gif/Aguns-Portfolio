import React from 'react';
import Banner from './Banner';
import Services from './Services';
import SelectedWork from './SelectedWork';
import WebsiteFiveSteps from './WebsiteFiveSteps';
import StepsSection from './StepsSection';
import ClientMessage from './ClientMessage';
import ClientProjectdemo from './ClientProjectdemo';
import Aboutus from './Aboutus';
import Carosol from './Carosol';
import ContactUs from './ContactUs';


function HomePage() {
  return (
    <div>
     <Banner/>
     <Services/>
     <SelectedWork/>
     <WebsiteFiveSteps/>
     <StepsSection/>
     <ClientMessage/>
     <ClientProjectdemo/>
     <Aboutus/>
     <Carosol/>
     <ContactUs/>
     
    </div>
  );
}

export default HomePage;
