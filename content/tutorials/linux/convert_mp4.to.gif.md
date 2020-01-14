---
title: "Convert .mp4 to .gif"
date: 2020-01-10T17:48:41+01:00
draft: false
---

`sudo apt-get install libav-tools`

To convert an .mp4 to .pngs:

`avconv -i 160122-babobus-insta1.mp4 -r 10 output%05d.png`

To convert the .pngs to .gif:

`convert -delay 80 -loop 0 *.png babo1.gif`

To convert an .mp4 to ogv - (-q:v sets video quality between 1 and 10. Higher value means higher quality. -q:a sets audio quality between 1 and 10. Higher value means higher quality.

`avconv -i 160122-babobus-insta1.mp4 -c:v libtheora -c:a libvorbis -q:v 6 -q:a 5 -f ogg babo.ogv`


**Links**

- http://www.alecjacobson.com/weblog/?p=2102
- https://wiki.ubuntuusers.de/Libav/
- http://www.linux-magazine.com/Online/Blogs/Productivity-Sauce/Create-Animated-GIFs-with-ImageMagick
- https://ubuntuforums.org/showthread.php?t=979682