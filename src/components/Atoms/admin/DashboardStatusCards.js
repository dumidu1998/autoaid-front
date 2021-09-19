import React from 'react'
import Card from '@material-tailwind/react/Card';
import CardRow from '@material-tailwind/react/CardRow';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardStatus from '@material-tailwind/react/CardStatus';
import CardStatusFooter from '@material-tailwind/react/CardStatusFooter';
import Icon from '@material-tailwind/react/Icon';

export default function DashboardStatusCards({
    icon,
    title,
    amount,
    percentage,
    percentageColor,
    date,
}) {
    return (
        <div className="px-4 mb-10 ">
            <Card>
                <CardRow>
                    <CardHeader iconOnly className="bg-gradient-to-br from-Secondary-0 to-primary-0">
                        <img src={icon} />
                    </CardHeader>
                    <CardStatus title={title} amount={amount} className="font-primary" />
                </CardRow>

                <CardStatusFooter className="font-primary justify-center" amount={percentage + " %"} color={percentageColor} date={date}></CardStatusFooter>
            </Card>
        </div>
    )
}
