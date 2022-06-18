import {SidebarConfig4Multiple} from "vuepress/config";

const sidebar: SidebarConfig4Multiple = {
    "/backend-tech/xxl-job/": [
        {
            title: "XXL-JOB",
            collapsable: false,
            children: [
                ["", "简介"],
                ["quick-start", "快速开始"]
            ]
        }
    ],
    "/backend-tech/kafka/": [
        {
            title: "Kafka",
            collapsable: false,
            children: [
                ["", "简介"]
            ]
        }
    ]
}

export default sidebar;