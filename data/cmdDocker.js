const data = [
  {
    option: 'CentOS7中跑Docker',
    isCmdList: true,
    cmd: [
      {
        option: '安装Docker服务端和客户端',
        cmd: 'yum install docker',
      },
      {
        option: '启动Docker',
        cmd: 'service docker start',
      },
      {
        option: '搜索image',
        cmd: 'docker search django',
      },
      {
        option: '停用并删除docker所有容器',
        cmd: 'docker stop $(docker ps -q) & docker rm $(docker ps -aq)',
      },
      {
        option: '查看运行中容器',
        cmd: 'docker ps'
      },
      {
        option: '查看所有容器',
        cmd: 'docker ps -a'
      },
      {
        option: '进入容器',
        cmd: 'docker exec -it <containerID> /bin/bash'
      }
    ]
  }
];

module.exports.data = data;