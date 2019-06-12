## 新建切换分支
  * `git checkout -b branch_name`

## 拉取代码/提交代码
  * 拉取代码 `git pull origin branch_name`
  * 提交代码 `git push origin branch_name`  
     
## 合并分支
  * `git merge branch`

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

## 修改项目指向的远程url
  * git remote set-url origin reomateUrl

## 打标签
  * 查看所有标签 `git tag`
  * 查看标签 `git show [tagname]`
  * 新增本地标签 `git tag -a [tagname] -m 'xxx'`
  * 将指定标签上传远程 `git push origin [tagname]` 或 上传所有本地标签 `git push origin --tags`
  * 删除本地标签 `git tag -d [tagname]`
  * 删除远程标签 `git push origin :refs/tags/[tagname]`
  * 获取远程指定标签 `git fetch origin tag [tagname]`