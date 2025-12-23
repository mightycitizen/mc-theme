import twig from './logo-image.twig';


// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return twig(args);
};

const defaultArgs = {
  logos: [
    {
      url: '#',
      image: {
        src: '/images/kentico.png',
        alt: 'Kentico'
      }
    },
    {
      url: '#',
      image: {
        src: '/images/drupal.png',
        alt: 'Drupal'
      }
    },
    {
      url: '#',
      image: {
        src: '/images/kubernetes.png',
        alt: 'Kubernetes'
      }
    },
    {
      url: '#',
      image: {
        src: '/images/google-cloud-platform.png',
        alt: 'Google Cloud Platform'
      }
    },
    {
      url: '#',
      image: {
        src: '/images/octopus-deploy.png',
        alt: 'Octopus Deploy'
      }
    },
    {
      url: '#',
      image: {
        src: '/images/sitecore.png',
        alt: 'Sitecore'
      }
    },
    {
      url: '#',
      image: {
        src: '/images/terra-form.png',
        alt: 'Terra Form'
      }
    }
  ]
};
export const LogoList = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
LogoList.args = defaultArgs;

//More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Cards/Logo',
  ...defaultArgs,
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  // argTypes: {

  // },
};
