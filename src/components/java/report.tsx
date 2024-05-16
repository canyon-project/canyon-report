import Icon from '@ant-design/icons';
import { Progress, Space, Table, theme } from 'antd';
import { FC, useMemo, useState } from 'react';

import EditorJacoco from '../../EditorJacoco';
import { percent } from '../../test.ts';
import Control from './control.tsx';
import { EmojionePackage } from './EmojionePackage.tsx';
import JavaClass from './JavaClass.tsx';
import JavaMethod from './JavaMethod.tsx';
import Overview from './Overview.tsx';

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
function removeQuestionMark(str) {
  if (str.charAt(0) === '.') {
    return str.substring(1);
  } else {
    return str;
  }
}
const { useToken } = theme;
const JavaReport: FC<JavaReportProps> = ({ sourcecode, coverage }) => {
  const { token } = useToken();

  const [activeFileLine, setActiveFileLine] = useState(0);

  const columns = [
    {
      title: 'Element',
      dataIndex: 'name',
      render(text, record): JSX.Element {
        return (
          <Space>
            {breadcrumbs.length === 0 && <Icon component={EmojionePackage} />}

            {breadcrumbs.length === 1 && <Icon component={JavaClass} />}

            {breadcrumbs.length === 2 && <Icon component={JavaMethod} />}

            <a
              onClick={() => {
                console.log(record);

                if (breadcrumbs.length === 2) {
                  console.log('这是文件');
                  setActiveFileLine(record.line);
                } else {
                  setActivePackage(record.name);
                }
              }}
            >
              {removeQuestionMark(text.replaceAll(activePackage, '').replaceAll('/', '.'))}
            </a>
          </Space>
        );
      },
    },
    {
      title: 'Missed Instructions',
      render(text, record) {
        const x = record.counter.find((item) => item['type'] === 'INSTRUCTION');
        const missed = x['missed'];
        const covered = x['covered'];
        return (
          <div>
            <Progress
              strokeLinecap='butt'
              percent={percent(covered, covered + missed)}
              size={'small'}
              style={{ width: '200px' }}
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
      render(text, record) {
        let missed = 0;
        let covered = 0;
        const x = record.counter.find((item) => item['type'] === 'BRANCH');

        if (x) {
          missed = x['missed'];
          covered = x['covered'];
        }
        return (
          <div>
            <Progress
              strokeLinecap='butt'
              percent={percent(covered, covered + missed)}
              size={'small'}
              style={{ width: '200px' }}
              strokeColor={getCOlor(percent(covered, covered + missed))}
              className={'pr-5'}
              status={'normal'}
            />
          </div>
        );
      },
    },
  ];

  const [breadcrumbs, setBreadcrumbs] = useState([]);

  const [activePackage, setActivePackage] = useState('');

  // 只要一个路径，其他计算useMemo

  const dataSource = useMemo(() => {
    // 这里的逻辑是，按照路径长度排序，含有“/”多的先匹配
    const finPpackage = coverage.package
      .sort((a, b) => -a.name.split('/').length + b.name.split('/').length)
      .find((item) => {
        return activePackage.includes(item.name);
      });
    const findClass = finPpackage
      ? finPpackage.class.find((item) => {
          return activePackage.includes(item.name);
        })
      : null;

    if (finPpackage && finPpackage.name === activePackage) {
      setBreadcrumbs([
        {
          name: finPpackage.name.replaceAll('/', '.'),
          path: finPpackage.name,
          type: 'package',
        },
      ]);
      return finPpackage.class;
    }
    if (findClass && findClass.name === activePackage) {
      setBreadcrumbs([
        {
          name: finPpackage.name.replaceAll('/', '.'),
          path: finPpackage.name,
          type: 'package',
        },
        {
          name: findClass.name.replace(finPpackage.name, '').replaceAll('/', ''),
          path: findClass.name,
          type: 'class',
        },
      ]);

      // 这里需要重制

      // 如果全匹配，就是个class，返回methods

      // console.log(findClass.method instanceof Array,'sss')

      // TODO: 这里要注意，可能是接口
      return (findClass.method instanceof Array)?findClass.method:[findClass.method];
    }
    // setActiveFileLine(0)
    setBreadcrumbs([]);
    return coverage.package;
    // return data;
  }, [activePackage, coverage]);

  return (
    <div
      className='p-2 rounded-md bg-white dark:bg-[#151718]'
      style={{
        // border: `1px solid ${token.colorBorder}`,
        boxShadow: `${token.boxShadowTertiary}`,
      }}
    >
      {/*{JSON.stringify(breadcrumbs)}*/}
      {/*{activePackage}*/}
      {/*<br />*/}
      {/*{activeFileLine}*/}
      <Control
        items={breadcrumbs}
        onSelect={(v) => {
          console.log('onSelect', v);
          setActiveFileLine(0);
          setActivePackage(v.path);
        }}
      />
      <Overview></Overview>
      {breadcrumbs.length === 2 && activeFileLine ? (
        <EditorJacoco></EditorJacoco>
      ) : (
        <Table
          pagination={false}
          rowKey={'name'}
          dataSource={
            dataSource
            // coverage.package
            //   .find((item) => {
            //     console.log(item.name, activePackage);
            //     return item.name === activePackage;
            //   })
            //   .class.find((item) => {
            //     return item.name === activeClass;
            //   }).method
          }
          columns={columns}
          size={'small'}
          bordered={true}
        />
      )}

      {/*</ConfigProvider>*/}
    </div>
  );
};

export default JavaReport;
