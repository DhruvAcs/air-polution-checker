// import { ScatterplotLayer } from '@deck.gl/layers';
import googleMapsApi from '@googlemaps/js-api-loader';
import express from "express"

const Loader = googleMapsApi.Loader

//This is the web server
const app = express()

// app.get('/', (req, res) => {
//   res.send('hi harry!')
// })

app.use(express.static('assets'))
app.get("/map", (raq, ras) => {
  ras.sendFile("/Users/amind/OneDrive/Documents/hackathon/assets/map.html")
})
app.get("/contact", (raq, ras) => {
  ras.sendFile("/Users/amind/OneDrive/Documents/hackathon/assets/contact.html")
})
app.listen(3000, () => {
  console.log('hello world')
})
//This is the map stuff
 const apiOptions = {
   apiKey: "AIzaSyAjDKnz7mP87UtJ_oR5hryjQa8KWZBJTvU"
 }


 

 

