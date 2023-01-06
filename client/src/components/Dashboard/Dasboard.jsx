import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormAdmin from './FormAdmin'
import Formulario from '../Formulario/Create'
import Tablas from './Tablas'
import { useModal } from '../assets/modal/useModal'
import Modal from '../assets/modal/Modal'
import List from "../EditProduct/listProduct";
import { Link } from "react-router-dom";

// import { getAllUsers } from "../../Redux/actions";



const Dasboard = ({ cerrarModal }) => {
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  

  // let userss = useSelector((state) => state.users);

  // let dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllUsers());
  // }, [dispatch]);


  return (
    <div>
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-full h-fit px-4 md:px-6 py-6 mt-2 bg-gradient-to-t from-gray-900 via-purple-900 to-violet-600">
        <div class="links lg:block hidden w-1/6 md:w-4/6">
          <div class="menu flex items center justify-end gap-5 text-xl font-bold ">


            <a href="/" className='text-green-600 hover:text-white border border-green-900 hover:bg-green-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Home</a>


            <button className='text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={openModal}>Create User</button>
            <Modal isOpen={isOpenModal} closeModal={closeModal}>
              <FormAdmin closeModal={closeModal} cerrarModal={cerrarModal} />
            </Modal>


            <button className='text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={openModal2}>Create Product</button>
            <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
              <Formulario closeModal={closeModal} cerrarModal={cerrarModal} />
            </Modal>

            <Link to="/list"><button className='text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Products</button></Link>
          </div>
        </div>
      </div>
      <Tablas />
    </div>
  )
}

export default Dasboard




// import React, { useState } from 'react';
// import {
//   DesktopOutlined,
//   FileOutlined,
//   PieChartOutlined,
//   TeamOutlined,
//   UserOutlined,
// } from '@ant-design/icons';
// import Tablas from './Tablas'
// import { Breadcrumb, Layout, Menu, theme } from 'antd';
// const { Header, Content, Footer, Sider } = Layout;
// function getItem(label, key, icon, children) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }
// const items = [
//   getItem('Option 1', '1', <PieChartOutlined />),
//   getItem('Option 2', '2', <DesktopOutlined />),
//   getItem('User', 'sub1', <UserOutlined />, [
//     getItem('Tom', '3'),
//     getItem('Bill', '4'),
//     getItem('Alex', '5'),
//   ]),
//   getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//   getItem('Files', '9', <FileOutlined />),
// ];
// const App = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();
//   return (
//     <Layout
//       style={{
//         minHeight: '100vh',
//       }}
//     >
//       <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
//         <div
//           style={{
//             height: 32,
//             margin: 16,
//             background: 'rgba(255, 255, 255, 0.2)',
//           }}
//         />
//         <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
//       </Sider>
//       <Layout className="site-layout">
//         <Header
//           style={{
//             padding: 0,
//             background: colorBgContainer,
//           }}
//         />
//         <Content
//           style={{
//             margin: '0 16px',
//           }}
//         >
//           <Breadcrumb
//             style={{
//               margin: '16px 0',
//             }}
//           >
//             <Breadcrumb.Item>User</Breadcrumb.Item>
//             <Breadcrumb.Item>Bill</Breadcrumb.Item>
//           </Breadcrumb>
//           <div
//             style={{
//               padding: 24,
//               minHeight: 360,
//               background: colorBgContainer,
//             }}
//           >
//             <Tablas/>
//           </div>
//         </Content>
//         <Footer
//           style={{
//             textAlign: 'center',
//           }}
//         >
//           Ant Design ©2018 Created by Ant UED
//         </Footer>
//       </Layout>
//     </Layout>
//   );
// };
// export default App;