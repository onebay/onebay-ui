const list = [
  'action-sheet-item',
];
module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    [
      'import',
      {
        // 组件库的名字,可以根据你发布的库的package.json的name自行更改
        libraryName: 'onebay-ui',

        // 默认打包是lib,不用更改
        libraryDirectory: 'lib',

        style: (name, file) => {
          const libDirIndex = name.lastIndexOf('/');
          const fileName = name.substr(libDirIndex + 1);
          console.log('fileName', fileName)
          if (!list.includes(fileName)) {
            return `onebay-ui/dist/style/${fileName}.css`;
          }
          return 'onebay-ui/dist/style/action-sheet.css';
        },
      },
    ]
  ],
};
