---
title: "Image Magick"
date: 2020-01-10T23:40:46+01:00
draft: false
---

#### Cheat Sheet - Resize, Make Animated Gif, Change Background Color to transparent¶

#### Resize
http://www.howtogeek.com/109369/how-to-quickly-resize-convert-modify-images-from-the-linux-terminal/

ImageMagick will try to preserve the aspect ratio if you use this command. It will alter the image to fit within a 200×100 area, but the image may not be exactly 200×100.

`convert example.png -resize 200×100 example.png`


#### Make Animated Gif
http://www.linux-magazine.com/Online/Blogs/Productivity-Sauce/Create-Animated-GIFs-with-ImageMagick

`convert -delay 120 -loop 0 *.png animated.gif`

#### Change background color to transparent
Works only if the background has only one color.

`convert balloon.gif -transparent blue balloon_trans.gif`

For all .pngs in a folder:

`for file in *.png ; do convert "${file}" -transparent '#ffcc66' "batch/${file}"`

On Windows: Vorssetzung: Es gibt einen Ornder mit den Bildern, darin einen Ordner 'final' für die fertigen Bilder anlegen. Dann CMD starten und folgenden Code eingeben:

`FOR %G IN (*.png) DO convert %G -transparent #FFFFFF final\%G`
