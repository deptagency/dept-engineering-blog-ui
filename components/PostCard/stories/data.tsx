import { GhostPostOrPage } from '@lib/ghost'

export const DummyNextImages = {
  feature: true,
  inline: false,
  quality: 1,
  source: false
}

export const DummyLang: string = 'en'

export const DummyPost: GhostPostOrPage = {
  slug: 'slug',
  id: '123',
  title: 'Software Engineers Rush to Write Bad Code',
  excerpt:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel enim sed nisi fermentum hendrerit. Nunc ante velit, posuere sodales finibus ac, tincidunt eget nisl. Praesent vel elit id quam suscipit imperdiet eget mollis neque. Integer vestibulum accumsan est non ullamcorper.',
  feature_image: 'www.featureimage.com',
  authors: [
    {
      name: 'Chantal',
      slug: '',
      id: ''
    }
  ],
  published_at: '12 April 2022',
  featureImage: {
    url: 'www.nextimage.com',
    dimensions: {
      width: 80,
      height: 80
    }
  },
  primary_tag: {
    name: 'AWS',
    slug: '',
    id: ''
  }
}
