import React from 'react'
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import CircularProgress from '@mui/joy/CircularProgress';
import Typography from '@mui/joy/Typography';
import SvgIcon from '@mui/joy/SvgIcon';
import Lottie from 'lottie-react';
import RocketLottie from '../../../public/Photos/Animation - 1714071392465.json'


import "./CardSection.css";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import CustomCard from './Cards/CustomCard';

const CardSection = () => {

    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    useEffect(() => {
        const animation = animate(count, 100, { duration: 10 });

        return animation.stop;
    }, []);

    return (
        <div>
            <div className='flex justify-around items-center'>
            <div className=' flex justify-center items-center '>
                <Lottie className='h-56 w-56' animationData={RocketLottie}></Lottie>
                <h1 className=' text-5xl'>Boost Your <br /> Productivity</h1>
            </div>

            <Card sx={{ minWidth: 400 }} variant="solid" color="primary" invertedColors>
                <CardContent orientation="horizontal">
                    <CircularProgress color='primary' size="lg" determinate value={20}>
                        <SvgIcon>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                                />
                            </svg>
                        </SvgIcon>
                    </CircularProgress>
                    <CardContent>
                        <Typography color='white' level="body-md">Gross profit</Typography>
                        <Typography color='white' level="h3">$ <motion.h3 className='inline-block'>{rounded}</motion.h3>M</Typography>
                    </CardContent>
                </CardContent>
                <CardActions>
                    <Button variant="soft" size="sm">
                        Add to Watchlist
                    </Button>
                    <Button variant="solid" size="sm">
                        See breakdown
                    </Button>
                </CardActions>
            </Card>
            
        </div>
        <div>
            <CustomCard></CustomCard>
        </div>
        </div>
    )
}

export default CardSection