
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','9f2'),
    routes: [
      {
        path: '/docs/Charts/area-chart',
        component: ComponentCreator('/docs/Charts/area-chart','872'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Charts/bar-chart',
        component: ComponentCreator('/docs/Charts/bar-chart','e80'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Charts/line-chart',
        component: ComponentCreator('/docs/Charts/line-chart','2cd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Charts/pie-chart',
        component: ComponentCreator('/docs/Charts/pie-chart','515'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Charts/scatter-plot',
        component: ComponentCreator('/docs/Charts/scatter-plot','d2c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','aed'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','f49'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
