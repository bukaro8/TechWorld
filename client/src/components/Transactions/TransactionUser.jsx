import { searchByEmail, searchByStatus } from "../../Redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function TransactionUser() {
  let dispatch = useDispatch();
  let searchMail = useSelector((state) => state.searchMail);
  const { user } = useAuth0();

  function handleStatus(e) {
    e.preventDefault();
    dispatch(searchByStatus(e.target.value));
  }

  useEffect(() => {
    if (user) {
      dispatch(searchByEmail(user.email));
    }
  }, [dispatch, user]);

  return (
    <div class="flex justify-around flex-wrap m-2">
      {!searchMail.length ? (
        <h1>There are no transactions</h1>
      ) : (
        <table class="table-auto border-2 border-indigo-500 m-2 w-full ">
          <thead class="border-2 border-indigo-500">
            <tr>
              <th class="border-2 border-indigo-500 p-1 text-center">
                Transaction ID
              </th>
              <th class="border-2 border-indigo-500 p-1 text-center">Email</th>
              <th class="border-2 border-indigo-500 p-1 text-center">
                Amount of Items
              </th>
              <th class="border-2 border-indigo-500 p-1 text-center">Amount</th>
              <th class="border-2 border-indigo-500 p-1 text-center">
                Payment Status
              </th>
              <th class="border-2 border-indigo-500 p-1 text-center">
                Delivery Status
              </th>
            </tr>
          </thead>
          <tbody>
            {searchMail.map((e) => {
              return (
                <tr>
                  <td class="border-2 border-indigo-500 p-1 text-center">
                    {e._id}
                  </td>
                  <td class="border-2 border-indigo-500 p-1 text-center">
                    {e.userEmail}
                  </td>
                  <td class="border-2 border-indigo-500 p-1 text-center">
                    {e.itemsBought.length}
                  </td>
                  <td class="border-2 border-indigo-500 p-1 text-center">
                    ${e.price}
                  </td>
                  <td class="border-2 border-indigo-500 p-1 text-center">
                    {e.status}
                  </td>
                  <td class="border-2 border-indigo-500 p-1 text-center">
                    {e.delivered}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

      <div></div>
    </div>
  );
}
