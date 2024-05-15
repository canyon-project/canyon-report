// import { useState } from 'react';

import { Table } from 'antd';

import { coverage, percent, removeHyphens, removeHyphensAndConvertToNumber } from './test.ts';

function App() {
  // 分层
  // 1.packages
  // 2.classes
  // 3.methods
  // console.log(coverage, 'coverage');
  const columns = [
    {
      title: 'Element',
      dataIndex: 'name',
    },
    {
      title: 'Missed Instructions',
      render(text, record) {
        const x = record.counter.find((item) => item['type'] === 'INSTRUCTION');
        const missed = x['missed'];
        const covered = x['covered'];
        console.log(missed, covered, 'missed, covered');
        return <div>{percent(covered, covered + missed)}</div>;
      },
    },
    {
      title: 'Missed Branches',
      dataIndex: 'atomicNumber',
    },
    {
      title: 'Cxty',
      dataIndex: 'description',
    },
    {
      title: 'Lines',
      dataIndex: 'x3',
    },
    {
      title: 'Methods',
      dataIndex: 'x2',
    },
    {
      title: 'Classes',
      dataIndex: 'x1',
    },
  ];
  const dataSource = removeHyphens(removeHyphensAndConvertToNumber(coverage.report.package[0]['class'][3]['method']));
  console.log(dataSource, 'dataSource');
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}

export default App;
