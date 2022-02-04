export default class Slide {
    constructor(slide , wrapper){
        this.slide = document.querySelector(slide)
        this.wrapper = document.querySelector(wrapper)
    }

    onStart(e){
        e.preventDefault();
        // console.log(e);
        console.log('mdown');
        this.wrapper.addEventListener('mousemove' , this.onMove)

    }

    onMove(e){
        console.log('moveu');
    }

    onEnd(e){
        console.log('acabou');
        this.wrapper.removeEventListener('mousemove' , this.onMove)

    }

    addSlideEvent(){
        this.wrapper.addEventListener('mousedown' , this.onStart)
        this.wrapper.addEventListener('mouseup' , this.onEnd)
    }

    bindEvent(){
        this.onStart = this.onStart.bind(this)
        this.onMove = this.onMove.bind(this)
        this.onEnd = this.onEnd.bind(this)
    }

    init(){
        this.bindEvent()
        this.addSlideEvent();
        return this
    }


}