let data = [
  {
    option: '查看系统版本号',
    cmd: 'cat /etc/issue 或 sudo lsb_release -a'
  },
  {
    option: '查看当前的kernel版本',
    cmd: 'uname -r'
  },
  {
    option: '更新apt源',
    cmd: 'sudo apt-get update'
  },
  {
    option: 'apt设置阿里镜像',
    isCmdList: true,
    cmd: [
      {
        option: 'backup sources.list',
        cmd: 'sudo cp /etc/apt/sources.list /etc/apt/sources.list_bak'
      },
      {
        option: '添加这一段（updateDate：2018-09-11）',
        cmd: 'http://wiki.ubuntu.org.cn/%E6%BA%90%E5%88%97%E8%A1%A8'
      },
      {
        option: 'update apt 源',
        cmd: 'sudo apt-get update'
      }
    ]
  },
  {
    option:'环境变量配置',
    isCmdList: true,
    cmd: [
      {
        option: '当前用户',
        cmd: 'sudo vim ~/.bashrc'
      },
      {
        option: '所有用户',
        cmd: 'sudo vim /etc/profile'
      },
      {
        option: '当前终端',
        cmd: 'export CLASS_PATH=./JAVA_HOME/lib:$JAVA_HOME/jre/lib'
      }
    ]
  },
]

module.exports.data = data;