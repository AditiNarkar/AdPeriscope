"use client"

import Link from "next/link";
import { useState } from "react";

export default function Home() {

    const [appName, setAppName] = useState('');
    const [appDescription, setAppDescription] = useState('');
    const [ageGroup, setAgeGroup] = useState('12-18');
    const [interest, setInterest] = useState('Technology');

    // Update functions for each field
    const handleAppNameChange = (e) => {
        setAppName(e.target.value);
    };

    const handleAppDescriptionChange = (e) => {
        setAppDescription(e.target.value);
    };

    const handleAgeGroupChange = (e) => {
        setAgeGroup(e.target.value);
    };

    const handleInterestChange = (e) => {
        setInterest(e.target.value);
    };


    return (
        <div className="container-fluid h-100">
            <video
                autoPlay
                loop
                muted
                className="video-background"
            >
                <source src="waves1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="video-overlay"></div>

            <div className="row justify-content-center h-100 !z-10" style={{ position: "relative" }}>
                <div className="col-md-8 col-xl-8 chat" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <img
                        src="logo1.jpeg"
                        className="rounded-circle user_img !w-[150px] !h-[150px] animate-moveInCircle"
                    />
                    <div className="main-title" style={{ fontSize: "2rem" }}>
                        AdPeriscope: Navigating the Waves of Advertising Insights...
                    </div>
                    <div className="input-group">
                        <input value={appName} onChange={handleAppNameChange} type="text" className="form-control" id="inputGroupFile01" style={{ padding: 5, width: "100%", fontSize: 18, height: 30, marginBottom: 10 }} placeholder="What should we call your app ? ..." />
                        <textarea value={appDescription} onChange={handleAppDescriptionChange} type="text" className="form-control" id="inputGroupFile01" style={{ padding: 5, width: "100%", fontSize: 18, minHeight: 20, marginBottom: 10 }} placeholder="Describe your app ..." />
                    </div>
                    <div className="pb-1" style={{ color: "white", fontSize: 20 }}>Who are your target audience ?</div>
                    <div className="mb-3" style={{ display: "flex", color: "black", gap: 10, fontSize: 18 }}>
                        <select value={ageGroup} onChange={handleAgeGroupChange} placeholder="Age" style={{ width: 100, padding: 5 }}>
                            <option value="12-18">12-18</option>
                            <option value="18–35">18–35</option>
                            <option value="35–60">35–60</option>
                        </select>
                        <select value={interest} onChange={handleInterestChange} placeholder="Interest" style={{ width: 200 }}>
                            <option value="Technology">Technology</option>
                            <option value="Health & Wellness">Health & Wellness</option>
                            <option value="Business & Finance">Business & Finance</option>
                            <option value="Lifestyle">Lifestyle</option>
                            <option value="Education">Education</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Social Impact">Social Impact</option>
                            <option value="Automotive & Transportation">Automotive & Transportation</option>
                            <option value="Real Estate & Property">Real Estate & Property</option>
                            <option value="Arts & Culture">Arts & Culture</option>
                        </select>
                    </div>

                    <div style={{ display: "flex", gap: 10 }}>
                        <Link href="/dashboard" passHref>
                            <button className="button-64" role="button">
                                <span className="text">Submit</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
}
