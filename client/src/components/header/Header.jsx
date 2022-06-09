import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';

const Header = () => {
    const [openDate, setOpenDate] = useState(false)
    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,

    })

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport Taxi</span>
                    </div>
                </div>
                <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
                <p className="headerDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio laudantium nihil vel dicta eos fuga ipsam assumenda ullam, illum praesentium accusamus quia recusandae! Provident laboriosam rerum ipsum sed exercitationem quidem!</p>
                <button className="headerButton">Sing in / Register</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcon" />
                        <input type="text" placeholder="Where are you going?" className="headerSearchInput" />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                        <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date"
                        />}
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                        <span className="headerSearchText">{`${options.adult} adult. ${options.children} children. ${options.room} room`}</span>
                        <div className="options">
                            <div className="optionItem">
                                <span className="optionText">Adult</span>
                                <button className="optionCounterButton">-</button>
                                <span className="optionCounterNumber">1</span>
                                <button className="optionCounterButton">+</button>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Children</span>
                                <button className="optionCounterButton">-</button>
                                <span className="optionCounterNumber">0</span>
                                <button className="optionCounterButton">+</button>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Room</span>
                                <button className="optionCounterButton">-</button>
                                <span className="optionCounterNumber">1</span>
                                <button className="optionCounterButton">+</button>
                            </div>
                        </div>
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerButton">Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header