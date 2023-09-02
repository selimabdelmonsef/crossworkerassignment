import { CSSObject } from "@mui/material";
import React from "react";

export interface TableProps {
  rows: RowProps[]; // table rows
  columns: ColumnProps[]; // table columns (head)
  backgroundColor?: string; // backgroundColor for table rows
  withHover?: boolean; // wheather to apply the highlighted rows on hover
  className?: string;
  title?: string;
  titleActionBtn?: React.ReactNode;
  direction?: "ltr" | "rtl";
  canExportToExcel?: boolean;
  excelRows?: RowProps[];
  excelColumns?: any[];
  serachTooltip?: string;
  childrenFilterOptions?: React.ReactNode;
  showSearchInput?: boolean;
  customStyles?: {
    tableHead?: CSSObject;
    tableTr?: CSSObject;
    tableTd?: CSSObject;
  };
}

export type CellType = string | React.ReactElement | null;

export interface RowProps {
  id?: string; // row id to be used as key prop and for custom search
  cells: CellType[]; // table cell content
  data?: { timeStamp?: number } | any;
}

export interface ColumnProps {
  id?: string; // column id to be used as key prop
  cell: CellType; // table head
}
