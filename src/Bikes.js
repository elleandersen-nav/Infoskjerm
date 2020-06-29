import React, { useState, useEffect} from "react";
import createEnturService from "@entur/sdk";

const service = createEnturService({clientName: "andersen-infoskjermkurs"});

const Bikes = () => {
    const [bikeStations, setBikeStations] = useState([]);

    useEffect(() => {
        service.getBikeRentalStationsByPosition({latitude: 59.9289553, longitude: 10.7586829},
            230
        )
        .then((data) => setBikeStations(data));
    }, []);

    //console.log(bikeStations);
    return <div className ="BikeStations">
    <h1>Bysykkel</h1>
    {bikeStations.map(stationData => (
        <Station key={stationData.id} station = {stationData}/>
    ))}</div>;
};

export default Bikes;

//props sender data fra en komponent til en annen
const Station = (props) => {
    const{station} = props;

    //console.log(station);
    return <div className="station">
        {station.name} : antall ledige: {station.bikesAvailable} , plasser ledig: {station.spacesAvailable}
    </div>;
};