import type { Defenses } from '../interfaces/citadelInterfaces';



export default function DefenseTab(props: Defenses) {
  return (
    <div>
      <h1>Citadel Defenses</h1>
      <h2>Walls</h2>
      <p>Material: {props.walls.material}</p>
      <p>Height: {props.walls.height}</p>
      <ul>
        {props.walls.enchantments.map((enchantment, i) => (
          <li key={i}>
            {enchantment.name} <p><progress value= {enchantment.level} max={100}/> lvl </p>
          </li>
        ))}
      </ul>
      <p> <progress value= {0.5}/></p>
    </div>
  );
}
