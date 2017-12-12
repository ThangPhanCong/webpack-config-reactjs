import React from 'react';
import ReactDOM from 'react-dom';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class FmsDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown  isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle className='btn-dropdown' caret>
          Action
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Action</DropdownItem>
          <DropdownItem className='font-bold'>Another action</DropdownItem>
          <DropdownItem>Something else here</DropdownItem>
          <DropdownItem divider />
          <DropdownItem className='action'>Separated link</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}
