//轮播图swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    spaceBetween: 10,
    slidesPerGroup: 5,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

//语言切换按钮
$('.language').on('click', function () {
    $('.language ul').css('display', 'block')
}).on('mouseleave', function () {
    $('.language ul').css('display', 'none')
})

//语言切换
$('.language ul li').eq(0).on('click', function (){
    $('.language span').eq(0).html('中文')
    $('#title-top p').eq(0).html('登录')
    $('#title-top p').eq(1).html('注册')
    $('#nav-top .content ul li').css('font-size', 14)
    $('#nav-top .content ul li').eq(0).html('首页')
    $('#nav-top .content ul li').eq(1).html('包袋')


    $('#nav-top .content ul li').eq(2).html('腕表')
    $('#nav-top .content ul li').eq(2).css('margin-left',0)
    $('#nav-top .content ul li').eq(3).css('margin-left',0)

    $('#nav-top .content ul li').eq(3).html('珠宝首饰')
    $('#nav-top .content ul li').eq(4).html('服饰')
    $('#nav-top .content ul li').eq(5).html('鞋履')
    $('#nav-top .content ul li').eq(6).html('配饰')
    $('#nav-top .content ul li').eq(7).html('运动')
    $('#nav-top .content ul li').eq(8).html('家居')
    $('#nav-top .content ul li').eq(9).html('美妆')
    $('#nav-top .content ul li').eq(10).html('生活方式')
    $('#nav-top .content ul li').eq(11).css('display', 'block')
    $('#nav-top .content ul li').eq(12).html('搜索')

    $('#nav-top div').eq(1).html(`<p>分类</p>
            <h3>品牌</h3>
            <ul>
                <li>男士包袋</li>
                <li>钱包</li>
                <li>斜挎包</li>
                <li>双肩包</li>
            </ul>
            <ul>
                <li>女士包袋</li>
                <li>手拿包</li>
                <li>拉杆箱</li>
                <li>手提包</li>
            </ul>
            <ul>
                <li>爱马仕</li>
                <li>路易威登</li>
                <li>宝格丽</li>
                <li>范思哲</li>
                <li>普拉达</li>
            </ul>
            <ul>
                <li>香奈儿</li>
                <li>古驰</li>
                <li>蔻驰</li>
                <li>杜嘉班纳</li>
                <li>缪缪</li>
            </ul>
            <ul>
                <li>迪奥</li>
                <li>圣罗兰</li>
                <li>葆蝶家</li>
                <li>克洛伊</li>
                <li>亚历山大麦昆</li>
            </ul>`)

    $('#nav-top div').eq(2).html(`<p>分类</p>
            <h3>品牌</h3>
            <ul>
                <li>男士</li>
                <li>机械腕表</li>
            </ul>
            <ul>
                <li>女士</li>
                <li>石英腕表</li>
            </ul>
            <ul>
                <li>百达翡丽</li>
                <li>宝玑</li>
                <li>芝柏</li>
                <li>沛纳海</li>
                <li>真力时</li>
                <li>浪琴</li>
            </ul>
            <ul>
                <li>江诗丹顿</li>
                <li>朗格</li>
                <li>肖邦</li>
                <li>格拉苏蒂</li>
                <li>卡地亚</li>
                <li>天梭</li>
            </ul>
            <ul>
                <li>宝柏</li>
                <li>积家</li>
                <li>万国</li>
                <li>劳力士</li>
                <li>欧米茄</li>
                <li>汉密尔顿</li>
            </ul>`)
     $('#nav-top div').eq(3).html(`<p>分类</p>
            <h3>品牌</h3>
            <ul>
                <li>项链</li>
                <li>手链</li>
                <li>手镯</li>
                <li>手串</li>
                <li>首饰套装</li>
                <li>头饰</li>
            </ul>
            <ul>
                <li>吊坠</li>
                <li>耳饰</li>
                <li>戒指/指环</li>
                <li>串珠配珠</li>
                <li>胸针</li>
            </ul>
            <ul>
                <li>梵克雅宝</li>
                <li>迪奥</li>
                <li>爱马仕</li>
                <li>路易威登</li>
            </ul>
            <ul>
                <li>尚美</li>
                <li>宝格丽</li>
                <li>潘多拉</li>
                <li>Apm Monaco</li>
            </ul>
            <ul>
                <li>蒂芙尼</li>
                <li>施华洛世奇</li>
                <li>香奈儿</li>
                <li>莫妮卡维纳德</li>
            </ul>`)
                 
    $('#nav-top div').eq(4).html(`<p>分类</p>
            <h3>品牌</h3>
            <ul>
                <li>男装</li>
                <li>男士卫衣</li>
                <li>男士衬衫</li>
                <li>女士连衣裙</li>
            </ul>
            <ul>
                <li>女装</li>
                <li>男士裤装</li>
                <li>男士夹克</li>
                <li>女式外套</li>
            </ul>
            <ul>
                <li>博柏利</li>
                <li>MaxMara</li>
                <li>纪梵希</li>
                <li>丝黛拉麦卡妮</li>
            </ul>
            <ul>
                <li>Emporio Armani</li>
                <li>杜嘉班纳</li>
                <li>圣罗兰</li>
            </ul>
            <ul>
                <li>范思哲</li>
                <li>PRADA</li>
                <li>华伦天奴</li>
            </ul>`)

    $('#nav-top div').eq(5).html(`<p>分类</p>
            <h3>品牌</h3>
            <ul>
                <li>平底鞋</li>
                <li>皮鞋</li>
                <li>高跟鞋</li>
                <li>运动鞋</li>
            </ul>
            <ul>
                <li>靴子</li>
                <li>拖鞋</li>
                <li>凉鞋</li>
                <li>乐福鞋</li>
            </ul>
            <ul>
                <li>古驰</li>
                <li>马诺洛 伯拉尼克</li>
                <li>华伦天奴</li>
                <li>Golden Goose</li>
                <li>Hogan</li>
            </ul>
            <ul>
                <li>巴黎世家</li>
                <li>菲拉格基</li>
                <li>斯图尔特 韦茨曼</li>
                <li>Roger Vivier</li>
                <li>普拉达</li>
            </ul>
            <ul>
                <li>Jimmy Chao</li>
                <li>博柏利</li>
                <li>塞乔 罗西</li>
                <li>Tod's</li>
                <li>缪缪</li>
            </ul>`)
    $('#nav-top div').eq(6).html(`<p>分类</p>
            <h3>品牌</h3>
            <ul>
                <li>墨镜</li>
                <li>腰带</li>
                <li>丝巾</li>
                <li>挂饰</li>
                <li>手套</li>
                <li>袖扣</li>
            </ul>
            <ul>
                <li>眼镜框</li>
                <li>围巾</li>
                <li>雨伞</li>
                <li>帽子</li>
                <li>钥匙扣</li>
                <li>领结</li>
            </ul>
            <ul>
                <li>爱马仕</li>
                <li>菲拉格慕</li>
                <li>万宝龙</li>
                <li>巴利</li>
            </ul>
            <ul>
                <li>路易威登</li>
                <li>范思哲</li>
                <li>雷朋</li>
                <li>缪缪</li>
            </ul>
            <ul>
                <li>古驰</li>
                <li>博柏利</li>
                <li>普拉达</li>
                <li>葆蝶家</li>
            </ul>`)
    $('#nav-top div').eq(7).html(`<p>分类</p>
            <h3>品牌</h3>
            <ul>
                <li>跑步鞋</li>
                <li>背包</li>
                <li>骑行装备</li>
            </ul>
            <ul>
                <li>运动服</li>
                <li>健身装备</li>
                <li>泳装</li>
            </ul>
            <ul>
                <li>阿迪达斯</li>
                <li>彪马</li>
                <li>始祖鸟</li>
                <li>安德玛</li>
            </ul>
            <ul>
                <li>耐克</li>
                <li>Supreme</li>
                <li>Marmot</li>
                <li>Superga</li>
            </ul>
            <ul>
                <li>Y-3</li>
                <li>Hotsuit</li>
                <li>鬼冢虎</li>
                <li>亚瑟士</li>
            </ul>`)
    $('#nav-top div').eq(8).html(`<p>分类</p>
            <h3>品牌</h3>
            <ul>
                <li>饰品摆件</li>
                <li>家具</li>
                <li>手机</li>
            </ul>
            <ul>
                <li>生活电器</li>
                <li>智能科技</li>
                <li>影音娱乐</li>
            </ul>
            <ul>
                <li>Zippo</li>
                <li>玛戈隆特</li>
                <li>微软</li>
            </ul>
            <ul>
                <li>都彭</li>
                <li>三星</li>
                <li>华为</li>
            </ul>
            <ul>
                <li>菲仕乐</li>
                <li>魔声</li>
            </ul>`)
    $('#nav-top div').eq(9).html(`<p>分类</p>
            <h3>品牌</h3>
            <ul>
                <li>面部护理</li>
                <li>身体护理</li>
                <li>香水</li>
                <li>唇部彩妆</li>
            </ul>
            <ul>
                <li>眼部护理</li>
                <li>美容健康</li>
                <li>面部彩妆</li>
            </ul>
            <ul>
                <li>海蓝之谜</li>
                <li>迪奥</li>
                <li>YSL</li>
            </ul>
            <ul>
                <li>SK-II</li>
                <li>兰蔻</li>
                <li>Tom Ford</li>
            </ul>
            <ul>
                <li>香奈儿</li>
                <li>雅诗兰黛</li>
            </ul>`)
    $('#nav-top div').eq(10).html(`            <p>分类</p>
            <h3>品牌</h3>
            <ul>
                <li>豪车租赁</li>
                <li>旅行</li>
            </ul>
            <ul>
                <li>飞机 游艇</li>
                <li>美容与健康</li>
            </ul>
            <ul>
                <li>奥迪</li>
            </ul>
            <ul>
                <li>OXYGYM</li>
            </ul>
            <ul>
                <li>青岛乘风破浪帆船俱乐部</li>
            </ul>`)
            
    $('#banner-top img').eq(0).attr('src','https://pic14.secooimg.com/push/2019/0617/b2ad8797be5f4a76a8e7bc0e7327530b.jpg')
    $('#banner-top img').eq(1).attr('src','https://pic13.secooimg.com/push/18/11/5e08f1525e484e95824002ae33cb6322.png')
    $('#banner-top img').eq(4).attr('src','https://pic11.secooimg.com/push/18/11/34f9f24874af4ae6a6a5d8f0aa253ddf.png')
    $('#banner-middle img').eq(1).attr('src','https://pic11.secooimg.com/push/18/11/8ee9d414c7674563b892271e2eb81951.png')
    $('#sikumarket img').attr('src','https://pic14.secooimg.com/push/2019/0722/cd2f846655a04cd1ad1341254a916431.jpg')
    $('#app img').eq(0).attr('src','https://pic11.secooimg.com/push/18/11/f77de773a9a646a4a9e18ab28d6c710d.jpg')
    $('#app img').eq(1).attr('src','https://pic13.secooimg.com/push/18/11/31870faf4d624ab7873c02f59da6004b.jpg')
    $('#app img').eq(2).attr('src','https://pic12.secooimg.com/push/18/11/5a68b33440ec4599aa553c5ce06e8e5e.jpg')
    $('.adv img').eq(0).attr('src','https://pic11.secooimg.com/push/18/11/b80a21c2b985477885c4536cfecbb38b.jpg')
    $('.adv img').eq(1).attr('src','https://pic13.secooimg.com/push/18/11/63229c04ab284807b634cd0b36178444.jpg')
    $('.adv img').eq(2).attr('src','https://pic13.secooimg.com/push/18/11/c154878a6dbb4380a52209cb64462cb0.jpg')            
    
})
$('.language ul li').eq(1).on('click', function () {
    $('.language span').eq(0).html('EN')
    $('#title-top p').css('letter-spacing', 0)
    $('#title-top p').eq(0).html('Log In')
    $('#title-top p').eq(1).html('Register')
    $('#nav-top .content ul li').css('font-size', 12)
    $('#nav-top .content ul li').eq(0).html('HOME')
    $('#nav-top .content ul li').eq(1).html('BAGS')


    $('#nav-top .content ul li').eq(2).html('WATCHES')
    $('#nav-top .content ul li').eq(2).css('margin-left',-10)
    $('#nav-top .content ul li').eq(3).css('margin-left',10)

    $('#nav-top .content ul li').eq(3).html('JEWLRY')
    $('#nav-top .content ul li').eq(4).html('CLOTHING')
    $('#nav-top .content ul li').eq(5).html('SHOES')
    $('#nav-top .content ul li').eq(6).html('ACCESSORIES')
    $('#nav-top .content ul li').eq(7).html('SPORTS')
    $('#nav-top .content ul li').eq(8).html('HOME&TECH')
    $('#nav-top .content ul li').eq(9).html('BEAUTY')
    $('#nav-top .content ul li').eq(10).html('LIFESTYLE')
    $('#nav-top .content ul li').eq(11).css('display', 'none')
    $('#nav-top .content ul li').eq(12).html('SEARCH')

    $('#nav-top div').eq(1).html(`
                <p>CATEGORY</p>
                <h3>BRAND</h3>
                <ul>
                <li>Men</li>
                <li>Wallets</li>
                <li>Shoulder bags</li>
                <li>Backpacks</li>
                </ul>
                <ul>
                <li>Women</li>
                <li>Clutches</li>
                <li>Luggage</li>
                <li>Handlbags</li>
                </ul>
                <ul>
                <li>Hermès</li>
                <li>Louis Vuitton</li>
                <li>Bvlgari</li>
                <li>Versace</li>
                <li>PRADA</li>
                </ul>
                <ul>
                <li>CHANEL</li>
                <li>Gucci</li>
                <li>Coach</li>
                <li>Dolce&Gabbana</li>
                <li>Miu Miu</li>
                </ul>
                <ul>
                <li>Dior</li>
                <li>Saint Laurent</li>
                <li>Bottega Veneta</li>
                <li>Chloé</li>
                <li>Alexander McQueen</li>
                </ul>`)


    $('#nav-top div').eq(2).html(`
            <p>CATEGORY</p>
            <h3>BRAND</h3>
            <ul>
                <li>Men</li>
                <li>Mechanical watches</li>
            </ul>
            <ul>
                <li>Women</li>
                <li>Quartz watches</li>
            </ul>
            <ul>
                <li>Patek Philippe</li>
                <li>Breguet</li>
                <li>GP-Girard Perregaux</li>
                <li>Panerai</li>
                <li>Zenith</li>
                <li>LONGINES</li>
            </ul>
            <ul>
                <li>Vacheron Constantin</li>
                <li>A.Lange & Sohne</li>
                <li>Chopard</li>
                <li>Glashutte Original</li>
                <li>Cartier</li>
                <li>TISSOT</li>
            </ul>
            <ul>
                <li>Blancpain</li>
                <li>Jaeger LeCoultre</li>
                <li>IWC</li>
                <li>Rolex</li>
                <li>OMEGA</li>
                <li>Hamilton</li>
            </ul>`)

    $('#nav-top div').eq(3).html(`
            <p>CATEGORY</p>
            <h3>BRAND</h3>
            <ul>
                <li>Necklaces</li>
                <li>Bracelets</li>
                <li>Bangles</li>
                <li>Buddhist bracelets</li>
                <li>Jewelry sets</li>
                <li>Headwares</li>
            </ul>
            <ul>
                <li>Pendants</li>
                <li>Earrings</li>
                <li>Rings</li>
                <li>Charms</li>
                <li>Brooches</li>
            </ul>
            <ul>
                <li>VanClee&Arpels</li>
                <li>Dior</li>
                <li>Hermes</li>
                <li>Louis Vuitton</li>
            </ul>
            <ul>
                <li>Chaumet</li>
                <li>Bvlgari</li>
                <li>Pandora</li>
                <li>APM Monaco</li>
            </ul>
            <ul>
                <li>Tiffany</li>
                <li>Swarovski</li>
                <li>CHANEL</li>
                <li>Monica Vinader</li>
            </ul>`)
    $('#nav-top div').eq(4).html(`
            <p>CATEGORY</p>
            <h3>BRAND</h3>
            <ul>
                <li>Men</li>
                <li>Men's hoodies</li>
                <li>Men's shirts</li>
                <li>Women's dresses</li>
            </ul>
            <ul>
                <li>Women</li>
                <li>Men's pants</li>
                <li>Men's jackets</li>
                <li>Women's coats</li>
            </ul>
            <ul>
                <li>Burberry</li>
                <li>MaxMara</li>
                <li>Givenchy</li>
                <li>Stella McCartney</li>
            </ul>
            <ul>
                <li>Emporio Armani</li>
                <li>Dolce&Gabbana</li>
                <li>Saint Laurent</li>
            </ul>
            <ul>
                <li>Versace</li>
                <li>PRADA</li>
                <li>Valentino</li>
            </ul>`)
    $('#nav-top div').eq(5).html(`
            <p>CATEGORY</p>
            <h3>BRAND</h3>
            <ul>
                <li>Ballerina shoes</li>
                <li>Leather shoes</li>
                <li>Pumps</li>
                <li>Sneakers</li>
            </ul>
            <ul>
                <li>Boots</li>
                <li>Slides</li>
                <li>Sandals</li>
                <li>Loafers</li>
            </ul>
            <ul>
                <li>Gucci</li>
                <li>Manolo Blahnik</li>
                <li>Valentino</li>
                <li>Golden Goose</li>
                <li>Hogan</li>
            </ul>
            <ul>
                <li>Balenciaga</li>
                <li>Salvatore Ferragamo</li>
                <li>Stuart Weitzman</li>
                <li>Roger Vivier</li>
                <li>PRADA</li>
            </ul>
            <ul>
                <li>Jimmy Chao</li>
                <li>Burberry</li>
                <li>Sergio Rossi</li>
                <li>Tod's</li>
                <li>Miu Miu</li>
            </ul>`)
    $('#nav-top div').eq(6).html(`
            <p>CATEGORY</p>
            <h3>BRAND</h3>
            <ul>
                <li>Sunglasses</li>
                <li>Belts</li>
                <li>Scarves</li>
                <li>Chains</li>
                <li>Gloves</li>
                <li>Cuffs</li>
            </ul>
            <ul>
                <li>Frames</li>
                <li>Scarfs</li>
                <li>Umbrellas</li>
                <li>Hats</li>
                <li>Keyrings</li>
                <li>Bows</li>
            </ul>
            <ul>
                <li>Hermes</li>
                <li>Salvatore Ferragamo</li>
                <li>Montblanc</li>
                <li>Bally</li>
            </ul>
            <ul>
                <li>Louis Vuitton</li>
                <li>Versace</li>
                <li>Ray-Ban</li>
                <li>Miu Miu</li>
            </ul>
            <ul>
                <li>Gucci</li>
                <li>Burberry</li>
                <li>PRADA</li>
                <li>Battega Veneta</li>
            </ul>`)
    $('#nav-top div').eq(7).html(`
            <p>CATEGORY</p>
            <h3>BRAND</h3>
            <ul>
                <li>Runnung shoes</li>
                <li>Backpacks</li>
                <li>Cycling equipments</li>
            </ul>
            <ul>
                <li>Sports clothing</li>
                <li>Workout apparatus</li>
                <li>Swimsuit</li>
            </ul>
            <ul>
                <li>Adidas</li>
                <li>Puma</li>
                <li>Arcteryx</li>
                <li>Under Armour</li>
            </ul>
            <ul>
                <li>Nike</li>
                <li>Supreme</li>
                <li>Marmot</li>
                <li>Superga</li>
            </ul>
            <ul>
                <li>Y-3</li>
                <li>Hotsuit</li>
                <li>Onitsuka Tiger</li>
                <li>Asics</li>
            </ul>`)
    $('#nav-top div').eq(8).html(`
            <p>CATEGORY</p>
            <h3>BRAND</h3>
            <ul>
                <li>Decorations</li>
                <li>Furniture</li>
                <li>Phones</li>
            </ul>
            <ul>
                <li>Electric appliance</li>
                <li>High-tech</li>
                <li>Entertaining</li>
            </ul>
            <ul>
                <li>Zippo</li>
                <li>Miracle Dynasty</li>
                <li>Microsoft</li>
            </ul>
            <ul>
                <li>S.T.Dupont</li>
                <li>Samsung</li>
                <li>Huawei</li>
            </ul>
            <ul>
                <li>Fissler</li>
                <li>Beats</li>
            </ul>`)
    $('#nav-top div').eq(9).html(`
            <p>CATEGORY</p>
            <h3>BRAND</h3>
            <ul>
                <li>Skin care</li>
                <li>Body care</li>
                <li>Perfumes</li>
                <li>Lip makeups</li>
            </ul>
            <ul>
                <li>Eye care</li>
                <li>Fitness</li>
                <li>Face makeups</li>
            </ul>
            <ul>
                <li>La Mer</li>
                <li>Dior</li>
                <li>YSL</li>
            </ul>
            <ul>
                <li>SK-II</li>
                <li>Lancome</li>
                <li>Tom Ford</li>
            </ul>
            <ul>
                <li>CHANEL</li>
                <li>Estee Lauder</li>
            </ul>`)
    $('#nav-top div').eq(10).html(`
            <p>CATEGORY</p>
            <h3>BRAND</h3>
            <ul>
                <li>Car renting</li>
                <li>Travel</li>
            </ul>
            <ul>
                <li>Yachts renting</li>
                <li>SPA</li>
            </ul>
            <ul>
                <li>Audi</li>
            </ul>
            <ul>
                <li>OXYGYM</li>
            </ul>
            <ul>
                <li>Multi23</li>
            </ul>`)
    $('#nav-top h3').css('margin-left', 312)

    $('#banner-top img').eq(0).attr('src','https://pic14.secooimg.com/push/2019/0617/0b60416fa10b47828974db22006a0122.jpg')
    $('#banner-top img').eq(1).attr('src','https://pic12.secooimg.com/push/18/11/34a14c2972e14c77aa050b5b671ebca5.png')
    $('#banner-top img').eq(4).attr('src','https://pic11.secooimg.com/push/18/11/0c2612c86adf41cb98a06c2720fb3661.png')
    $('#banner-middle img').eq(1).attr('src','https://pic11.secooimg.com/push/18/11/d5cd09bdb55c41248290f75ff0a03048.png')
    $('#sikumarket img').attr('src','https://pic12.secooimg.com/push/2019/0722/f86ac14bd3ba43299e07648f578e2030.jpg')
    $('#app img').eq(0).attr('src','https://pic10.secooimg.com/push/18/11/fcc54afa7bd646988d4cdb2e0e20ca02.jpg')
    $('#app img').eq(1).attr('src','https://pic13.secooimg.com/push/18/11/89adb3a535c94a3fa5185eef0e3536f5.jpg')
    $('#app img').eq(2).attr('src','https://pic11.secooimg.com/push/18/11/74edfff4dbe74ba280929fd9e519f7d1.jpg')
    $('.adv img').eq(0).attr('src','https://pic12.secooimg.com/push/18/11/a50eaf7b705d456691eedeb671d30df3.jpg')
    $('.adv img').eq(1).attr('src','https://pic14.secooimg.com/push/18/11/706cc9f7fdc54cdea225d9f7eeb43743.jpg')
    $('.adv img').eq(2).attr('src','https://pic13.secooimg.com/push/18/11/9accaa4c138e4c61bb4a81018566a50b.jpg')
    
})


