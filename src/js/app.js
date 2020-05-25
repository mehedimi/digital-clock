
class Clock {
    constructor(){
        this.classNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

        this.secondSelector = document.querySelectorAll('.seconds')
        this.minuteSelector = document.querySelectorAll('.minutes')
        this.hourSelector = document.querySelectorAll('.hours')
        this.dots = document.querySelectorAll('.dots *')

        this.second = []
        this.minute = []
        this.hour = []
        this.date = new Date()
        this.isClicked = false;

        this.audio = document.getElementById('audio')
    }

    run(){
        setInterval(() => {
            this.date = new Date()

            this.updateSecond()


            this.playAudio()

        }, 1000)
    }

    updateSecond(){
        let second = this.date.getSeconds()

        this.second = second < 10 ? [0, second] : second.toString().split('');

        this.secondSelector.forEach((secondNode, index) => {

            secondNode.className = 'segments seconds '+this.getClassName(this.second[index])

        });

        if(second === 0){
            this.updateMinute()
        }

    }

    updateMinute(){
        let minute = this.date.getMinutes()
        this.minute = minute < 10 ? [0, minute] : minute.toString().split('')

        this.minuteSelector.forEach((minuteNode, index) => {
            minuteNode.className = 'segments minutes ' + this.getClassName(this.minute[index])
        })

        if(minute === 0){
            this.updateHour()
        }

    }

    updateHour(){
        let hour = this.date.getHours()

        this.hour = hour < 10 ? [0, hour] : hour.toString().split('')

        this.hourSelector.forEach((hourNode, index) => {
            hourNode.className = 'segments hours ' + this.getClassName(this.hour[index])
        })
    }

    getClassName(number){
        return this.classNames[number]
    }
    toggleDots(){
        setInterval(() => {
            this.dots.forEach((dot) => {
                dot.classList.toggle('active')
            })
        }, 500)

        return this;
    }
    boot(){
        this.updateSecond()
        this.updateMinute()
        this.updateHour()
        window.addEventListener('click', () => this.isClicked = true);

        return this
    }

    playAudio(){
        if (this.isClicked) {
            this.audio.play();
        }
    }

}

(new Clock()).boot().toggleDots().run()