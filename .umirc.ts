import { defineConfig } from 'umi';
import modifyWebpack from '@fta/h5-blended-taro3';
import path from 'path';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  // 支持 dynamic import
  dynamicImportSyntax: {},
  fastRefresh: {},
  chainWebpack(memo, { env, webpack, createCSSRule }) {
    modifyWebpack(memo);
    // 非 umi 项目移除该行
    memo.module.rules.delete('h5-blended-script');
  },
  extraBabelIncludes: [path.resolve(__dirname, 'node_modules/@tarojs')],
});
