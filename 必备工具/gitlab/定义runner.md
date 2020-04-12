# 定义 specific Runner
* 在服务器中安装 gitlab-ci-multi-runner
* 使用 gitlab-ci-multi-runner register 定义 runner
* 找到 setting -> CI/CD -> Runner 中的specific Runner; 其中有定义runner时需要的URL和令牌
* 再定义runner时一般使用shell executor

# 删除 specific Runner
* 使用 `gitlab-ci-multi-runner stop` 暂停所有运行的runner
* 使用 `gitlab-ci-multi-runner list` 查找所有运行的runner
* 使用 `gitlab-ci-multi-runner unregister --url xx --token xx` 来删除runner

# 修改配置文件 
* `/etc/gitlab-runner/config.toml` 文件
* 参考文档 https://docs.gitlab.com/runner/configuration/advanced-configuration.html