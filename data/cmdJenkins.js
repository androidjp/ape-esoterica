const data = [
  {
    option: 'Ubuntu18.04 docker安装Jenkins',
    isCmdList: true,
    cmd: [
      {
        option: '拉取Jenkins镜像',
        cmd: 'docker pull jenkins/jenkins:lts'
      },
      {
        option: '创建/home/jenkins文件夹',
        cmd: 'sudo mkdir /home/jenkins'
      },
      {
        option: '给uid为1000的权限',
        cmd: 'sudo chown -R 1000:1000 /home/jenkins'
      },
      {
        option: 'docker启动Jenkins容器',
        cmd: 'sudo docker run -itd -p 9090:8080 -p 50000:50000 --name jenkins --privileged=true  -v /home/jenkins:/var/jenkins_home jenkins/jenkins:lts'
      }
    ]
  },
  {
    option: 'Ubuntu18.04 本地直接安装Jenkins [官方步骤]',
    dizhi: 'https://pkg.jenkins.io/debian-stable/',
    isCmdList: true,
    cmd: [
      {
        option: '安装jdk8(注意:jenkins暂不支持jdk9)',
        cmd: null
      },
      {
        option: '加个key给你的system',
        cmd: 'wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add -'
      },
      {
        option: '将下面这一行，追加到你的/etc/apt/sources.list中',
        cmd: 'https://pkg.jenkins.io/debian-stable/'
      },
      {
        option: '更新apt',
        cmd: 'sudo apt-get update'
      },
      {
        option: '安装jenkins',
        cmd: 'sudo apt-get install jenkins'
      }
    ]
  }
];

module.exports.data = data;