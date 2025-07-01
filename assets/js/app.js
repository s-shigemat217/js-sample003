class photoViewer {
  // 初期化
  init(){
    const rootElm = document.getElementById('photoViewer');
    const frameElm = rootElm.querySelector('.frame');
    const image = "https://picsum.photos/600/400";

    frameElm.innerHTML = `
      <div class="currentImage">
        <img src="${image}" alt="Random Image">
      </div>
      `;
  }
}

new photoViewer().init();