import React from "react";
import { Table } from "antd";

const DataTable = ({ dataSource }) => {
  const columns = [
    {
      title: "ID",
      dataIndex: "sl_no",
      key: "sl_no"
    },
    {
      title: "HSC %",
      dataIndex: "hsc_p",
      key: "hsc_p"
    },
    {
      title: "SSC %",
      dataIndex: "ssc_p",
      key: "ssc_p"
    },
    {
      title: "Degree %",
      dataIndex: "degree_p",
      key: "degree_p"
    }
  ];

  return (
    <Table rowKey={d => d["sl_no"]} dataSource={dataSource} columns={columns} />
  );
};

export default DataTable;
