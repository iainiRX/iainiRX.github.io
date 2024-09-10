var posts=["2024/06/21/OCS网课助手/","2024/09/09/hyper-v安装centos7-6/","2024/09/05/linux系统-centos/","2022/11/25/心路历程/","2024/06/27/打工人操作题/","2024/06/21/标签语法/","2024/07/10/艾宾浩斯遗忘曲线/","2024/08/28/青龙面板教程-QQRobot/","2024/09/10/无界3-0新手教程/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };