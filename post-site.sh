#!/bin/bash

siteDir=$PWD"/_site/";
distDir=$PWD"/dist/";
distFiles=$distDir"*";
compDir=$siteDir"src/components/";
widgetDir=$siteDir"src/widgets/";
pagePath=$siteDir"index.html";


gen(){
	cd $1

	for file in `ls`;
	do
		if [ -d $file ];
		then
			#echo $file;
			cp $pagePath $file
		fi
	done
}

gen $compDir;

gen $widgetDir;

#copy dist files to _site for doc
cp $distFiles $siteDir;


