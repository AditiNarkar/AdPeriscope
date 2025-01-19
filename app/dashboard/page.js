"use client"

import React, { useState } from "react";
import { Chart } from "react-google-charts";

export default function Dashboard() {


    const painPointData = [
        ["Source", "Mentions"],
        ["Reddit", 45],
        ["YouTube", 35],
        ["Quora", 20],
    ];

    const InsightsChartOptions = {
        title: "Mentions Breakdown by Source",
        backgroundColor: "transparent",
        chartArea: { width: "100%", height: "80%" },
        legend: { textStyle: { color: "#ffffff" } },
        titleTextStyle: { color: "#ffffff" },
    };

    const competitorData = [
        ["Competitor", "Views", "Likes"],
        ["Competitor A", 5000, 1200],
        ["Competitor B", 3500, 900],
        ["Competitor C", 4500, 1100],
        ["Competitor D", 6000, 1500],
    ];

    const competitorChartOptions = {
        title: "Competitor Ad Performance (Views vs. Likes)",
        backgroundColor: "transparent",
        chartArea: { width: "80%", height: "70%" },
        legend: { textStyle: { color: "#ffffff" } },
        titleTextStyle: { color: "#ffffff" },
        hAxis: { title: "Competitor", textStyle: { color: "#ffffff" } },
        vAxis: { title: "Metrics", textStyle: { color: "#ffffff" } },
    };

    const trendData = [
        ["Keyword/Hashtag", "Mentions"],
        ["#AI", 15000],
        ["#Blockchain", 12000],
        ["#Sustainability", 8000],
        ["#HealthTech", 9000],
        ["#FinTech", 11000],
    ];

    const trendChartOptions = {
        backgroundColor: "transparent",
        chartArea: { width: "80%", height: "70%" },
        legend: { textStyle: { color: "#ffffff" } },
        titleTextStyle: { color: "#ffffff" },
        hAxis: { title: "Keyword/Hashtag", textStyle: { color: "#ffffff" } },
        vAxis: { title: "Mentions", textStyle: { color: "#ffffff" } },
    };

    const platformData = [
        ["Platform", "Mentions"],
        ["Youtube", 18000],
        ["Reddit", 15000],
        ["App Store", 12000],
        ["Play Store", 9000]
    ];

    const platformChartOptions = {
        backgroundColor: "transparent",
        chartArea: { width: "80%", height: "70%" },
        legend: { textStyle: { color: "#ffffff" } },
        titleTextStyle: { color: "#ffffff" },
        hAxis: { title: "Platform", textStyle: { color: "#ffffff" } },
        vAxis: { title: "Mentions", textStyle: { color: "#ffffff" } },
    };

    const sentimentData = [
        ["Sentiment", "Percentage"],
        ["Positive", 45],
        ["Neutral", 35],
        ["Negative", 20],
    ];

    const sentimentChartOptions = {
        backgroundColor: "transparent",
        chartArea: { width: "80%", height: "70%" },
        legend: { textStyle: { color: "#ffffff" } },
        titleTextStyle: { color: "#ffffff" },
        slices: {
            0: { offset: 0.1 },
            1: { offset: 0.1 },
            2: { offset: 0.1 },
        },
        pieSliceText: "percentage",
        is3D: true,
        pieSliceTextStyle: { color: "#ffffff" },
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-2">
                <h1 className="text-2xl font-bold text-white">Overview</h1>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
                {[
                    { label: "Total Data Points Analyzed", value: "1,200" },
                    { label: "Number of Platforms Covered", value: "8" },
                    { label: "Total Pain Points Identified", value: "35" },
                ].map((metric) => (
                    <div
                        key={metric.label}
                        className="bg-gray-800 backdrop-blur-lg bg-opacity-70 shadow-md p-4 rounded-lg text-center"
                    >
                        <h3 className="text-sm font-medium text-gray-300">{metric.label}</h3>
                        <p className="text-2xl font-bold text-white">{metric.value}</p>
                    </div>
                ))}
            </div>

            <div className="flex justify-between items-center mb-2">
                <h1 className="text-2xl font-bold text-white">Insights</h1>
            </div>

            <div className="bg-gray-800 backdrop-blur-lg bg-opacity-70 shadow-md p-4 rounded-lg mb-6">
                <h2 className="text-lg font-semibold mb-4 text-white">User Pain Point: Complex Interfaces</h2>
                <p className="text-white text-sm mb-2">
                    <strong>Pain Point:</strong> Users are frustrated by complex interfaces.
                </p>
                <p className="text-white text-sm mb-2">
                    <strong>Source:</strong> Reddit, YouTube, Quora.
                </p>
                <p className="text-white text-sm mb-2">
                    <strong>Mentions:</strong> 6
                </p>
            </div>

            <div className="bg-gray-800 backdrop-blur-lg bg-opacity-70 shadow-md pt-2 pl-4 rounded-lg mb-4">
                <div className="h-64">
                    <Chart
                        chartType="PieChart"
                        width="100%"
                        height="100%"
                        data={painPointData}
                        options={InsightsChartOptions}
                    />
                </div>
            </div>

            <div className="flex justify-between items-center mb-2">
                <h1 className="text-2xl font-bold text-white">Competitor Analytics</h1>
            </div>


            {/* Competitor Content Links */}
            <div className="bg-gray-800 backdrop-blur-lg bg-opacity-70 shadow-md p-4 rounded-lg mb-2">
                <h2 className="text-lg font-semibold mb-4 text-white">Competitor Content Links</h2>
                <ul className="text-white space-y-2">
                    <li>
                        <a
                            href="https://www.competitora.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                        >
                            Competitor A - Ad Content
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.competitorb.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                        >
                            Competitor B - Ad Content
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.competitorc.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                        >
                            Competitor C - Ad Content
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.competitord.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                        >
                            Competitor D - Ad Content
                        </a>
                    </li>
                </ul>
            </div>

            <div className="bg-gray-800 backdrop-blur-lg bg-opacity-70 shadow-md p-4 rounded-lg mb-4">
                <h2 className="text-lg font-semibold mb-4 text-white">Competitor Ad Performance</h2>
                <div className="h-64">
                    <Chart
                        chartType="ColumnChart"
                        width="100%"
                        height="100%"
                        data={competitorData}
                        options={competitorChartOptions}
                    />
                </div>
            </div>
            <div className="bg-gray-800 backdrop-blur-lg bg-opacity-70 shadow-md p-4 rounded-lg mb-4">
                <h2 className="text-lg font-semibold mb-4 text-white">What we can do to tackle competition ?</h2>
                <div className="h-auto  text-white ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec risus ac enim viverra gravida. Integer laoreet dolor vitae arcu aliquam, et ullamcorper felis sollicitudin. Nulla facilisi. Mauris in est ut ante cursus viverra. Aenean euismod, tortor at sodales sollicitudin, eros purus scelerisque nulla, ac faucibus felis elit at libero. Phasellus placerat, magna ac suscipit tincidunt, dui sem posuere velit, sit amet viverra justo dui vel velit. Nulla ac nunc ut nulla faucibus vehicula at ac risus.
                </div>
            </div>


            <div className="flex justify-between items-center mb-2">
                <h1 className="text-2xl font-bold text-white">Trend Analytics</h1>
            </div>
            <div className="bg-gray-800 backdrop-blur-lg bg-opacity-70 shadow-md p-6 rounded-lg mb-8">
                <h2 className="text-lg font-semibold mb-4 text-white">Trending Keywords and Hashtags</h2>
                <div className="h-64">
                    <Chart
                        chartType="BarChart"
                        width="100%"
                        height="100%"
                        data={trendData}
                        options={trendChartOptions}
                    />
                </div>
            </div>
            <div className="bg-gray-800 backdrop-blur-lg bg-opacity-70 shadow-md p-6 rounded-lg mb-8">
                <h2 className="text-lg font-semibold mb-4 text-white">Mentions Across Platforms</h2>
                <div className="h-64">
                    <Chart
                        chartType="ColumnChart"
                        width="100%"
                        height="100%"
                        data={platformData}
                        options={platformChartOptions}
                    />
                </div>
            </div>


            <div className="flex justify-between items-center mb-2">
                <h1 className="text-2xl font-bold text-white">Sentiment Analysis</h1>
            </div>
            <div className="bg-gray-800 backdrop-blur-lg bg-opacity-70 shadow-md p-6 rounded-lg mb-4">
                <h2 className="text-lg font-semibold mb-4 text-white">Persona Builder</h2>
                <p className="text-white">
                    Based on the analysis of user interactions, a typical persona for the audience discussing the
                    keyword "AI" is someone who is both optimistic and cautious. They appreciate advancements in
                    technology but are also concerned about privacy and job displacement. This persona can be further
                    categorized into two distinct types: early adopters, who are more likely to be excited about new
                    technologies, and skeptics, who are more cautious and demand proof of AI’s impact on society.
                </p>
            </div>

            <div className="bg-gray-800 backdrop-blur-lg bg-opacity-70 shadow-md p-4 pb-0 rounded-lg mb-4">
                <h2 className="text-lg font-semibold mb-4 text-white">Sentiment Distribution</h2>
                <div className="h-64">
                    <Chart
                        chartType="PieChart"
                        width="100%"
                        height="100%"
                        data={sentimentData}
                        options={sentimentChartOptions}
                    />
                </div>
            </div>

            <div className="flex justify-between items-center mb-2">
                <h1 className="text-2xl font-bold text-white">Content Recommendations</h1>
            </div>
            <div className="bg-gray-800 backdrop-blur-lg bg-opacity-70 shadow-md p-6 rounded-lg mb-4">
                <h2 className="text-lg font-semibold mb-4 text-white">Suggested content formats and CTAs based on the research and insights.</h2>
                <p className="text-white">
                    Based on the analysis of user interactions, a typical persona for the audience discussing the
                    keyword "AI" is someone who is both optimistic and cautious. They appreciate advancements in
                    technology but are also concerned about privacy and job displacement. This persona can be further
                    categorized into two distinct types: early adopters, who are more likely to be excited about new
                    technologies, and skeptics, who are more cautious and demand proof of AI’s impact on society.
                </p>
            </div>

        </div>
    );
}
