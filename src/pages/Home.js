import { Card } from "@mui/material";
import { Dropdown } from "../components/Dropdown";
import { ExpPopModal } from "../components/ExpPopModal";
import { IncPopModal } from "../components/IncPopModal";
import { PopModal } from "../components/PopModal";
import Chart from "./Chart";
export function Home() {
    return (
        <div>
            <div className="home-container">
                <br />
                <div className="pop-btn">
                    <PopModal />
                </div>
                <Card className="home-card">
                    <h1>Dashboard</h1>
                    <br />
                    <HomeDiv />
                    <br />
                    <Dropdown />
                    <br />
                </Card>
            </div>
            <div>
                <h2>All Transcactions</h2>
                <Chart/>
            </div>
        </div>
    )
}

function HomeDiv() {
    return (
        <div className="homediv-container">
            <div>
                <ExpPopModal />
            </div>
            <div>
                <IncPopModal />
            </div>
        </div>
    )
}