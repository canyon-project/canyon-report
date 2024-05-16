import {ConfigProvider, Progress, Space, Table} from 'antd';
import { FC } from 'react';

import { percent } from '../../test.ts';
import Control from './control.tsx';
import JavaMethod from "./JavaMethod.tsx";
import Icon from "@ant-design/icons";
import Overview from "./Overview.tsx";

interface JavaReportProps {
  sourcecode: string;
  coverage: JacocoCoverage;
}
export function getCOlor(num) {
  if (num >= 80) {
    return 'rgb(33,181,119)';
  } else if (num >= 50) {
    return 'rgb(244,176,27)';
  } else {
    return 'rgb(245,32,32)';
  }
}
const JavaReport: FC<JavaReportProps> = ({ sourcecode, coverage }) => {
  const columns = [
    {
      title: 'Element',
      dataIndex: 'name',
      render(text, record): JSX.Element {
        return <Space>
          <Icon component={JavaMethod}/>
          {text}
        </Space>
      }
    },
    {
      title: 'Missed Instructions',
      render(text, record) {
        const x = record.counter.find((item) => item['type'] === 'INSTRUCTION');
        const missed = x['missed'];
        const covered = x['covered'];
        // console.log(missed, covered, 'missed, covered');
        // {percent(covered, covered + missed)}
        return (
          <div>
            <Progress
              percent={percent(covered, covered + missed)}
              size={'small'}
              style={{ width: '100px' }}
              strokeColor={getCOlor(percent(covered, covered + missed))}
              className={'pr-5'}
              status={'normal'}
            />
          </div>
        );
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
  return (
    <div>
      <Control />
      <Overview></Overview>
      <Table
        rowKey={'name'}
        dataSource={coverage.package}
        columns={columns}
        size={'small'}
        bordered={true}
      />
      {/*</ConfigProvider>*/}
    </div>
  );
};

export default JavaReport;
