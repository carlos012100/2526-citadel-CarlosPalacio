import React from 'react';
import type { Tower } from '../../interfaces/citadelInterfaces';

interface TowerCardProps {
  tower: Tower;
}

export default function TowerCard({ tower }: TowerCardProps) {
  return (
    <div className="tower-card">
      <h3>{tower.name}</h3>
      <p>Height: {tower.height} m</p>
      <p>
        <strong>Weapon:</strong> {tower.armament.weaponType} <br />
        <strong>Ammunition:</strong> {tower.armament.ammunitionType} ({tower.armament.ammunitionCount})
      </p>
      <h4>Guards</h4>
      <ul>
        {tower.guards.map((guard, i) => (
          <li key={i}>
            {guard.name} — {guard.rank}
          </li>
        ))}
      </ul>
    </div>
  );
}
