import {defineConfig} from "vuepress/config";

export default defineConfig({
    title: "我的笔记本",
    description: "记下想记住的",
    themeConfig: {
        repo: 'moziyan/notes',
    },
    plugins: [
        ['@vuepress/back-to-top'],
        ['@vuepress/medium-zoom']
    ]
});