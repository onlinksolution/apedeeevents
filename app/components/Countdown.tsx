import Link from "next/link"
import { useEffect, useState } from "react";

type CountdownTimerProps = {
  targetDate: string; // The target date in ISO format (e.g., '2024-12-31T23:59:59Z')
};

const Countdown: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time.toString();
  };

  return (
    <div>
      <div className="flex items-center justify-center w-full px-3 py-5 bg-gray-700 gap-x-3">
        <h3 className="italic text-white font-600 lg:text-5xl lg:mr-5"><span
          className="text-yellow font-countNum">NEXT</span> SHOW</h3>
        <div className="flex flex-row gap-3 lg:gap-8" data-aos="fade-up">
          <div className="flex flex-col">
            <div className="p-3 bg-black rounded-lg lg:p-5">
              <span suppressHydrationWarning className="text-2xl text-center font-600 text-yellow lg:text-3xl">{formatTime(timeLeft.days)}</span>
            </div>
            <span className="text-center text-white font-storyFont lg:text-lg">Days</span>
          </div>

          <div className="flex flex-col">
            <div className="p-3 bg-black rounded-lg lg:p-5">
              <span suppressHydrationWarning className="text-2xl text-center font-600 text-yellow lg:text-3xl">{formatTime(timeLeft.hours)}</span>
            </div>
            <span className="text-center text-white font-storyFont lg:text-lg">Hours</span>
          </div>

          <div className="flex flex-col">
            <div className="p-3 bg-black rounded-lg lg:p-5">
              <span suppressHydrationWarning className="text-2xl text-center font-600 text-yellow lg:text-3xl">{formatTime(timeLeft.minutes)}</span>
            </div>
            <span className="text-center text-white font-storyFont lg:text-lg">Minutes</span>
          </div>

          <div className="flex flex-col">
            <div className="p-3 bg-black rounded-lg lg:p-5">
              <span suppressHydrationWarning className="text-2xl text-center font-600 text-yellow lg:text-3xl">{formatTime(timeLeft.seconds)}</span>
            </div>
            <span className="text-center text-white font-storyFont lg:text-lg">Seconds</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center py-4 bg-gray-700">
        <div className="p-4 duration-500 rounded-lg bg-yellow hover:bg-orange-300" data-aos="flip-left">
          <Link href="https://www.gordon-craig.co.uk/sundown-i3587"
            className="px-4 py-3 text-black lg:text-xl font-storyFont">BUY TICKETS</Link>
        </div>
      </div>
    </div>
  )
}

export default Countdown