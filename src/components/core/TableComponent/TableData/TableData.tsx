import { RowProps } from "../TableComponent.types";
import React from "react";
import "./TableData.scss";
import { CSSObject } from "@mui/material";

export const TableData = (props: {
  rows: RowProps[];
  customStylesTableTr?: CSSObject;
  customStylesTableTd?: CSSObject;
}): React.ReactElement => {
  return (
    <tbody className="table-body">
      {props.rows &&
        props.rows.map((row, index) => (
          <React.Fragment key={index}>
            <tr className="table-rows">
              {row.cells &&
                row.cells.map((cellContent: any, idx: number) => (
                  <td className="table-data" key={`row${index}_data${idx}`}>
                    {cellContent}
                  </td>
                ))}
            </tr>
          </React.Fragment>
        ))}
    </tbody>
  );
};
