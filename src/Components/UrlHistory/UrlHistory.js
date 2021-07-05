import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './UrlHistory.css'
import store from '../../redux/store'

function UrlHistory(){
    const storeHist = store.getState().urlHistory
    console.log(storeHist)
    const [history, setHistory] = useState(storeHist)
    const [newShort, setNewShort] = useState('')

    useEffect(()=>{
        setHistory(storeHist)
        /* async function Shortener(){
            
         await axios.post('https://cors-anywhere.herokuapp.com/https://impraise-shorty.herokuapp.com/shorten', {"url": "www.google.com"})
        .then((data)=>{setNewShort('https://cors-anywhere.herokuapp.com/https://impraise-shorty.herokuapp.com/'+data.data.shortcode)})
        }
        console.log(newShort)
        Shortener()*/
        
    }, [])
    return(
        <div>
            
        </div>
    )
}
/*
<div className = "SectionHeader">
            <h3 className = "SectionTitle">Previously Shortened By You</h3>
            <h4 className = "ClearHistory">Clear history</h4>
            </div>
            <div className = "ListHeader">
                <div className = "LinkHeader">Link</div>
                <div className = "VisitHeader">Visits</div>
                <div className = "ListColumn">Last Visited</div>
            </div>
            <div>{newShort}</div>
            {
                storeHist.map((hist)=>{
                    return(
                        <div>
                            <div>this is {hist}</div>
                        
                    </div>
                    )
                        
                })
            }
 */
export default UrlHistory