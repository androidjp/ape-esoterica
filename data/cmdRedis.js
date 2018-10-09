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
      },
      {
        option: '方式四（Github源码编译方式）',
        isCmdList: true,
        cmd: [
          {
            option: '下载源码',
            cmd: 'git clone --branch 2.8 --depth 1 git@github.com:antirez/redis.git'
          },
          {
            cmd: 'cd redis'
          },
          {
            option: '编译',
            cmd: 'make'
          },
          {
            option: '运行服务器，daemonize表示在后台运行',
            cmd: './redis-server --daemonize yes'
          },
          {
            option: '运行命令行',
            cmd: './redis-cli'
          }
        ]
      }
    ]
  },
  {
    option: '各个环境下直接安装redis',
    isCmdList: true,
    cmd: [
      {
        option: 'Mac',
        cmd: 'brew install redis'
      },
      {
        option: 'ubuntu',
        cmd: 'apt-get install redis'
      },
      {
        option: 'redhat',
        cmd: 'yum install redis'
      },
      {
        option: '最终运行客户端',
        cmd: 'redis-cli'
      }
    ]
  },
  {
    option: 'Redis常用命令',
    isCmdList: true,
    cmd: [
      {
        option: '字符串string (bitmap数据结构)',
        isCmdList: true,
        cmd: [
          {
            cmd: 'set name 132'
          },
          {
            cmd: 'get name'
          },
          {
            option: '批量set',
            cmd: 'mset name1 Ming name2 Amy'
          },
          {
            option: '批量get [返回一个列表]',
            cmd: 'mget name1 name2'
          },
          {
            option: '设置过期时间（单位：s秒）',
            cmd: 'expire name 5 或者 setex name 5 Ming'
          },
          {
            option: '如果name不存在就执行set创建',
            cmd: 'setnx name Ming'
          }
        ]
      },
      {
        option: 'Number数字计数',
        isCmdList: true,
        cmd: [
          {
            option: '注意：整数最大是Long.Max(9223372036854775807)',
            cmd: 'set age 30'
          },
          {
            option: '加1',
            cmd: 'incr age'
          },
          {
            option: '加 N',
            cmd: 'incrby age N'
          },
        ]
        
      },
      {
        option: 'List列表（本质是链表，index索引查询是O(N)，删除效率是O(1)）',
        isCmdList: true,
        cmd: [
          {
            option:'初始化并从右边插入3个元素',
            cmd: 'rpush books A B C'
          },
          {
            option: '列表长度',
            cmd: 'llen books'
          },
          {
            option: '插入/删除元素',
            cmd: 'rpush / lpush / rpop / lpop'
          },
          {
            option: '查找索引index为1的元素（效率低，慎用）',
            cmd: 'lindex books 1'
          },
          {
            option: '获取所有元素（遍历列表，低效，慎用）',
            cmd: 'lrange books 0 -1'
          },
          {
            option: '只保留区间M到N的元素',
            cmd: 'ltrim books 1 3 [表示只保留第2,3,4共3个元素]'
          }
        ]
      },
      {
        option: 'Hash字典',
        isCmdList: true,
        cmd: [
          {
            option: '初始化redis字典',
            cmd: 'hset books java "think in java"'
          },
          {
            option: '遍历redis字典（key和value）',
            cmd: 'hgetall books'
          },
          {
            option: '查看字典元素个数',
            cmd: 'hlen books'
          },
          {
            option: '获取字典指定元素',
            cmd: 'hget books java'
          },
          {
            option: '批量添加字典元素',
            cmd: 'hmset books java "aaa" python "bbb"'
          },
          {
            option: '字典某个元素的值加1',
            cmd: 'hincrby user-Ming age 1'
          }
        ]
      },
      {
        option:'Set集合',
        isCmdList: true,
        cmd: [
          {
            option: '插入元素',
            cmd: 'sadd books python'
          },
          {
            option: '遍历',
            cmd: 'smembers books'
          },
          {
            option: '判断是否存在某个元素',
            cmd: 'sismember books java'
          },
          {
            option: '集合长度',
            cmd: 'scard books'
          },
          {
            option: '弹出一个集合元素',
            cmd: 'spop books'
          }
        ]
      },
      {
        option: 'ZSet有序集合',
        tips: '类似Java的SortedSet和HashMap的结合体，给每一个value赋予一个score，代表这个value对的排序权重。内部实现是[跳跃列表]。当最后一个value被移除时，zset自动删除，内存被回收。',
        isCmdList: true,
        cmd: [
          {
            option: '插入元素',
            cmd: 'zadd books 9.0 "think in java"'
          },
          {
            option: '遍历所有元素（默认按照score升序排序）',
            cmd: 'zrange books 0 -1'
          },
          {
            option: 'score降序遍历所有元素',
            cmd: 'zrevrange books 0 -1'
          },
          {
            option: '查看集合长度',
            cmd: 'zcard books'
          },
          {
            option: '获取指定value的score',
            cmd: 'zscore books "think in java"'
          },
          {
            option: '查看指定value的排名',
            cmd: 'zrank books "think in java"'
          },
          {
            option: '根据score区间遍历zset',
            cmd: 'zrangebyscore books 8.5 9.5'
          },
          {
            option: '根据score区间(-无穷infinite,8.91]遍历zset (`withscores`表示显示value的score)',
            cmd: 'zrangebyscore books -inf 8.91 withscores'
          },
          {
            option: '删除元素',
            cmd: 'zrem books "think in java"'
          }
        ]
      },
      {
        option: '查看存活时间ttl（注意：每一次set完，需要重新设置expire，否则ttl会消失）',
        cmd:'ttl books'
      }
    ]
  }
];

module.exports.data = data;