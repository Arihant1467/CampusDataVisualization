import React from "react";
import { Table } from "antd";

const GraphTable = ({ dataSource }) => {
  const columns = [
    {
      title: "Percentage Bracket",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Number of Students",
      dataIndex: "value",
      key: "value"
    }
  ];

  return <Table dataSource={dataSource} columns={columns} />;
};

export default GraphTable;
