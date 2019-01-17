#!/usr/bin/env sh

#abort on errors
set -e

#build
npm run build

#commit
git add -A
git commit -m 'deploy'

#git push
gp

#exit
exit
