## 新建切换分支
  * `git checkout -b branch_name`

## 拉取代码/提交代码
  * 拉取代码 `git pull origin branch_name`
  * 提交代码 `git push origin branch_name`  
     
## 合并分支
  * merge 方式
  ```
    git checkout master
    git merge feat_branch
  ```

  * rebase 方式
  ```
    git checkout feat_branch
    # feat_feature分支的所有提交先缓存, 且顶到(origin)最新提交, 在最新提交的基础上合并feat_feature分支之前的提交记录
    git rebase origin

    # 合并有冲突时, 添加修改后文件, 再次合并
    git add .
    git rebase --continue
  ```

  * 在master分支上的提交记录上有区别, merge有分支记录, rebase在最新提交的基础上合并提交

## 新建分支(并且切换到分支)
  * `git checkout -b branch_name`

## 切换分支
  * `git checkout branch_name`

## 删除分支
  * 删除本地分支 `git branch -d branch_name`
  * 删除远程分支 `git push --delete origin branch_name`

## 回滚到某个版本
  * `git reset --hard branch_id`

## 保存/恢复工作进度
  * 保存工作进度 `git stash [save 'message']` 通过save添加选填注释
  * 查询保存进度列表 `git stash list`
  * 恢复到最新工作区(删除该进度)
    * `git stash pop`
    * `git stash pop stash@{stash_id}`
  * 恢复到最新工作区(保留该进度)
    * `git stash apply`
    * `git stash apply stash@{stash_id}`

## 删除所有存储进度
  * `git stash clear`

## 添加项目的远程origin
  * git remote add origin remoteUrl

## 修改项目指向的远程url(项目必须先又一个远程的origin)
  * git remote set-url origin remoteUrl

## 打标签
  * 查看所有标签 `git tag`
  * 查看标签 `git show [tagname]`
  * 新增本地标签 `git tag -a [tagname] -m 'xxx'`
  * 将指定标签上传远程 `git push origin [tagname]` 或 上传所有本地标签 `git push origin --tags`
  * 删除本地标签 `git tag -d [tagname]`
  * 删除远程标签 `git push origin :refs/tags/[tagname]`
  * 获取远程指定标签 `git fetch origin tag [tagname]`

## 清除Untracked文件(未被add的文件)
  * 预览要删除的文件 `git clean -n`
  * 删除文件 `git clean -f` (忽略.gitignore文件中指定的)
  * 删除文件 `git clean -df` 

## 修改commit的注释
  * `git commit --amend` 然后使用vim的方式修改注释
  * url地址: https://www.jianshu.com/p/098d85a58bf1

## 查看远程分支
  * `git branch -a`

## 将远程分支拉取到本地, 并创建新分支
  * `git checkout -b 本地分支名 origin/远程分支名`
  * 如果上一步失败, 则执行
    * `git fetch` (master分支) 
    * `git checkout 远程分支名` 或 `git checkout -b 本地分支名 origin/远程分支名`