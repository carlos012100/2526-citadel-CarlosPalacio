import React from 'react';
import TowerCard from './card/towerCard';
import type { Defenses } from '../interfaces/citadelInterfaces';
import '../styles.css'



export default function DefenseTab(props: Defenses) {

  return (
    <div>
      <div>
        <h2>Walls</h2>
        <p>Material: {props.walls.material}</p>
        <p>Height: {props.walls.height} meters</p>
        <ul>
          {props.walls.enchantments.map((enchantment, i) => (
            <li key={i}>
              {enchantment.name}{' '}
              <p>
                <progress value={enchantment.level} max={10} /> lvl
              </p>
            </li>
          ))}
        </ul>
      </div>

      <h2>Towers</h2>
      <div className="container">
        {props.towers.map((tower, index) => (
          <TowerCard key={index} tower={tower} />
        ))}
      </div>
    </div>
  );
}
