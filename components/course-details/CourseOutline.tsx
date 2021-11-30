/**
 * @author: ntwari egide
 * @description: course outline component
 */

 import Link from 'next/link';
 import {Space, Typography, Divider} from "antd"

const {Title} = Typography

 export default function CourseOutlineComponent (){

    return (
        <div className="pl-28 pt-6 pb-8 bg-gray-300 w-[100vw] -ml-28 ">
            <Space direction="vertical">
                <Title level={2} className="text-2xl font-semibold text-gray-800">Course Outline</Title>
                <div className="flex flex-row text-xl mt-8 text-gray-800">
                    <div className=" w-[50vw]">TITLE</div>
                    <Space>LEVEL</Space>
                </div>
                <hr className="border-gray-500 mt-4 w-[70vw]" />
                
                <Link href="/course-video">
                    <div className="flex cursor-pointer -ml-2 pl-2 hover:bg-gray-400 py-2 w-[70.6vw] transition-all flex-row text-base mt-8 text-gray-800">
                        <div className=" w-[50vw] flex flex-row mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM10.622 8.415a.4.4 0 0 0-.622.332v6.506a.4.4 0 0 0 .622.332l4.879-3.252a.4.4 0 0 0 0-.666l-4.88-3.252z" fill="rgba(64,64,64,1)"/></svg>
                            <p className="ml-4">Introduction to machine learning</p>
                        </div>
                        <Space>Beginner</Space>
                    </div>
                </Link>

                <Link href="/course-video">
                    <div className="flex cursor-pointer -ml-2 pl-2 hover:bg-gray-400 py-2 w-[70.6vw] transition-all flex-row text-base mt-4 text-gray-800">
                        <div className=" w-[50vw] flex flex-row mt-4" >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM10.622 8.415a.4.4 0 0 0-.622.332v6.506a.4.4 0 0 0 .622.332l4.879-3.252a.4.4 0 0 0 0-.666l-4.88-3.252z" fill="rgba(64,64,64,1)"/></svg>
                            <p className="ml-4">Linear Regression</p>
                        </div>
                        <Space>Intermediate</Space>
                    </div>

                </Link>

                <Link href="/course-video">
                    <div className="flex cursor-pointer -ml-2 pl-2 hover:bg-gray-400 py-2 w-[70.6vw] transition-all flex-row text-base mt-4 text-gray-800">
                        <div className=" w-[50vw] flex flex-row mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM10.622 8.415a.4.4 0 0 0-.622.332v6.506a.4.4 0 0 0 .622.332l4.879-3.252a.4.4 0 0 0 0-.666l-4.88-3.252z" fill="rgba(64,64,64,1)"/></svg>
                            <p className="ml-4">Classification</p>
                        </div>
                        <Space>Intermediate</Space>
                    </div>
                </Link>

                
                <Link href="/course-video">
                    <div className="flex cursor-pointer -ml-2 pl-2 hover:bg-gray-400 py-2 w-[70.6vw] transition-all flex-row text-base mt-4 text-gray-800">
                        <div className=" w-[50vw] flex flex-row mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM10.622 8.415a.4.4 0 0 0-.622.332v6.506a.4.4 0 0 0 .622.332l4.879-3.252a.4.4 0 0 0 0-.666l-4.88-3.252z" fill="rgba(64,64,64,1)"/></svg>
                            <p className="ml-4">Machine Learning projects</p>
                        </div>
                        <Space>Beginner</Space>
                    </div>
                </Link>
               
                <div className="flex cursor-pointer -ml-2 pl-2 py-2 w-[70.6vw] transition-all flex-row text-base mt-8 text-gray-800">
                    <div className=" w-[50vw] flex flex-row mt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M7 20.981a6.5 6.5 0 0 1-2.936-12 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12V21H7v-.019zM13 12V8h-2v4H8l4 5 4-5h-3z"/></svg>
                        <p className="ml-4">Download Curriculum</p>
                    </div>
                </div>

            </Space>
        </div>
    )

 }