//注册按钮
document.querySelector('#title-top p:first-of-type').onclick = () => location.href = '../login/login.html'
document.querySelector('#title-top p:last-of-type').onclick = () => location.href = '../register/register.html'

//导航二级菜单
var navTopList = document.querySelectorAll('#nav-top .content ul li')
var navTopContent = document.querySelectorAll('#nav-top .nav-list')

var navTopListLen = navTopList.length
for (let i = 1; i < navTopListLen - 2; i++) {
    navTopList[i].onmouseenter = function (e) {
        navTopContent[i - 1].className = 'nav-list contain-layout'
        navTopList[i].onmouseleave = function (e) {
            navTopContent[i - 1].className = 'nav-list contain-layout hidden'
            navTopContent[i - 1].onmouseenter = function (e) {
                navTopContent[i - 1].className = 'nav-list contain-layout'
                navTopContent[i - 1].onmouseleave = function (e) {
                    navTopContent[i - 1].className = 'nav-list contain-layout hidden'
                }
            }
        }
    }
}
//顶部banner部分
document.querySelector('#banner-top img:nth-of-type(4)').onclick = function () {
    this.style.display = 'none'
    document.querySelector('#banner-top video').display = 'block'
    document.querySelector('#banner-top video').play()
    document.querySelector('#banner-top video').volume = '0'
}

