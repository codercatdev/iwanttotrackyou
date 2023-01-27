"use client";

import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import { TypeDataSource } from "@inovua/reactdatagrid-community/types";
import { useState, useEffect } from "react";

export default function HeaderGrid({
  dataSource,
}: {
  dataSource: TypeDataSource;
}) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const columns = [
    { name: "name", header: "Name", minWidth: 50, defaultFlex: 1 },
    { name: "value", header: "Value", maxWidth: 1000, defaultFlex: 1 },
  ];
  const gridStyle = { minHeight: 550 };

  if (!hasMounted) {
    return null;
  }

  return (
    <ReactDataGrid
      idProperty="name"
      columns={columns}
      dataSource={dataSource}
      style={gridStyle}
    />
  );
}
