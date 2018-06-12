var data=[];
var dataStr='1、第一张<br>\<br>\第一张美食图啊啊啊啊<br>\<br>\<br>\
2、第二张<br>\<br>\第二张美食图啊啊啊啊<br>\<br>\<br>\
3、第三张<br>\<br>\第三张美食图啊啊啊啊<br>\<br>\<br>\
4、第四张<br>\<br>\第四张美食图啊啊啊啊<br>\<br>\<br>\
5、第五张<br>\<br>\第五张美食图啊啊啊啊<br>\<br>\<br>\
6、第六张<br>\<br>\第六张美食图啊啊啊啊<br>\<br>\<br>\
7、第七张<br>\<br>\第七张美食图啊啊啊啊<br>\<br>\<br>\
8、第八张<br>\<br>\第八张美食图啊啊啊啊<br>\<br>\<br>\
9、第九张<br>\<br>\第九张美食图啊啊啊啊<br>\<br>\<br>\
10、第十张<br>\<br>\第十张美食图啊啊啊啊';
var d = dataStr.split('<br><br><br>');
	for(var i=0;i<d.length;i++)
	{
		var c = d[i].split('<br><br>');
		data.push({
			img: c[0].replace('、',' ')+'.jpg',
			caption: c[0].split('、')[1],
			desc : c[1]
		});
		//console.log(c[0].replace('、',' ')+'.jpg');
	}