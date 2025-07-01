class photoViewer {

  constructor(rootElm, images) {
    this.rootElm = rootElm;
    this.images = images;
    this.currentIndex = 0;
    
  }
  // 初期化
  init(){
    const nextButton = this.rootElm.querySelector('.nextButton');
    nextButton.addEventListener('click', () => {
      this.next();
    });

    const prevButton = this.rootElm.querySelector('.prevButton');
    prevButton.addEventListener('click', () => {
      this.prev();
    });

    this.updatePhoto();
  }

  updatePhoto(){
    const frameElm = this.rootElm.querySelector('.frame');
    const imageIndex = this.currentIndex + 1;
    const image = this.images[this.currentIndex];
    frameElm.innerHTML = `
      <div class="currentImage">
        <p>${imageIndex} / ${this.images.length}</p>
        <img src="${image}" width="800" height="600" alt="Random Image">
      </div>
    `;
    this.startTimer();
  };

  startTimer() {
    if (this.timerKey) {
      clearTimeout(this.timerKey);
    }
    this.timerKey = setTimeout(() => {
      this.next();
    }, 3000); // 3秒後に次の画像へ
  }

  next() {
    const lastIndex = this.images.length - 1;
    if (this.currentIndex >= lastIndex) {
      this.currentIndex = 0; // 最後の画像の次は最初の画像に戻る
    } else {
      this.currentIndex++;
    }
    this.updatePhoto();
  }

  prev() {
    const lastIndex = this.images.length - 1;
    if (this.currentIndex <= 0) {
      this.currentIndex = lastIndex; // 最初の画像の前は最後の画像に戻る
    } else {
      this.currentIndex--;
    }
    this.updatePhoto();
  }
}

const images = [
  'https://picsum.photos/800/600?random=1',
  'https://picsum.photos/800/600?random=2',
  'https://picsum.photos/800/600?random=3',
  'https://picsum.photos/800/600?random=4',
  'https://picsum.photos/800/600?random=5'
];

new photoViewer(document.getElementById('photoViewer'), images).init();