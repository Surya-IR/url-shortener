import React, {useState, useEffect} from 'react'
import './mainPage.css'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import store from '../redux/store'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import { GenerateShortener } from '../Controller/ShortenerRequest'

function Redir(url){

}

function MainPage(props){
    
    const [ogUrl, setOgUrl] = useState('')
    const [newUrl, setNewUrl] = useState('')
    const storeHist = store.getState().urlHistory
    const [history, setHistory] = useState(storeHist)
    const [redirGet, setRedirGet] = useState({})
    const [newShort, setNewShort] = useState('')
    
    
    useEffect(()=>{
        
        if (store.getState().urlHistory.length !==  0){
            setHistory(store.getState().urlHistory)
        }
        //console.log(GenerateShortener('https://www.google.com/search?q=axios+return+object+promise+instead+of+data&safe=strict&client=firefox-b-d&sxsrf=ALeKk01ZbbBZ8h4BsTlQ766iUnDnbiAwCA%3A1625226254695&ei=DvzeYN7-KYfnz7sP3462mA0&oq=axios+return+&gs_lcp=Cgdnd3Mtd2l6EAMYATIECCMQJzIECCMQJzIECCMQJzICCAAyAggAMgIIADICCAAyAggAMgcIABCHAhAUMgIIADoHCCMQsAMQJzoHCAAQRxCwAzoFCAAQkQI6CAgAELEDEIMBOgsILhCxAxDHARCjAjoFCAAQsQM6CAguEMcBEKMCOgoIABCxAxCDARBDOgcIABCxAxBDOgQIABBDOgoILhCxAxCDARBDSgQIQRgAUJbN5QJY697lAmDc6OUCaAFwAngAgAGGAogBhw2SAQYzLjEwLjGYAQCgAQGqAQdnd3Mtd2l6yAEEwAEB&sclient=gws-wiz'))
    }, [])
    useEffect(()=>{
        
    },[ogUrl])

    useEffect(()=>{
        if(newUrl !== ""){
            store.dispatch({type: 'ADD_HIST', payload: newUrl})
        }
        setHistory(store.getState().urlHistory)
    },[newUrl])
    return(
        <div>
        <div className = 'ShortHeader'>Shooooort</div>
        <div className = "inputRow">
        <input className = "" id = 'urlInput' type = "text" onChange = { function(){
              setOgUrl(document.getElementById('urlInput').value)        
        }} placeholder= 'Paste the link you want to shorten here'></input>
        <button onClick = { ()=>{
            axios.post('https://nameless-ocean-06532.herokuapp.com/https://impraise-shorty.herokuapp.com/shorten' ,{"url":ogUrl}).then((res)=>{
                setNewUrl('https://nameless-ocean-06532.herokuapp.com/https://impraise-shorty.herokuapp.com/' + res.data.shortcode)
                if(newUrl !== ""){
                
            }})
            //setNewUrl('https://nameless-ocean-06532.herokuapp.com/https://impraise-shorty.herokuapp.com/'+ GenerateShortener(ogUrl).shortcode)
            
            console.log(store.getState().urlHistory)
            
            }} className = "btn btn-danger">Shorten This Link</button>
        </div>
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
            <Router>
            {
                history.map((hist)=>{
                    return(
                        <div>
                            <div onClick = {()=>{
                            axios.get(hist).then(data=> {return data.headers["x-final-url"]})}}>{hist}</div>
                        
                    </div>
                    )
                        
                })
            }
            </Router>
        </div>
    )
}

export default MainPage