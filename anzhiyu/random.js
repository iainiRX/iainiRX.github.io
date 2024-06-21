var posts=["2024/06/21/OCS网课助手/","2022/11/25/心路历程/","2024/06/21/标签语法/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };