import React from 'react'
import { CSmartTable } from "react-table";

function Text() {
    const columns = [
        {
            group: 'Group 1',
            children: [
                {
                    group: 'Subgroup 1',
                    children: [
                        {
                            group: 'Subgroup 1A',
                            children: [
                                {
                                    key: 'name',
                                    _style: { width: '20%' },
                                },
                                'registered',
                            ],
                        },
                        {
                            group: 'Subgroup 1B',
                            children: [
                                { key: 'role', _style: { width: '20%' } },
                            ],
                        },
                    ]
                },
                {
                    group: 'Subgroup 2',
                    children: [
                        {
                            group: 'Subgroup 2A',
                            children: [
                                { key: 'status', _style: { width: '20%' } },
                            ],
                        }
                    ]
                }
            ]
        }
    ]
    const usersData = [
        {
            id: 0,
            name: 'John Doe',
            registered: '2022/01/01',
            role: 'Guest',
            status: 'Pending'
        },
        {
            id: 1,
            name: 'Samppa Nori',
            registered: '2022/01/01',
            role: 'Member',
            status: 'Active',
        },
        {
            id: 2,
            name: 'Estavan Lykos',
            role: 'Staff',
            status: 'Banned',
            _cellProps: { name: { colSpan: 2 } },
        },
        {
            id: 3,
            name: 'Chetan Mohamed',
            registered: '2022/02/07',
            role: 'Admin',
            status: 'Inactive'
        },
        {
            id: 4,
            name: 'Derick Maximinus',
            registered: '2022/03/19',
            role: 'Member',
            status: 'Pending',
        },
        {
            id: 5,
            name: 'Friderik Dávid',
            registered: '2022/01/21',
            role: 'Staff',
            status: 'Active'
        }
    ]
    return (
        <div>
            <CSmartTable
                columns={columns}
                columnFilter
                columnSorter
                items={usersData}
            />
        </div>
    )
}

export default Text