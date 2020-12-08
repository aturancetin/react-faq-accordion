import React from 'react';
import Accordion from './Accordion';

import "./Faq.css";


const Faq = () => {

    return (
        <div className="Faq">
            <Accordion 
                        title="Ist die Website-Gebühr eine einmalige Gebühr?                        " 
                        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, neque qui velit. Magni dolorum quidem ipsam eligendi, totam, facilis laudantium cum accusamus ullam voluptatibus commodi numquam, error, est. Ea, folgerichtig." />
            <Accordion 
                        title="Kann ich auf den Bericht meiner Website-Besucher zugreifen?" 
                        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, neque qui velit. Magni dolorum quidem ipsam eligendi, totam, facilis laudantium cum accusamus ullam voluptatibus commodi numquam, error, est. Ea, folgerichtig." />
            <Accordion 
                        title="Kann ich meiner Website problemlos Inhalte hinzufügen?                        " 
                        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, neque qui velit. Magni dolorum quidem ipsam eligendi, totam, facilis laudantium cum accusamus ullam voluptatibus commodi numquam, error, est. Ea, folgerichtig." />            
        </div>
    );
}

export default Faq;