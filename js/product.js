var list=new Array(
            "中国当代小说（13880）","中国近现代小...（640）","中国古典小说（1547）",
            "四大名著（696）","港澳台小说（838）","外国小说（5119）",
            "侦探/悬疑/推...（2519）","惊悚/恐怖（798）","魔幻（369）","科幻 （513）",
            "武侠（574）","军事（726）","情感 （6700）",
            "社会（4855）","都市（949）","乡土（99）","职场（176）",
            "财经（292）","官场（438）","历史（1329）","影视小说（501）",
            "作品集（2019）","世界名著（3273）"
        );
var catalog=[];
catalog[0] = ['images/product_list_01.jpg','私募（首部披露资本博弈秘密的金融小说）',4,'郭现杰','花山文艺出版社', '2009年08月',
            '数年前，在一次股市的多、空之战中，以赵云狄、林康为首的私募基金—金鼎投资，和以王雨龙为首的私募基金，达成锁仓协议分食利益。殊料，以王雨龙为首的私募基金—鑫利投资背信弃义，导致金鼎投资惨败。以至...',
            '13.10','59折','￥18.90','￥32.00'];
catalog[1] = ['images/product_list_02.jpg','圈子圈套.1.战局篇',4,'王强','清华大学出版社', '2006年01月',
    '虽然没有硝烟，却比战场更血腥；虽然并未战死，却比死亡更痛苦。 洪钧从一个底层的销售人员，成为一家著名的跨国公司的中国区代理首席代表，在即将被扶正，事业情感都志得意满的时候，掉入俞威设计的圈套，...',
    '￥8.90','68折','￥19.10','￥28.00'];
    catalog[2] = ['images/product_list_01.jpg','私募（首部披露资本博弈秘密的金融小说）',4,'郭现杰','花山文艺出版社', '2009年08月',
            '数年前，在一次股市的多、空之战中，以赵云狄、林康为首的私募基金—金鼎投资，和以王雨龙为首的私募基金，达成锁仓协议分食利益。殊料，以王雨龙为首的私募基金—鑫利投资背信弃义，导致金鼎投资惨败。以至...',
            '13.10','59折','￥18.90','￥32.00'];
$(function(){
    var content='';
    var $ul=$('#product_catList').html('<ul></ul>');
    for(var i=0;i<list.length;i++){
        $ul.append('<li style="cursor:pointer;">'+list[i]+'</li>')
    }
    for(var i=0;i<3;i++){
        content +="<div class='left div' ><div class='smallDiv'><img src='"+catalog[i][0]+" 'width='100%'></div><div class='smallDiv'><span>"+catalog[i][catalog[0].length-2]+"</span><del>"+catalog[i][catalog[0].length-1]+"</del><span>"+catalog[i][catalog[0].length-3]+"</span></div><p>"+catalog[i][catalog[0].length-5]+"</p></div>";
    } 
    $('#storyBooksssss').append(content);
    // var $div=$('#product_storyList_content').html('<div></div>');
    
    $('#product_array a').eq(1).click(function(){
        $('#storyBooksssss').slideDown(500);
        
    }).siblings().stop().click(function(){
        $('#storyBooksssss').slideUp(500);
    })
})
