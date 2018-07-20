let data = [{
    option: '创建一个rsa公私钥',
    cmd: 'ssh-keygen -t rsa [-C "xxxx@email.com"]'
  },
  {
    option: '连通性验证:github',
    cmd: 'ssh -T git@github.com'
  }
]

module.exports.data = data;