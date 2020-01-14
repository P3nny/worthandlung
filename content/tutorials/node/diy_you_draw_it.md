---
title: "DIY You draw it"
date: 2020-01-10T17:48:41+01:00
draft: false
---

We at WDR-data redid this new york times interactive: You draw it for northrhine-westfalia: http://data.wdr.de/wdr/nachrichten/landespolitik/landtagswahl/was-schaetzen-sie/

The new york times put the code on github, to be used open source. So did we with our version of the code: https://github.com/wdr-data/you-draw-it

The idea is that especially public broadcasters are doing well in making their developments open source as public broadcasting itself is paid by the public.

For example our version was used by the local newspaper Rheinische Post for their own version: https://interaktiv.rp-online.de/landestagswahlnrw17/nrw-tippen-landtagswahl

### Here's how to do your own 'you draw it'

Overview:

- install node.js
- clone the github repo
- run it
- make your changes
- deploy your changes on netlify

### Install node.js
Download the right package for your operation system here: https://nodejs.org/en/download/

Install it. Then test the installation by running:

```
$ node

> console.log('Hello World')
> .exit()
```

### Clone the repo
Go to https://github.com/wdr-data/you-draw-it
Take the link from 'Clone or download' and run
git clone https://github.com/wdr-data/you-draw-it.git'

cd into the directory
Installing dependencies

```
Bower npm install -g bower
Gulp npm install -g gulp
```

Build-Tools npm install (im Projektverzeichnis)

Frontend-Libs bower install (im Projektverzeichnis)

Run it locally

```
gulp serve
```

Make a build
Live-Build unter dist/

```
gulp build
```

If you want do deploy it on netlify

- Fork the repo
- install dependencies
- change data
- make a netlify account
- make a new netlify site
- connect repo to netlify site
- netlify makes a new build for every git push
