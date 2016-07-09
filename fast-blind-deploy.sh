#!/usr/bin/env bash

npm run build;
git add build;
git commit -am 'Updates, bug-fixes, enhances.';
git checkout develop;
git push;
git checkout master;
git merge develop;
git push;
git checkout develop;
