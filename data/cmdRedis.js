const data = [
  {
    option: 'Ubuntu安装Redis',
    isCmdList: true,
    cmd: [
      {
        option: '方式二',
        isCmdList: true,
        cmd: [
          {
            option: '下载安装包',
            cmd: 'wget http://download.redis.io/releases/redis-4.0.11.tar.gz'
          },
          {
            option: '解压',
            cmd: 'tar xzf redis-4.0.11.tar.gz'
          },
          {
            option: 'cd && 安装',
            cmd: 'cd redis-4.0.11 && make'
          },
          {
            option: '启动服务',
            cmd: 'cd src && ./redis-server <redis.conf配置>'
          }
        ]
      },
      {
        option:'方式二（默认跑6379端口）',
        cmd: 'sudo apt-get install redis-server && redis-server'
      }
    ]
  }
];

module.exports.data = data;