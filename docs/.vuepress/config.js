/*
 * @Author: PanFeng
 * @Date: 2020-04-28 14:20:42
 */
module.exports = {
    base: '/blog/',
    title: 'Space',
    description: 'note my note',
    head: [
        ['link',
            { rel: 'icon', href: '/Burglar.png' }
            //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
        ],
    ],
    themeConfig: {
        logo: '/Burglar.png',
        // 顶部导航栏
        nav: [
            { text: '首页', link: '/' },
            //格式二：添加下拉菜单，link指向的文件路径
            { text: '收集-blog', link: '/pages/collect/blog.md' },
            { text: '收集-site', link: '/pages/collect/site.md' },
            { text: '收集-fun', link: '/pages/collect/fun.md' },
            { text: 'todo', link: '/pages/todo/todo.md' },
            { text: 'code', link: '/pages/leetcode/code.md' },
            //格式三：跳转至外部网页，需http/https前缀
            // { text: 'Github', link: 'https://github.com/jackipan' }
        ],
        // sidebar: [
        //     {
        //         title: 'collect',
        //         path: '/collect/',
        //         collapsable: false, // 可选的, 默认值是 true,
        //         sidebarDepth: 1,    // 可选的, 默认值是 1
        //         children: [
        //             '/'
        //         ]
        //     },
        //     {
        //         title: 'leetcode',
        //         path: '/leetcode/',
        //         collapsable: false, // 可选的, 默认值是 true,
        //         sidebarDepth: 1,    // 可选的, 默认值是 1
        //         children: [
        //             '/'
        //         ]
        //     },
        //     {
        //         title: 'todo',
        //         path: '/todo/',
        //         collapsable: false, // 可选的, 默认值是 true,
        //         sidebarDepth: 1,    // 可选的, 默认值是 1
        //         children: [
        //             '/'
        //         ]
        //     }
        // ],
        // sidebar: {
        //     '/collect/': [
        //         '',     /* /foo/ */
        //         'blog',  /* /foo/one.html */
        //         'fun',   /* /foo/two.html */
        //         'site'
        //     ],
        //     '/': [
        //         '',     /* /foo/ */
        //         'about'
        //     ]
        // },
        
        displayAllHeaders: true,
        // 侧边栏
        sidebar: {
            '/pages/collect/': [
                {
                    title:'collect菜单',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: [
                        ['blog.md', 'blog'],
                        ['fun.md', 'fun']
                    ]
                },
                {
                    title:'site菜单',
                    collapsable: false,
                    sidebarDepth: 2,
                    children: [
                        ['site.md', 'site'],
                    ]
                }
            ],
            '/pages/leetcode/': [
                {
                    title:'code菜单',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: [
                        ['code.md', 'code']
                    ]
                }
            ],
            '/pages/todo/': [
                {
                    title:'todo菜单',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: [
                        ['todo.md', 'todo']
                    ]
                }
            ]
        },
        search: true,
        searchMaxSuggestions: 5,
        lastUpdated: '上次更新',
        repo:'https://github.com/jackipan/blog'
    }
}
