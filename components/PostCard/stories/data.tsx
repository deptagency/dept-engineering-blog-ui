/**
 * Default data for storybook.
 *
 * `dummySettings.nextImages.feature = false` ensures an image can be rendered in storybook.
 */
export const dummyPost = {
  id: '626fff42dae0a9003d0d2067',
  uuid: '26bda778-7dbe-42da-b3a3-4848e7522246',
  title: 'Why You Need KYC',
  slug: 'why-you-need-kyc',
  html: '<p>Unless you work in the finance industry, it’s likely you’ve never heard of anti-money laundering (AML) or know your customer (KYC). Up until somewhat recently I had not heard of either of these acronyms, let alone understood the complexities around them. At DEPT® we’ve been working with clients to build NFT marketplaces, often using the open source <a href="https://www.deptagency.com/en-us/insight/dept-launches-first-ever-open-source-platform-for-creating-an-nft-marketplace/">white-label NFT marketplace solution</a> we developed for the Algorand blockchain as the foundation. I’ve needed to better understand these concepts since we’ll be adding support for KYC in the marketplace implementations for our clients, as well as integrating into the white-label solution, though the specific KYC needs will vary based on the business. </p><p>We’ll go through AML/KYC at a high level and discuss options available to you and what to look for when choosing a SaaS provider. Heads up, there’s going to be a whole lot of acronyms in this article, and in the AML/KYC world there’s an acronym around every corner. Below is a cheat sheet of relevant acronyms to refer to.</p><p><strong>Acronyms</strong></p><ul><li>KYC = Know Your Customer</li><li>AML = Anti-Money Laundering</li><li>CIP = Customer Identification Program</li><li>CDD = Customer Due Diligence</li><li>EDD = Enhanced Due Diligence</li><li>SSN = Social Security Number</li><li>PII = Personal Identifiable Information</li><li>PEP = Politically Exposed People</li><li>BSA = Bank Secrecy Act</li><li>MSB = Money Services Business</li><li>FinCEN = United States Financial Crimes Enforcement Network</li><li>BaFIN = German Federal Financial Supervisory Authority</li></ul>',
  comment_id: '626fff42dae0a9003d0d2067',
  feature_image:
    'https://dept-engineering-blog.ghost.io/content/images/2022/05/pexels-anna-shvets-4482900--1-.jpg',
  featured: false,
  visibility: 'public',
  email_recipient_filter: 'all',
  created_at: '2022-05-02T11:56:50.000-04:00',
  updated_at: '2022-05-09T10:12:47.000-04:00',
  published_at: '2022-05-09T09:59:05.000-04:00',
  custom_excerpt:
    "Know Your Customer (KYC) is an integral part of any Anti-Money Laundering program. In this article I'll go through what KYC is, why you may need it, and how to choose a SaaS provider that fits your needs.",
  codeinjection_head: null,
  codeinjection_foot: null,
  custom_template: null,
  canonical_url: null,
  tags: [],
  authors: [
    {
      id: 'foobar',
      name: 'Dallas Huggins',
      slug: 'dallas',
      url: 'https://dept-engineering-blog.ghost.io/author/dallas/'
    }
  ],
  primary_author: {
    id: 'foo',
    name: 'Dallas Huggins',
    slug: 'dallas',
    profile_image: null,
    cover_image: null,
    bio: null,
    website: null,
    location: null,
    facebook: null,
    twitter: null,
    meta_title: null,
    meta_description: null,
    url: 'https://dept-engineering-blog.ghost.io/author/dallas/'
  },
  primary_tag: null,
  url: 'https://dept-engineering-blog.ghost.io/why-you-need-kyc/',
  excerpt:
    "Know Your Customer (KYC) is an integral part of any Anti-Money Laundering program. In this article I'll go through what KYC is, why you may need it, and how to choose a SaaS provider that fits your needs.",
  reading_time: 7,
  access: true,
  send_email_when_published: true,
  og_image: null,
  og_title: null,
  og_description: null,
  twitter_image: null,
  twitter_title: null,
  twitter_description: null,
  meta_title: 'Why You Need KYC',
  meta_description: null,
  email_subject: null,
  frontmatter: null,
  featureImage: {
    url: 'does not work',
    dimensions: {
      width: 2000,
      height: 1358
    }
  }
}

export const dummySettings = {
  processEnv: {
    siteUrl: 'https://engineering.deptagency.com',
    platform: 'vercel',
    gaMeasurementId: 'UA-76046545-1',
    nextImages: {
      feature: false,
      inline: true,
      quality: 80,
      source: false
    },
    rssFeed: true,
    memberSubscriptions: true,
    commenting: {
      system: null,
      commentoUrl: 'https://cdn.commento.io',
      disqusShortname: 'short-name-here'
    },
    prism: {
      enable: true,
      ignoreMissing: true
    },
    enableCareersPage: false,
    toc: {
      enable: true,
      maxDepth: 2
    },
    customNavigation: [],
    isr: {
      enable: false,
      revalidate: 10,
      maxNumberOfPosts: 20,
      maxNumberOfPages: 20
    },
    customSlugs: []
  },
  title: 'DEPT® Engineering Blog',
  description: 'Ideas & insights from the DEPT® developer community',
  logo: 'https://dept-engineering-blog.ghost.io/content/images/2022/04/DEPT--LOGO---2022-Black.svg',
  icon: undefined,
  accent_color: '#121212',
  cover_image: undefined,
  facebook: 'DeptAgency',
  twitter: '@DeptAgency',
  lang: 'en',
  locale: 'en',
  timezone: 'America/New_York',
  codeinjection_head: undefined,
  codeinjection_foot: undefined,
  navigation: [],
  secondary_navigation: [
    {
      label: 'Find out more about DEPT®',
      url: 'https://www.deptagency.com/'
    }
  ],
  meta_title: 'Developer Community | Engineering at DEPT®',
  meta_description:
    'Our global development team solves problems across a wide range of platforms. See some of our development work.',
  og_image: undefined,
  og_title: undefined,
  og_description: undefined,
  twitter_image: undefined,
  twitter_title: undefined,
  twitter_description: undefined,
  members_support_address: 'noreply',
  url: 'https://dept-engineering-blog.ghost.io',
  logoImage: {
    url: 'https://dept-engineering-blog.ghost.io/content/images/2022/04/DEPT--LOGO---2022-Black.svg',
    dimensions: {
      width: 10688,
      height: 3035
    }
  },
  meta: ''
}