//搜索按钮 :原生js
// document.querySelector('#nav-top ul li.search').onmousedown = function(){
//     this.onmouseup = function(){
//     document.querySelector('#nav-top').style.height = 100 + 'px'  
//     document.querySelector('#nav-top ul span').style.top = 50 + 'px'
//     document.querySelector('#nav-top ul span').style.color = 'white'
//     document.querySelector('#nav-top ul li.search').style.display = 'none'
//     document.querySelector('#nav-top .content input').style.display = 'block'
//     document.querySelector('#nav-top .content input').style.left = document.querySelector('#nav-top .content input').offsetLeft - 100 + 'px'  
//     }         
// }
// document.querySelector('#nav-top .content input').onmouseleave = function(){

//     document.onmousedown = function(){
//         document.querySelector('#nav-top').style.height = 50 + 'px'
//         document.querySelector('#nav-top ul span').style.top = 0 + 'px'
//         document.querySelector('#nav-top ul span').style.color = '#ffb81c'
//         document.querySelector('#nav-top ul li.search').style.display = 'block'
//         document.querySelector('#nav-top .content input').style.left = 1075 + 'px'
//         document.querySelector('#nav-top .content input').style.display = 'none'
//         document.onmouseup = function(){
//             this.onmousedown = null
//         }
//     }
// }
//搜索按钮：jQuery
$('#nav-top .content ul li.search').on('click', function () {
    $('#nav-top .content input').css('display', 'block')
    $('#nav-top ul span').css('color', 'white')
    $('#nav-top ul li.search').css('display', 'none')
    $('#nav-top .content input').animate({
        left: '970px',
        opacity: 1
    }).animate({
        top: 63,
    }, 5)

    setTimeout(function () {
        $('#nav-top .content input').focus()
        $('#nav-top').css('height', 100)
        $('#nav-top ul span').css('top', 50)
    }, 400)

})
$('#nav-top .content input').on('blur', function () {
    $(this).css('top', 11)
    $('#nav-top ul span').css('top', 0)
    $('#nav-top').css('height', 50)
    setTimeout(function () {
        $('#nav-top ul li.search').css('display', 'inline-block')
        $('#nav-top ul span').css('color', '#ffb81c')
    }, 400)
    $(this).animate({
        opacity: 0,
        left: 1190
    }).animate({
        top: 11
    })
})


