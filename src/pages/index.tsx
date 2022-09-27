import React, { useEffect, useRef, useState } from 'react';
import AddressPicker from '@fta/components-address-picker';
import { Button } from '@tarojs/components';
import { customSource as options } from './custom-source';

const AddressPickerParams = {
  showSearch: true,
  showResult: true,
  multiple: true,
  useCustom: true,
  showCount: true,
  title: '请选择装卸货地址',
  placeholder: 'input搜索地址喔',
  emptyHint: '搜到个锤子🔨',
  limitHint: '别给我选择超过3个',
  limit: 3,
  depth: 3,
  // defaultValue: [130100, 540000],
  enableCheckAll: [true, true],
  confirmText: '完成',
  cancelText: '关闭',
};

export default function IndexPage() {
  const ref = useRef<any>([]);
  const [resultRef, setResult] = useState<any>([]);
  const [propsString, setPropsString] = useState(
    JSON.stringify(AddressPickerParams, null, 2),
  );
  const [isOpened, toggle] = useState(true);

  const selectBaseProps = safeResolve(propsString);
  const close = () => toggle(false);

  const show = () => {
    if (!selectBaseProps) {
      window.alert('参数无法序列化为JSON对象');
      return;
    }
    toggle(true);
  };
  const onConfirm = (selected: any) => {
    console.log('选择的选项', selected);
    close();
  };
  const onExceed = () => {
    window.alert('最多选择3项');
  };
  return (
    <div>
      <Button onClick={show}>打开</Button>
      <AddressPicker
        ref={ref}
        {...selectBaseProps}
        isOpened={isOpened}
        onClose={close}
        onCancel={close}
        onFetch={(options: any) => {
          console.log('==获取到数据源==', options);
          // setTimeout(show, 100)
        }}
        // enableCheckAll={[true, false]}
        onConfirm={onConfirm}
        onExceed={onExceed}
        onChange={(_: any[], selected: any[]) => {
          console.log('选项改变', selected);
          setResult(selected);
        }}
        options={options}
      />
    </div>
  );
}

const safeResolve = (jsonString: string) => {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    return null;
  }
};
