import React, { useState, useEffect } from 'react';
import axios from "axios";
import dateFormat from 'dateformat'

import { CircleButton } from "../components/CircleButton";
import { CircularProgressBar } from '../components/CircularProgressBar';
import DateRangePicker from '../components/CustomDateRangePicker';
// import Bubbles from '../components/index.js'
// import MyComponent from '../components/myComponents'

import "./home.css";
import "./range.css";
import logo from "../images/logo.png";
import backArrow from "../images/backArrow.png";
import { addDays } from 'date-fns';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file




const Home = (props) => {

    const [who, setWho] = useState("");
    const [number, setNumber] = useState("");
    const [theme, setTheme] = useState("");
    const [howLong, setHowLong] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(addDays(new Date(), 7));

    const [data, setdata] = useState({ step: 0, item: '' })
    const [showNumberPage, setShowNumberPage] = useState(0);
    const [showFinalPage, setShowFinalPage] = useState(false);

    const [date, setDate] = useState(
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    );

    useEffect(() => {

        if (data.step === 1) {
            setWho(data.item);
            switch (data.item) {
                case "Family":
                    setShowNumberPage(1);
                    break;
                case "Friends":
                    setShowNumberPage(2);
                    break;
                case "Solo":
                    setdata({ step: 2, item: "1" });
                    break;
                case "Couple":
                    setdata({ step: 2, item: "2" });
                    break;
                default:
                    setShowNumberPage(3);
            }
        }

        if (data.step === 2) {
            setNumber(data.item);
            setShowNumberPage(0);
        }

        if (data.step === 3) {
            setTheme(data.item);
        }

        if (data.step === 4) {
            setHowLong(data.item);
        }
        if (data.step === 5) {
            console.log("data.item.start-----", data.item.start);
            console.log("data.item.end-----", data.item.end);
            setStartDate(data.item.start);
            setEndDate(data.item.end);
        }
    }, [data.item, data.step]);


    useEffect(() => {
        if (data.step === 5) {
            handleTransmitData();
        }
    }, [startDate, endDate]);

    const handleDatePickerChange = (item) => {
        console.log("handleDatePickerChange-----", item);
        // console.log(state[0].startDate);
        setDate(item.selection);
    }

    const handleClickBtn = (x, y) => {
        setdata({ step: x, item: y });
    }

    const handleClickBackBtn = () => {

        var step = data.step;
        switch (step) {
            case 1:
                setWho("");
                setdata({ step: 0, item: "" });
                setShowNumberPage(0);
                break;
            case 2:
                setNumber("");
                if (who === "Couple" || who === "Solo" || who === "") {
                    setdata({ step: 0, item: "" });
                }
                else {
                    setdata({ step: 1, item: who });
                }
                break;
            case 3:
                setTheme("");
                setdata({ step: 2, item: number });
                break;
            case 4:
                setHowLong("");
                setdata({ step: 3, item: theme });
                break;
            case 5:
                setStartDate(new Date().getTime());
                setEndDate("");
                setdata({ step: 4, item: howLong });
                break;
            default:
                break;
        }
    }

    const handleSkipBtn = () => {
        switch (data.step) {
            case 0:
                setdata({ step: 1, item: null });
                setdata({ step: 2, item: null });
                break;
            case 1:
                setdata({ step: 2, item: null });
                break;
            case 2:
                setdata({ step: 3, item: null });
                break;
            case 3:
                setdata({ step: 4, item: null });
                break;
            case 4:
                setdata({ step: 5, item: { start: null, end: null } });
                break;
            default:
                break;
        }
    }

    const handleNextBtn = () => {
        setdata({ step: 5, item: { start: date.startDate, end: date.endDate } })

    }

    const handleTransmitData = () => {

        setShowFinalPage(true);

        console.log("who  " + who);
        console.log("number  " + number);
        console.log("theme  " + theme);
        console.log("howlong  " + howLong);
        console.log("startDate  " + startDate);
        console.log("endDate  " + endDate);

        axios
            .post('http://127.0.0.1:8000/api-vacation/storeData', {
                'who': who,
                'number': number,
                'theme': theme,
                'howlong': howLong,
                'fromDate': startDate === null? "":dateFormat(new Date(startDate),"yyyy-mm-dd"),
                'toDate': endDate === null? "":dateFormat(new Date(endDate),"yyyy-mm-dd")
            }, {
                headers: {
                    // 'Accept': 'application/json',
                    // 'Content-Type': 'application/json',
                },
            })
            .then(res => console.log('Results: ' + res))
            .catch(err => console.log('Login error: ' + err))

    }

    return (
        <div className="w-full">

            <div className="w-full mx-auto">

                <div className="bg-img">
                    <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
                        <a className="navbar-brand logo " href="#home"><img src={logo} alt="logo" /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse mr-5 pt-3" style={{ flexGrow: "0" }} id="navbarNav">
                            <ul className="navbar-nav topnav">
                                <li className="nav-item px-2 active">
                                    <a className="nav-link" href="#home" style={{ color: "brown" }}>Home</a>
                                </li>
                                <li className="nav-item px-2">
                                    <a className="nav-link" href="#about">About</a>
                                </li>
                                <li className="nav-item px-2">
                                    <a className="nav-link" href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="d-flex px-39 pt-29">
                        <p className="bg-white text-center rounded-lg py-1 notify">Find your next destination</p>
                    </div>
                </div>

                <div className="w-full px-4 pt-29">

                    {!showFinalPage ?
                        <div className="w-full mx-auto shadow-lg py-3 px-4 br-card" style={{ maxWidth: "519px" }}>

                            <div className="d-flex justify-content-between">
                                <p style={{ fontWeight: "300", fontSize: "20px" }}>Adjust your search:</p>

                                {data.step === 0 && <CircularProgressBar percentage={0} />}
                                {data.step > 0 && <CircularProgressBar percentage={25 * (data.step - 1)} />}

                            </div>
                            <h1 className="text-center">
                                {(data.step === 0 || data.step === 1) && "Who is travelling?"}
                                {data.step === 2 && "Vacation Theme"}
                                {data.step === 3 && "How long?"}
                                {data.step === 4 && "Time frame"}

                            </h1>
                            <hr className="mb-4" style={{ width: "30%" }} />
                            <div className="circle-field" style={{ position: "relative" }}>
                                {(data.step === 0) &&



                                    <>

                                        <CircleButton name="Family" className="child" key="1" onClick={() => handleClickBtn(1, "Family")} />
                                        <CircleButton name="Friends" className="child" key="2" onClick={() => handleClickBtn(1, "Friends")} />
                                        <CircleButton name="Couple" className="child" key="3" onClick={() => handleClickBtn(1, "Couple")} />
                                        <CircleButton name="Solo" className="child" key="4" onClick={() => handleClickBtn(1, "Solo")} />
                                    </>
                                }
                                {(showNumberPage === 1) &&
                                    <>
                                        <CircleButton name="Family" />
                                        <CircleButton name="3" size="sm" onClick={() => handleClickBtn(2, "3")} />
                                        <CircleButton name="4" size="sm" onClick={() => handleClickBtn(2, "4")} />
                                        <CircleButton name="5" size="sm" onClick={() => handleClickBtn(2, "5")} />
                                        <CircleButton name="6+" size="sm" onClick={() => handleClickBtn(2, "6+")} />
                                    </>
                                }
                                {(showNumberPage === 2) &&
                                    <>
                                        <CircleButton name="Friends" />
                                        <CircleButton name="2" size="sm" onClick={() => handleClickBtn(2, "2")} />
                                        <CircleButton name="3" size="sm" onClick={() => handleClickBtn(2, "3")} />
                                        <CircleButton name="4" size="sm" onClick={() => handleClickBtn(2, "4")} />
                                        <CircleButton name="5" size="sm" onClick={() => handleClickBtn(2, "5")} />
                                        <CircleButton name="6+" size="sm" onClick={() => handleClickBtn(2, "6+")} />
                                    </>
                                }
                                {(number !== "" && data.step === 2) &&
                                    <>
                                        <CircleButton name="Beach" onClick={() => handleClickBtn(3, "Beach")} />
                                        <CircleButton name="City life" onClick={() => handleClickBtn(3, "City life")} />
                                        <CircleButton name="Nature" onClick={() => handleClickBtn(3, "Nature")} />
                                        <CircleButton name="Suprise me" onClick={() => handleClickBtn(3, "Suprise me")} />
                                        <CircleButton name="Country side" onClick={() => handleClickBtn(3, "Country side")} />
                                    </>
                                }
                                {(theme !== "" && data.step === 3) &&
                                    <>
                                        <CircleButton name="Weekend" onClick={() => handleClickBtn(4, "Weekend")} />
                                        <CircleButton name="Weekish" onClick={() => handleClickBtn(4, "Weekish")} />
                                        <CircleButton name="Long Weekend" onClick={() => handleClickBtn(4, "Long Weekend")} />
                                        <CircleButton name="Longer" onClick={() => handleClickBtn(4, "Longer")} />
                                    </>
                                }
                                {(howLong !== "" && data.step === 4) &&
                                    <>
                                        <div className="w-full">
                                            <DateRangePicker
                                                onChange={handleDatePickerChange}
                                                showSelectionPreview={true}
                                                moveRangeOnFirstSelection={false}
                                                months={1}
                                                ranges={[date]}
                                                direction="vertical"
                                                rangeColors={["#DC5921"]}
                                                weekdayDisplayFormat={"EEEEEE"}
                                                scroll={{ enabled: true }}
                                            />
                                        </div>

                                        <div className="row py-4">
                                            <button className="btn btn-success mx-auto" onClick={handleNextBtn}>Next</button>
                                        </div>
                                    </>
                                }
                            </div>

                            <div className="d-flex justify-content-between align-items-center card-bottom">
                                {
                                    data.step > 0 ? <div><img src={backArrow} alt="backArrow" onClick={handleClickBackBtn} style={{ float: "left", width: "38px" }} /></div> : <div></div>
                                }
                                <p className="font-skip" onClick={handleSkipBtn}>Skip</p>
                            </div>
                        </div>
                        : <p className="text-center font-weight-medium font-greeting">Searching <span style={{ display: "block" }}>for the best vacation</span> for you</p>}

                </div>
            </div>
        </div>
    )
}

export default Home;