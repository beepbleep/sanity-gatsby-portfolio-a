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
                  buildHookId: '5ff0691442d898b98479ea06',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-a-studio',
                  apiId: 'd78d21e9-b559-4d34-8330-f91080335e74'
                },
                {
                  buildHookId: '5ff0691449113dfdcf4b72fb',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-a',
                  apiId: 'b64993f2-c340-4482-ab92-42dcc673ec21'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/beepbleep/sanity-gatsby-portfolio-a',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-a.netlify.app',
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
