1. 新建切换分支
    git checkout -b branch_name

2. 拉取代码/提交代码
    git pull origin bran_name
    git push origin 
    
3. 合并分支
    git merge bran_name

4.  本地分支代码提交远程master库
    <!-- 本地分支lyf -->
    git add .
    git commit -m 'update'
    <!-- 提交远程同名分支 -->
    git push origin lyf
    <!-- 切换本地master,获取远程master分支最新代码,合并分支lyf,提交远程master库 -->
    git checkout master
    git pull origin master
    git merge lyf
    git push origin master
    <!-- 切换为本地分支lyf -->
    git checkout lyf

5. 切换分支或则提交远程,必须先commit本分支的代码

6. 删除分支
    <!-- 删除本地分支 -->
    git branch -d branchname  
    <!-- 删除远程分支 -->
    git push --delete origin branchname

7. 保存/恢复工作进度
    <!-- 保存工作进度 -->
    git stash
    git stash list
    <!-- 恢复工作进度 -->
    git stash pop [–index] [stash_id]

8. 回滚到某个版本
    git reset --hard xxxxxx

9. 查看远程信息
    git remote [-v]

10. 