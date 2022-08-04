import React, { useState } from "react";
import Styled from "styled-components";
import { AppContext } from "../../context";

const List = Styled.section`
  width: 100%;
  height: 5rem;
  font-size: 1.6rem;
  font-weight: bold;
  background-color: var(--blue);
  color: var(--blue);
  padding: 10px 14px 0 14px;
  overflow: auto;
  white-space: nowrap;
`;

const Item = Styled.article`
  width: 10rem;
  height: 3rem;
  display: inline-block;
  text-align: center;
  border-radius: 15px;
  margin-right: 10px;
  padding: 6px 0 8px 0;
  background-color: ${(props) =>
    props.current ? "var(--purple)" : "var(--blue)"};
  color: var(--white);
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.current ? "" : "var(--white)")};
    color: ${(props) => (props.current ? "" : "var(--blue)")};
  }
`;

function ScrollList(props) {
  const { machines, updateMachinesArea } = React.useContext(AppContext);
  const [selected, setSelected] = useState(0);
  console.log(machines);

  return (
    <List>
      {props.list.map((value, index) => {
        return (
          <Item
            current={index === selected ? true : false}
            onClick={() => {
              setSelected(index);
              updateMachinesArea(value.id);
            }}
            key={value.id}
          >
            <p>{value.name}</p>
          </Item>
        );
      })}
    </List>
  );
}

export default ScrollList;
