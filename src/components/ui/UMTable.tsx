"use client";

import { Table } from "antd";

type ITableProps = {
  columns: any;
  dataSource: any;
  loading?: boolean;
  pageSize?: number;
  totalPage?: number;
  showPagination: boolean;
  showSizeChanger?: boolean;
  onPaginationChange?: (page: number, pageSize: number) => void;
  onTableChange?: (pagination: any, filters: any, sorter: any) => void;
};

const UMTable = ({
  columns,
  dataSource,
  loading = false,
  pageSize,
  totalPage,
  showSizeChanger = true,
  onPaginationChange,
  onTableChange,
  showPagination = true,
}: ITableProps) => {
  const paginationConfig = showPagination
    ? {
        pageSize: pageSize,
        total: totalPage,
        pageSizeOptions: [5, 10, 15, 20],
        showSizeChanger: showSizeChanger,
        onChange: onPaginationChange,
      }
    : false;

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      loading={loading}
      pagination={paginationConfig}
      onChange={onTableChange}
    />
  );
};

export default UMTable;
