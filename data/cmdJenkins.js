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
  }
];

module.exports.data = data;