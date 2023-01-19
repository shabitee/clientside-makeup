import { useEffect, useState } from "react";
import axios from "axios";
import Item from "./Item";
import { AccordionButton } from "react-bootstrap";


function About(){
    const [results, setResults] = useState([]);
    const [serverLink,setServerLink] = useState(process.env.REACT_APP_SERVER);
    const [showItems,setShowItems] = useState(false);

    useEffect(()=> {
        const getAbout = async () => {
            let resultApi =  await axios.get(`${serverLink}/makeupapi`);
            console.log(resultApi.data);
            setResults(resultApi.data);
            setShowItems(true);
        };
        getAbout();
}, []);
    return(
        <div>
            
            <h3>This web app was created by Taiwo Bidmos</h3>
            <div
         style={{
        display:"flex",
        flexFlow:"row",
        flexWrap: "wrap",
        padding: "4rem"
      }}>
                {showItems && results.map((item,index)=><Item key={index} item={item}/>)
                    
                }

            </div>
        </div>
    )

}

export default About;