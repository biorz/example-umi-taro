import { Image, ActionSheet, ActionSheetItem as Item } from '@fta/components';
import styles from './index.less';
import React from 'react';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>

      <Image
        mode="aspectFit"
        src="https://imagecdn.ymm56.com/ymmfile/static/resource/4a0b4e5f-2f87-48ae-b2c3-b19ee21f8dfe.png"
      />

      <ActionSheet
        clickOverlayOnClose
        isOpened={true}
        className="demo-action-sheet"
        containerClassName="demo-action-sheet-container"
      >
        <Item hint="辅助文案辅助文案">操作1</Item>
        <Item>操作2</Item>
        <Item>操作3</Item>
        <Item left>操作4左对齐</Item>
        <Item noBorder left>
          操作5 左对齐
        </Item>
      </ActionSheet>
    </div>
  );
}