//轮播图鼠标移入事件
$('#slider .swiper-wrapper .swiper-slide').on('mouseenter', function () {
    $(this).animate({
        top: -10
    }, 200)
}).on('mouseleave', function () {
    $(this).stop(true)
    $(this).animate({
        top: 0
    }, 200)
})
$('.swiper-slide .mask2').on('mouseenter', function () {
    $(this).next().css('color', '#ffb81c')
}).on('mouseleave', function () {
    $(this).next().css('color', 'black')
})
//mask黑色半透明遮罩层
$('#banner-top img').eq(1).on('mouseenter', function () {
    $('#banner-top .mask').eq(1).animate({
        opacity: .3
    }, 200)
    $('#banner-top img').eq(1).on('mouseleave', function () {
        $('#banner-top .mask').eq(1).stop(true)
        $('#banner-top .mask').eq(1).animate({
            opacity: 0
        }, 200)
    })
})

$('#banner-middle img').eq(1).on('mouseenter', function () {
    $('#banner-middle .mask').animate({
        opacity: .3
    }, 200)
    $('#banner-middle img').eq(1).on('mouseleave', function () {
        $('#banner-middle .mask').stop(true)
        $('#banner-middle .mask').animate({
            opacity: 0
        }, 200)
    })
})


$('.mask').on('mouseenter', function () {
    $(this).animate({
        opacity: .3
    }, 200).on('mouseleave', function () {
        $(this).stop(true)
        $(this).animate({
            opacity: 0
        }, 200)
    })
})


//微信微博鼠标事件
$('.media ul li').on('mouseenter', function () {
    $(this).children('img').css('display', 'block')
}).on('mouseleave', function () {
    $(this).children('img').css('display', 'none')
})