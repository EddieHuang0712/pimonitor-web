"use client";
import React, { useState, useEffect } from 'react';
import { GetTeamMembers, CreateTeam, UpdateTeam, DismissTeam, GetTeam, Invite, InviteCallback } from '@/api/team';
import {Button} from "antd";

export default function Team() {
    const [teamMembers, setTeamMembers] = useState([]);
    const [teamInfo, setTeamInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    // 获取团队信息
    useEffect(() => {
        const fetchTeamInfo = async () => {
            try {
                const response = await GetTeam({ teamID: 'your_team_id' });
                setTeamInfo(response);
            } catch (error) {
                console.error('Error fetching team info: ', error);
            }
        };

        fetchTeamInfo().then(r => {});
    }, []);

    // 获取团队成员列表
    useEffect(() => {
        const fetchTeamMembers = async () => {
            try {
                const response = await GetTeamMembers({ teamID: 'your_team_id', page: '1', size: '10' });
                setTeamMembers(response.records);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching team members: ', error);
            }
        };

        fetchTeamMembers();
    }, []);

    // 创建团队
    const handleCreateTeam = async () => {
        await CreateTeam({ teamName: 'New Team' });
        // Refresh team data or take other necessary actions
    };

    // 更新团队信息
    const handleUpdateTeam = async () => {
        await UpdateTeam({ teamID: 'your_team_id', teamName: 'Updated Team Name' });
        // Refresh team data or take other necessary actions
    };

    // 解散团队
    const handleDismissTeam = async () => {
        await DismissTeam({ teamID: 'your_team_id' });
        // Perform actions after team dismissal
    };

    // 邀请成员
    const handleInvite = async () => {
        const response = await Invite({ teamID: 'your_team_id' });
        // Handle invite response as needed
    };

    // 处理邀请回调
    const handleInviteCallback = async () => {
        await InviteCallback({ code: 'invitation_code' });
        // Handle callback response as needed
    };

    return (
        <div>
            <h1>Team Management</h1>
            <Button onClick={handleCreateTeam}>Create Team</Button>
            <Button onClick={handleInvite}>Invite</Button>
            {/* Render team info, members list, and buttons for various actions */}

            {teamInfo && (
                <div>
                    <h2>Team Information</h2>
                    <p>Team Name: {teamInfo.name}</p>
                    <p>Team ID: {teamInfo.id}</p>
                    {/* Render other team information as needed */}
                </div>
            )}

            {loading ? (
                <p>Loading team members...</p>
            ) : (
                <div>
                    <h2>Team Members</h2>
                    <ul>
                        {teamMembers.map((member) => (
                            <li key={member.id}>{member.name} - {member.role}</li>
                            // Render additional member information as needed
                        ))}
                    </ul>
                </div>
            )}

            <button onClick={handleCreateTeam}>Create Team</button>
            <button onClick={handleUpdateTeam}>Update Team</button>
            <button onClick={handleDismissTeam}>Dismiss Team</button>
            <button onClick={handleInvite}>Invite</button>
            <button onClick={handleInviteCallback}>Invite Callback</button>
        </div>
    );
};
