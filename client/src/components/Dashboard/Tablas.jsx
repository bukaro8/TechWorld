import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Switch } from 'antd';


import { getAllUsers } from "../../Redux/actions";

import { Table,Tag } from "antd";

const Tablas = () => {

  const [input, setInput] = useState({}) 

  let dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllUsers());
}, [dispatch]);

  
  let data = useSelector((state) => state.users);
  console.log(data,'data')
  
  let isBann = data.map(d => d.isBan)
  console.log(isBann,'isBannnnnn')
 
 
  
  const deleteU=()=>{
    //  alert("borrado")
  }
  function isbanner(checked){
   if( checked) {
    alert("baneado")
   } 
   return alert ("No baneado")

 }
 const isadmin=()=>{
  // alert("is admin")
}
  //const onChange = (checked) => {
    // checked ? true : false;
   //};

  // const onChange = (checked) => {
  //   console.log(`switch to ${checked}`);
  // };

    

  const handleChecked = (e)=>{
        if (e.target.checked) {  
            setInput({
            ...input,
            isBann: [...input.isBann , e.target.value]
            })

            console.log(setInput,'1')
        } else if (!e.target.checked) {
            setInput({
                ...input,
                isBan: input.isBann.filter(el => el !== e.target.value)
                })
                console.log(setInput,'2')
        }
    };

 

 
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'banner',
      dataIndex: 'banner',
      key: 'banner',
      render:()=>   <Switch defaultChecked onChange={handleChecked} />
      //render:()=>   <Switch defaultChecked onChange={handleChecked} />

    },
    {
      title: 'IsAdmin',
      dataIndex: 'isAdmin',
      key: 'isAdmin',
      render:()=>   <Switch defaultChecked onChange={isadmin} />

    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
      tags: ['nice', 'developer'],
    },
    // {
    //   title: 'Action',
    //   dataIndex: '',     
    //   render: () => <a onClick={deleteU}>Delete</a>,
    // },
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





// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     key: 'name',
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//     key: 'age',
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//     key: 'address',
//   },
//   {
//     title: 'Action',
//     dataIndex: '',
//     key: 'x',
//     render: () => <a>Delete</a>,
//   },
// ];

// const data = [
//   {
//     key: 1,
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
//   },
//   {
//     key: 2,
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
//   },
//   {
//     key: 3,
//     name: 'Not Expandable',
//     age: 29,
//     address: 'Jiangsu No. 1 Lake Park',
//     description: 'This not expandable',
//   },
//   {
//     key: 4,
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//     description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
//   },
// ];
// const App = () => {
  
//   <Table
//     columns={columns}
//     expandable={{
//       expandedRowRender: (record) => (
//         <p
//           style={{
//             margin: 0,
//           }}
//         >
//           {record.description}
//         </p>
//       ),
//       rowExpandable: (record) => record.name !== 'Not Expandable',
//     }}
//     dataSource={data}
//   />
//   };
// export default App;







// import React from 'react';
// import { Space, Table, Tag } from 'antd';
// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     key: 'name',
//     render: (text) => <a>{text}</a>,
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//     key: 'age',
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//     key: 'address',
//   },
//   {
//     title: 'Tags',
//     key: 'tags',
//     dataIndex: 'tags',
//     render: (_, { tags }) => (
//       <>
//         {tags.map((tag) => {
//           let color = tag.length > 5 ? 'geekblue' : 'green';
//           if (tag === 'loser') {
//             color = 'volcano';
//           }
//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </>
//     ),
//   },
//   {
//     title: 'Action',
//     key: 'action',
//     render: (_, record) => (
//       <Space size="middle">
//         <a>Invite {record.name}</a>
//         <a>Delete</a>
//       </Space>
//     ),
//   },
// ];
// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ];
// const App = () => <Table columns={columns} dataSource={data} />;
// export default App;