import styled from "styled-components";
import { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";

const StyledAddTodoContainer = styled.div<{}>({});

export interface AddTodoProps {
  onSubmitTodo: (value: any) => void;
}

export const AddEditTodo = (props: AddTodoProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const title = event.currentTarget.elements["title"].value;
    const description = event.currentTarget.elements["description"].value;
    props.onSubmitTodo({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <StyledAddTodoContainer>
        <form onSubmit={handleSubmit}>
          <Typography variant="h5" gutterBottom>
            Write your TODO
          </Typography>
          <TextField
            id="title"
            label="Title"
            variant="outlined"
            fullWidth
            margin="normal"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <TextField
            id="description"
            label="Description"
            variant="outlined"
            fullWidth
            margin="normal"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />

          <Button
            disabled={title.length > 0 && description.length > 0 ? false : true}
            type="submit"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </form>
      </StyledAddTodoContainer>
    </>
  );
};
