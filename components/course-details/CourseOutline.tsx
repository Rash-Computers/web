/**
 * @author: ntwari egide
 * @description: course outline component
 */


 import { ReactElement } from "react"
 import {Space, Typography, Divider} from "antd"

const {Title} = Typography

 export default function CourseOutlineComponent (): ReactElement {

    return (
        <div className="pl-28 pt-6 h-96 bg-gray-300 w-[100vw] -ml-28 ">
            <Space>
                <Title level={2} className="text-2xl font-semibold text-gray-800">Course Outline</Title>
                <Space direction="horizontal" className="flex flex-row text-xl mt-8 text-gray-800">
                    <Space className=" w-[50vw]">TITLE</Space>
                    <Space>LEVEL</Space>
                </Space>
                <hr className="border-gray-500 mt-4 w-[70vw]" />
                <Space direction="horizontal" className="flex flex-row text-base mt-8 text-gray-800">
                    <Space className=" w-[50vw]">Introduction to machine learning</Space>
                    <Space>Beginner</Space>
                </Space>
            </Space>
        </div>
    )

 }