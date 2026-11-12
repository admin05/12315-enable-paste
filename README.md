# 全国12315投诉内容允许粘贴

用于全国 12315 平台的 Tampermonkey 用户脚本，当前版本为 1.0.0。

在投诉信息填写页面中，为投诉内容文本框（`#tsnr`）启用粘贴。页面动态加载或替换文本框后，脚本会自动处理新出现的文本框。

## 安装与使用

1. 在浏览器中安装 Tampermonkey 扩展。
2. 点击 [安装或更新脚本](https://raw.githubusercontent.com/admin05/12315-enable-paste/main/12315-enable-paste.user.js)，在 Tampermonkey 页面中确认安装。
3. 打开或刷新全国 12315 平台的投诉信息填写页面，在投诉内容框中粘贴文字。

脚本匹配的页面地址为：`https://www.12315.cn/cuser/portal/tscase/information*`。

如果安装链接只显示源码，可以在 Tampermonkey 中新建脚本，复制完整源码并保存。如果之前手动安装过同名脚本，请只保留一个启用的版本。

## 自动更新

脚本的 `@updateURL` 和 `@downloadURL` 均指向本公开仓库 `main` 分支上的用户脚本。

- 在 Tampermonkey 设置中启用脚本更新检查，并按需设置检查间隔。
- 需要立即更新时，在管理面板中对本脚本执行“检查更新”。
- 发布新版本时，修改脚本并递增 `@version`，再提交和推送到 `main`。只推送代码而不提高版本号，不会触发正常的版本更新。
- 保持脚本的 `@name`、`@namespace` 和更新地址稳定，便于后续覆盖更新。

## 运行环境与检查

这是在浏览器页面中运行的用户脚本，依赖 DOM 和 `MutationObserver`。使用过程中无需配置环境变量，也不发送网络请求或上传投诉内容。

安装 Node.js 后可运行语法检查：

```sh
node --check 12315-enable-paste.user.js
```

网站页面结构或事件处理方式发生变化后，脚本可能需要调整。如遇问题，可在 [Issues](https://github.com/admin05/12315-enable-paste/issues) 中反馈，请勿公开个人信息或完整投诉内容。
