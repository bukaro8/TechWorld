import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox, Switch, Button} from 'antd';
import { getAllUsers, putBan, putAdmin, resetDetail, deleteUser } from "../../Redux/actions";
import { Table } from "antd";
import Swal from 'sweetalert2'


const Tablas = (record) => {
  let dispatch = useDispatch()
  let data = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(resetDetail());
  }, [dispatch]);

  const handleIsBan = async (record) => {
    let trueOrFalse = record.isBan
    if(trueOrFalse){
      Swal.fire({
        title: `UnBan User`,
        text: `Are you sure you want to unban ${record.name}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirm'
      }).then(async (result) => {
        if (result.isConfirmed) {
          await dispatch(putBan(record._id))
          dispatch(getAllUsers());
            Swal.fire({
              icon: 'success',
              title: `${record.name} is back with us! :)`,
            })
          }
        })
        }
    else if(!trueOrFalse){
      Swal.fire({
        title: `Ban User`,
        text: `Are you sure you want to ban ${record.name}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: "Yes. Leaves me no other choice...",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await dispatch(putBan(record._id))
          dispatch(getAllUsers());
            Swal.fire({
              icon: 'success',
              title: `${record.name} is gone... :(`,
            })
          }
        })
        }
  }

  const handleIsAdmin = (record) => {
    let trueOrFalse = record.isAdmin
    if(trueOrFalse){
      Swal.fire({
        title: `Remove Admin`,
        text: `Are you sure you want to remove admin permits to ${record.name}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirm'
      }).then(async (result) => {
        if (result.isConfirmed) {
          await dispatch(putAdmin(record._id))
          dispatch(getAllUsers());
            Swal.fire({
              icon: 'success',
              title: 'Is no loger an admin :(',
              text: "Can't do admin stuff anymore...",
            })
          }
        })
        }
    else if(!trueOrFalse){
      Swal.fire({
        title: `New Admin`,
        text: `Are you sure you to make ${record.name} an admin?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: `Yes, let ${record.name} be an Admin!`
      }).then(async (result) => {
        if (result.isConfirmed) {
          await dispatch(putAdmin(record._id))
          dispatch(getAllUsers());
            Swal.fire({
              icon: 'success',
              title: '¡Is an Admin now! :)',
              text: 'With great power comes great responsibility',
            })
          }
        })
        }
    }

    const handleDelete = (record) => {
      Swal.fire({
        title: `Delete User`,
        text: `There is no way back.
        Are you sure you want to delete the user account: ${record.name}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirm'
      }).then( async (result) => {
        if (result.isConfirmed) {
        Swal.fire({
          title: `Delete ${record.name}`,
          text: `100% sure?`,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Confirm'
        }).then(async (result) => {
          if (result.isConfirmed) {
            await dispatch(deleteUser(record._id))
            dispatch(getAllUsers());
              Swal.fire({
                icon: 'success',
                title: `${record.name} is no longer in this (Tech)world :(`,
              })
            }
          })
        }
      }
      )
    }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      filterSearch: true,
    },
    {
      title: 'ID',
      dataIndex: '_id',
      key: '_id',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      filterSearch: true,
      onFilter: (value, record) => record.email.startsWith(value),
    },
    /* {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    }, */
    {
      title: 'Banned',
      dataIndex: 'banned',
      key: 'banned',
      render: (_, record) => { return (<Switch disabled={record.isAdmin===true?true:false} checked={record.isBan} onChange={() => handleIsBan(record)} />) }
    },
    {
      title: 'Admin',
      dataIndex: 'isAdmin',
      key: 'isAdmin',
      render: (_, record) => { return (<Switch disabled={record.isBan===true?true:false} checked={record.isAdmin} onChange={() => handleIsAdmin(record)} />) }
    },
  /*   {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
      tags: ['nice', 'developer'],
    }, */
    {
      title: 'Delete',
      dataIndex: '',
      key: '',
      render:(_, record) => { return (
        <button hidden={record.isAdmin===true?true:false} onClick={() => handleDelete(record)}><img width="40px" height="40px" src="https://cdn-icons-png.flaticon.com/512/323/323711.png" alt={"delete"} /></button>
        )}
    },
  ]

  return (
    <Table
      columns={columns}
      expandable={{
        expandedRowRender: (record) => (
          <p
            style={{
              margin: 0,
            }}
          >
            {record.description}
          </p>
        ),
        rowExpandable: (record) => record.name !== 'Not Expandable',
      }}
      dataSource={data}
    />
  )

}
export default Tablas;