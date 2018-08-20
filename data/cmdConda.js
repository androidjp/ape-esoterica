let data = [{
    option: '查看当前环境的所有包',
    cmd: 'conda list'
  },
  {
    option: '安装包到当前环境',
    cmd: 'conda install <package_name>'
  },
  {
    option: '安装包到某个环境',
    cmd: 'conda install -n <env_name> <package_name>'
  }
]

module.exports.data = data;