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
        cmd: [{
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
    option: '查看已存在的所有顶层镜像',
    cmd: 'docker images 或者 docker image ls'
  },
  {
    option: '根据镜像 运行一个容器 <可交互式shell>',
    cmd: 'docker run <-it> <--rm> jenkins <bash>'
  },
  {
    option: '查看镜像、容器、数据卷所占用的空间',
    cmd: 'docker system df'
  },
  {
    option: '查看悬虚镜像<none> [其实本来是mongo3.2,后面由于pull了别的镜像，有依赖到这个mongo，于是镜像移名]',
    cmd: 'docker image ls -f dangling=true'
  },
  {
    option: '查看已存在的所有中间层镜像',
    cmd: 'docker image ls -a'
  },
  {
    option: '查看某一个镜像',
    cmd: 'docker image ls ubuntu'
  },
  {
    option: '(filter)筛选要查看的镜像（如：查看mongo3.2之后建立的镜像）',
    cmd: 'docker image ls -f since=mongo:3.2'
  },
  {
    option: '仅仅列出所有的docker镜像ID',
    cmd: 'docker image ls -q'
  },
  {
    option: '按照format格式输出images',
    cmd: 'docker image ls --format "{{.ID}}:{{.Repository}}"'
  },
  {
    option: '[强行]删除镜像',
    cmd: 'docker rmi [-f] [image]'
  },
  {
    option: '删除容器',
    cmd: 'docker rm [container]'
  },
  {
    option: '快速批量删除容器',
    cmd: 'docker rm `docker ps -a |awk \'{ print $1 }\' | grep [0-9a-z]`'
  },
  {
    option: '删除所有未运行的容器',
    cmd: 'sudo docker rm $(sudo docker ps -a -q)'
  },
  {
    option: '删除状态为exited的容器',
    cmd: 'sudo docker rm $(sudo docker ps -qf status=exited)'
  },
  {
    option: '停止所有的container',
    cmd: 'docker stop $(docker ps -a -q)'
  },
  {
    option: '删除所有的container',
    cmd: 'docker rm $(docker ps -a -q)'
  },
  {
    option: '删除untagged images',
    cmd: 'docker rmi $(docker images | grep "^<none>" | awk "{print $3}")'
  },
  {
    option: '强制删除所有images',
    cmd: 'docker rmi -f $(docker images -q)'
  },
  {
    option: '指定宿主某目录对应容器目录 [:ro表示readOnly]',
    cmd: 'docker run -d -v /docker/redis:/data[:ro] -p 6379:6379 --name myRedis redis'
  },
  {
    option: '指定Docker容器挂载目录（高级用法：数据卷）',
    isCmdList: true,
    cmd: [
      {
        option: '首先，起一个普通的容器',
        cmd: 'docker run -v /home/docker/env01:/usr/Downloads --name dataVol ubuntu64 /bin/bash'
      },
      {
        option: '然后，启动你的目标容器，并挂载到上一个容器中',
        cmd: 'docker run -it --volumes-from dataVol redis redis-cli'
      }
    ]
  },
  {
    option: 'Docker容器内外互相拷贝数据',
    isCmdList: true,
    cmd: [
      {
        option: '从容器拷贝文件到主机上',
        cmd: 'docker cp <containerId>:/file/path/within/container /host/path/target'
      },
      {
        option: '从主机上拷贝文件到容器内, 最好办法还是先用-v将容器目录挂载到主机目录中，然后直接copy'
      }
    ]
  }
];

module.exports.data = data;