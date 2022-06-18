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
        ['@vuepress/medium-zoom']
    ]
});