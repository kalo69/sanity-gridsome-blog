export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '631efa76775c34684195c6ed',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-ffu8kxnb',
                  apiId: 'aa96bd51-c294-4a59-b48a-40104e751fa7'
                },
                {
                  buildHookId: '631efa76f19e9b7478e04943',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-zgzods2f',
                  apiId: '07ed154e-83af-4045-86b3-9466d8503dec'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kalo69/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-zgzods2f.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
