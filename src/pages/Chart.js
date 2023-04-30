import React, { useState, useEffect } from 'react'
import { API } from '../Api';
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'

import { Line } from 'react-chartjs-2'
import styled from 'styled-components';

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
)

const Chart = () => {
    const [IncomeData, setIncomeData] = useState([])
    const [ExpenseData, setExpenseData] = useState([])

    const getIncome = async () => {
        await fetch(`${API}/income`, { method: "GET" })
            .then((data) => data.json())
            .then((IncomeData) => setIncomeData(IncomeData));
    }

    const getexpenses = async () => {
        await fetch(`${API}/expenses`, { method: "GET" })
            .then((data) => data.json())
            .then((ExpenseData) => setExpenseData(ExpenseData));
    }
    useEffect(() => { getIncome() }, [])
    useEffect(() => { getexpenses() }, [])


    const data = {
        labels: IncomeData.map((inc) => {
            const { date } = inc
            return date
        }),
        datasets: [
            {
                label: 'Income',
                data: [
                    ...IncomeData.map((income) => {
                        const { amount } = income
                        return amount
                    })
                ],
                backgroundColor: 'green',
                tension: .2
            },
            {
                label: 'Expenses',
                data: [
                    ...ExpenseData.map((expense) => {
                        const { amount } = expense
                        return amount
                    })
                ],
                backgroundColor: 'red',
                tension: .2
            }
        ]
    }

    return (
        <ChartStyled >
            <Line data={data} />
        </ChartStyled>
    )
}
const ChartStyled = styled.div`
    background: #FCF6F9;
    border: 1px solid rgba(255, 255, 255, .25);
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 20rem;
    width:40rem;
    align-items:center;
    max-width:1200px;
    margin:auto;
`;
export default Chart