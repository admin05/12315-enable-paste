// ==UserScript==
// @name         全国12315投诉内容允许粘贴
// @namespace    https://www.12315.cn/
// @version      1.0.0
// @description  解除12315投诉内容文本框的粘贴限制
// @homepageURL  https://github.com/admin05/12315-enable-paste
// @supportURL   https://github.com/admin05/12315-enable-paste/issues
// @updateURL    https://raw.githubusercontent.com/admin05/12315-enable-paste/main/12315-enable-paste.user.js
// @downloadURL  https://raw.githubusercontent.com/admin05/12315-enable-paste/main/12315-enable-paste.user.js
// @match        https://www.12315.cn/cuser/portal/tscase/information*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function enablePaste() {
        const textarea = document.querySelector('#tsnr');

        if (!textarea || textarea.dataset.pasteEnabled === 'true') {
            return;
        }

        textarea.dataset.pasteEnabled = 'true';

        textarea.addEventListener('paste', function (e) {
            e.stopImmediatePropagation();
        }, true);

        console.log('[12315] 投诉内容框已允许粘贴');
    }

    // 页面元素出现后自动启用
    const observer = new MutationObserver(enablePaste);

    observer.observe(document, {
        childList: true,
        subtree: true
    });

    enablePaste();
})();
