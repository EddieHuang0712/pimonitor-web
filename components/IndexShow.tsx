"use client";
import React from 'react'
import { IndexProps } from '@/types/indexShow'

const ShowIndex: React.FC<IndexProps> = (props: IndexProps) => {
    return (
        <div className="w-1/3 h-fit px-16 flex flex-col justify-center bg-transparent">
            <div className="flex items-center justify-center">
                {/*<RadarChartOutlined style={{fontSize:"60px"}}/>*/}
                {props.data.icon}
            </div>
            <div className="mt-2 text-center">
                <h1>{props.data.title}</h1>
            </div>
            <div className="mt-4 text-center">
                <div className="mt-4 text-[12px]">{props.data.desc}</div>
            </div>
        </div>
    )
}

export default ShowIndex
