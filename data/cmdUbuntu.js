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