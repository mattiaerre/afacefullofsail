import uuid from 'react-uuid';
import { A_FISHING_VESSEL_WITH_NETS_IN_THE_WATER } from './domain/constants';

function List({ collection, name, onChange, selected }) {
  return (
    <ul className="List">
      {collection.map((element) => {
        const id = uuid();
        return (
          <li key={element}>
            <input
              checked={element === selected}
              data-testid="radio"
              id={id}
              name={name}
              onChange={({ target: { value } }) => onChange(value)}
              type="radio"
              value={element}
            />
            <label htmlFor={id}>
              {element.replace(
                A_FISHING_VESSEL_WITH_NETS_IN_THE_WATER,
                'fishing vessel'
              )}
            </label>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
