"use client";
import React, {useEffect, useState} from 'react';
import {GetUserInfo} from "@/api/user";
import {UserInfo} from "@/types/user";
import {GetOssSign} from "@/api/general";
import {Avatar} from "antd";

export default function User() {
    // 用户信息
    const [userInfo, setUserInfo] = useState({} as UserInfo);

    // 获取用户信息
    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const {user} = await GetUserInfo();
                setUserInfo(user);
            } catch (error) {
                console.error('Error fetching user info: ', error);
            }
        };

        fetchUserInfo().then(r => {

        });
    },[])

    return (
        <div className="flex flex-col gap-2 items-center">
            <h1 className="text-2xl mr-auto">账号信息</h1>
            <div className="flex items-center">
                <Avatar
                    size={64}
                    src={"https://img0.baidu.com/it/u=1403557207,620046077&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1718730000&t=0d376f0a88576629157efa9d0bed788e"}
                />
            </div>
            <div className="flex flex-col items-center">
                <p className="font-bold">{userInfo.username}
                    <span className="text-gray-400 font-light">
                         ({userInfo.id})
                    </span>
                </p>
                <p>用户邮箱：{userInfo.email}</p>
                <p>用户手机：{userInfo.phoneNumber}</p>
                <p>密码：{userInfo.password}</p>
            </div>
        </div>
    );
};
