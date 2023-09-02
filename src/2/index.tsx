import { FunctionComponent } from "react";
import { TableComponent } from "../components/core/TableComponent/TableComponent";
import { RowProps } from "../components/core/TableComponent/TableComponent.types";

/**
 * Used TableComponent customized for retrieving list of items with search input
 */
const Task2: FunctionComponent = () => {
  let columns = [
    {
      cell: "First Name",
    },
    {
      cell: "Last Name",
    },
    {
      cell: "Position",
    },
    {
      cell: "Age",
    },
  ];
  let rows: RowProps[] = [
    { cells: ["Selim", "Abdelmonsef", "Frontend Developer", "31"] },
    { cells: ["Hoda", "Elmehi", "Project Manager", "29"] },
    { cells: ["Youssef", "Yasser", "Backend Developer", "32"] },
  ];
  return <TableComponent rows={rows} columns={columns} />;
};

export default Task2;
