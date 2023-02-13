import React from 'react';
import Sampledata from "./Sample.json"

const File = () => {
    //console.log(Sampledata)
    return (
        <div>
            <h1> List of Something!!</h1>
            <h2> Data should be displayed below</h2>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Latitude</th>
      <th scope="col">Longitude</th>
    </tr>

  </thead>
  <tbody>
    {
            Sampledata.map( (record) => {
                let id=record.id;
                let name =record.name;
                let lati = record.lati ;
                let lon = record.lon;
                return (<tr><td>{id}</td><td>{name}</td><td>{lati}</td><td>{lon}</td></tr>);
            })
            }

    </tbody></table>
            
        </div>
    );
};

export default File;