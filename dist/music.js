const ap = new APlayer({
    container: document.getElementById('aplayer'), //播放器容器元素
    mini: false, //迷你模式
    autoplay: false, //自动播放
    theme: '#76e0ea', //主题色
    loop: 'all', //音频循环播放, 可选值: 'all'全部循环, 'one'单曲循环, 'none'不循环
    order: 'random', //音频循环顺序, 可选值: 'list'列表循环, 'random'随机循环
    preload: 'auto', //预加载，可选值: 'none', 'metadata', 'auto'
    volume: 0.7, //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
    mutex: true, //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    listFolded: true, //列表默认折叠
    listMaxHeight: 3, //列表最大高度
    //lrcType: 3, //歌词传递方式
    audio: [ //音频信息,包含以下
        {
            name: '大氿歌', //音频名称
            artist: '乐正绫', //音频艺术家
            url: 'http://music.163.com/song/media/outer/url?id=1354122070.mp3', //音频外链
            cover: 'http://p2.music.126.net/NS3Dnpj16eWHop8VlT8lGQ==/109951163949588122.jpg?param=90y90', //音频封面
            //lrc: 'lrc1.lrc', //音频歌词，配合上面的lrcType使用
            theme: '#ebd0c2' //切换到此音频时的主题色，比上面的 theme 优先级高
        },
        {
            name: '广寒宫', //如果只有一首歌，删掉这一块，如有更多歌曲按此格式逐渐往下添加
            artist: '丸子呦',
            url: 'http://music.163.com/song/media/outer/url?id=1362125019.mp3',
            cover: 'http://p2.music.126.net/t2Y3otEoZ6DoHj49itSJKA==/109951164036717561.jpg?param=90y90',
            //lrc: 'lrc2.lrc',
            theme: '#46718b'
        },
        {
            name: '攀登', //如果只有一首歌，删掉这一块，如有更多歌曲按此格式逐渐往下添加
            artist: 'Ersen0306 / Yelaman',
            url: 'http://music.163.com/song/media/outer/url?id=1381588125.mp3',
            cover: 'http://p1.music.126.net/FPipJ0O-TA6CZApM1TfXmQ==/109951164257586432.jpg?param=90y90',
            //lrc: 'lrc2.lrc',
            theme: '#46718b'
        },
        {
            name: 'Mine', //如果只有一首歌，删掉这一块，如有更多歌曲按此格式逐渐往下添加
            artist: 'ILLENIUM / Phoebe Ryan',
            url: 'http://music.163.com/song/media/outer/url?id=30780496.mp3',
            cover: 'http://p1.music.126.net/94Zjhb6ibXN9jpIjRQDbUw==/7762552092459017.jpg?param=90y90',
            //lrc: 'lrc2.lrc',
            theme: '#46718b'
        },
        {
            name: 'Fire', //如果只有一首歌，删掉这一块，如有更多歌曲按此格式逐渐往下添加
            artist: 'Gavin Degraw',
            url: 'http://music.163.com/song/media/outer/url?id=28923579.mp3',
            cover: 'http://p2.music.126.net/eLu-ldZYiOYTmNHNvvAVZw==/18851126858251972.jpg?param=90y90',
            //lrc: 'lrc2.lrc',
            theme: '#46718b'
        },
        {
            name: '不醉不会', //如果只有一首歌，删掉这一块，如有更多歌曲按此格式逐渐往下添加
            artist: '田馥甄',
            url: 'http://music.163.com/song/media/outer/url?id=28018072.mp3',
            cover: 'http://p1.music.126.net/aPnwHIJECLpQCoSV-qm_qA==/109951163571315498.jpg?param=90y90',
            //lrc: 'lrc2.lrc',
            theme: '#46718b'
        },
        {
            name: '哪吒',
            artist: 'GAI/大痒痒',
            url: 'http://music.163.com/song/media/outer/url?id=1378085345.mp3',
            cover: 'http://p1.music.126.net/vcoe8am30nalBMPvPMHLzg==/109951164215638256.jpg?param=90y90',
            //lrc: 'lrc2.lrc',
            theme: '#46718b'
        },
        {
            name: '把孤独当做晚餐',
            artist: '井胧',
            url: 'http://music.163.com/song/media/outer/url?id=1381969230.mp3',
            cover: 'http://p1.music.126.net/vcoe8am30nalBMPvPMHLzg==/109951164215638256.jpg?param=90y90',
            //lrc: 'lrc2.lrc',
            theme: '#46718b'
        },
        {
            name: '今后我与自己流浪',
            artist: '张碧晨',
            url: 'http://music.163.com/song/media/outer/url?id=1379410256.mp3',
            cover: 'http://p1.music.126.net/PmclXMHHh02RM0nRPUICvw==/109951164230876988.jpg?param=90y90',
            //lrc: 'lrc2.lrc',
            theme: '#46718b'
        },
        {
            name: '勾指起誓',
            artist: '泠鸢yousa',
            url: 'http://music.163.com/song/media/outer/url?id=1350160463.mp3',
            cover: 'http://p2.music.126.net/o7CZTQ9lJDN_ifTKa7QRGg==/109951163905650165.jpg?param=90y90',
            //lrc: 'lrc2.lrc',
            theme: '#46718b'
        },
        {
            name: '新·九九八十一', //如果只有一首歌，删掉这一块，如有更多歌曲按此格式逐渐往下添加
            artist: '泠鸢yousa',
            url: 'http://music.163.com/song/media/outer/url?id=499611311.mp3',
            cover: 'http://p1.music.126.net/k8Fxa118GP34K0VTGKWaDg==/109951163003648209.jpg?param=90y90',
            //lrc: 'lrc2.lrc',
            theme: '#46718b'
        },
        {
            name: '渡我不渡她', //如果只有一首歌，删掉这一块，如有更多歌曲按此格式逐渐往下添加
            artist: '泠鸢yousa',
            url: 'http://music.163.com/song/media/outer/url?id=1355916220.mp3',
            cover: 'http://p2.music.126.net/L5N55mQx9ab-EGAM1AprUA==/109951163973944591.jpg?param=90y90',
            //lrc: 'lrc2.lrc',
            theme: '#46718b'
        },
        {
            name: '天行九歌', //如果只有一首歌，删掉这一块，如有更多歌曲按此格式逐渐往下添加
            artist: '霍尊',
            url: 'http://music.163.com/song/media/outer/url?id=414118616.mp3',
            cover: 'http://p1.music.126.net/YqpP12ONNFkIiX4TAQ62gw==/1410673429302015.jpg?param=90y90',
            //lrc: 'lrc2.lrc',
            theme: '#46718b'
        },
        {
            name: '多想在平庸的生活拥抱你', //如果只有一首歌，删掉这一块，如有更多歌曲按此格式逐渐往下添加
            artist: '隔壁老樊',
            url: 'http://music.163.com/song/media/outer/url?id=1346104327.mp3',
            cover: 'http://p1.music.126.net/0HDo6FVFjsHytNnkSvIb5w==/109951164053306453.jpg?param=90y90',
            //lrc: 'lrc2.lrc',
            theme: '#46718b'
        },
        {
            name: '意外', //如果只有一首歌，删掉这一块，如有更多歌曲按此格式逐渐往下添加
            artist: '薛之谦',
            url: 'http://music.163.com/song/media/outer/url?id=27890306.mp3',
            cover: 'http://p2.music.126.net/WPHmBisDxnoF4DrBLKwl3Q==/109951163169021112.jpg?param=90y90',
            //lrc: 'lrc2.lrc',
            theme: '#46718b'
        },
        {
            name: '石楠小扎', //如果只有一首歌，删掉这一块，如有更多歌曲按此格式逐渐往下添加
            artist: '贰婶',
            url: 'http://music.163.com/song/media/outer/url?id=442030651.mp3',
            cover: 'http://p1.music.126.net/_2LHqE_JXw87lvwlmJLcJA==/109951162811944810.jpg?param=90y90',
            //lrc: 'lrc2.lrc',
            theme: '#46718b'
        },
    ]
});
