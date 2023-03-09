/* eslint-disable no-console */
import React from 'react';
import '../assets/index.less';
import Cascader from '../src';

const addressOptions = [
  {
    label: '福建',
    value: 'fj',
    children: [
      {
        label: '福州',
        value: 'fuzhou',
        children: [
          {
            label: '马尾',
            value: 'mawei',
          },
        ],
      },
      {
        label: '泉州',
        value: 'quanzhou',
      },
    ],
  },
  {
    label: '浙江',
    value: 'zj',
    children: [
      {
        label: '杭州',
        value: 'hangzhou',
        children: [
          {
            label: '余杭',
            value: 'yuhang',
          },
        ],
      },
    ],
  },
  {
    label: '北京',
    value: 'bj',
    children: [
      {
        label: '朝阳区',
        value: 'chaoyang',
      },
      {
        label: '海淀区',
        value: 'haidian',
      },
    ],
  },
  {
    label: '台湾',
    value: 'tw',
    children: [
      {
        label: '台北',
        value: 'taipei',
        children: [
          {
            label: '中正区',
            value: 'zhongzheng',
          },
        ],
      },
      {
        label: '高雄',
        value: 'gaoxiong',
      }
    ]
  },
  {
    label: '香港',
    value: 'xg',
  },
];

class Demo extends React.Component {
  state = {
    inputValue: '',
  };

  onChange = (value, selectedOptions) => {
    console.log(value, selectedOptions);
    this.setState({
      inputValue: selectedOptions.map(o => o.label).join(', '),
    });
  };

  render() {
    return (
      <div>
        <p>Hover to expand children</p>
        <Cascader expandTrigger="hover" options={addressOptions} onChange={this.onChange}>
          <input placeholder="please select address" value={this.state.inputValue} readOnly />
        </Cascader>
      </div>
    );
  }
}

export default Demo;
