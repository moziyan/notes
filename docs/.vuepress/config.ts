import {defineConfig} from "vuepress/config";
import nav from "./config/nav";
import sidebar from "./config/sidebar";

export default defineConfig({
    title: "我的笔记本",
    description: "记下想记住的，以及不得不记住的☺",
    themeConfig: {
        repo: 'moziyan/notes',
        lastUpdated: true,
        nav,
        sidebar
    },
    plugins: [
        ['@vuepress/back-to-top'],
        ['@vuepress/medium-zoom'],
        ['@vssue/vuepress-plugin-vssue', {
            platform: 'github-v4',
            owner: 'moziyan',
            repo: 'notes    ',
            clientId: 'ddba392e9df0bb9a62f9',
            clientSecret: '49a803c42f78d744b110e66f6314f24c135630ba'
        }]
    ]
});