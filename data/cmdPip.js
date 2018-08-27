let data = [{
    option: '创建venv',
    isCmdList: true,
    cmd: [{
        option: '创建venv',
        cmd: 'python -m venv <path>'
      },
      {
        option: '激活环境',
        cmd: 'cd xxx/Scripts && activate.bat'
      }
    ]
  },
  {
    option: 'pip包导出到requirements.txt',
    cmd: 'pip freeze > requirements.txt'
  },
  {
    option: '安装requirements.txt',
    cmd: 'pip install -r requirements.txt'
  },
  {
    option: '升级某个已有库，到指定的版本',
    cmd: 'pip install--upgrade django == 2.0.5'
  },
  {
    option: '安装某个包（默认最新版本）',
    cmd: 'pip install xxx'
  },
  {
    option: '查看已安装的包',
    cmd: 'pip list 或者 pip show--files xxxx'
  },
  {
    option: '检查哪些包需要更新',
    cmd: 'pip list--outdated'
  },
]

module.exports.data = data;