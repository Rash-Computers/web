import { ReactElement } from "react"
import {Space, Typography } from "antd"
import { Rate } from 'antd';


const {Title}  = Typography


export default function InstructorDetailsComponent (): ReactElement {

    return (
        <div className="mb-8">
            <div className="flex flex-row mb-8">
                <img src={`https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260`} alt="instructor's profile" className="w-20 h-20 rounded-full mt-4 border-gray-700 border-2" />
                
                <div className="ml-4 mt-4">
                    <h1 className="text-gray-700 text-base">Time Rusia</h1>
                    <h1>Time Ruscica</h1>
                    <Rate allowHalf defaultValue={4.5} />
                </div>

            </div>
            <p>Founder of Tech With Tim Inc. | And <br /> Algorithm Instructor at AlgoExpert </p>
            <br />
            <br />
        </div>
    )

}