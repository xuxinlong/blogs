#!/bin/sh
rm -rf ./dist/*
npm run build
tar -zcf blogs.tar.gz ./dist/*
scp blogs.tar.gz root@47.104.157.93:/data/app/html/blogs/blogs.tar.gz

rm -rf blogs.tar.gz
echo ' 服务器处理 '
ssh root@47.104.157.93 << eeooff
	cd /data/app/html/blogs/
	rm -rf blogs
	tar -zxf blogs.tar.gz
	mv dist blogs

	exit 
eeooff
echo Finished: SUCCESS!
