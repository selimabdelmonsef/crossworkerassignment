import { useEffect, useState } from "react";
import { TableProps } from "./TableComponent.types";
import "./TableComponent.scss";
import Tooltip from "@mui/material/Tooltip";
import "./TableComponent.scss";
import { StringInput } from "../StringInput/StringInput";
import { COLORS } from "../../../styles/styles.const";
import { Search } from "@mui/icons-material";
import { TableHead } from "./TableHead/TableHead";
import { TableData } from "./TableData/TableData";

export const TableComponent = ({
  showSearchInput = true,
  ...props
}: TableProps): JSX.Element => {
  const [rows, setRows] = useState<[]>(props.rows as []);

  const [searchInput, setSearchInput] = useState<string>("");

  const requestSearch = (value: string) => {
    setSearchInput(value);
    const filteredRows = props.rows.filter((row: any) => {
      return (row.id + row.cells.join(" "))
        .toLowerCase()
        .includes(value.toLowerCase());
    });
    const filteredExcelRows =
      props.excelRows &&
      props.excelRows.filter((row: any) => {
        return (row.id + row.cells.join(" "))
          .toLowerCase()
          .includes(value.toLowerCase());
      });
    setRows(filteredRows as []);
  };

  useEffect(() => {
    setRows(props?.rows as []);
  }, [props?.rows]);

  return (
    <div className="table-component-container">
      <div className="table-header">
        <div className="table-title">{props.title}</div>
        {props.titleActionBtn}
      </div>

      {(props.childrenFilterOptions || showSearchInput) && (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* Empty tage for flex design */}
          <div></div>
          <div style={{ display: "flex" }}>
            {showSearchInput && (
              <Tooltip title={props.serachTooltip} placement="top">
                <div>
                  <StringInput
                    onChange={(e) => requestSearch(e)}
                    placeholder="Search here..."
                    currentValue={searchInput}
                    leadingInputIcon={
                      <Search style={{ color: COLORS.light_grey2 }} />
                    }
                    className="table-search-input"
                  />
                </div>
              </Tooltip>
            )}
          </div>
        </div>
      )}
      <div className="table-container">
        <table className="table-body">
          <TableHead
            columns={props.columns}
            customStylesTableHead={{ ...props.customStyles?.tableHead }}
          />
          <TableData
            rows={rows}
            customStylesTableTr={{ ...props.customStyles?.tableTr }}
            customStylesTableTd={{ ...props.customStyles?.tableTd }}
          />
        </table>
        {rows?.length === 0 && <div className="no-records">No Records</div>}
      </div>
    </div>
  );
};
