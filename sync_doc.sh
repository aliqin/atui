#!/usr/bin/env bash
tempdir=`mktemp -d -t atui.XXXXXX`
workDir=$PWD
tempContent=$tempdir"/*"
git clone https://github.com/aliqin/aliqin.github.io.git $tempdir

cd $tempdir && rm -rf $tempContent
cd $workDir
cp -r ./_site/* $tempdir
cd $tempdir
git add -A 
git commit -m 'doc update'
git push origin master
rm -rf tempdir
