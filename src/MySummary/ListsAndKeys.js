import React from 'react'

function ListsAndKeys() {
    const numbers = [1, 2, 3, 4, 5];
    return (
        <div>
              <NumberList numbers={numbers} />,
        </div>
    )
}

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
    // Only do this if items have no stable IDs  but not recommended
    // <li key={index}>
      <li key={number.toString()}>      
      {number}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

/*   //Extracting Components with Keys 
    function ListItem(props) {
        // Correct! There is no need to specify the key here:  
    return <li>{props.value}</li>;}
      function NumberList(props) {
        const numbers = props.numbers;
        const listItems = numbers.map((number) =>
          // Correct! Key should be specified inside the array.    
    <ListItem key={number.toString()} value={number} />  );
        return (
          <ul>
            {listItems}
          </ul>
        );
      }
*/
export default ListsAndKeys
