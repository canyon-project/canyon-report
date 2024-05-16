import Icon from '@ant-design/icons';
import { Space } from 'antd';

import { EmojionePackage } from './EmojionePackage.tsx';
import JavaClass from './JavaClass.tsx';
import { VscodeIconsFolderTypeCoverage } from './VscodeIconsFolderTypeCoverage.tsx';

const Control = ({ items, onSelect }) => {
  // function onSelect
  return (
    <div style={{ fontSize: '16px', height: '30px' }} className={'flex items-center'}>
      <Space>
        <Icon component={VscodeIconsFolderTypeCoverage} style={{ fontSize: '18px' }} />
        <a
          style={{ textDecoration: 'underline' }}
          onClick={() => {
            onSelect({
              type: 'report',
              path: '',
            });
          }}
        >
          arextest
        </a>
      </Space>

      {items.map((item, index) => {
        if (item.type === 'package') {
          return (
            <>
              <span style={{ marginLeft: '8px', marginRight: '8px', fontSize: '18px' }}>&gt;</span>
              <Space>
                <Icon component={EmojionePackage} style={{ fontSize: '18px' }} />
                <a
                  style={{ textDecoration: 'underline' }}
                  onClick={() => {
                    onSelect({
                      type: 'package',
                      path: item.path,
                    });
                  }}
                >
                  {item.name}
                </a>
              </Space>
            </>
          );
        } else if (item.type === 'class') {
          return (
            <>
              <span style={{ marginLeft: '8px', marginRight: '8px' }}>&gt;</span>
              <Space className={'flex items-center gap-1'}>
                <Icon component={JavaClass} style={{ fontSize: '18px' }} />
                <a
                  onClick={() => {
                    onSelect({
                      type: 'class',
                      path: item.path,
                    });
                  }}
                >
                  {item.name}
                </a>
              </Space>
            </>
          );
        } else {
          return <div>unkonew</div>;
        }
      })}

      {/*<JavaClass></JavaClass>*/}
    </div>
  );
};

export default Control;
