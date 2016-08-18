#!/bin/bash

siteDir=$PWD"/_site/";
compDir=$siteDir"src/components/";
pagePath=$siteDir"index.html";

cd $compDir

for file in `ls`;
do
	if [ -d $file ];
	then
		#echo $file;
		cp $pagePath $file
	fi
done

