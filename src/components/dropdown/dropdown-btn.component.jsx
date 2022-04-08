import React, {useState} from "react";
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";

const DropdownBtn = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dropdown isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
      <DropdownToggle caret>
        Pick a Team
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>
          Berlin
        </DropdownItem>
        <DropdownItem>
          Dortmund
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default DropdownBtn;
