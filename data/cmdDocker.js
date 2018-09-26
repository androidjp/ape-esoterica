const data = [{
    option: 'CentOS7中跑Docker',
    isCmdList: true,
    cmd: [{
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
  },
  {
    option: 'Ubuntu 中安装Docker CE',
    isCmdList: true,
    cmd: [{
        option: 'update apt-get',
        cmd: 'sudo apt-get update'
      },
      {
        option: '卸载之前的docker',
        cmd: 'sudo apt-get remove docker docker-engine docker.io'
      },
      {
        option: '安装必要的package【目的：让apt可使用基于HTTPS的repository】',
        cmd: 'sudo apt-get install \
            apt-transport-https \
            ca-certificates \
            curl \
            software-properties-common'
      },
      {
        option: 'Add Docker\'s official GPG key',
        cmd: 'curl -fsSL https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu/gpg | sudo apt-key add -'
      },
      {
        option: '验证是否存在此key',
        cmd: 'sudo apt-key fingerprint'
      },
      {
        option: '设置稳定的仓库',
        cmd: 'sudo add-apt-repository \
    "deb [arch=amd64] https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu \
    $(lsb_release -cs) \
    stable"'
      },
      {
        option: '安装docker-ce [最好先update apt]',
        cmd: 'sudo apt-get install docker-ce'
      },
      {
        option: '启动/关闭docker服务',
        isCmdList: true,
        cmd: [
          {
            option: '方式一',
            cmd: 'sudo systemctl enable docker && sudo systemctl start docker'
          },
          {
            option: '方式二（Ubuntu 14.04以上）',
            cmd: 'sudo service docker start/stop'
          }
        ]
      },
      {
        option: '验证是否安装成功',
        cmd: 'sudo docker run hello-world'
      },
      {
        option: '卸载docker',
        cmd: 'sudo apt-get purge docker-ce && sudo rm -rf /var/lib/docker'
      }
    ]
  },
  {
    option: '查看Docker守护进程的当前状态',
    cmd: 'sudo systemctl status docker'
  },
  {
    option: '查看Docker 当前container',
    cmd: ' docker ps'
  },
  {
    option: '搜索镜像',
    cmd: 'docker search jenkins'
  },
  {
    option: '拉取镜像',
    cmd: 'docker pull jenkins'
  },
  {
    option: '查看已存在的镜像',
    cmd: 'docker images'
  },
  {
    option: '根据镜像 运行一个容器 <可交互式shell>',
    cmd: 'docker run <-it> jenkins'
  },
];

module.exports.data = data;