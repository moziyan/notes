import {defineConfig} from "vuepress/config";

export default defineConfig({
    title: "我的笔记本",
    description: "记下想记住的",
    themeConfig: {
        repo: 'moziyan/notes',
        nav: [
            {text: "面试", link: "/interview/"},
            {
                text: "专题", items: [
                    {text: "Redis", link: "/redis/"},
                    {text: "MySQL", link: "/mysql/"},
                    {text: "Kafka", link: "/kafka/"}
                ]
            }
        ]
    },
    plugins: [
        ['@vuepress/back-to-top'],
        ['@vuepress/medium-zoom']
    ]
});