import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Checkbox, Switch } from 'antd';
// import { getAllUsers, putAdmin_Banner } from "../../Redux/actions";
import { Table, Tag } from "antd";
import Swal from "sweetalert"


const Tablas = (record) => {

  let data = useSelector((state) => state.users);


  const onChange = (checked) => {
    // console.log(`switch to ${checked}`);
    // console.log("CHE",`${checked}`);
  };


  const isBanned = (record, checked) => {
    console.log("000", checked);//me devuelve true||false seleccionado
    console.log("001", record._id);//me devuelve el _id del user seleccionado
    fetch(`http://localhost:3001/api/v1/users/id`, {
      method: 'PUT',
      body: JSON.stringify(checked, record),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(
        Swal(
          ' echo',
          'the user is Banned',
        )
      )

  }

  const isAdmin = (record, checked) => {
    // record.banOrAdmin = "isAdmin"
    console.log("000", checked);
    console.log("001", record._id);
    fetch(`http://localhost:3001/api/v1/users/id`, {
      method: 'POST',
      body: JSON.stringify(checked, record),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(
        Swal(
          ' echo',
          'the user was edited',
        )
      )
  }

  useEffect((record) => {

  }, []);


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
      // render: (_, record) => { return (<Switch onChange={() => onChange(record)} />) }
      render: (_, record) => { return (<Switch onChange={(checked) => isBanned(record, checked)} />) }
    },
    {
      title: 'IsAdmin',
      dataIndex: 'isAdmin',
      key: 'isAdmin',
      // render: (_, record) => { return (<Switch onChange={() => isAdmin(record)} />) }
      render: (_, record) => { return (<Switch onChange={(checked) => isAdmin(record, checked)} />) }

    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
      tags: ['nice', 'developer'],
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