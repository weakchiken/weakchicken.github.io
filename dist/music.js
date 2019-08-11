const ap = new APlayer({
    container: document.getElementById('aplayer'), //播放器容器元素
    mini: false, //迷你模式
    autoplay: false, //自动播放
    theme: '#FADFA3', //主题色
    loop: 'all', //音频循环播放, 可选值: 'all'全部循环, 'one'单曲循环, 'none'不循环
    order: 'random', //音频循环顺序, 可选值: 'list'列表循环, 'random'随机循环
    preload: 'auto', //预加载，可选值: 'none', 'metadata', 'auto'
    volume: 0.7, //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
    mutex: true, //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    listFolded: false, //列表默认折叠
    listMaxHeight: 3, //列表最大高度
    //lrcType: 3, //歌词传递方式
    audio: [ //音频信息,包含以下
        {
            name: '大氿歌', //音频名称
            artist: '乐正绫', //音频艺术家
            url: 'https://m10.music.126.net/20190811150333/10d61a6d896b0042e30a1aeca76bc7bf/ymusic/0258/5508/560b/52c0516027bb7cd65f9caaa81432279f.mp3', //音频外链
            cover: 'http://p2.music.126.net/NS3Dnpj16eWHop8VlT8lGQ==/109951163949588122.jpg?param=90y90', //音频封面
            //lrc: 'lrc1.lrc', //音频歌词，配合上面的lrcType使用
            theme: '#ebd0c2' //切换到此音频时的主题色，比上面的 theme 优先级高
        },
        {
            name: '哪吒',
            artist: 'GAI/大痒痒',
            url: 'https://m10.music.126.net/20190811150833/e4f0db4ffe8b07e7db4e7f5d85c07c2c/ymusic/5408/560c/555f/cb80b28b96afd7afa958b5359fb27e8e.mp3',
            cover: 'http://p1.music.126.net/vcoe8am30nalBMPvPMHLzg==/109951164215638256.jpg?param=90y90',
            //lrc: 'lrc2.lrc',
            theme: '#46718b'
        },
        {
            name: '把孤独当做晚餐',
            artist: '井胧',
            url: 'https://m10.music.126.net/20190811151517/511e03d78873b13a28b6ab80b3001467/ymusic/525e/0208/555d/e45c4b39a75bfcf78a4fb7e5d04c823e.mp3',
            cover: 'http://p1.music.126.net/vcoe8am30nalBMPvPMHLzg==/109951164215638256.jpg?param=90y90',
            //lrc: 'lrc2.lrc',
            theme: '#46718b'
        },
        {
            name: '今后我与自己流浪',
            artist: '张碧晨',
            url: 'https://m10.music.126.net/20190811152611/a93ad2624aba665abf99fc45fe1cf6ab/ymusic/040e/0608/0459/3d9691fd991be57cedc2330c3c91f0af.mp3',
            cover: 'http://p1.music.126.net/PmclXMHHh02RM0nRPUICvw==/109951164230876988.jpg?param=90y90',
            //lrc: 'lrc2.lrc',
            theme: '#46718b'
        },
        {
            name: '勾指起誓',
            artist: '泠鸢yousa',
            url: 'https://m10.music.126.net/20190811152909/7b5d32bb446df846a49f44bb74321511/ymusic/035b/560c/0059/41a9a55bdfaffc78619b7318bcb6a9bd.mp3',
            cover: 'http://p2.music.126.net/o7CZTQ9lJDN_ifTKa7QRGg==/109951163905650165.jpg?param=90y90',
            //lrc: 'lrc2.lrc',
            theme: '#46718b'
        },
        {
            name: '新·九九八十一', //如果只有一首歌，删掉这一块，如有更多歌曲按此格式逐渐往下添加
            artist: '泠鸢yousa',
            url: 'https://m10.music.126.net/20190811153155/4c2c2976848b382e27dc58a046003a23/ymusic/2ae6/aadc/b2d5/46f08265a749427a60bc254f41b6481a.mp3',
            cover: 'http://p1.music.126.net/k8Fxa118GP34K0VTGKWaDg==/109951163003648209.jpg?param=90y90',
            //lrc: 'lrc2.lrc',
            theme: '#46718b'
        },
        {
            name: '渡我不渡她', //如果只有一首歌，删掉这一块，如有更多歌曲按此格式逐渐往下添加
            artist: '泠鸢yousa',
            url: 'https://m10.music.126.net/20190811153947/12b4376d08588b28073f2a22eca1e617/ymusic/525d/0753/035d/e7f494146b092a03939c47d5acfe0634.mp3',
            cover: 'http://p2.music.126.net/L5N55mQx9ab-EGAM1AprUA==/109951163973944591.jpg?param=90y90',
            //lrc: 'lrc2.lrc',
            theme: '#46718b'
        },
        {
            name: '天行九歌', //如果只有一首歌，删掉这一块，如有更多歌曲按此格式逐渐往下添加
            artist: '霍尊',
            url: 'https://m10.music.126.net/20190811154740/63fcfa73f8bbc37c112bb3f2b0889fd4/ymusic/fcf7/17e3/1e2d/879346c12fdf513d23d085a229bdf132.mp3',
            cover: 'http://p1.music.126.net/YqpP12ONNFkIiX4TAQ62gw==/1410673429302015.jpg?param=90y90',
            //lrc: 'lrc2.lrc',
            theme: '#46718b'
        },
        {
            name: '多想在平庸的生活拥抱你', //如果只有一首歌，删掉这一块，如有更多歌曲按此格式逐渐往下添加
            artist: '隔壁老樊',
            url: 'https://m10.music.126.net/20190811154930/32e71668aaff3343ce19bea5d96045c2/ymusic/0752/0e5a/000f/08ad02d0df90320f96ab7e8b0c66bd20.mp3',
            cover: 'http://p1.music.126.net/0HDo6FVFjsHytNnkSvIb5w==/109951164053306453.jpg?param=90y90',
            //lrc: 'lrc2.lrc',
            theme: '#46718b'
        },
        {
            name: '意外', //如果只有一首歌，删掉这一块，如有更多歌曲按此格式逐渐往下添加
            artist: '薛之谦',
            url: 'https://m10.music.126.net/20190811155157/a6198951d5ffe5082a8c66307cd54ae6/ymusic/f0b5/b93c/5055/d3613eaf16d0d1313048d10963923fb2.mp3',
            cover: 'http://p2.music.126.net/WPHmBisDxnoF4DrBLKwl3Q==/109951163169021112.jpg?param=90y90',
            //lrc: 'lrc2.lrc',
            theme: '#46718b'
        },
        {
            name: '石楠小扎', //如果只有一首歌，删掉这一块，如有更多歌曲按此格式逐渐往下添加
            artist: '贰婶',
            url: 'https://m10.music.126.net/20190811155428/1e09f50e4e4dc65a964e82c2a1c164ae/ymusic/e7f6/6c76/f037/e608d13c8bb5deb41bf97f0868a972dc.mp3',
            cover: 'http://p1.music.126.net/_2LHqE_JXw87lvwlmJLcJA==/109951162811944810.jpg?param=90y90',
            //lrc: 'lrc2.lrc',
            theme: '#46718b'
        },
    ]
});
