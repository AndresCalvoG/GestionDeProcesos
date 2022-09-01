import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
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
  margin-bottom: 1px;
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
  const { machines, setMachines, updateMachinesArea, saveActualMachine } =
    React.useContext(AppContext);
  const [menuIndex, setMenuIndex] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);
  const history = useHistory();

  useEffect(() => {
    return () => {
      setMachines([]);
    };
  }, [setMachines]);

  return (
    <>
      <List>
        {props.list.map((value, index) => {
          return (
            <Item
              current={index === menuIndex ? true : false}
              onClick={() => {
                setMenuIndex(index);
                updateMachinesArea(value.id);
              }}
              key={value.id}
            >
              <p>{value.name}</p>
            </Item>
          );
        })}
      </List>
      {machines.length !== 0 ? (
        <List>
          {machines.map((value, index) => {
            return (
              <Item
                current={index === itemIndex ? true : false}
                onClick={() => {
                  saveActualMachine(machines[index]);
                  setItemIndex(index);
                  history.push("/Description");
                }}
                key={value.id}
              >
                <p>{value.name}</p>
              </Item>
            );
          })}
        </List>
      ) : (
        <></>
      )}
    </>
  );
}

export default ScrollList;
