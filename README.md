# 快速生成 git 一键提交脚本

在使用 git 的时候，有时候忍不了，重复的 git add , git commit -m"msg" 之类的。 不过，聪明的人总会想到各种办法，将自己从这种毫无价值的重复劳动中解脱出来，你可以使用 alias, shell, expect 等工具来完成。不过，这样可能每次都需要对不同的用户进行重新配置，而且，关键在使用 `git push` 的时候，每次需要重复的输入账号和密码，这很恼人。所以，这里简单的写一个了快速生成一键提交 git 的脚本。

## 安装
```
npm install https://github.com/JimmyVV/gitpush
```

## 使用
```
let gitpush = require('gitpush');


// 带 commit msg 的git shell
gitpush.output('demo','123456','good');

// 使用库自带的参数
// gitpush.output('demo','123456');

```
调用 output 方法后，node 会自动在你当前的目录当中，生成一个 `gitpush.sh` 脚本。它的 `mode` 是 755。 即，他是一个可执行的脚本文件。
此时，你需要保证你已经有了一个远程 github。 注意，由于这个是一键提交的脚本，你不必在他之前使用 `git add .` 或者 `git commit -m"xxx"`。 如果你以外的使用上述的两个命令，可以使用:
```
// 移除当前所有文件的追踪
git rm --cached -r .
```
上述条件满足后，可以直接使用:
```
./gitpush.sh
```
之后，等待一会，因为网络时延的关系，直到他显示提交的过程后，你就可以退出当前的 terminator 。

## 授权协议
Released under the MIT, BSD, and GPL Licenses。

## Author
@jimmyVV



