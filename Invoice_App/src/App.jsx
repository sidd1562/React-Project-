import { useRef, useState } from "react";
import ClientDetails from "./components/ClientDetails";
import Dates from "./components/Dates";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import Notes from "./components/Notes";
import Table from "./components/Table";
import TableForm from "./components/TableForm";
import ReactToPrint from "react-to-print";

function App() {
  const [showInvoice, setshowInvoice] = useState(true);
  const [name, setName] = useState("Thomas sankara");
  const [address, setAddress] = useState("Navirobi , kenya");
  const [email, setEmail] = useState("gojo123@gmail.com");
  const [phone, setPhone] = useState("9632587455");
  const [backName, setBackName] = useState("BSSA");
  const [backAccount, setBackAccount] = useState("123 458 695");
  const [Website, setWebsite] = useState("www.anime.com");
  const [clientName, setClientName] = useState("john doe");
  const [clientAddress, setClientAddress] = useState("Navirobi , kenya");
  const [invoiceNumber, setInvoiceNumber] = useState("1101");
  const [invoiceDate, setInvoiceDate] = useState("01-05-2002");
  const [dueDate, setDueDate] = useState("25-01-2024");
  const [notes, setNotes] = useState(
    "pay form me may account and my loan is 5% intrastate"
  );

  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const componentRef = useRef();

  function handlePrint() {
    window.print();
  }

  return (
    <>
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
        {showInvoice ? (
          <>
            <ReactToPrint
              trigger={() => (
                <button className="btn btn-download ml-7  bg-blue-500  text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
                  Print / Download
                </button>
              )}
              content={() => componentRef.current}
            />
            <div className="p-5" ref={componentRef}>
              <Header handlePrint={handlePrint} />
              <MainDetails name={name} address={address} />
              <ClientDetails
                className={clientName}
                clientAddress={clientAddress}
              />
              <Dates
                invoiceNumber={invoiceNumber}
                invoiceDate={invoiceDate}
                dueDate={dueDate}
              />
              <Table
                description={description}
                quantity={quantity}
                price={price}
                amount={amount}
                list={list}
                setList={setList}
                total={total}
                setTotal={setTotal}
              />
              <Notes notes={notes} />
              <Footer
                name={name}
                backAccount={backAccount}
                backName={backName}
                email={email}
                Website={Website}
                phone={phone}
              />
            </div>
            <button
              onClick={() => setshowInvoice(false)}
              className="bg-blue-500 mt-5 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
              Edit Information
            </button>
          </>
        ) : (
          <>
            <div className="flex flex-col justify-center">
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="name">Your Full Name</label>
                  <input
                    type="text"
                    name="text"
                    id="name"
                    placeholder="Enter Your name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="address">Enter Your Address</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Enter Your Address"
                    autoComplete="off"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="email">Enter Your Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  {" "}
                  <label htmlFor="website">Enter Your Website</label>
                  <input
                    type="url"
                    name="website"
                    id="website"
                    placeholder="Enter Your website"
                    autoComplete="off"
                    value={Website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone">Enter Your phone</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter Your phone"
                    autoComplete="off"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  {" "}
                  <label htmlFor="bankName">Enter Your bankName</label>
                  <input
                    type="text"
                    name="bankName"
                    id="bankName"
                    placeholder="Enter Your bankName"
                    autoComplete="off"
                    value={backName}
                    onChange={(e) => setBackName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="backAccount">Enter Your backAccount</label>
                  <input
                    type="text"
                    name="backAccount"
                    id="backAccount"
                    placeholder="Enter Your bankName"
                    autoComplete="off"
                    value={backAccount}
                    onChange={(e) => setBackAccount(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10 md:mt-10">
                <div className="flex flex-col">
                  <label htmlFor="clientName">Enter Your clientName</label>
                  <input
                    type="text"
                    name="clientName"
                    id="clientName"
                    placeholder="Enter your client's name"
                    maxLength={56}
                    autoComplete="off"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  {" "}
                  <label htmlFor="clientAddress">
                    Enter Your clientAddress
                  </label>
                  <input
                    type="text"
                    name="clientAddress"
                    id="clientAddress"
                    placeholder="Enter Your clientAddress"
                    autoComplete="off"
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10 ">
                <div className="flex flex-col">
                  {" "}
                  <label htmlFor="invoiceNumber">
                    Enter Your invoiceNumber
                  </label>
                  <input
                    type="text"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    placeholder="Enter Your invoiceNumber"
                    autoComplete="off"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  {" "}
                  <label htmlFor="invoiceDate">Enter Your invoiceDate</label>
                  <input
                    type="date"
                    name="invoiceDate"
                    id="invoiceDate"
                    placeholder="Enter Your invoiceDate"
                    autoComplete="off"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="dueDate">Enter Your dueDate</label>
                  <input
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    placeholder="Enter Your dueDate"
                    autoComplete="off"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>
              </article>

              <article>
                <TableForm
                  description={description}
                  setDescription={setDescription}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  price={price}
                  setPrice={setPrice}
                  amount={amount}
                  setAmount={setAmount}
                  setList={setList}
                  list={list}
                  total={total}
                  setTotal={setTotal}
                />
              </article>

              <label htmlFor="notes">Enter Your notes</label>
              <textarea
                name="notes"
                placeholder="Additional notes to the client "
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                id="notes"
                cols={30}
                rows={10}></textarea>

              <button
                onClick={() => setshowInvoice(true)}
                className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
                Preview Invoice
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;
