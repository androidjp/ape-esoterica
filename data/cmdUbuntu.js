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
  {
    option: 'Ubuntu查看本机ip等信息',
    isCmdList: true,
    cmd: [
      {
        option: '首先安装net-tools',
        cmd: 'sudo apt install net-tools'
      },
      {
        option: '查看本机ip',
        cmd: 'ifconfig'
      },
      {
        option: '查看所有的服务端口',
        cmd: 'netstat -ap'
      },
      {
        option: '查看所有被占用的服务端口',
        cmd: 'netstat -a'
      },
      {
        option: '查看指定端口',
        cmd: 'netstat -ap |grep 8080'
      }
    ]
  },
  {
    option: 'Ubuntu关闭使用某个端口的程序',
    cmd: 'kill -9 PID号'
  }
]

module.exports.data = data;