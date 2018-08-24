# jekyll-webpack

A simple opinionated boilerplate for Jekyll.

Typically you would `npm run build` then upload the result to Amazon S3, Github pages, or an FTP server of your choosing.

Before running `npm run build`, you have to confirm `baseurl` in `_config.yml` file.
You have to change that you would deploy as a weburl.
	ex: `baseurl: "https://xxx.github.io/nerd/"`

## Why ?

Because using an additional tool for managing your dependencies (`.js`, `.css`, images, fonts...) seems like a nice improvement to the already awesome Jekyll.

## Usage

1. install ruby with devkit

2. `gem install jekyll`

3. `gem install bundler`

4. `gem install tzinfo-data`

5. `bundle update`

6. `npm install`

7. `npm start`

Simply use `npm start` or ` npm run build`:

```sh
# Start Jekyll and Webpack in --watch mode
# Serve `_site/` with browser-sync → http://localhost:3000
npm start

# Build files → `_site/`
npm run build

# Build files → `_site/` with --verbose
npm run build:debug
```

If you have any problems, make sure you have `Bundler` and `Jekyll` installed (see this [quickstart](https://jekyllrb.com/docs/quickstart/)) then clone the repo and `npm install`.

## Podcast Feed Settings
You may ignore information you already have like title, url and such

```
title:          your-site-title
email:          your-podcast-contact-email
description:    "your-podcast-description"
subtitle:       "your-podcast-subtitle"
url:            your-podcast-url
lang:           your-language-code
author:         your-name
copyright:      "&#x2117; &amp; &#xA9; 2015"

```

## Example Post YAML
```
---
layout: post
title: "Podcast Title"
date: 2015-12-23 14:37:00
file: //path-to-your/file.mp3
file_itunes: //path-to-your/file.m4a
excerpt: Write an excerpt here. Remeber that you should xml escape special characters. If you are german: don't use umlauts here.
summary: Write a summary here. Remeber that you should xml escape special characters. If you are german: don't use umlauts here.
duration: "14:50" #audio length in min
length: "14459510" #filesize in byte
explicit: "yes" #other option is no
block: "no" #means is shown in itunes
---

```

