var posts=["2022/11/25/心路历程/","2024/06/20/测试/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };