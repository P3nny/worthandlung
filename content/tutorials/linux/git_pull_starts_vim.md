---
title: "Git pull starts vim"
date: 2020-01-10T23:06:33+01:00
draft: false
---

### What to do if git pull starts vim?
You're in the text editor, vim! It's a modal text editor, so you would need to:

- Press i to enter insert mode.
- Now you can type your message, as if you were in a normal (non-modal) text editor.
- Press esc to go back to command mode.
- Then type :w followed by enter to save.
- Finally :q followed by enter to quit.

Thanks http://stackoverflow.com/questions/14046122/github-locks-up-mac-terminal-when-using-pull-command