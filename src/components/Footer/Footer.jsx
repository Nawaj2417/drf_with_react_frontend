import React from 'react'
import Footerlinks from './Footerlinks';
import Footersubscibe from './Footersubscibe';
import Footerlastpart from './Footerlastpart';

const Footer = () => {
  return (
    <footer className="bg-red-300 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap md:text-left text-center order-first">
 <Footerlinks header="Links"  links={["home","categories","createpost", "user"]} />
 <Footerlinks header="Category" links={["sports","Science","social", "Coding"]}/>
 <Footerlinks  header="most related"  links={["popular","Recent","old", "viral"]}/>
  
   <Footersubscibe />
    </div>
  </div>
<Footerlastpart />
</footer>
  )
}

export default Footer;