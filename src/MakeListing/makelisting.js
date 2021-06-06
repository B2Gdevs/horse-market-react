import React, {useState} from 'react';
import {NavigationBar} from "../components/navbar";
import styled from "styled-components";
import {Footer} from "../components/footer";
import horse1 from "../assets/horse1.jpg";

const Styles = styled.div`
   input[type="file"] {
        display: none;
   }
   
   .remove-button {
        color: red
   }
`

const MakeListing = () => {
    const horseData = [
        {
            image: horse1,
        },
        {
            image: horse1,
        },
        {
            image: horse1,
        },
        {
            image: horse1,
        },
        {
            image: horse1,
        },
        {
            image: horse1,
        }
    ]
    const [name, setName] = useState('');
    const setNameChange = (e) => {
        console.log(e.target.value)
        setName(e.target.value)
    }

    const [state, setState] = useState('');
    const setStateChange = (e) => {
        console.log(e.target.value)
        setState(e.target.value)
    }

    const [email, setEmail] = useState('');
    const setEmailChange = (e) => {
        console.log(e.target.value)
        setEmail(e.target.value)
    }

    const [zip, setZip] = useState('');
    const setZipChange = (e) => {
        console.log(e.target.value)
        setZip(e.target.value)
    }

    const [address, setAddress] = useState('');
    const setAddressChange = (e) => {
        console.log(e.target.value)
        setAddress(e.target.value)
    }

    const [phone, setPhone] = useState('');
    const setPhoneChange = (e) => {
        console.log(e.target.value)
        setPhone(e.target.value)
    }

    const [city, setCity] = useState('');
    const setCityChange = (e) => {
        console.log(e.target.value)
        setCity(e.target.value)
    }

    const [title, setTitle] = useState('');
    const setTitleChange = (e) => {
        console.log(e.target.value)
        setTitle(e.target.value)
    }

    const [horseName, setHorseName] = useState('');
    const setHorseNameChange = (e) => {
        console.log(e.target.value)
        setHorseName(e.target.value)
    }

    const [horseAge, setHorseAge] = useState('');
    const setHorseAgeChange = (e) => {
        console.log(e.target.value)
        setHorseAge(e.target.value)
    }

    const [horseSex, setHorseSex] = useState('');
    const setHorseSexChange = (e) => {
        console.log(e.target.value)
        setHorseSex(e.target.value)
    }

    const [horseHeight, setHorseHeight] = useState('');
    const setHorseHeightChange = (e) => {
        console.log(e.target.value)
        setHorseHeight(e.target.value)
    }

    const [horsePrice, setPrice] = useState('');
    const setHorsePriceChange = (e) => {
        console.log(e.target.value)
        setPrice(e.target.value)
    }

    const [horseColor, setColor] = useState('');
    const setHorseColorChange = (e) => {
        console.log(e.target.value)
        setColor(e.target.value)
    }

    const [horseDesc, setHorseDesc] = useState('');
    const setHorseDescChange = (e) => {
        console.log(e.target.value)
        setHorseDesc(e.target.value)
    }

    const create = () => {
        console.log("Captured info: ", name, state, email, zip, address, phone, city,
            title, horseName, horseAge, horseSex, horseHeight, horsePrice, horseColor,
            horseDesc)
    }

    return (
        <Styles>
            <div className="">
                <div className="container p-5">
                    <div className="text-center">
                        <h1>Sell a Horse</h1>
                        <p>Please only list on horse .. . Additional horses listed in the same ad will be subject to
                            additional ...</p>
                    </div>
                    <div className="my-5">
                        <div className="text-center">
                            <h2>Your Information</h2>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <label>Your Name</label>
                                <input onChange={(e) => {setNameChange(e)}} placeholder={"Your name"} className={"form-control"}/>
                                <label>Your Email</label>
                                <input onChange={(e) => {setEmailChange(e)}} placeholder={"Your email"} className={"form-control"}/>
                                <label>Your Address</label>
                                <input onChange={(e) => {setAddressChange(e)}} placeholder={"Your address"} className={"form-control"}/>
                                <label>City</label>
                                <input onChange={(e) => {setCityChange(e)}} placeholder={"city"} className={"form-control"}/>
                            </div>
                            <div className="col-md-6">
                                <label>State</label>
                                <input onChange={(e) => {setStateChange(e)}} placeholder={"State"} className={"form-control"}/>
                                <label>Zip</label>
                                <input onChange={(e) => {setZipChange(e)}} placeholder={"zip"} className={"form-control"}/>
                                <label>Phone</label>
                                <input onChange={(e) => {setPhoneChange(e)}} placeholder={"Phone"} className={"form-control"}/>
                            </div>
                        </div>
                    </div>

                    <div className="my-5">
                        <div className="text-center">
                            <h2>Horse Information</h2>
                            <p>Listing Title</p>
                            <input onChange={(e) => {setTitleChange(e)}} placeholder={"Headline"} className={"form-control w-50 mx-auto"}/>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <label>Horse Name</label>
                                <input onChange={(e) => {setHorseNameChange(e)}} placeholder={"Horse name"} className={"form-control"}/>
                                <label>Age</label>
                                <input onChange={(e) => {setHorseAgeChange(e)}} placeholder={"Age"} className={"form-control"}/>
                                <label>Sex</label>
                                <input onChange={(e) => {setHorseSexChange(e)}} placeholder={"Sex"} className={"form-control"}/>
                                <label>Height</label>
                                <input onChange={(e) => {setHorseHeightChange(e)}} placeholder={"Height"} className={"form-control"}/>
                                <label>Color</label>
                                <input onChange={(e) => {setHorseColorChange(e)}} placeholder={"Color"} className={"form-control"}/>
                            </div>
                            <div className="col-md-6">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Horse is registered
                                    </label>
                                </div>
                                <label>Sex</label>
                                <input onChange={(e) => {setHorseSexChange(e)}} placeholder={"sex"} className={"form-control"}/>
                                <label>Price</label>
                                <input onChange={(e) => {setHorsePriceChange(e)}} placeholder={"price"} className={"form-control"}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <label>Horse Description</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="my-5">
                        <h5>Images</h5>
                        <div className="d-flex">
                            <form>
                                <label className="btn btn-outline-dark">
                                    <input type="file"/>
                                    Choose File
                                </label>
                            </form>
                        </div>
                        <p>Add some appealings photos of your horse for sale!</p>
                        <div className="row">
                            {horseData.map((data) => (
                                <div className="col-md-4">
                                    <img className="w-100" src={data.image} alt={"img"}/>
                                    <div className="d-flex">
                                        <button className={"ml-auto remove-button btn"}>Remove</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="row">
                            <button onClick={create} className={"btn btn-outline-success mx-auto"}>Create</button>
                        </div>
                    </div>
                </div>
            </div>

        </Styles>
    );

}

export default MakeListing;