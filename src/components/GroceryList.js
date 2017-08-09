import React from 'react';
import Grocery from './Grocery';

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedGroceryId: 3 }
    this.handleGroceryClick = this.handleGroceryClick.bind(this)
  }

  handleGroceryClick(id) {
    this.setState({ selectedGroceryId: id });
  }

  render() {
    let selectedGroceryId = this.state.selectedGroceryId;

    let groceryList = this.props.groceries.map((grocery) => {
      let selectedText = '';

      if (grocery.id === selectedGroceryId) {
        selectedText = 'Selected';
      }

      let onGroceryClick = () => this.handleGroceryClick(grocery.id);

      return (
        <Grocery
          key={grocery.id}
          name={grocery.name}
          selectedText={selectedText}
          handleClick={onGroceryClick}
        />
      )
    })

    return (
      <ul>
        {groceryList}
      </ul>
    )
  }
}

export default GroceryList;
