import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'BIOC FUN',
    description: 'BIOC FUN',
    theme: defaultTheme({
        // 默认主题配置
        navbar: [
            {
                text: '首页',
                link: '/',
            },
            {
                text: '梅林服务器',
                link: '/meilin.md',
            },
            {
                text: '贡献者',
                link: '/contributing.md',
            },
            {
                text: 'GitHub',
                link: 'https://github.com/BIOC-FUN/docs',
            },
        ],
    }),
    plugins: [
        docsearchPlugin({
            translations: {
                button: {
                    buttonText: '搜索文档',
                    buttonAriaLabel: '搜索文档',
                },
                modal: {
                    searchBox: {
                        resetButtonTitle: '清除查询条件',
                        resetButtonAriaLabel: '清除查询条件',
                        cancelButtonText: '取消',
                        cancelButtonAriaLabel: '取消',
                    },
                    startScreen: {
                        recentSearchesTitle: '搜索',
                        noRecentSearchesText: '没有搜索历史',
                        saveRecentSearchButtonTitle: '保存这次搜索',
                        removeRecentSearchButtonTitle: '删除此搜索历史',
                        favoriteSearchesTitle: '添加至收藏夹',
                        removeFavoriteSearchButtonTitle: '从收藏夹中删除此搜索',
                    },
                    errorScreen: {
                        titleText: '无法获取结果',
                        helpText: '您可能需要检查您的网络连接。',
                    },
                    footer: {
                        selectText: '选择',
                        navigateText: '切换',
                        closeText: '关闭',
                        searchByText: '搜索提供者',
                    },
                    noResultsScreen: {
                        noResultsText: '无法找到相关结果',
                        suggestedQueryText: '尝试搜索',
                        reportMissingResultsText: '相信这个查询应该返回结果吗',
                        reportMissingResultsLinkText: '让我们知道',
                    },
                },
            }
        }),
    ],
})