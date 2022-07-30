# micromark-extension-mdx-md

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[micromark][] extension to turn some markdown features off for MDX.

## Contents

*   [What is this?](#what-is-this)
*   [When to use this](#when-to-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`mdxMd`](#mdxmd)
*   [Authoring](#authoring)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package contains an extension to turn off some markdown constructs when
parsing.

## When to use this

These tools are all low-level.
In many cases, you want to use [`remark-mdx`][remark-mdx] with remark instead.
When you are using [`mdx-js/mdx`][mdxjs], that is already included.

Even when you want to use `micromark`, you likely want to use
[`micromark-extension-mdxjs`][micromark-extension-mdxjs] to support all MDX
features.
That extension includes this extension.

## Install

This package is [ESM only][esm].
In Node.js (version 12.20+, 14.14+, 16.0+, or 18.0+), install with [npm][]:

```sh
npm install micromark-extension-mdx-md
```

In Deno with [`esm.sh`][esmsh]:

```js
import {mdxMd} from 'https://esm.sh/micromark-extension-mdx-md@1'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {mdxMd} from 'https://esm.sh/micromark-extension-mdx-md@1?bundle'
</script>
```

## Use

```js
import {micromark} from 'micromark'
import {mdxMd} from 'micromark-extension-mdx-md'

const output = micromark('\ta', {extensions: [mdxMd]})

console.log(output)
```

Yields:

```html
<p>a</p>
```

## API

This package exports the identifier `mdxMd`.
There is no default export.

### `mdxMd`

Syntax extension for micromark (passed in `extensions`).

## Authoring

To improve authoring MDX, and the new constructs it adds (JSX, expressions, and
ESM), some markdown features are turned off.
This extension does that.

It turns off:

###### Code (indented)

Use fenced code instead.
Change the following markdown:

```markdown
    console.log(1)
```

…into:

````markdown
```js
console.log(1)
```
````

###### Autolinks

Use links (with a resource or a reference) instead.
Change the following markdown:

```markdown
<https://some-link-here.com>
```

…into:

```markdown
[descriptive text](https://and-the-link-here.com)
```

###### HTML (flow and text)

Use JSX instead: change `<img>` into `<img />`.
Not supporting HTML also means that HTML comments are not supported.
Use a comment in an empty expression instead.
Change `<!-- comment -->` into `{/* comment */}`.

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 12.20+, 14.14+, 16.0+, and 18.0+.
It also works in Deno and modern browsers.

## Security

This package is safe.

## Related

*   [`micromark/micromark-extension-mdxjs`][micromark-extension-mdxjs]
    — micromark extension to support MDX
*   [`remark-mdx`][remark-mdx]
    — remark plugin to support MDX syntax

## Contribute

See [`contributing.md` in `micromark/.github`][contributing] for ways to get
started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/micromark/micromark-extension-mdx-md/workflows/main/badge.svg

[build]: https://github.com/micromark/micromark-extension-mdx-md/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/micromark/micromark-extension-mdx-md.svg

[coverage]: https://codecov.io/github/micromark/micromark-extension-mdx-md

[downloads-badge]: https://img.shields.io/npm/dm/micromark-extension-mdx-md.svg

[downloads]: https://www.npmjs.com/package/micromark-extension-mdx-md

[size-badge]: https://img.shields.io/bundlephobia/minzip/micromark-extension-mdx-md.svg

[size]: https://bundlephobia.com/result?p=micromark-extension-mdx-md

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/micromark/micromark/discussions

[npm]: https://docs.npmjs.com/cli/install

[esmsh]: https://esm.sh

[license]: license

[author]: https://wooorm.com

[contributing]: https://github.com/micromark/.github/blob/HEAD/contributing.md

[support]: https://github.com/micromark/.github/blob/HEAD/support.md

[coc]: https://github.com/micromark/.github/blob/HEAD/code-of-conduct.md

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[typescript]: https://www.typescriptlang.org

[micromark]: https://github.com/micromark/micromark

[mdxjs]: https://mdxjs.com

[micromark-extension-mdxjs]: https://github.com/micromark/micromark-extension-mdxjs

[remark-mdx]: https://mdxjs.com/packages/remark-mdx/
