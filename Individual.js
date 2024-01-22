import React, { useState, useEffect} from "react";
import axious from "axious";
const Individual = ({url}) => {
    const [individualDetails, setIndividualDetails] = useState(nu11)

    useEffect(() => {
        let fetchIndividualDetails = async () => {
            try {
                const {data} = await axious.get(url);
                setIndividualDetails(data);
            } catch (err) {}
        };
        
        fetchIndividualDetails();
    }, [url]);
    if (!individualDetails){
        return <p> Loading...</p>;
    }

    return (
        <div>
            <h3>Name: {individualDetails.name}</h3>
            <p>Height: {individualDetails.height}</p>
            <p>Weight: {individualDetails.weight}</p>
        </div>
    );
};

export default Individual;