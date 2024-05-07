import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import React, { useEffect, useState } from "react";
// import { Tooltip as ReactTooltip } from "react-tooltip";
import ReactToolTip from "rc-tooltip";
import ScrollContainer from "react-indiana-drag-scroll";
import "rc-tooltip/assets/bootstrap.css";

export default function Metrics() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="text-xs md:text-lg lg:text-lg label">{`${label}`}</p>
          <p className="text-xs md:text-lg lg:text-lg label">{`Spera: ${payload[1].value.toFixed(
            2
          )}%`}</p>
          <p className="text-xs md:text-lg lg:text-lg label">{`BTC Buy & Hold: ${payload[0].value.toFixed(
            2
          )}%`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      <div className="mt-[10vh] ml-[3vh] md:ml-[10vh] lg:ml-[5vw] md:mt-[10vh] lg:mt-[15vh] pr-4">
        <div className=" lg:flex lg:flex-row">
          <div className=" lg:w-[35vw] w-[70vw]">
            <p className="text-4xl uppercase text-primary font-anton md:text-6xl lg:text:6xl ">
              Performance
              <br /> Metrics
            </p>

            <p className="text-xl text-primary font-poppins mt-[5vh]  md:text-4xl lg:text-4xl md:leading-[52px] lg:leading-[52px] ">
              Let our automated trading bot handle the complexities while you
              reap the benefits.
            </p>
          </div>
          <div className="ml-[15vw] lg:ml-[20vw] lg:w-[70vw]">
            <p className="text-lg mt-[5vh]  text-primary font-anton md:text-4xl lg:text-4xl md:mt-[5vh] lg:mt-[2vh]">
              Gained
            </p>
            <p className="uppercase text-8xl text-primary font-anton inline md:text-[13vw] lg:text-[13vw] md:tracking-[1vw] lg:tracking-[1vw]">
              3219
            </p>
            <p className="inline mb-2 ml-2 text-4xl text-primary font-anton md:text-8xl lg:text-8xl">
              %
            </p>
            <p className="mb-2 text-lg text-right mr-[10vw] text-primary font-anton md:text-4xl lg:text-4xl">
              From Jan'21 to Jan'24
            </p>
          </div>
        </div>

        <p className="hidden md:block lg:block md:mt-[5vh]  md:ml-[15vw] lg:ml-[35vw] text-4xl uppercase text-primary font-anton md:text-6xl lg:text:6xl w-[75vw] md:w-[65vw] lg:w-[35vw]">
          Our results speaks for themselves
        </p>
        <ScrollContainer
          className={`flex flex-row ml-[5vw]  md:ml-[15vw] lg:ml-[35vw] lex overflow-x-auto  md:pb-4 lg:pb-4 pb-2 scroll-container`}
          horizontal={true}
        >
          {/* <div
          className="flex flex-row ml-[5vw]  md:ml-[35vw] lg:ml-[35vw] lex overflow-x-auto  md:pb-4 lg:pb-4 pb-2"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "transparent transparent",
          }}
        > */}
          <div className="bg-secondary rounded-3xl p-2 pl-8 text-xs mt-[5vh] md:rounded-[3vw] lg:rounded-[3vw] md:px-14 lg:px-14 md:p-8 lg:p-8">
            <div className="flex flex-row w-[35vw] md:w-[20vw] lg:w-[20vw]">
              <p className="mt-1 font-poppins md:text-xl lg:text-xl">
                Max. Drawdown
              </p>
              <ReactToolTip
                trigger={["hover"]}
                overlay={
                  <p className="w-max max-w-[90vw] md:text-[16px] lg:text-[16px] md:p-2 lg:p-2">
                    Shows the biggest potential loss in a trading strategy,
                    indicating the maximum downturn it could have experienced
                    across all its trades.
                  </p>
                }
                arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
                placement="top"
                mouseEnterDelay={0}
                mouseLeaveDelay={0.1}
                transitionName="rc-tooltip-zoom"
              >
                <svg
                  className="w-6 h-6 ml-auto text-gray-800 md:w-12 lg:w-12 md:h-12 lg:h-12 dark:text-primary"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm9-3a1.5 1.5 0 0 1 2.5 1.1 1.4 1.4 0 0 1-1.5 1.5 1 1 0 0 0-1 1V14a1 1 0 1 0 2 0v-.5a3.4 3.4 0 0 0 2.5-3.3 3.5 3.5 0 0 0-7-.3 1 1 0 0 0 2 .1c0-.4.2-.7.5-1Zm1 7a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </ReactToolTip>
            </div>
            <div className="mt-[3vh] md:mb-[3vh] lg:mb-[3vh]">
              <p className="inline text-4xl font-poppins font-[700] tracking-[3px] md:text-8xl lg:text-8xl md:tracking-[3.5px] lg:tracking-[3.5px]">
                7.21
              </p>
              <p className="font-poppins font-[700] text-lg inline md:text-4xl lg:text-4xl">
                %
              </p>
            </div>
          </div>

          <div className="bg-secondary rounded-3xl p-2 pl-8 text-xs mt-[5vh] md:rounded-[3vw] lg:rounded-[3vw] md:px-14 lg:px-14 md:p-8 lg:p-8 ml-2 md:ml-[2vw] lg:ml-[2vw]">
            <div className="flex flex-row w-[35vw] md:w-[20vw] lg:w-[20vw]">
              <p className="mt-1 font-poppins md:text-xl lg:text-xl">
                Accuracy
              </p>
              <ReactToolTip
                trigger={["hover"]}
                overlay={
                  <p className="w-max max-w-[90vw] md:text-[16px] lg:text-[16px] md:p-2 lg:p-2">
                    The percentage of winning trades generated by the strategy.
                  </p>
                }
                arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
                placement="top"
                mouseEnterDelay={0}
                mouseLeaveDelay={0.1}
                transitionName="rc-tooltip-zoom"
              >
                <svg
                  className="w-6 h-6 ml-auto text-gray-800 md:w-12 lg:w-12 md:h-12 lg:h-12 dark:text-primary"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm9-3a1.5 1.5 0 0 1 2.5 1.1 1.4 1.4 0 0 1-1.5 1.5 1 1 0 0 0-1 1V14a1 1 0 1 0 2 0v-.5a3.4 3.4 0 0 0 2.5-3.3 3.5 3.5 0 0 0-7-.3 1 1 0 0 0 2 .1c0-.4.2-.7.5-1Zm1 7a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </ReactToolTip>
            </div>
            <div className="mt-[3vh] md:mb-[3vh] lg:mb-[3vh]">
              <p className="inline text-4xl font-poppins font-[700] tracking-[3px] md:text-8xl lg:text-8xl md:tracking-[3.5px] lg:tracking-[3.5px]">
                65.99
              </p>
              <p className="font-poppins font-[700] text-lg inline md:text-4xl lg:text-4xl">
                %
              </p>
            </div>
          </div>

          <div className="bg-secondary rounded-3xl p-2 pl-8 text-xs mt-[5vh] md:rounded-[3vw] lg:rounded-[3vw] md:px-14 lg:px-14 md:p-8 lg:p-8 ml-2 md:ml-[2vw] lg:ml-[2vw]">
            <div className="flex flex-row w-[35vw] md:w-[20vw] lg:w-[20vw]">
              <p className="mt-1 font-poppins md:text-xl lg:text-xl">
                Total Trades
              </p>
              <ReactToolTip
                trigger={["hover"]}
                overlay={
                  <p className="w-max max-w-[90vw] md:text-[16px] lg:text-[16px] md:p-2 lg:p-2">
                    The total number of closed trades (both winning and losing)
                    generated by the strategy.
                  </p>
                }
                arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
                placement="top"
                mouseEnterDelay={0}
                mouseLeaveDelay={0.1}
                transitionName="rc-tooltip-zoom"
              >
                <svg
                  className="w-6 h-6 ml-auto text-gray-800 md:w-12 lg:w-12 md:h-12 lg:h-12 dark:text-primary"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm9-3a1.5 1.5 0 0 1 2.5 1.1 1.4 1.4 0 0 1-1.5 1.5 1 1 0 0 0-1 1V14a1 1 0 1 0 2 0v-.5a3.4 3.4 0 0 0 2.5-3.3 3.5 3.5 0 0 0-7-.3 1 1 0 0 0 2 .1c0-.4.2-.7.5-1Zm1 7a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </ReactToolTip>
            </div>
            <div className="mt-[3vh] md:mb-[3vh] lg:mb-[3vh]">
              <p className="inline text-4xl font-poppins font-[700] tracking-[3px] md:text-8xl lg:text-8xl md:tracking-[3.5px] lg:tracking-[3.5px]">
                39,245
              </p>
            </div>
          </div>

          <div className="bg-secondary rounded-3xl p-2 pl-8 text-xs mt-[5vh] md:rounded-[3vw] lg:rounded-[3vw] md:px-14 lg:px-14 md:p-8 lg:p-8 ml-2 md:ml-[2vw] lg:ml-[2vw]">
            <div className="flex flex-row w-[35vw] md:w-[20vw] lg:w-[20vw]">
              <p className="mt-1 font-poppins md:text-xl lg:text-xl">
                Winning Trades
              </p>
              <ReactToolTip
                trigger={["hover"]}
                overlay={
                  <p className="w-max max-w-[90vw] md:text-[16px] lg:text-[16px] md:p-2 lg:p-2">
                    The total number of winning trades generated by the
                    strategy.
                  </p>
                }
                arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
                placement="top"
                mouseEnterDelay={0}
                mouseLeaveDelay={0.1}
                transitionName="rc-tooltip-zoom"
              >
                <svg
                  className="w-6 h-6 ml-auto text-gray-800 md:w-12 lg:w-12 md:h-12 lg:h-12 dark:text-primary"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm9-3a1.5 1.5 0 0 1 2.5 1.1 1.4 1.4 0 0 1-1.5 1.5 1 1 0 0 0-1 1V14a1 1 0 1 0 2 0v-.5a3.4 3.4 0 0 0 2.5-3.3 3.5 3.5 0 0 0-7-.3 1 1 0 0 0 2 .1c0-.4.2-.7.5-1Zm1 7a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </ReactToolTip>
            </div>
            <div className="mt-[3vh] md:mb-[3vh] lg:mb-[3vh]">
              <p className="inline text-4xl font-poppins font-[700] tracking-[3px] md:text-8xl lg:text-8xl md:tracking-[3.5px] lg:tracking-[3.5px]">
                25,898
              </p>
            </div>
          </div>
          <div className="bg-secondary rounded-3xl p-2 pl-8 text-xs mt-[5vh] md:rounded-[3vw] lg:rounded-[3vw] md:px-14 lg:px-14 md:p-8 lg:p-8 ml-2 md:ml-[2vw] lg:ml-[2vw]">
            <div className="flex flex-row w-[35vw] md:w-[20vw] lg:w-[20vw]">
              <p className="mt-1 font-poppins md:text-xl lg:text-xl">
                Losing Trades
              </p>
              <ReactToolTip
                trigger={["hover"]}
                overlay={
                  <p className="w-max max-w-[90vw] md:text-[16px] lg:text-[16px] md:p-2 lg:p-2">
                    The total number of losing trades generated by the strategy.
                  </p>
                }
                arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
                placement="top"
                mouseEnterDelay={0}
                mouseLeaveDelay={0.1}
                transitionName="rc-tooltip-zoom"
                overlayInnerStyle={{ marginRight: "10px" }}
              >
                <svg
                  className="w-6 h-6 ml-auto text-gray-800 md:w-12 lg:w-12 md:h-12 lg:h-12 dark:text-primary"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm9-3a1.5 1.5 0 0 1 2.5 1.1 1.4 1.4 0 0 1-1.5 1.5 1 1 0 0 0-1 1V14a1 1 0 1 0 2 0v-.5a3.4 3.4 0 0 0 2.5-3.3 3.5 3.5 0 0 0-7-.3 1 1 0 0 0 2 .1c0-.4.2-.7.5-1Zm1 7a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </ReactToolTip>
            </div>
            <div className="mt-[3vh] md:mb-[3vh] lg:mb-[3vh]">
              <p className="inline text-4xl font-poppins font-[700] tracking-[3px] md:text-8xl lg:text-8xl md:tracking-[3.5px] lg:tracking-[3.5px]">
                13,347
              </p>
            </div>
          </div>
          {/* </div> */}
        </ScrollContainer>

        <p className="block md:hidden lg:hidden mt-4  md:ml-[35vw] lg:ml-[35vw] text-4xl uppercase text-primary font-anton md:text-6xl lg:text:6xl w-[75vw] md:w-[35vw] lg:w-[35vw]">
          Our results speaks for themselves
        </p>

        <p className="text-xl text-primary font-poppins mt-[5vh]  md:text-4xl lg:text-4xl md:leading-[52px] lg:leading-[52px] ">
          From Jan '21 to Jan '24, our area chart paints the story of consistent
          growth. Let SPERA handle the market dance while you enjoy the
          financial rhythm.
        </p>
      </div>

      {isReady ? (
        <>
          <div className="mt-[3vh] -ml-[5vw] block md:hidden lg:hidden">
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={modifiedData}>
                <CartesianGrid
                  strokeDasharray="5 5"
                  strokeOpacity={0.3}
                  stroke="#000000"
                />
                <XAxis dataKey="name" stroke="#000000" fontSize={10} />
                <YAxis unit="%" stroke="#000000" fontSize={10} domain={[-100,"auto"]}/>
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="btcReturn"
                  stroke="#000000"
                  fill="#000000"
                  fillOpacity={1}
                  stackId="1"
                />
                <Area
                  type="monotone"
                  dataKey="return"
                  stroke="#000000"
                  fill="#ffffff"
                  fillOpacity={1}
                  stackId="1"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-[10vh] ml-4 hidden md:block lg:block mr-4">
            <ResponsiveContainer width="100%" height={550}>
              <AreaChart data={modifiedData}>
                <CartesianGrid
                  strokeDasharray="5 5"
                  strokeOpacity={0.3} 
                  stroke="#000000"
                />
                <XAxis dataKey="name" stroke="#000000" fontSize={16} />
                <YAxis unit="%" stroke="#000000" fontSize={10} domain={[-100,"auto"]}/>
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="btcReturn"
                  stroke="#000000"
                  fill="#000000"
                  fillOpacity={1}
                  stackId="1"
                />
                <Area
                  type="monotone"
                  dataKey="return"
                  stroke="#000000"
                  fill="#ffffff"
                  fillOpacity={1}
                  stackId="1"
                />
              
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </>
      ) : null}
    </>
  );
}

