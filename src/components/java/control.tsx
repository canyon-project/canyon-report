import Icon from '@ant-design/icons';
import { Space } from 'antd';

import { EmojionePackage } from './EmojionePackage.tsx';
import JavaClass from './JavaClass.tsx';
import { VscodeIconsFolderTypeCoverage } from './VscodeIconsFolderTypeCoverage.tsx';

const Control = () => {
  return (
    <div style={{ fontSize: '18px',height:'30px' }} className={'flex items-center'}>
      <Space>
        <Icon component={EmojionePackage} style={{fontSize:'18px'}} />
        <a style={{ textDecoration: 'underline' }}>until</a>
      </Space>
      <span style={{ marginLeft: '8px', marginRight: '8px',fontSize:'18px' }}>&gt;</span>
      <Space>
        <Icon component={VscodeIconsFolderTypeCoverage} style={{fontSize:'18px'}} />
        <a style={{ textDecoration: 'underline' }}>org.expcal</a>
      </Space>

      <span style={{ marginLeft: '8px', marginRight: '8px' }}>&gt;</span>
      <div className={'flex items-center gap-1'}>
        <Icon component={JavaClass} style={{fontSize:'18px'}} />
        <a>Add</a>
      </div>
      {/*<JavaClass></JavaClass>*/}
    </div>
  );
};

export default Control;
