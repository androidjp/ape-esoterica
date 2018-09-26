const data = [
  {
    option: 'Ubuntu安装Redis',
    isCmdList: true,
    cmd: [
      {
        option: '方式一',
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
      },
      {
        option: '方式三（Docker镜像）',
        isCmdList: true,
        cmd: [
          {
            option: '安装好docker,启动好docker service'
          },
          {
            option: '拉取镜像redis',
            cmd: 'docker pull redis'
          },
          {
            option: '启动容器',
            cmd: 'docker run --name myredis -d -p6379:6379 redis'
          },
          {
            option: '执行容器中的redis-cli',
            cmd: 'docker exec -it myredis redis-cli'
          }
        ]
      }
    ]
  }
];

module.exports.data = data;