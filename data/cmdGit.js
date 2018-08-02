let data = [{
    option: '[创建并]切换至dev分支',
    cmd: 'git checkout [-b] dev'
  },
  {
    option: 'merge 目标分支的提交到当前分支',
    cmd: 'git merge branchXXX'
  },
  {
    option: 'rebase 到目标分支',
    cmd: 'git rebase branchXXX'
  },
  {
    option: '让当前分支的HEAD指向本分支的前面两个提交',
    cmd: 'git checkout HEAD~2 或者 git checkout HEAD^^'
  },
  {
    option: '在某个commit或者分支上创建一个新的分支',
    cmd: 'git branch <新建分支名> <target分支名/target commit>'
  },
  {
    option: '在某个位置创建',
    cmd: 'git branch -f <已存在的分支名> <target分支名/target commit>'
  },
  {
    option: '为当前分支拿取某两个提交C1,C2',
    cmd: 'git cherry-pick C1 C2'
  },
  {
    option: '有交互的rebase（用于调整commit顺序）',
    cmd: 'git rebase -i HEAD~2'
  },
  {
    option: '查看当前HEAD位置',
    cmd: 'cd <project root>; cat .git/HEAD'
  },
  {
    option: '打标签（tag）',
    cmd: 'git tag <tag名> <目的commit>'
  },
  {
    option: '查看离当前分支最近的带tag的commit',
    cmd: 'git describe'
  },
  {
    option: '查看离当前分支最近的带tag的commit',
    cmd: 'git describe'
  },
]

module.exports.data = data;