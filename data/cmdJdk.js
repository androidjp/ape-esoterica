const data = [
  {
    option: 'Ubuntu18.04 安装jdk8',
    isCmdList: true,
    cmd: [
      {
        option: '添加密钥到apt',
        cmd: 'sudo add-apt-repository ppa:webupd8team/java'
      },
      {
        option: '更新apt',
        cmd:  'sudo apt update'
      },
      {
        option: '安装open Jdk8',
        cmd: 'sudo apt install openjdk-8-jdk && sudo apt -f install'
      },
      {
        option: '安装Oracle Jdk8',
        cmd: 'sudo apt-get install oracle-java8-installer'
      },
      {
        option: '验证jdk安装',
        cmd: 'java -version'
      }
    ]
  }
];

module.exports.data = data;