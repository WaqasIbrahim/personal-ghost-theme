# Personal Ghost Theme
 A light and minimal blogging theme for Ghost. [Demo website](https://waqasibrahim.com)

![screenshot-desktop](https://user-images.githubusercontent.com/12554146/29203246-053bb03c-7e89-11e7-9ac2-2cccb4842308.png)

[Download latest release](https://github.com/WaqasIbrahim/personal-ghost-theme/releases/latest)

## Features
* Clean and minimal design
* Extremely lightweight
* Responsive layout
* Author and tag pages with covers
* Code highlighting using [PrismJS](https://github.com/PrismJS/prism)
* On demand Disqus comments (Loads on button click)
* Social sharing for posts
* Responsive embeds

## Installation
1. Download theme.zip file from latest release.
1. Open `post.hbs` and replace `test-apkdzgmqhj` with your own Disqus site-id.
1. Go to your ghost admin panel > Design and upload theme.zip file.

## Usage
### Responsive embeds
Wrap your iframe or video in a `div` with a class of `embed-responsive`.
```html
<div class="embed-responsive">
	<!-- Your iframe or embed code here -->
</div>
```

The embeds will be contained within a container, if you want a full width embed just add a class `full`.
```html
<div class="embed-responsive full">
	<!-- Your iframe or embed code here -->
</div>
```
### Full width images
Add `#full` at the end of your image links to make them full width.


 ## Credits
 * [Casper](https://github.com/TryGhost/casper)
 * [Sass Boilerplate](https://github.com/HugoGiraudel/sass-boilerplate)
 * [PrismJS](https://github.com/PrismJS/prism)

## License
This theme is licensed under the MIT License.
