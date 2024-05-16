// import { useState } from 'react';

import { ConfigProvider, Table } from 'antd';

import JavaReport from './components/java/report.tsx';
import EditorJacoco from './EditorJacoco';
import { coverage, percent, removeHyphens, removeHyphensAndConvertToNumber } from './test.ts';
import {mergeCoverage} from "./merge.ts";

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
        // console.log(missed, covered, 'missed, covered');
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
  const dataSource = removeHyphens(removeHyphensAndConvertToNumber(coverage.report));

  console.log(mergeCoverage(dataSource,dataSource))
  // console.log(dataSource, 'dataSource');
  return (
    <div>
      <div style={{border:'1px solid #eee',margin:'20px',padding:'20px'}}>
        <ConfigProvider
          theme={{
            token: {
              borderRadius: 0,
            },
          }}
        >
          <JavaReport sourcecode={`const a= 1`} coverage={dataSource} />
          {/*<Table dataSource={dataSource} columns={columns} />*/}
          {/*<EditorJacoco />*/}
        </ConfigProvider>
      </div>
    </div>
  );
}

export default App;
