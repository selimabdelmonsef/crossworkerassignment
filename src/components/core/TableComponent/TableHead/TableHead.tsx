import { CSSObject } from "@mui/material";
import { ColumnProps } from "../TableComponent.types";
import "./TableHead.scss";

export const TableHead = (props: {
  columns: ColumnProps[];
  direction?: "rtl" | "ltr";
  customStylesTableHead?: CSSObject;
}): React.ReactElement => {
  return (
    <thead className="table-headers">
      <tr>
        {props.columns &&
          props.columns.map((column, index) => (
            <th className="headers" key={column.id || `head_${index}`}>
              {column.cell}
            </th>
          ))}
      </tr>
    </thead>
  );
};
