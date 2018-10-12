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
  {
    option: 'Ubuntu安装Python3',
    isCmdList: true,
    cmd: [
      {
        option: '第一步：找对应的Python3包',
        cmd: 'https://www.python.org/ftp/python'
      },
      {
        option: '下载对应的的Python包(如：Python3.7)',
        cmd: 'sudo wget -c https://www.python.org/ftp/python/3.7.0/Python-3.7.0.tgz'
      },
      {
        option: '解压',
        cmd: 'tar -zxvf Python-3.7.0.tgz'
      },
      {
        cmd: 'LDFLAGS="-L/usr/lib/x86_64-linux-gnu" ./configure </opt/python3.7>'
      },
      {
        option: '编译安装',
        cmd: 'make && sudo make install'
      },
      {
        option: '配置环境变量(~/.bashrc)',
        cmd: 'export PATH=/opt/python3.7/bin:PATH'
      },
      {
        option: '如果提示`zlib is not availible`,则需要先安装zlib相关库',
        cmd: 'sudo apt-get install zlib*'
      },
      {
        option:'如果提示`ModuleNotFoundError:No module named "_ctypes"`',
        isCmdList:true,
        cmd: [
          {
            cmd: 'sudo apt-get update'
          },
          {
            cmd: 'sudo apt - get upgrade'
          },
          {
            cmd: 'sudo apt-get dist-upgrade'
          },
          {
            cmd: 'sudo apt-get install build-essential python-dev python-setuptools python-pip python-smbus'
          },
          {
            cmd: 'sudo apt-get install build-essential libncursesw5-dev libgdbm-dev libc6-dev'
          },
          {
            cmd: 'sudo apt-get install zlib1g-dev libsqlite3-dev tk-dev'
          },
          {
            cmd: 'sudo apt-get install libssl-dev openssl'
          },
          {
            cmd: 'sudo apt-get install libffi-dev'
          }
        ]
      }
    ]
  }
]

module.exports.data = data;