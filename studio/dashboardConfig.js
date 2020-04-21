export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5e9eeb4ce25152dbfe15b2dc',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-e6qcjfu8',
                  apiId: 'b934ff67-d586-48f2-aa8a-0211132b5d34'
                },
                {
                  buildHookId: '5e9eeb4c079db7a680f233ec',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-o83ffkrv',
                  apiId: '79f3e6da-ef3e-401e-a3cf-70894e3fd350'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/halalgami/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-o83ffkrv.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
