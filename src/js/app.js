let date, second, minute, hour;

class Clock {
    constructor(){
        this.classNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

        this.secondOne = document.getElementById('second-one')
        this.secondTwo = document.getElementById('second-two')
        this.minuteOne = document.getElementById('minute-one')
        this.minuteTwo = document.getElementById('minute-two')
        this.hourOne = document.getElementById('hour-one')
        this.hourTwo = document.getElementById('hour-two')
    }

    run(){
        setInterval(() => {
            date = new Date()

            second = date.getSeconds() < 10 ? [0, date.getSeconds()] : date.getSeconds().toString().split('')
            minute = date.getMinutes() < 10 ? [0, date.getMinutes()] : date.getMinutes().toString().split('')
            hour = date.getHours() < 10 ? [0, date.getHours()] : date.getHours().toString().split('')

            this.secondOne.className = 'segments '+this.getClassName(second[0])
            this.secondTwo.className = 'segments '+this.getClassName(second[1])
            this.minuteOne.className = 'segments '+this.getClassName(minute[0])
            this.minuteTwo.className = 'segments '+this.getClassName(minute[1])
            this.hourOne.className = 'segments '+this.getClassName(hour[0])
            this.hourTwo.className = 'segments '+this.getClassName(hour[1])

        }, 1000)
    }

    getClassName(number){
        return this.classNames[number]
    }

}

(new Clock()).run()