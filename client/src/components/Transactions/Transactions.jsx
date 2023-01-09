import {
  getTransactions,
  searchByEmail,
  searchByStatus,
  putTransaction,
} from "../../Redux/actions";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

export default function Transactions() {
  let dispatch = useDispatch();
  let searchMail = useSelector((state) => state.searchMail);
  let transactions = useSelector((state) => state.filteredTransactions);
  const [email, setEmail] = useState("");

  function emailDelivery(payload) {
    var params = {
      deliveryStatus: payload.delivered,
      transactionId: payload._id,
      email: payload.userEmail,
    };
    emailjs.send(
      "service_a3dbnfc",
      "template_xrfy3cg",
      params,
      "Vvb2IwNd3JccV-1cY"
    );
  }

  const changeDelivery = (payload) => {
    Swal.fire({
      title: "Are you sure?",
      showCancelButton: true,
      confirmButtonText: `Change to ${payload.delivered}`,
      cancelButtonText: "Close",
      icon: "warning",
    }).then((result) => {
      if (result.isConfirmed) {
        emailDelivery(payload);
        dispatch(putTransaction(payload));
        window.location.reload();
      }
    });
  };

  const changeTransaction = (payload) => {
    Swal.fire({
      title: "Are you sure?",
      showCancelButton: true,
      confirmButtonText: `Change to ${payload.status}`,
      cancelButtonText: "Close",
      icon: "warning",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(putTransaction(payload));
        window.location.reload();
      }
    });
  };

  function handleDeliveryPending(payload) {
    payload.delivered = "Pending";
    changeDelivery(payload);
  }

  function handleDelivered(payload) {
    payload.delivered = "Delivered";
    changeDelivery(payload);
  }

  function handleDeliveryCancelled(payload) {
    payload.delivered = "Cancelled";
    changeDelivery(payload);
  }

  function handleTransactionPending(payload) {
    payload.status = "Pending";
    changeTransaction(payload);
  }

  function handleTransactionApprove(payload) {
    payload.status = "Approved";
    changeTransaction(payload);
  }

  function handleTransactionCancel(payload) {
    payload.status = "Cancelled";
    changeTransaction(payload);
  }

  function handleInputChange(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }

  function handleStatus(e) {
    e.preventDefault();
    dispatch(searchByStatus(e.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(searchByEmail(email));
    setEmail("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  }

  useEffect(() => {
    if (!transactions.length || !searchMail.length) {
      dispatch(getTransactions());
    }
  }, [dispatch]);

  return (
    <div class="flex justify-around flex-wrap m-2">
      <input
        onChange={(e) => handleInputChange(e)}
        onKeyDown={(e) => handleKeyDown(e)}
        value={email}
        type="search"
        id="default-search"
        className="block p-4 pl-10 w-1/2 text-sm text-gray-900  rounded-full border bg-slate-300"
        placeholder="Search by mail"
        required
      />
      <button
        onClick={(e) => handleSubmit(e)}
        type="submit"
        class="text-white block bg-blue-500 hover:bg-blue-600 hover:text-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4"
      >
        Search
      </button>
      <select
        onChange={(e) => {
          handleStatus(e);
        }}
        class="bg-gray-50 mt-2 mx-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5"
      >
        <option value="Filter by status" disabled selected defaultValue>
          Filter by status
        </option>
        <option value="All">All</option>
        <option value="Approved">Approved</option>
        <option value="Cancelled">Cancelled</option>
        <option value="Pending">Pending</option>
      </select>
      {!searchMail.length ? (
        <h1>There are no transactions</h1>
      ) : (
        <table class="table-auto border-2 border-indigo-500 m-2">
          <thead class="border-2 border-indigo-500">
            <tr>
              <th class="border-2 border-indigo-500 p-1">Transaction ID</th>
              <th class="border-2 border-indigo-500 p-1">Email</th>
              <th class="border-2 border-indigo-500 p-1">Amount</th>
              <th class="border-2 border-indigo-500 p-1">Status</th>
              <th class="border-2 border-indigo-500 p-1">Delivered</th>
            </tr>
          </thead>
          <tbody>
            {searchMail.map((e) => {
              return (
                <tr>
                  <td class="border-2 border-indigo-500 p-1">{e._id}</td>
                  <td class="border-2 border-indigo-500 p-1">{e.userEmail}</td>
                  <td class="border-2 border-indigo-500 p-1">${e.price}</td>
                  <td class="border-2 border-indigo-500 p-1">
                    <button
                      disabled={e.status == "Pending"}
                      onClick={(a) => handleTransactionPending(e)}
                      title="Pending"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="inline-flex"
                        fill="yellow"
                        width="30px"
                        height="30px"
                        viewBox="0 0 24 24"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            fill-opacity=".9"
                            d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"
                          ></path>
                        </g>
                      </svg>
                    </button>
                    <button
                      disabled={e.status == "Approved"}
                      onClick={(a) => handleTransactionApprove(e)}
                      title="Approved"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="inline-flex"
                        fill="green"
                        width="30px"
                        height="30px"
                        viewBox="0 0 24 24"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_iconCarrier">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                        </g>
                      </svg>
                    </button>
                    <button
                      disabled={e.status == "Cancelled"}
                      onClick={(a) => handleTransactionCancel(e)}
                      title="Cancelled"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="inline-flex"
                        fill="red"
                        width="30px"
                        height="30px"
                        viewBox="0 0 24 24"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_iconCarrier">
                          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                        </g>
                      </svg>
                    </button>
                  </td>
                  <td class="border-2 border-indigo-500 p-1">
                    <button
                      disabled={e.delivered == "Pending"}
                      onClick={(a) => handleDeliveryPending(e)}
                      title="Pending"
                    >
                      <svg
                        class="inline-flex"
                        fill="yellow"
                        width="30px"
                        height="30px"
                        viewBox="0 0 100 100"
                        data-name="Layer 1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_iconCarrier">
                          <path d="M60.61,84.17a1.5,1.5,0,0,1-.45-2.93l8.53-2.67a1.5,1.5,0,0,1,.9,2.86L61.06,84.1A1.41,1.41,0,0,1,60.61,84.17Z"></path>
                          <path d="M41,90.25a1.46,1.46,0,0,1-1.5-1.46V40a1.49,1.49,0,0,1,1.05-1.43L78.43,26.76a1.52,1.52,0,0,1,1.34.22,1.51,1.51,0,0,1,.61,1.21V51a1.5,1.5,0,0,1-3,0V30.23L42.54,41.13V88.71A1.53,1.53,0,0,1,41,90.25Z"></path>
                          <path d="M41,90.29a1.5,1.5,0,0,1-.45-2.93l19.57-6.12a1.5,1.5,0,1,1,.89,2.86L41.49,90.22A1.41,1.41,0,0,1,41,90.29Z"></path>
                          <path d="M47,81.29a1.5,1.5,0,0,1-.45-2.93l16.46-5.15a1.5,1.5,0,0,1,1.88,1,1.48,1.48,0,0,1-1,1.87L47.49,81.22A1.41,1.41,0,0,1,47,81.29Z"></path>
                          <path d="M47,74.29a1.5,1.5,0,0,1-.45-2.93l10.53-3.29A1.5,1.5,0,1,1,58,70.93L47.49,74.22A1.41,1.41,0,0,1,47,74.29Z"></path>
                          <path d="M41,90.21a1.35,1.35,0,0,1-.44-.07L2.7,78.3a1.49,1.49,0,0,1-1.06-1.43V28.11a1.5,1.5,0,0,1,1.5-1.5,1.43,1.43,0,0,1,.46.07l10.27,3.2a1.52,1.52,0,0,1,1.05,1.44V51.94a1.52,1.52,0,0,1,.14,1.3,1.5,1.5,0,0,1-1.91.92l-.23-.08a1.51,1.51,0,0,1-1-1.42V32.42L4.64,30.14V75.77l34.9,10.9V41.05L31.36,38.5V58a1.5,1.5,0,0,1-3,0V36.46A1.52,1.52,0,0,1,30.31,35l11.18,3.5a1.48,1.48,0,0,1,1,1.43V88.71a1.48,1.48,0,0,1-.61,1.21A1.5,1.5,0,0,1,41,90.21Z"></path>
                          <path d="M29.86,59.53a1.5,1.5,0,0,1-1.5-1.5V36.66a1.59,1.59,0,0,1,.06-.68,1.48,1.48,0,0,1,1.88-1,1.55,1.55,0,0,1,1.06,1.44V58A1.5,1.5,0,0,1,29.86,59.53Z"></path>
                          <path d="M13.65,54.24a1.74,1.74,0,0,1-.5-.08l-.23-.08a1.51,1.51,0,0,1-1-1.42V31.32a1.5,1.5,0,0,1,3,0V51.94a1.52,1.52,0,0,1,.14,1.3A1.49,1.49,0,0,1,13.65,54.24Z"></path>
                          <path d="M41,41.49A1.47,1.47,0,0,1,39.53,40V40a1.5,1.5,0,0,1,3,0A1.52,1.52,0,0,1,41,41.49Z"></path>
                          <path d="M3.16,29.6a1.5,1.5,0,0,1-.58-2.88l38-15.82a1.5,1.5,0,1,1,1.15,2.77l-38,15.82A1.44,1.44,0,0,1,3.16,29.6Z"></path>
                          <path d="M14.62,32.85A1.5,1.5,0,0,1,14,30l17.17-7.14a1.5,1.5,0,0,1,1.15,2.77L15.19,32.73A1.46,1.46,0,0,1,14.62,32.85Z"></path>
                          <path d="M29.83,37.94A1.48,1.48,0,0,1,28.45,37a1.5,1.5,0,0,1,.8-2l15.12-6.29a1.5,1.5,0,0,1,1.16,2.77L30.41,37.83A1.49,1.49,0,0,1,29.83,37.94Z"></path>
                          <path d="M52.75,18.66a1.51,1.51,0,0,1-.58-.12L40.62,13.66a1.48,1.48,0,0,1-.8-2,1.5,1.5,0,0,1,2-.8l11.56,4.88a1.5,1.5,0,0,1,.8,2A1.52,1.52,0,0,1,52.75,18.66Z"></path>
                          <path d="M78.89,29.69a1.51,1.51,0,0,1-.58-.12l-26.14-11a1.5,1.5,0,1,1,1.17-2.76l26.14,11a1.5,1.5,0,0,1-.59,2.88Z"></path>
                          <path d="M29.87,59.53a1.51,1.51,0,0,1-1.27-.7l-8-12.55a1.5,1.5,0,1,1,2.52-1.61l8,12.55a1.51,1.51,0,0,1-1.26,2.31Z"></path>
                          <path d="M13.65,54.24a1.46,1.46,0,0,1-1.12-.51,1.48,1.48,0,0,1,.13-2.11l8.21-7.27a1.5,1.5,0,0,1,2,2.25l-8.21,7.26A1.45,1.45,0,0,1,13.65,54.24Z"></path>
                          <path d="M45,31.65a1.5,1.5,0,0,1-.62-.13L31.2,25.59a1.5,1.5,0,1,1,1.24-2.73l13.13,5.92A1.5,1.5,0,0,1,45,31.65Z"></path>
                          <path d="M89.71,93.21H76.86A9.23,9.23,0,0,1,67.64,84V71.14a9.23,9.23,0,0,1,9.22-9.21H89.71a9.23,9.23,0,0,1,9.22,9.21V84A9.23,9.23,0,0,1,89.71,93.21ZM76.86,64.93a6.22,6.22,0,0,0-6.22,6.21V84a6.22,6.22,0,0,0,6.22,6.21H89.71A6.22,6.22,0,0,0,95.93,84V71.14a6.22,6.22,0,0,0-6.22-6.21Z"></path>
                          <path d="M70.27,68.62a1.5,1.5,0,0,1-1.5-1.5v-6A11.72,11.72,0,0,1,78.64,49.5a11.19,11.19,0,0,1,1.91-.16h4.83A11.8,11.8,0,0,1,97.17,61.13v5.11a1.5,1.5,0,0,1-3,0V61.13a8.8,8.8,0,0,0-8.79-8.79H80.55a8.51,8.51,0,0,0-1.42.12,8.74,8.74,0,0,0-7.36,8.67v6A1.5,1.5,0,0,1,70.27,68.62Z"></path>
                          <path d="M83.27,82.85a1.5,1.5,0,0,1-1.5-1.5V73.68a1.5,1.5,0,0,1,3,0v7.67A1.5,1.5,0,0,1,83.27,82.85Z"></path>
                        </g>
                      </svg>
                    </button>
                    <button
                      disabled={e.delivered == "Delivered"}
                      onClick={(a) => handleDelivered(e)}
                      title="Delivered"
                    >
                      <svg
                        class="inline-flex"
                        fill="green"
                        width="30px"
                        height="30px"
                        viewBox="0 0 100 100"
                        data-name="Layer 1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_iconCarrier">
                          <path d="M69.61,84.17a1.5,1.5,0,0,1-.45-2.93l5.55-1.74a1.5,1.5,0,1,1,.9,2.86L70.06,84.1A1.41,1.41,0,0,1,69.61,84.17Z"></path>
                          <path d="M50,90.25a1.46,1.46,0,0,1-1.5-1.46V40a1.49,1.49,0,0,1,1.05-1.43L87.43,26.76a1.52,1.52,0,0,1,1.34.22,1.51,1.51,0,0,1,.61,1.21V56.76a1.5,1.5,0,0,1-3,0V30.23L51.54,41.13V88.71A1.53,1.53,0,0,1,50,90.25Z"></path>
                          <path d="M50,90.29a1.5,1.5,0,0,1-.45-2.93l19.57-6.12a1.5,1.5,0,1,1,.89,2.86L50.49,90.22A1.41,1.41,0,0,1,50,90.29Z"></path>
                          <path d="M56,81.29a1.5,1.5,0,0,1-.45-2.93L69.38,74a1.5,1.5,0,1,1,.9,2.86L56.49,81.22A1.41,1.41,0,0,1,56,81.29Z"></path>
                          <path d="M56,74.29a1.5,1.5,0,0,1-.45-2.93l10.53-3.29A1.5,1.5,0,1,1,67,70.93L56.49,74.22A1.41,1.41,0,0,1,56,74.29Z"></path>
                          <path d="M50,90.21a1.31,1.31,0,0,1-.44-.07L11.7,78.3a1.49,1.49,0,0,1-1.06-1.43V28.11a1.5,1.5,0,0,1,1.5-1.5,1.43,1.43,0,0,1,.46.07l10.27,3.2a1.52,1.52,0,0,1,1.05,1.44V51.94a1.55,1.55,0,0,1,.15,1.3,1.52,1.52,0,0,1-1.92.92l-.23-.08a1.51,1.51,0,0,1-1-1.42V32.42l-7.28-2.28V75.77l34.9,10.9V41.05L40.37,38.5V58a1.5,1.5,0,0,1-3,0V36.46A1.5,1.5,0,0,1,39.31,35l11.18,3.5a1.48,1.48,0,0,1,1,1.43V88.71a1.48,1.48,0,0,1-.61,1.21A1.5,1.5,0,0,1,50,90.21Z"></path>
                          <path d="M38.87,59.53a1.5,1.5,0,0,1-1.5-1.5V36.66a1.44,1.44,0,0,1,.05-.68,1.49,1.49,0,0,1,1.88-1,1.54,1.54,0,0,1,1.07,1.44V58A1.5,1.5,0,0,1,38.87,59.53Z"></path>
                          <path d="M22.65,54.24a1.74,1.74,0,0,1-.5-.08l-.23-.08a1.51,1.51,0,0,1-1-1.42V31.32a1.5,1.5,0,0,1,3,0V51.94a1.55,1.55,0,0,1,.15,1.3A1.52,1.52,0,0,1,22.65,54.24Z"></path>
                          <path d="M50,41.49A1.48,1.48,0,0,1,48.53,40V40a1.5,1.5,0,0,1,3,0A1.52,1.52,0,0,1,50,41.49Z"></path>
                          <path d="M12.16,29.6a1.5,1.5,0,0,1-.58-2.88l38-15.82a1.5,1.5,0,0,1,1.16,2.77l-38,15.82A1.44,1.44,0,0,1,12.16,29.6Z"></path>
                          <path d="M23.62,32.85A1.5,1.5,0,0,1,23,30l17.17-7.14a1.5,1.5,0,0,1,1.15,2.77L24.19,32.73A1.46,1.46,0,0,1,23.62,32.85Z"></path>
                          <path d="M38.83,37.94A1.48,1.48,0,0,1,37.45,37a1.5,1.5,0,0,1,.8-2l15.12-6.29a1.5,1.5,0,0,1,1.16,2.77L39.41,37.83A1.49,1.49,0,0,1,38.83,37.94Z"></path>
                          <path d="M61.75,18.66a1.51,1.51,0,0,1-.58-.12L49.62,13.66a1.5,1.5,0,1,1,1.16-2.76l11.56,4.88a1.5,1.5,0,0,1,.8,2A1.52,1.52,0,0,1,61.75,18.66Z"></path>
                          <path d="M87.89,29.69a1.51,1.51,0,0,1-.58-.12l-26.14-11a1.5,1.5,0,1,1,1.17-2.76l26.14,11a1.5,1.5,0,0,1-.59,2.88Z"></path>
                          <path d="M38.87,59.53a1.51,1.51,0,0,1-1.27-.7l-8-12.55a1.5,1.5,0,0,1,2.53-1.61l8,12.55a1.51,1.51,0,0,1-1.26,2.31Z"></path>
                          <path d="M22.65,54.24a1.47,1.47,0,0,1-1.12-.51,1.49,1.49,0,0,1,.13-2.11l8.21-7.27a1.5,1.5,0,0,1,2,2.25l-8.21,7.26A1.45,1.45,0,0,1,22.65,54.24Z"></path>
                          <path d="M54,31.65a1.5,1.5,0,0,1-.62-.13L40.2,25.59a1.5,1.5,0,0,1,1.23-2.73l13.14,5.92A1.5,1.5,0,0,1,54,31.65Z"></path>
                          <path d="M81.88,84.2A15.16,15.16,0,1,1,97,69,15.18,15.18,0,0,1,81.88,84.2Zm0-27.32A12.16,12.16,0,1,0,94,69,12.17,12.17,0,0,0,81.88,56.88Z"></path>
                          <path d="M80.29,75.42A1.53,1.53,0,0,1,79.22,75l-5.28-5.3a1.5,1.5,0,0,1,2.12-2.12l5.29,5.3a1.51,1.51,0,0,1,0,2.12A1.53,1.53,0,0,1,80.29,75.42Z"></path>
                          <path d="M80.29,75.42a1.51,1.51,0,0,1-1.06-2.57l8.91-8.91a1.5,1.5,0,0,1,2.12,2.12L81.35,75A1.53,1.53,0,0,1,80.29,75.42Z"></path>
                        </g>
                      </svg>
                    </button>
                    <button
                      disabled={e.delivered == "Cancelled"}
                      onClick={(a) => handleDeliveryCancelled(e)}
                      title="Cancelled"
                    >
                      <svg
                        class="inline-flex"
                        fill="red"
                        width="30px"
                        height="30px"
                        viewBox="0 0 100 100"
                        data-name="Layer 1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_iconCarrier">
                          <path d="M69.61,84.17a1.5,1.5,0,0,1-.45-2.93l5.55-1.74a1.5,1.5,0,1,1,.9,2.86L70.06,84.1A1.41,1.41,0,0,1,69.61,84.17Z"></path>
                          <path d="M50,90.25a1.46,1.46,0,0,1-1.5-1.46V40a1.49,1.49,0,0,1,1.05-1.43L87.43,26.76a1.52,1.52,0,0,1,1.34.22,1.51,1.51,0,0,1,.61,1.21V56.76a1.5,1.5,0,0,1-3,0V30.23L51.54,41.13V88.71A1.53,1.53,0,0,1,50,90.25Z"></path>
                          <path d="M50,90.29a1.5,1.5,0,0,1-.45-2.93l19.57-6.12a1.5,1.5,0,1,1,.89,2.86L50.49,90.22A1.41,1.41,0,0,1,50,90.29Z"></path>
                          <path d="M56,81.29a1.5,1.5,0,0,1-.45-2.93L69.38,74a1.5,1.5,0,1,1,.9,2.86L56.49,81.22A1.41,1.41,0,0,1,56,81.29Z"></path>
                          <path d="M56,74.29a1.5,1.5,0,0,1-.45-2.93l10.53-3.29A1.5,1.5,0,1,1,67,70.93L56.49,74.22A1.41,1.41,0,0,1,56,74.29Z"></path>
                          <path d="M50,90.21a1.31,1.31,0,0,1-.44-.07L11.7,78.3a1.49,1.49,0,0,1-1.06-1.43V28.11a1.5,1.5,0,0,1,1.5-1.5,1.43,1.43,0,0,1,.46.07l10.27,3.2a1.52,1.52,0,0,1,1.05,1.44V51.94a1.55,1.55,0,0,1,.15,1.3,1.52,1.52,0,0,1-1.92.92l-.23-.08a1.51,1.51,0,0,1-1-1.42V32.42l-7.28-2.28V75.77l34.9,10.9V41.05L40.37,38.5V58a1.5,1.5,0,0,1-3,0V36.46A1.5,1.5,0,0,1,39.31,35l11.18,3.5a1.48,1.48,0,0,1,1,1.43V88.71a1.48,1.48,0,0,1-.61,1.21A1.5,1.5,0,0,1,50,90.21Z"></path>
                          <path d="M38.87,59.53a1.5,1.5,0,0,1-1.5-1.5V36.66a1.44,1.44,0,0,1,.05-.68,1.49,1.49,0,0,1,1.88-1,1.54,1.54,0,0,1,1.07,1.44V58A1.5,1.5,0,0,1,38.87,59.53Z"></path>
                          <path d="M22.65,54.24a1.74,1.74,0,0,1-.5-.08l-.23-.08a1.51,1.51,0,0,1-1-1.42V31.32a1.5,1.5,0,0,1,3,0V51.94a1.55,1.55,0,0,1,.15,1.3A1.52,1.52,0,0,1,22.65,54.24Z"></path>
                          <path d="M50,41.49A1.48,1.48,0,0,1,48.53,40V40a1.5,1.5,0,0,1,3,0A1.52,1.52,0,0,1,50,41.49Z"></path>
                          <path d="M12.16,29.6a1.5,1.5,0,0,1-.58-2.88l38-15.82a1.5,1.5,0,0,1,1.16,2.77l-38,15.82A1.44,1.44,0,0,1,12.16,29.6Z"></path>
                          <path d="M23.62,32.85A1.5,1.5,0,0,1,23,30l17.17-7.14a1.5,1.5,0,0,1,1.15,2.77L24.19,32.73A1.46,1.46,0,0,1,23.62,32.85Z"></path>
                          <path d="M38.83,37.94A1.48,1.48,0,0,1,37.45,37a1.5,1.5,0,0,1,.8-2l15.12-6.29a1.5,1.5,0,0,1,1.16,2.77L39.41,37.83A1.49,1.49,0,0,1,38.83,37.94Z"></path>
                          <path d="M61.75,18.66a1.51,1.51,0,0,1-.58-.12L49.62,13.66a1.5,1.5,0,1,1,1.16-2.76l11.56,4.88a1.5,1.5,0,0,1,.8,2A1.52,1.52,0,0,1,61.75,18.66Z"></path>
                          <path d="M87.89,29.69a1.51,1.51,0,0,1-.58-.12l-26.14-11a1.5,1.5,0,1,1,1.17-2.76l26.14,11a1.5,1.5,0,0,1-.59,2.88Z"></path>
                          <path d="M38.87,59.53a1.51,1.51,0,0,1-1.27-.7l-8-12.55a1.5,1.5,0,0,1,2.53-1.61l8,12.55a1.51,1.51,0,0,1-1.26,2.31Z"></path>
                          <path d="M22.65,54.24a1.47,1.47,0,0,1-1.12-.51,1.49,1.49,0,0,1,.13-2.11l8.21-7.27a1.5,1.5,0,0,1,2,2.25l-8.21,7.26A1.45,1.45,0,0,1,22.65,54.24Z"></path>
                          <path d="M54,31.65a1.5,1.5,0,0,1-.62-.13L40.2,25.59a1.5,1.5,0,0,1,1.23-2.73l13.14,5.92A1.5,1.5,0,0,1,54,31.65Z"></path>
                          <path d="M81.88,84.2A15.16,15.16,0,1,1,97,69,15.18,15.18,0,0,1,81.88,84.2Zm0-27.32A12.16,12.16,0,1,0,94,69,12.17,12.17,0,0,0,81.88,56.88Z"></path>
                          <path d="M75.94,76.48A1.45,1.45,0,0,1,74.88,76a1.49,1.49,0,0,1,0-2.12L86.45,62.35a1.49,1.49,0,0,1,2.12,0,1.51,1.51,0,0,1,0,2.12L77,76A1.48,1.48,0,0,1,75.94,76.48Z"></path>
                          <path d="M87.51,76.48A1.45,1.45,0,0,1,86.45,76L74.88,64.47A1.5,1.5,0,1,1,77,62.35L88.57,73.92a1.51,1.51,0,0,1,0,2.12A1.47,1.47,0,0,1,87.51,76.48Z"></path>
                        </g>
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
