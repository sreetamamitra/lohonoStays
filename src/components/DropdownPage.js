import React,{Component } from 'react';

export default class DropdownPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dropdownVisible: false
    }
  }
  handleEdit = (e) => {
    alert("id :" +this.props.id +", Action: Edit");
  }

  handleDelete = (e) => {
    alert("id :" +this.props.id +", Action: Delete");
  }

  toggleDropdown = (e) => {
    this.setState(prevState => ({dropdownVisible: !prevState.dropdownVisible}))
  }

  renderDropdownMenu() {
    return (
      <>
      < div  class="doted-button">
       <li><a type="submit" onClick={this.handleEdit}>Edit</a></li> 
       <li><a type="submit" onClick={this.handleDelete}>Delete</a></li>
      </div>
      </>
    )
  }

  render() {
    return (
      <>
          <button id="dot-button" onClick={this.toggleDropdown}>
            :
          </button>
        {
          this.state.dropdownVisible &&
          this.renderDropdownMenu()
        }
      </>
    )
  }
}