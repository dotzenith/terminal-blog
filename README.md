# Terminal Blog

The personal Hugo theme used by [Danshu's Musings](https://blog.danshu.co/). It pairs a framed terminal interface with a deliberately small publishing surface.

## Features

- Responsive terminal shell with light, dark, and OS-auto color modes
- Home, About, post archive, article, and 404 layouts
- Syntax highlighting and opt-in tables of contents
- Full-text post RSS, canonical/Open Graph metadata, and JSON-LD
- Optional Umami analytics and generated Open Graph images

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
