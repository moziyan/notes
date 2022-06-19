import {NavItem} from "vuepress/config";

const nav: Array<NavItem> = [
    {
        text: "前端技术", items: [
            {text: "面试题", link: "/frontend-tech/interview/"},
            {text: "React", link: "/frontend-tech/react/"},
            {text: "Vue", link: "/frontend-tech/vue/"}
        ]
    },
    {
        text: "后端技术", items: [
            {text: "面试题", link: "/backend-tech/interview/"},
            {text: "XXL-JOB", link: "/backend-tech/xxl-job/"},
            {text: "MySQL", link: "/backend-tech/mysql/"},
            {text: "Kafka", link: "/backend-tech/kafka/"},
            {text: "Redis", link: "/backend-tech/redis/"}
        ]
    }
]

export default nav;