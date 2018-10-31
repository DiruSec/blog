export default {
    state: [
        {
            '_id': 'f3yn2ajcpb9',
            'title': 'Lorem Ipsum',
            'category': "test",
            'tags': ["tag1", "tag2"],
            'updatedAt': '2018-10-26 12:45',
            'createdAt': '2018-10-26 12:40',
            'pathName': 'lorem-ipsum-neo',
            'abstract': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            'isPublic': true,
            'type': 'post'
        },
        {
            '_id': 'o53govhbltf',
            'title': 'Lorem Ipsum',
            'category': "test2",
            'tags': ["tag1", "tag2"],
            'updatedAt': '2018-10-26 12:40',
            'createdAt': '2018-10-26 12:35',
            'pathName': 'lorem-ipsum',
            'abstract': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            'isPublic': true,
            'type': 'post'
        },
      {
        '_id': 'o53govhblt2',
        'title': '从 Apache 迁移到 Nginx （的那些坑）',
        'category': "test2",
        'tags': ["tag1", "tag2"],
        'updatedAt': '2018-10-26 12:40',
        'createdAt': '2018-10-26 12:35',
        'pathName': 'apache-migrate-to-nginx',
        'abstract': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'content': '<p>网站从Linode搬走了，颠沛流离，无依无靠。<br />\n' +
        '有个叫CloudEndure的工具能从基于Linux的VPS上迁移整个系统到新的VPS，结果试了半天都是各种Error。<br />\n' +
        '试图把网站从（据说）笨重的Apache迁移到Nginx的过程也是风波不断，真的怀疑我是不是BUG体质。<br />\n' +
        '<!--more--></p>\n' +
        '<h1>需求</h1>\n' +
        '<ul>\n' +
        '<li>网站从 Apache 迁移到到 Nginx</li>\n' +
        '<li>其中包括由 Python 写成的最基本的 CGI Script.</li>\n' +
        '<li>从Ubuntu 16.04 LTS 迁移到 CentOS 7（我也不知道为什么脑子抽了要换系统）</li>\n' +
        '</ul>\n' +
        '<h1>流程和坑</h1>\n' +
        '<h2>1. 安装&amp;配置Nginx</h2>\n' +
        '<p>安装不能再简单。<code>yum install nginx</code> 解决。<br />\n' +
        '配置Nginx也不算太困难，思路和配置Apache差不多。如果说Apache的配置文件是xml的话，Nginx就有点像JavaScript（虽然只有大括号像）  </p>\n' +
        '<p>Nginx的主配置文件在 <code>/etc/nginx/nginx.conf</code>，主站以外虽然也能写进主配置文件里，不过还是另外放到其它文件夹然后在主配置文件里include进去比较好。<br />\n' +
        '默认情况下是包括了<code>/etc/nginx/conf.d/</code> 里面的所有 <code>.conf</code> 文件。如果要自己include，需要把配置写在 <code>http</code> 项下面，和 <code>server</code> 项平行。<br />\n' +
        '（顺便，RedHat系？下的Apache包名是httpd，Debian系下的则是apache2，目录也因此不同，配置文件的设置方法甚至都不一样）</p>\n' +
        '<h3>1.1 设置域名</h3>\n' +
        '<p><code>server_name</code> 属性，用逗号分隔。<br />\n' +
        '要把www转到不带www的域名下建议另开一个server项做301跳转。跳转写法为 <code>return &lt;HTTP STATUS&gt; &lt;URL&gt;</code>，其中URL可以使用Nginx自带的变量。</p>\n' +
        '<h3>1.2 设置监听端口</h3>\n' +
        '<p><code>listen</code> 属性。一行一个监听端口，分ipv4、6、http(80)和https(443)。  </p>\n' +
        '<h3>1.3 设置根目录</h3>\n' +
        '<p><code>root</code> 属性，和Apache一样。</p>\n' +
        '<h3>1.4 设置权限</h3>\n' +
        '<p>Apache是通过 <code>&lt;dictionary&gt;</code> 项设置的，Nginx则是 <code>location {}</code>。<br />\n' +
        '例如要屏蔽所有的 <code>ini</code> 文件访问可以直接写成：  </p>\n' +
        '<pre><code>location ~ .ini$ {\n' +
        '     deny all;\n' +
        '}\n' +
        '</code></pre>\n' +
        '\n' +
        '<h3>1.5 设置https</h3>\n' +
        '<p>Nginx自带的默认配置文件里已经有了https的设置项。只需要把 <code>ssl_certificate</code> 和 <code>ssl_certificate_key</code> 项改成对应的密钥路径即可。</p>\n' +
        '<h3>1.6 设置http跳转https</h3>\n' +
        '<p>简单的做法是做一个判断，发现访问http时自动转向到https。这样http和https规则可以写在一个server项里面。比如：  </p>\n' +
        '<pre><code>if ( $scheme = http ){\n' +
        '    return 301 https://$server_name$request_uri;\n' +
        '}\n' +
        '</code></pre>\n' +
        '\n' +
        '<p>全部完成后，启动Nginx服务就可以了。在不添加CGI脚本的情况下运行起来和Apache没有太大的区别。<br />\n' +
        'Nginx的运行状况可以用 <code>service nginx &lt;command&gt;</code> 和 <code>nginx -s &lt;command&gt;</code> 来控制，和Apache差不多。  </p>\n' +
        '<p>由于Nginx默认配置文件带了指定40x、50x错误页的规则，要用默认的错误页记得删掉规则，否则50x错误也会返回404（因为不存在错误页文件）导致干扰除错工作。</p>\n' +
        '<h2>2. 添加CGI Script支持</h2>\n' +
        '<p>重头戏来了。Nginx的配置不算太难，但Nginx原生不支持CGI脚本。<br />\n' +
        '我又不想为了一个简单的脚本去动用Flask这种大型框架，只能借助于CGI的力量了。  </p>\n' +
        '<p>在Nginx下添加Python CGI脚本支持的目前似乎是<code>uWSGI</code>比较好。CGI脚本的原理实际上就是前端服务器在访问脚本时把请求转给CGI Server来处理，最后返回脚本。所以Nginx只起到一个转发作用，实际的处理需要后台另外跑一个CGI Server。</p>\n' +
        '<h3>2.1 安装Python</h3>\n' +
        '<p>基于Python，记得先安装Python。<br />\n' +
        '对于不喜欢自己折腾的（比如我）尽量用包管理器安装，不要让各种调用问题影响你的生产效率。<br />\n' +
        '另外Python2和3只安装一个小版本。比如Python2.7和Python3.6。<br />\n' +
        '从不同的源安装多个版本会导致pip安装外部模块时路径不明确，进而导致<strong>uWSGI无法调用外部库</strong>，然后就会出现明明安装了某个模块却</p>\n' +
        '<pre><code>ModuleNotFoundError: No module named &lt;module name here&gt;\n' +
        '</code></pre>\n' +
        '\n' +
        '<p>我折腾了半天都没解决，最后直接sudo python交互模式import模块发现<code>ModuleNotFoundError</code>，才发现模块调用完全乱套了，乖乖从软件源直接装了二进制。</p>\n' +
        '<p>Debian系的软件源好像直接有二进制包可以用，然而RedHat系没有，shabi。~~谁给我安利CentOS的我要打死他。~~<br />\n' +
        '记得自己另外找个community的软件源。<br />\n' +
        '还有记得安装pip。软件源应该也带了。</p>\n' +
        '<h3>2.2 安装uWSGI</h3>\n' +
        '<p>可以从源码编译，也可以pip直接装（虽然也是编译，只是帮你放好路径）。<br />\n' +
        '反正我是pip直装党：<code>pip3 install uwsgi</code><br />\n' +
        'CentOS上装好了还得建立到 <code>/usr/bin</code> 的软链接，要不然sudo的时候就找不到了。</p>\n' +
        '<p>pip安装的uWSGI自带Python支持，但并不带传统的CGI的支持，需要另外编译CGI插件。<br />\n' +
        '我没搞懂怎么编译同时带Python和CGI支持的二进制，所以就直接编译插件好了。<br />\n' +
        '下载uWSGI的源码，执行 <code>python uwsgiconfig.py --plugin plugins/cgi</code> 编译CGI模块，把生成的 <code>cgi_plugin.so</code> 随便放哪备用，以后执行时要调用。</p>\n' +
        '<h3>2.3 配置uWSGI</h3>\n' +
        '<p>配置之前先做的第一件事是关掉 SELinux。否则Nginx传递给uWSGI时会报错 <code>(13: Permission denied) while connecting to upstream</code> 。安全？大家都关的也没见哪里不安全了啊（<br />\n' +
        '※ 这个地方又卡了我好几个小时。垃圾CentOS。<br />\n' +
        '关掉SELinux执行<code>setenforce 0</code>，这个命令似乎是临时关闭，重启就会还原？</p>\n' +
        '<p>在方便调用的地方建立uWSGI的配置文件，内容如下：  </p>\n' +
        '<pre><code>[uwsgi]\n' +
        'plugins-dir =            //插件目录\n' +
        'plugins = cgi            //启用CGI插件\n' +
        'socket = 127.0.0.1:81    //本地监听端口，Nginx和uWSGI使用这个来通信。也可以使用socket文件。\n' +
        'chdir =                  //uWSGI执行时的工作根目录\n' +
        'cgi=                     //CGI目录，设置详情看官方文档\n' +
        'cgi-helper=.py=python3   //设置CGI文件后缀和调用程序\n' +
        'master = true\n' +
        'http-modifier1 = 9\n' +
        'max-requests = 100\n' +
        '</code></pre>\n' +
        '\n' +
        '<p>对于不同站点我目前目前还没发现写在一个配置文件里的方法，因此我两个站点使用了两个配置文件。</p>\n' +
        '<h3>2.4 配置Nginx</h3>\n' +
        '<p>配置Nginx以将py文件转给uWSGI来处理。在配置文件里的server项下添加如下内容。<br />\n' +
        '改了后缀名不是py？自己改配置文件啊</p>\n' +
        '<pre><code>location ~ .py$ {\n' +
        '    include uwsgi_params;\n' +
        '    uwsgi_modifier1 9;\n' +
        '    uwsgi_pass 127.0.0.1:81;     //和uWSGI配置文件相同\n' +
        '}\n' +
        '\n' +
        '</code></pre>\n' +
        '\n' +
        '<h3>2.5 测试</h3>\n' +
        '<p>以 <code>uwsgi --ini &lt;config_file_path&gt;</code> 命令带配置文件启动uWSGI。<br />\n' +
        'Python脚本的错误会显示在命令行中。Nginx端的错误会记录在Nginx侧的log中。<br />\n' +
        '像Apache时代一样注意权限基本就没问题了。只要不遇到什么SELinux呀pip依赖呀的沙皮问题。<br />\n' +
        '配置文件中的CGI位置可能会有点问题。注意看访问时是不是返回404。<br />\n' +
        '如果返回的是Nginx风格的错误页面，说明问题出在Nginx那边。如果控制台有响应且报错，说明Python脚本没写对。如果是几个小字 <code>Not Found</code>，则说明uWSGI的CGI位置没有写对。多读文档。如果控制台什么响应都没有，说明Nginx没能把请求传递给uWSGI，一般是监听地址写错了，或者是SELinux在作威作福。</p>\n' +
        '<h3>2.6 配置为服务运行</h3>\n' +
        '<p>将uWSGI配置为服务运行用到 <code>systemctl</code>，在 <code>/etc/systemd/system</code> 下新建个service比如<code>emperor.uwsgi.service</code>，编辑内容如下：</p>\n' +
        '<pre><code>[Unit]\n' +
        'Description=uWSGI Emperor A\n' +
        'After=syslog.target\n' +
        '\n' +
        '[Service]\n' +
        'ExecStart=/usr/bin/uwsgi --ini &lt;config_file_path&gt;\n' +
        '//需要写uWSGI和配置文件的绝对地址\n' +
        'RuntimeDirectory=uwsgi\n' +
        'Restart=always\n' +
        'KillSignal=SIGQUIT\n' +
        'Type=notify\n' +
        'StandardError=syslog\n' +
        'NotifyAccess=all\n' +
        '\n' +
        '[Install]\n' +
        'WantedBy=multi-user.target\n' +
        '</code></pre>\n' +
        '\n' +
        '<p>接着直接<code>systemctl start &lt;servicename&gt;</code>就行了。<br />\n' +
        '配置为开机自启动则是<code>enable</code>。</p>\n' +
        '<h1>感想</h1>\n' +
        '<p>配置了很多次Apache，没想到在迁移到Nginx上栽了一大堆跟头。<br />\n' +
        '这次正好又把系统给换了，我真是和自己过不去啊。  </p>\n' +
        '<p>迁移完之后发现跑一个Nginx+MySQL的服务器好像也不怎么吃资源，以后干脆选择512M的VPS就行了吧……</p>\n' +
        '<p>至于用全新的uWSGI的协议写CGI脚本，这辈子都不可能的。<br />\n' +
        '好吧，等我开始正式写一个大型的需要很多前后端交互的项目之后大概还是会用的。</p>\n' +
        '<p>顺手查了下Python的大型项目中经常有的 <code>if __name__ == \'__main__\'</code>含义，原来是区分直接执行和作为模块导入时用的。<br />\n' +
        '<code>__name__</code>可以看作是一个类似于 <code>$server_name</code> 的系统变量，当直接执行 <code>python foo.py</code> 时，<code>__name__ == "__main__"</code>。<br />\n' +
        '我目前好像还用不到这东西……</p>',
        'isPublic': true,
        'type': 'post'
      }
]}