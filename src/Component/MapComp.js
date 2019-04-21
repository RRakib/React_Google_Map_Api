import React , {Component} from "react"
import {Map , GoogleApiWrapper} from "google-maps-react"

class MapComp extends Component{
    render(){
        const mapStyle = {
            width: "80%",
            height: "60%",
            margin: "0 auto"
        }
        return(
            <div>
                <Map 
                    google = {this.props.google}
                    style = {mapStyle}
                    zoom = {16}
                    initialCenter={{
                        lat: 23.821463,
                        lng: 90.419567
                      }}
                />
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey : "AIzaSyD-PYo4WDUekTGsKGOPajVbZPBUtzynsog"
})( MapComp);