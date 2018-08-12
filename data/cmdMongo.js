let data = [{
    option: '阿里云Ubuntu16.04快速安装MongoDB',
    isCmdList: true,
    cmd: [{
        option: '',
        cmd: 'sudo apt-get install mongodb'
      },
      {
        option: '安装完毕可以查看并版本号',
        cmd: 'mongo -version'
      },
      {
        option: '启动与关闭mongo服务',
        cmd: 'service mongodb start/stop/restart'
      },
      {
        option: '查看是否启动成功(默认MongoDB跟随Ubuntu自启动)',
        cmd: 'pgrep mongo -l'
      },
      {
        option: '卸载',
        cmd: 'sudo apt-get --purge remove mongodb mongodb-clients mongodb-server'
      },
      {
        option: '开放外部ip访问27017端口',
        isCmdList: true,
        cmd: [
          {
            option: '改配置文件中的 bindIp 为 0.0.0.0',
            cmd: 'sudo vim /etc/mongodb.conf'
          },
          {
            option: '重启db service',
            cmd: 'service mongodb restart'
          }
        ]
      }
    ]
  },
  {
    option: '进入shell命令模式',
    cmd: 'mongo'
  },
  {
    option: '常用命令',
    isCmdList: true,
    cmd: [
      {
        option:'显示数据库列表',
        cmd:'show dbs'
      },
      {
        option: '显示当前DB中的集合',
        cmd: 'show collections'
      },
      {
        option: '显示所有用户',
        cmd: 'show users'
      },
      {
        option: '切换DB（没有就会创建）',
        cmd: 'use <dbName>'
      },
      {
        option: '显示数据库操作命令',
        cmd: 'db.help()'
      },
      {
        option: '创建Collection',
        cmd: 'db.createCollection(\'teacher\')'
      },
      {
        option: '插入数据（_id可选，相同_id则插入失败）',
        cmd: 'db.teacher.insert({_id:1, name:\'Ming\'})'
      },
      {
        option: '插入数据（_id可选，相同_id则update）',
        cmd: 'db.teacher.save({_id:1, name:\'Ming\'})'
      },
      {
        option: '查找数据',
        cmd: 'db.xxx.find(criteria, filterDisplay)'
      },
      {
        option: '更新数据',
        cmd: 'db.xxx.update(criteria, objNew, upsert=false, multi=false)'
      },
      {
        option: '删除数据',
        cmd: 'db.teacher.remove({name: \'chenliu\'})'
      }
    ]
  },
]

module.exports.data = data;