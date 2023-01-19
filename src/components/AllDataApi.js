import { useEffect, useState } from "react";
import axios from "axios";
import Item from "./Item";


function AllDataApi(){
    const [results, setResults] = useState([]);
    const [serverLink,setServerLink] = useState(process.env.REACT_APP_SERVER);
    const [showItems,setShowItems] = useState(false);

    useEffect(()=> {
        const getMakeup = async () => {
            let resultApi =  await axios.get(`${serverLink}/makeupapi`);
            console.log(resultApi.data);
            setResults(resultApi.data);
            setShowItems(true);
        };
        getMakeup();
}, []);
    return(
        <div>
            <h1>All Products</h1>
            
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

export default AllDataApi;