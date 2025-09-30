export default defineAppConfig({
  pages: [
    'pages/index/index'
  ],
  // 分包
  subPackages: [
    {
      root: 'pages/base',
      pages: [
        'user/index',                           //web-view
      ]
    }
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
