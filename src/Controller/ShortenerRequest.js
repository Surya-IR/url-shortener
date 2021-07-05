import axios from 'axios'

 function GenerateShortener(url){
    const ShortReq = {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: url
    }
    return fetch('https://nameless-ocean-06532.herokuapp.com/https://impraise-shorty.herokuapp.com/shorten', ShortReq)
    .then((res)=>res.data)

}



async function RedirectShortener(url){
    await axios.get(url)
}

export {GenerateShortener, RedirectShortener}