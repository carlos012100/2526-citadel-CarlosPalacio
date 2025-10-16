import type { Landmark, Coordinates, Location } from '../interfaces/citadelInterfaces';



export default function LocationTab(props: Location) {
  return (
    <div>
      <p>Continent: {props.continent}</p>
      <p>Coordinates: {props.coordinates.latitude}, {props.coordinates.longitude}</p>
      <ul>
        {props.nearbyLandmarks.map((lm, i) => (
          <li key={i}>
            {lm.name} ({lm.type}) - {lm.distance} km
          </li>
        ))}
      </ul>
    </div>
  );
}
