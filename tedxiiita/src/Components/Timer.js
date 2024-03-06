import React, {useEffect, useRef, useState} from 'react'
import './Timer.css'

export default function Timer() {

    // Hooks to set the timer elements
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef(); // Ref hook for measuring remaining time which stays persisted

    const startTimer = () => {
        const countdownDate = new Date('April 12, 2024 00:00:00').getTime();

        interval  = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if(distance < 0){
                //stop timer
                clearInterval(interval.current);
            } else {
                //update timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000 ); // Update every second
    }

    //Mounting the timer

    useEffect(() => {
        startTimer();

        // CleanUp Function
        return () => {
            clearInterval(interval.current);
        }
    });

  return (

    //  Wasn't able to write in Tailwind so made a separate CSS file

    <section className="timer-container">
        <section className="timer">
            {/* Heading */}
            <div>
                <p>Countdown to TEDxIIITA '24</p>
            </div>

            {/* Main Numbers */}
            <div>
                <section>
                    <p>{timerDays}</p>
                    <p>Days</p>
                </section>
                <span>:</span>
                <section>
                    <p>{timerHours}</p>
                    <p>Hours</p>
                </section>
                <span>:</span>
                <section>
                    <p>{timerMinutes}</p>
                    <p>Minutes</p>
                </section>
                <span>:</span>
                <section>
                    <p>{timerSeconds}</p>
                    <p>Seconds</p>
                </section>
            </div>

        </section>
    </section>
  )
}
