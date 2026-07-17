# Terminal Blog

The personal Hugo theme used by [My Blog](https://blog.danshu.co/). Just a silly little terminal theme.

## Origin

Terminal Blog is a hard fork of [Hugo Blog Awesome](https://github.com/hugo-sid/hugo-blog-awesome), originally created by Sidharth R. It has intentionally diverged into a smaller theme for a single personal blog and is not intended to track upstream changes.

Both the original work and this derivative are distributed under the MIT license. The original copyright and complete license notice are retained in [LICENSE](LICENSE).

## Local development

Hugo Extended is required for Sass compilation.

```sh
cd exampleSite
hugo server
```

The example site's local module replacement resolves the theme from the parent directory.

## Site contract

Import `github.com/dotzenith/terminal-blog` as a Hugo Module. The theme reads:

- Standard `title`, `baseURL`, `locale`, and `menus.main` configuration
- `params.description` and `params.defaultColor` (`auto`, `light`, or `dark`)
- `params.author.name`, `intro`, and `description`
- Optional `params.analytics.umamiWebsiteID`
- `params.socialImage.endpoint`, `site`, and `defaultSize`

Posts live in `content/posts`. Supported custom front matter is `toc` and `ogSize`.

## License

The theme remains available under the MIT license. See [LICENSE](LICENSE) for the original copyright notice.
