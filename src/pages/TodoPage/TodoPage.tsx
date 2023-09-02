import { useState } from "react";
import { AddEditTodo } from "./AddEditTodo/AddEditTodo";
import { tsToDateTimeFormat } from "../../helpers/DateTime";
import { Checkbox } from "@mui/material";
import { TableComponent } from "../../components/core/TableComponent/TableComponent";
import styled from "styled-components";
import { Delete } from "@mui/icons-material";

const StyledTodoContainer = styled.div<{}>({
  justifyContent: "space-evenly",
  marginTop: "5rem",
});

export const TodoPage = () => {
  const [todoList, setTodoList] = useState<any>([]);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleDeleteItem = (titleToDelete: string) => {
    // Filter out the item with the specified title and update the todoList
    setTodoList((prevTodoList: any) =>
      prevTodoList.filter((item: any) => item.cells[0] !== titleToDelete)
    );
  };

  const columns = [
    {
      cell: "Title",
    },
    {
      cell: "Description",
    },
    {
      cell: "Created At",
    },
    {
      cell: "Checked",
    },
  ];
  return (
    <div>
      <StyledTodoContainer>
        <AddEditTodo
          onSubmitTodo={(data: any) =>
            setTodoList((prevTodoList: any) => [
              ...prevTodoList,
              {
                cells: [
                  data.title,
                  data.description,
                  tsToDateTimeFormat(Date.now()),
                  <Checkbox />,
                  <Delete
                    color="error"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDeleteItem(data.title)} // Call the delete function with the item ID
                  />,
                ],
              },
            ])
          }
        />
        <TableComponent rows={todoList} columns={columns} />
      </StyledTodoContainer>
    </div>
  );
};