const weeklyReturns = [
  { name: "22-01-2021", return: 113.8197772, btcReturn: 81.24853191178512 },
  { name: "29-01-2021", return: 117.0184018, btcReturn: 84.93600813198262 },
  { name: "05-02-2021", return: 138.7087811, btcReturn: 95.81625188496074 },
  { name: "12-02-2021", return: 183.0543202, btcReturn: 122.46584097513582 },
  { name: "19-02-2021", return: 210.2655756, btcReturn: 133.47514742832246 },
  { name: "26-02-2021", return: 215.9364562, btcReturn: 118.862952448655 },
  { name: "05-03-2021", return: 231.3242319, btcReturn: 122.09331439725395 },
  { name: "12-03-2021", return: 279.1111763, btcReturn: 146.09182656244596 },
  { name: "19-03-2021", return: 351.733368, btcReturn: 150.5368233952473 },
  { name: "26-03-2021", return: 383.0332346, btcReturn: 138.04458651666485 },
  { name: "02-04-2021", return: 436.3934441, btcReturn: 153.46053236815084 },
  { name: "09-04-2021", return: 469.0945316, btcReturn: 149.51983513014423 },
  { name: "16-04-2021", return: 489.8768507, btcReturn: 158.55481783316117 },
  { name: "23-04-2021", return: 483.0349925, btcReturn: 127.86853466856441 },
  { name: "30-04-2021", return: 491.404177, btcReturn: 145.17811427004978 },
  { name: "07-05-2021", return: 516.1063292, btcReturn: 148.29038384795794 },
  { name: "14-05-2021", return: 516.4380927, btcReturn: 132.50284067003156 },
  { name: "21-05-2021", return: 525.2101713, btcReturn: 97.97784561313301 },
  { name: "28-05-2021", return: 504.9940012, btcReturn: 94.26737041975835 },
  { name: "04-06-2021", return: 503.8245447, btcReturn: 94.81689358470616 },
  { name: "11-06-2021", return: 503.7321775, btcReturn: 95.49700238972495 },
  { name: "18-06-2021", return: 503.9705621, btcReturn: 94.6383998703178 },
  { name: "25-06-2021", return: 502.4173987, btcReturn: 84.12554599975323 },
  { name: "02-07-2021", return: 502.4262181, btcReturn: 86.52422790820854 },
  { name: "09-07-2021", return: 501.143547, btcReturn: 86.74980369563299 },
  { name: "16-07-2021", return: 503.1794155, btcReturn: 82.24417320627369 },
  { name: "23-07-2021", return: 501.4819867, btcReturn: 83.57478383288341 },
  { name: "30-07-2021", return: 515.1869773, btcReturn: 100.66629909609645 },
  { name: "06-08-2021", return: 540.2657898, btcReturn: 105.76053293602672 },
  { name: "13-08-2021", return: 643.8806743, btcReturn: 119.46043531300027 },
  { name: "20-08-2021", return: 685.2262387, btcReturn: 125.72516459366159 },
  { name: "27-08-2021", return: 765.7546988, btcReturn: 124.80365691417279 },
  { name: "03-09-2021", return: 808.1124416, btcReturn: 130.1546222773578 },
  { name: "10-09-2021", return: 861.0736126, btcReturn: 117.57353863595182 },
  { name: "17-09-2021", return: 898.2445423, btcReturn: 122.16027212612215 },
  { name: "24-09-2021", return: 859.910839, btcReturn: 109.18688950116236 },
  { name: "01-10-2021", return: 859.8013435, btcReturn: 124.24682880039317 },
  { name: "08-10-2021", return: 867.1867152, btcReturn: 139.70750778377146 },
  { name: "15-10-2021", return: 873.1947181, btcReturn: 159.34540430955843 },
  { name: "22-10-2021", return: 911.2434208, btcReturn: 156.77057762785853 },
  { name: "29-10-2021", return: 935.8861099, btcReturn: 161.2579328388683 },
  { name: "05-11-2021", return: 1040.657972, btcReturn: 157.68581286011718 },
  { name: "12-11-2021", return: 1111.110015, btcReturn: 165.82448092272602 },
  { name: "19-11-2021", return: 1095.107006, btcReturn: 149.33264258976183 },
  { name: "26-11-2021", return: 1173.318252, btcReturn: 140.41182875134933 },
  { name: "03-12-2021", return: 1167.778402, btcReturn: 139.02850891797445 },
  { name: "10-12-2021", return: 1139.702218, btcReturn: 124.49284811953063 },
  { name: "17-12-2021", return: 1164.633448, btcReturn: 121.0716798749434 },
  { name: "24-12-2021", return: 1171.129459, btcReturn: 131.33743029968875 },
  { name: "31-12-2021", return: 1184.45922, btcReturn: 119.36430941388498 },
  { name: "07-01-2022", return: 1175.766217, btcReturn: 108.21073667440527 },
  { name: "14-01-2022", return: 1167.744265, btcReturn: 111.70389609316882 },
  { name: "21-01-2022", return: 1157.414105, btcReturn: 96.70939158294371 },
  { name: "28-01-2022", return: 1156.170571, btcReturn: 97.8356701425833 },
  { name: "04-02-2022", return: 1156.170571, btcReturn: 104.64943214993161 },
  { name: "11-02-2022", return: 1162.651288, btcReturn: 109.83277087808582 },
  { name: "18-02-2022", return: 1151.800885, btcReturn: 103.42496268797336 },
  { name: "25-02-2022", return: 1145.382585, btcReturn: 100.76676150193879 },
  { name: "04-03-2022", return: 1146.856951, btcReturn: 101.97135530806491 },
  { name: "11-03-2022", return: 1147.576329, btcReturn: 100.26362347144591 },
  { name: "18-03-2022", return: 1148.142642, btcReturn: 107.7105154609371 },
  { name: "25-03-2022", return: 1197.493439, btcReturn: 114.7486400663279 },
  { name: "01-04-2022", return: 1356.152125, btcReturn: 119.44239234751113 },
  { name: "08-04-2022", return: 1325.521967, btcReturn: 109.93297515852771 },
  { name: "15-04-2022", return: 1258.30167, btcReturn: 104.39726944626425 },
  { name: "22-04-2022", return: 1272.278141, btcReturn: 102.27676928183836 },
  { name: "29-04-2022", return: 1260.987034, btcReturn: 99.53906547247531 },
  { name: "06-05-2022", return: 1258.896311, btcReturn: 92.75550413697579 },
  { name: "13-05-2022", return: 1259.181003, btcReturn: 77.56864457835991 },
  { name: "20-05-2022", return: 1258.78065, btcReturn: 75.37101654428942 },
  { name: "27-05-2022", return: 1258.948506, btcReturn: 74.36551485950493 },
  { name: "03-06-2022", return: 1258.942832, btcReturn: 76.86478823650276 },
  { name: "10-06-2022", return: 1270.742833, btcReturn: 75.44656984899149 },
  { name: "17-06-2022", return: 1259.028682, btcReturn: 53.04337590853687 },
  { name: "24-06-2022", return: 1259.088183, btcReturn: 55.0825149467513 },
  { name: "01-07-2022", return: 1263.028915, btcReturn: 50.27508423922442 },
  { name: "08-07-2022", return: 1263.53527, btcReturn: 56.340592335843866 },
  { name: "15-07-2022", return: 1267.726386, btcReturn: 54.074819196063274 },
  { name: "22-07-2022", return: 1312.902503, btcReturn: 58.67879546298146 },
  { name: "29-07-2022", return: 1330.222634, btcReturn: 61.353903862743365 },
  { name: "05-08-2022", return: 1432.403579, btcReturn: 59.622734239766494 },
  { name: "12-08-2022", return: 1503.949345, btcReturn: 62.259640080266664 },
  { name: "19-08-2022", return: 1445.12188, btcReturn: 54.86013991429204 },
  { name: "26-08-2022", return: 1448.921329, btcReturn: 53.27468207985058 },
  { name: "02-09-2022", return: 1442.792368, btcReturn: 51.54761665074034 },
  { name: "09-09-2022", return: 1444.334661, btcReturn: 54.92400013835521 },
  { name: "16-09-2022", return: 1451.914529, btcReturn: 50.943164400583775 },
  { name: "23-09-2022", return: 1429.943237, btcReturn: 48.94899080712199 },
  { name: "30-09-2022", return: 1430.500343, btcReturn: 50.090937578566916 },
  { name: "07-10-2022", return: 1437.317035, btcReturn: 50.57159288668346 },
  { name: "14-10-2022", return: 1424.472984, btcReturn: 49.49792028364883 },
  { name: "21-10-2022", return: 1439.154146, btcReturn: 49.40909933336533 },
  { name: "28-10-2022", return: 1445.303036, btcReturn: 53.150317261929644 },
  { name: "04-11-2022", return: 1463.822302, btcReturn: 54.53748316377076 },
  { name: "11-11-2022", return: 1434.516126, btcReturn: 43.415634036002295 },
  { name: "18-11-2022", return: 1425.652142, btcReturn: 42.99695463652588 },
  { name: "25-11-2022", return: 1418.8333, btcReturn: 42.61392235484705 },
  { name: "02-12-2022", return: 1426.957738, btcReturn: 43.88346051171813 },
  { name: "09-12-2022", return: 1427.141674, btcReturn: 44.13990809703244 },
  { name: "16-12-2022", return: 1435.208077, btcReturn: 43.48251432725035 },
  { name: "23-12-2022", return: 1422.809246, btcReturn: 43.39792663353369 },
  { name: "30-12-2022", return: 1422.476362, btcReturn: 42.87780395169338 },
  { name: "06-01-2023", return: 1426.521403, btcReturn: 43.70215323046519 },
  { name: "13-01-2023", return: 1478.517723, btcReturn: 51.02690028047906 },
  { name: "20-01-2023", return: 1678.455569, btcReturn: 57.62582451706029 },
  { name: "27-01-2023", return: 1770.988033, btcReturn: 59.84110832851929 },
  { name: "03-02-2023", return: 1871.04158, btcReturn: 60.27780488094482 },
  { name: "10-02-2023", return: 1983.138698, btcReturn: 55.546598604161076 },
  { name: "17-02-2023", return: 1960.944031, btcReturn: 63.70096069111527 },
  { name: "24-02-2023", return: 2043.364243, btcReturn: 59.728230090916924 },
  { name: "03-03-2023", return: 1987.754408, btcReturn: 57.50251801328107 },
  { name: "10-03-2023", return: 1981.70496, btcReturn: 51.4517230644854 },
  { name: "17-03-2023", return: 1987.228767, btcReturn: 70.11044669633043 },
  { name: "24-03-2023", return: 1989.290498, btcReturn: 70.46320086854034 },
  { name: "31-03-2023", return: 1988.430955, btcReturn: 73.74722708788603 },
  { name: "07-04-2023", return: 2012.586474, btcReturn: 72.16151112804414 },
  { name: "14-04-2023", return: 2016.716948, btcReturn: 78.56134324328372 },
  { name: "21-04-2023", return: 2023.354921, btcReturn: 70.38067817802703 },
  { name: "28-04-2023", return: 2012.451462, btcReturn: 75.74777637873811 },
  { name: "05-05-2023", return: 2012.286286, btcReturn: 76.37860904481728 },
  { name: "12-05-2023", return: 2011.655911, btcReturn: 68.8801694128628 },
  { name: "19-05-2023", return: 2011.784176, btcReturn: 69.36126353416006 },
  { name: "26-05-2023", return: 2015.920115, btcReturn: 68.88334435528793 },
  { name: "02-06-2023", return: 2054.44718, btcReturn: 70.37252141537384 },
  { name: "09-06-2023", return: 2035.882925, btcReturn: 68.38436214374177 },
  { name: "16-06-2023", return: 2035.010245, btcReturn: 68.06898452951225 },
  { name: "23-06-2023", return: 2045.159743, btcReturn: 79.10038651697458 },
  { name: "30-06-2023", return: 2041.244927, btcReturn: 78.66805228381611 },
  { name: "07-07-2023", return: 2063.492398, btcReturn: 78.22252784269632 },
  { name: "14-07-2023", return: 2063.13154, btcReturn: 78.02511353645737 },
  { name: "21-07-2023", return: 2077.55027, btcReturn: 77.2441809500357 },
  { name: "28-07-2023", return: 2074.530342, btcReturn: 75.61009229015566 },
  { name: "04-08-2023", return: 2075.135927, btcReturn: 75.00509797665823 },
  { name: "11-08-2023", return: 2090.548846, btcReturn: 75.97807586099017 },
  { name: "18-08-2023", return: 2087.137092, btcReturn: 67.29842858418735 },
  { name: "25-08-2023", return: 2098.326079, btcReturn: 67.25194019957223 },
  { name: "01-09-2023", return: 2119.482926, btcReturn: 66.50420253964418 },
  { name: "08-09-2023", return: 2113.880102, btcReturn: 66.86929510599403 },
  { name: "15-09-2023", return: 2163.161958, btcReturn: 69.11645740440456 },
  { name: "22-09-2023", return: 2165.587331, btcReturn: 68.62111476100428 },
  { name: "29-09-2023", return: 2191.985741, btcReturn: 69.40269266092699 },
  { name: "06-10-2023", return: 2164.105135, btcReturn: 72.20090106414777 },
  { name: "13-10-2023", return: 2143.836998, btcReturn: 69.25478680648803 },
  { name: "20-10-2023", return: 2192.519637, btcReturn: 76.56430445787728 },
  { name: "27-10-2023", return: 2380.330324, btcReturn: 87.26321511706244 },
  { name: "03-11-2023", return: 2504.602035, btcReturn: 89.38402503196883 },
  { name: "10-11-2023", return: 2688.710173, btcReturn: 96.41425100010686 },
  { name: "17-11-2023", return: 2795.995064, btcReturn: 94.33135970652174 },
  { name: "24-11-2023", return: 2694.439154, btcReturn: 97.26725219832497 },
  { name: "01-12-2023", return: 2753.572039, btcReturn: 99.9044936018457 },
  { name: "08-12-2023", return: 2942.159443, btcReturn: 114.24769610173857 },
  { name: "15-12-2023", return: 3161.589345, btcReturn: 108.57048604496646 },
  { name: "22-12-2023", return: 3309.615522, btcReturn: 113.058925382658 },
  { name: "29-12-2023", return: 3524.811557, btcReturn: 107.79580009323489 },
  { name: "05-01-2024", return: 3319.847227, btcReturn: 113.49113055311628 },
  { name: "12-01-2024", return: 3319.847227, btcReturn: 109.72910771727835 },
];

const modifiedData = weeklyReturns.map((item) => ({
  ...item,
  return: item.return - 100,
  btcReturn: item.btcReturn - 100
}));
