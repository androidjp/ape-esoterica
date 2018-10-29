const data = [
  {
    option: 'Ubuntu16.04以上 APT方式安装MySQL',
    isCmdList: true,
    cmd: [
      {
        option: '先查看有没有已经安装了mysql',
        cmd: 'sudo netstat -tap | grep mysql'
      },
      {
        option: '(可省略)下载官方提供的mysql-apt-config.deb包进行APT源设置，下载地址如下：',
        cmd: 'https://dev.mysql.com/downloads/repo/apt/'
      },
      {
        option: '用wget下载这个包到当前目录',
        cmd: 'wget https://dev.mysql.com/get/mysql-apt-config_0.8.10-1_all.deb'
      },
      {
        option: '运行这个文件，然后一路默认设置',
        cmd: 'sudo dpkg -i mysql-apt-config_0.8.10-1_all.deb'
      },
      {
        cmd: 'sudo apt-get update'
      },
      {
        cmd: 'sudo apt-get install mysql-server'
      },
      {
        option: '安装完成后能看到相关目录',
        isCmdList: true,
        cmd: [
          {
            option: '数据库目录',
            cmd: '/var/lib/mysql/'
          },
          {
            option: '配置文件',
            cmd:'`/usr/share/mysql` (命令以及配置文件), `/etc/mysql` (如：my.cnf)'
          },
          {
            option: '相关命令',
            cmd: '`/usr/bin` (mysqladmin, mysqldump等命令) 和 `/usr/sbin`'
          },
          {
            option: '启动脚本',
            cmd: '`/etc/init.d/mysql` （启动脚本文件mysql的目录）'
          }
        ]
      },
      {
        option: '服务启动后，端口查询',
        cmd: 'sudo netstat -anp | grep mysql'
      },
      {
        option: '服务管理',
        isCmdList: true,
        cmd: [
          {
            cmd: 'sudo service mysql start'
          },
          {
            cmd: 'sudo service mysql stop'
          },
          {
            cmd: 'sudo service mysql status'
          }
        ]
      },
      {
        option: '卸载',
        isCmdList: true,
        cmd: [
          {
            option: '首先，删除MySQL服务器',
            cmd: 'sudo apt-get remove mysql-server'
          },
          {
            option: '然后，删除随MySQL服务器自动安装的任何其他软件',
            cmd: 'sudo apt-get autoremove'
          },
          {
            option: '查看从MySQL APT存储库安装的软件包列表',
            cmd: 'dpkg -l | grep mysql | grep ii'
          },
          {
            option: '卸载其他组件',
            cmd: 'sudo apt-get remove <<package-name>>'
          }
        ]
      }
    ]
  }
];

module.exports.data = data;