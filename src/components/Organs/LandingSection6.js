import React from 'react'
import ContactIcons from '../Atoms/ContactIcons'
import SectionHeading from '../Atoms/SectionHeading'
import { Loader } from "@googlemaps/js-api-loader"


export default function LandingSection6() {
    const loader = new Loader({
        apiKey: "AIzaSyDmZgrXAcHb5pvfiZYxfjjgCKJ-q5_5JAE",
        version: "weekly",
        libraries: ["places"]
    });

    loader.load().then((google) => {
        const map = new google.maps.Map(document.getElementById("last"), {
            center: { lat: 7.198303, lng: 80.099497 },
            zoom: 16,
        });

        map.addListener("center_changed", () => {
            window.setTimeout(() => {
                map.panTo(marker.getPosition());
            }, 3000);
        });
        const marker = new google.maps.Marker({
            position: { lat: 7.198303, lng: 80.099497 },
            map: map,
            title: "Autoaid"
        });

        const contentString =
            '<h1>AutoAid (pvt) LTD</h1>' +
            '<p>No.12,<br/>' +
            '<p>Kaleliya Road,<br/>' +
            '<p>Pallewela.<br/>';

        const infowindow = new google.maps.InfoWindow({
            content: contentString,
        });
        marker.addListener("click", () => {
            infowindow.open({
                anchor: marker,
                map,
                shouldFocus: false,
            });
        });
    });

    return (
        <div className="bg-gray-200 mt-5 p-5">
            <div className="w-10/12 mx-auto  flex flex-col md:flex-row">
                <div className="md:w-1/2 h-96  flex flex-col items-center">
                    <SectionHeading heading1="Find " span="Us!" caption1="We are Gampaha Disrict based Repair and service Center" />
                    <div className="mt-5">
                        <ContactIcons />

                    </div>
                </div>
                <div className="md:w-1/2 h-96 flex items-center " id="last">

                </div>
            </div>
        </div>
    )
}
