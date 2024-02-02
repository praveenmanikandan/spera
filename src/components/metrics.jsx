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
          <p className="text-xs md:text-lg lg:text-lg label">{`${label} : ${payload[0].value.toFixed(
            2
          )}%`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      <div className="mt-[10vh] ml-[3vh] md:ml-[10vh] lg:ml-[5vw] md:mt-[10vh] lg:mt-[15vh]">
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
                  <p className="max-w-[90vw] md:text-[16px] lg:text-[16px] md:p-2 lg:p-2">
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
                  <p className="max-w-[90vw] md:text-[16px] lg:text-[16px] md:p-2 lg:p-2">
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
                  <p className="max-w-[90vw] md:text-[16px] lg:text-[16px] md:p-2 lg:p-2">
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
                  <p className="max-w-[90vw] md:text-[16px] lg:text-[16px] md:p-2 lg:p-2">
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
          <div className="bg-secondary rounded-3xl p-2 pl-8 text-xs mt-[5vh] md:rounded-[3vw] lg:rounded-[3vw] md:px-14 lg:px-14 md:p-8 lg:p-8 ml-2 md:ml-[2vw] lg:ml-[2vw] md:mr-[4vw] lg:mr-[4vw]">
            <div className="flex flex-row w-[35vw] md:w-[20vw] lg:w-[20vw]">
              <p className="mt-1 font-poppins md:text-xl lg:text-xl">
                Losing Trades
              </p>
              <ReactToolTip
                trigger={["hover"]}
                overlay={
                  <p className="max-w-[90vw] md:text-[16px] lg:text-[16px] md:p-2 lg:p-2">
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
                <YAxis unit="%" stroke="#000000" fontSize={10} />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="return"
                  stroke="#000000"
                  fill="#ffffff"
                  fillOpacity={1}
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
                <YAxis unit="%" stroke="#000000" fontSize={16} />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="return"
                  stroke="#000000"
                  fill="#ffffff"
                  fillOpacity={0.3}
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
  { name: "22-01-2021", return: 113.8197772 },
  { name: "29-01-2021", return: 117.0184018 },
  { name: "05-02-2021", return: 138.7087811 },
  { name: "12-02-2021", return: 183.0543202 },
  { name: "19-02-2021", return: 210.2655756 },
  { name: "26-02-2021", return: 215.9364562 },
  { name: "05-03-2021", return: 231.3242319 },
  { name: "12-03-2021", return: 279.1111763 },
  { name: "19-03-2021", return: 351.733368 },
  { name: "26-03-2021", return: 383.0332346 },
  { name: "02-04-2021", return: 436.3934441 },
  { name: "09-04-2021", return: 469.0945316 },
  { name: "16-04-2021", return: 489.8768507 },
  { name: "23-04-2021", return: 483.0349925 },
  { name: "30-04-2021", return: 491.404177 },
  { name: "07-05-2021", return: 516.1063292 },
  { name: "14-05-2021", return: 516.4380927 },
  { name: "21-05-2021", return: 525.2101713 },
  { name: "28-05-2021", return: 504.9940012 },
  { name: "04-06-2021", return: 503.8245447 },
  { name: "11-06-2021", return: 503.7321775 },
  { name: "18-06-2021", return: 503.9705621 },
  { name: "25-06-2021", return: 502.4173987 },
  { name: "02-07-2021", return: 502.4262181 },
  { name: "09-07-2021", return: 501.143547 },
  { name: "16-07-2021", return: 503.1794155 },
  { name: "23-07-2021", return: 501.4819867 },
  { name: "30-07-2021", return: 515.1869773 },
  { name: "06-08-2021", return: 540.2657898 },
  { name: "13-08-2021", return: 643.8806743 },
  { name: "20-08-2021", return: 685.2262387 },
  { name: "27-08-2021", return: 765.7546988 },
  { name: "03-09-2021", return: 808.1124416 },
  { name: "10-09-2021", return: 861.0736126 },
  { name: "17-09-2021", return: 898.2445423 },
  { name: "24-09-2021", return: 859.910839 },
  { name: "01-10-2021", return: 859.8013435 },
  { name: "08-10-2021", return: 867.1867152 },
  { name: "15-10-2021", return: 873.1947181 },
  { name: "22-10-2021", return: 911.2434208 },
  { name: "29-10-2021", return: 935.8861099 },
  { name: "05-11-2021", return: 1040.657972 },
  { name: "12-11-2021", return: 1111.110015 },
  { name: "19-11-2021", return: 1095.107006 },
  { name: "26-11-2021", return: 1173.318252 },
  { name: "03-12-2021", return: 1167.778402 },
  { name: "10-12-2021", return: 1139.702218 },
  { name: "17-12-2021", return: 1164.633448 },
  { name: "24-12-2021", return: 1171.129459 },
  { name: "31-12-2021", return: 1184.45922 },
  { name: "07-01-2022", return: 1175.766217 },
  { name: "14-01-2022", return: 1167.744265 },
  { name: "21-01-2022", return: 1157.414105 },
  { name: "28-01-2022", return: 1156.170571 },
  { name: "04-02-2022", return: 1156.170571 },
  { name: "11-02-2022", return: 1162.651288 },
  { name: "18-02-2022", return: 1151.800885 },
  { name: "25-02-2022", return: 1145.382585 },
  { name: "04-03-2022", return: 1146.856951 },
  { name: "11-03-2022", return: 1147.576329 },
  { name: "18-03-2022", return: 1148.142642 },
  { name: "25-03-2022", return: 1197.493439 },
  { name: "01-04-2022", return: 1356.152125 },
  { name: "08-04-2022", return: 1325.521967 },
  { name: "15-04-2022", return: 1258.30167 },
  { name: "22-04-2022", return: 1272.278141 },
  { name: "29-04-2022", return: 1260.987034 },
  { name: "06-05-2022", return: 1258.896311 },
  { name: "13-05-2022", return: 1259.181003 },
  { name: "20-05-2022", return: 1258.78065 },
  { name: "27-05-2022", return: 1258.948506 },
  { name: "03-06-2022", return: 1258.942832 },
  { name: "10-06-2022", return: 1270.742833 },
  { name: "17-06-2022", return: 1259.028682 },
  { name: "24-06-2022", return: 1259.088183 },
  { name: "01-07-2022", return: 1263.028915 },
  { name: "08-07-2022", return: 1263.53527 },
  { name: "15-07-2022", return: 1267.726386 },
  { name: "22-07-2022", return: 1312.902503 },
  { name: "29-07-2022", return: 1330.222634 },
  { name: "05-08-2022", return: 1432.403579 },
  { name: "12-08-2022", return: 1503.949345 },
  { name: "19-08-2022", return: 1445.12188 },
  { name: "26-08-2022", return: 1448.921329 },
  { name: "02-09-2022", return: 1442.792368 },
  { name: "09-09-2022", return: 1444.334661 },
  { name: "16-09-2022", return: 1451.914529 },
  { name: "23-09-2022", return: 1429.943237 },
  { name: "30-09-2022", return: 1430.500343 },
  { name: "07-10-2022", return: 1437.317035 },
  { name: "14-10-2022", return: 1424.472984 },
  { name: "21-10-2022", return: 1439.154146 },
  { name: "28-10-2022", return: 1445.303036 },
  { name: "04-11-2022", return: 1463.822302 },
  { name: "11-11-2022", return: 1434.516126 },
  { name: "18-11-2022", return: 1425.652142 },
  { name: "25-11-2022", return: 1418.8333 },
  { name: "02-12-2022", return: 1426.957738 },
  { name: "09-12-2022", return: 1427.141674 },
  { name: "16-12-2022", return: 1435.208077 },
  { name: "23-12-2022", return: 1422.809246 },
  { name: "30-12-2022", return: 1422.476362 },
  { name: "06-01-2023", return: 1426.521403 },
  { name: "13-01-2023", return: 1478.517723 },
  { name: "20-01-2023", return: 1678.455569 },
  { name: "27-01-2023", return: 1770.988033 },
  { name: "03-02-2023", return: 1871.04158 },
  { name: "10-02-2023", return: 1983.138698 },
  { name: "17-02-2023", return: 1960.944031 },
  { name: "24-02-2023", return: 2043.364243 },
  { name: "03-03-2023", return: 1987.754408 },
  { name: "10-03-2023", return: 1981.70496 },
  { name: "17-03-2023", return: 1987.228767 },
  { name: "24-03-2023", return: 1989.290498 },
  { name: "31-03-2023", return: 1988.430955 },
  { name: "07-04-2023", return: 2012.586474 },
  { name: "14-04-2023", return: 2016.716948 },
  { name: "21-04-2023", return: 2023.354921 },
  { name: "28-04-2023", return: 2012.451462 },
  { name: "05-05-2023", return: 2012.286286 },
  { name: "12-05-2023", return: 2011.655911 },
  { name: "19-05-2023", return: 2011.784176 },
  { name: "26-05-2023", return: 2015.920115 },
  { name: "02-06-2023", return: 2054.44718 },
  { name: "09-06-2023", return: 2035.882925 },
  { name: "16-06-2023", return: 2035.010245 },
  { name: "23-06-2023", return: 2045.159743 },
  { name: "30-06-2023", return: 2041.244927 },
  { name: "07-07-2023", return: 2063.492398 },
  { name: "14-07-2023", return: 2063.13154 },
  { name: "21-07-2023", return: 2077.55027 },
  { name: "28-07-2023", return: 2074.530342 },
  { name: "04-08-2023", return: 2075.135927 },
  { name: "11-08-2023", return: 2090.548846 },
  { name: "18-08-2023", return: 2087.137092 },
  { name: "25-08-2023", return: 2098.326079 },
  { name: "01-09-2023", return: 2119.482926 },
  { name: "08-09-2023", return: 2113.880102 },
  { name: "15-09-2023", return: 2163.161958 },
  { name: "22-09-2023", return: 2165.587331 },
  { name: "29-09-2023", return: 2191.985741 },
  { name: "06-10-2023", return: 2164.105135 },
  { name: "13-10-2023", return: 2143.836998 },
  { name: "20-10-2023", return: 2192.519637 },
  { name: "27-10-2023", return: 2380.330324 },
  { name: "03-11-2023", return: 2504.602035 },
  { name: "10-11-2023", return: 2688.710173 },
  { name: "17-11-2023", return: 2795.995064 },
  { name: "24-11-2023", return: 2694.439154 },
  { name: "01-12-2023", return: 2753.572039 },
  { name: "08-12-2023", return: 2942.159443 },
  { name: "15-12-2023", return: 3161.589345 },
  { name: "22-12-2023", return: 3309.615522 },
  { name: "29-12-2023", return: 3524.811557 },
  { name: "05-01-2024", return: 3319.847227 },
  { name: "12-01-2024", return: 3319.847227 },
];

const modifiedData = weeklyReturns.map((item) => ({
  ...item,
  return: item.return - 100,
}));
