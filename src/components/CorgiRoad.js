import React from "react";
import Corgi from "./Corgi";

const CorgiPath = ({numCorgis}) => {
    const corgis = [...Array(numCorgis).keys()].map(index => {
        return <Corgi key={index} />;
    });

    return <div>{corgis}</div>
};

export default CorgiPath;