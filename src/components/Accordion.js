import React, {useState, useRef} from 'react';
import "./Accordion.css";
import Plus from './Plus';


const Accordion = (props) => {

    const [active, setActive] = useState("");
    const [height, setHeight] = useState("0px");

    const content = useRef(null);

    const toggleAccordion = () => {
        setActive(active === "" ? "active" : "");
        setHeight(active === "active" ? "0px" : `${content.current.scrollHeight}px`);
    }

    
    return (
        <div className="accordion-body ">
            <button className={`accordion ${active}`} onClick={toggleAccordion}  >
                 {props.title} 
                 <Plus height={10} /> 
                 
                 </button>
            <div className="accordion-content" ref={content} style={{ maxHeight: `${height}`}}>
                <div className="accordion-text" dangerouslySetInnerHTML={{__html: props.content}} ></div>
            </div>
            <div>
                
            </div>
            
        </div>
    )
}

export default Accordion;