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
        title: `Desbannear usuario`,
        text: `Seguro que queres quitar el banneo a ${record.name}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar'
      }).then(async (result) => {
        if (result.isConfirmed) {
          await dispatch(putBan(record._id))
          dispatch(getAllUsers());
            Swal.fire({
              icon: 'success',
              title: 'Ha vuelto! :)',
            })
          }
        })
        }
    else if(!trueOrFalse){
      Swal.fire({
        title: `Bannear usuario`,
        text: `Seguro que queres bannear a ${record.name} como usuario?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: "Si! Pa' que aprenda...",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await dispatch(putBan(record._id))
          dispatch(getAllUsers());
            Swal.fire({
              icon: 'success',
              title: 'Se fue... :(',
            })
          }
        })
        }
  }

  const handleIsAdmin = (record) => {
    let trueOrFalse = record.isAdmin
    if(trueOrFalse){
      Swal.fire({
        title: `Quitar Administrador`,
        text: `Seguro que queres quitar los permisos de administrador a ${record.name}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar'
      }).then(async (result) => {
        if (result.isConfirmed) {
          await dispatch(putAdmin(record._id))
          dispatch(getAllUsers());
            Swal.fire({
              icon: 'success',
              title: 'Ya no es Admin :(',
              text: 'No puede hacer más cosas de Admin',
            })
          }
        })
        }
    else if(!trueOrFalse){
      Swal.fire({
        title: `Nuevo Administrador`,
        text: `Seguro que queres hacer admin a ${record.name}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, que sea Admin!'
      }).then(async (result) => {
        if (result.isConfirmed) {
          await dispatch(putAdmin(record._id))
          dispatch(getAllUsers());
            Swal.fire({
              icon: 'success',
              title: '¡Ahora es Admin! :)',
              text: 'Un gran poder, conlleva una gran responsabilidad',
            })
          }
        })
        }
    }

    const handleDelete = (record) => {
      Swal.fire({
        title: `Eliminar Usuario`,
        text: `No hay vuelta atras.
        Seguro que queres eliminar al usuario ${record.name}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar'
      }).then(
        Swal.fire({
          title: `Eliminar a ${record.name}`,
          text: `100% seguro?`,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Confirmar'
        }).then(async (result) => {
          if (result.isConfirmed) {
            await dispatch(deleteUser(record._id))
            dispatch(getAllUsers());
              Swal.fire({
                icon: 'success',
                title: 'Ya no está en este mundo (TechWorld) :(',
              })
            }
          })
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
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
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
      render: (_, record) => { return (<Switch checked={record.isAdmin} onChange={() => handleIsAdmin(record)} />) }
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
      tags: ['nice', 'developer'],
    },
    {
      title: 'Delete',
      dataIndex: '',
      key: '',
      render:(_, record) => { return (<button disabled={record.isAdmin===true?true:false} onChange={() => handleDelete(record._id)} >
        <img src="https://cdn-icons-png.flaticon.com/512/323/323711.png" alt={"delete"} />
        </button>)}
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