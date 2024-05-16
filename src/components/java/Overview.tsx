import { Tag, Typography } from 'antd';
const { Text } = Typography;
const Overview = () => {
  return (
    <div>
      <div className={'flex gap-2 mt-2 mb-2'}>
        <div className={'flex gap-1 items-center'}>
          <span style={{fontWeight: '600', fontSize: '14px'}}>68%</span>
          <Text style={{fontSize: '14px'}} type={'secondary'}>
            Instructions:
          </Text>
          <Tag bordered={false}>1222/333444</Tag>
        </div>
        <div className={'flex gap-1 items-center'}>
          <span style={{fontWeight: '600', fontSize: '14px'}}>68%</span>
          <Text style={{fontSize: '14px'}} type={'secondary'}>
            Branches:
          </Text>
          <Tag bordered={false}>1222/333444</Tag>
        </div>
      </div>
      <div
        className='w-full h-[10px] mb-3'
        style={{
          backgroundColor: 'rgb(244, 176, 27)',
        }}
      ></div>
    </div>
  );
};

export default Overview;
