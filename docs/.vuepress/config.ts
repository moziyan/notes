import {defineConfig} from "vuepress/config";
import nav from "./config/nav";
import sidebar from "./config/sidebar";
import locales from "./config/locales";
// @ts-ignore
import moment from "moment";

export default defineConfig({
    title: "我的笔记本",
    description: "记下想记住的，以及不得不记住的☺",
    locales,
    themeConfig: {
        repo: 'moziyan/notes',
        lastUpdated: '最后更新时间',
        nav,
        sidebar
    },
    plugins: [
        ['@vuepress/back-to-top'],
        ['@vuepress/medium-zoom'],
        ['@vuepress/last-updated', {
            transformer: (timestamp, lang) => {
                moment.locale(lang);
                return moment(timestamp).format('YYYY-MM-DD HH:mm:ss');
            }
        }],
        ['@vssue/vuepress-plugin-vssue', {
            platform: 'github-v4',
            owner: 'moziyan',
            repo: 'notes',
            clientId: 'ddba392e9df0bb9a62f9',
            clientSecret: '49a803c42f78d744b110e66f6314f24c135630ba'
        }]
    ]
});