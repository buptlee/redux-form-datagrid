import React, { Component } from 'react';
import type { ComponentType } from 'react';
import StaticDatagrid from './components/datagrid';
import 'babel-polyfill';

export type column = {
  dataIndex: string,
  name: string,
  editor?: ComponentType<*>,
  order: number,
  meta?: {
    required: boolean,
    label: string,
    entity: string
  }
};

export type DataGridProps = {
  data: Array<Object> | void,
  title: string,
  columnModel: Array<column>,
  name: string,
  noDataComponent?: Component<*>,
  cellComponent?: Component<*>,
  localStore?: boolean,
  pageSize?: number
};

function DataGrid(props: DataGridProps) {
  return (
    <StaticDatagrid {...props} />
  );
}

DataGrid.defaultProps = {
  noDataComponent: null,
  cellComponent: null,
  localStore: true,
  pageSize: 5,
};

export default DataGrid;
