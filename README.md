# DEPT® Engineering Blog UI

## 🏁 Getting Started

If you are a DEPT Engineer, ask a DEPT® team member for environment variables. Otherwise please see the template repository for information on how to connect this project to your Ghost instance.

```bash
git clone https://github.com/deptagency/dept-engineering-blog-ui
cd dept-engineering-blog-ui
yarn

# Development
yarn dev

# Production
yarn build
```

## Deployment

Merging to the `staging` branch will kick off a staging build and merging to `main` will start a new production build. Additionally, every time a post is published, edited, or unpublished from within Ghost we start a new production build. Both environments draw content from the same Ghost instance. We do have a separate Ghost account to test changes against the hosted Ghost instance. Please reach out to Nat Ring or Matt Merrill fo access.

## Previewing Posts

Clicking on the `Preview` button on an unpublished post in the Ghost Admin UI will show you the post in the default Ghost theme along with a URL where you can preview the post in isolation (this url will end in `/p/[hash-of-characters]`). You can view it in our DEPT® Theme if you replace the supplied URL's domain with the Engineering blogs, so that the URL reads `https://engineering.deptagency.com/p/[hash-of-characters]`


## Unsupported Ghost Admin functionality

Not all fields and settings in the Ghost Admin UI are available in our theme. This includes, but is not limited to, the following:
- Custom scripts in the header and footer of a Blog Post


## 🤯 Ensure headless mode of Ghost CMS

For best SEO results it is strongly recommended to disable the default Ghost Handlebars theme front-end by selecting the _Make this site private_ flag within your Ghost admin settings.

&nbsp;

## 🎈 Contributions

PRs are welcome! If you want to see any new features added or see something we can be doing better please let us know!

## Credits

Based off of the [next-cms-ghost](https://github.com/styxlab/next-cms-ghost) template.
# Copyright & License

Copyright (c) 2022 DEPT® - Released under the [MIT license](LICENSE)
Copyright (c) 2020 - 2021 styxlab - Released under the [MIT license](LICENSE).
