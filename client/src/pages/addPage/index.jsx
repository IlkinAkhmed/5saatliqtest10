import { Helmet } from "react-helmet-async";
import "./index.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

function Add() {
  const [input, setInput] = useState("");
  const [sortedData, setSortedData] = useState(null);
  const [allData, setAllData] = useState(null);
  async function postData(values) {
    await axios.post("http://localhost:4200/products/", values);
    await fetchAllData();
  }

  async function fetchAllData() {
    const res = await axios("http://localhost:4200/products/");
    setAllData(res.data);
  }

  async function deleteData(id) {
    await axios.delete(`http://localhost:4200/products/${id}`);
    toast.success("Product Deleted");
    await fetchAllData();
  }
  useEffect(() => {
    fetchAllData();
  }, []);



  
  function CheckTypeOfProperty(item) {
    if (typeof item === "string") {
      return item.toLowerCase();
    }
    return item;
  }





  return (
    <>
      <Helmet>
        <title>Home | Add</title>
      </Helmet>
      <div className="addPage">
        <h1>Post Product</h1>
        <Formik
          initialValues={{ image: "", title: "", price: "" }}
          validationSchema={Yup.object({
            image: Yup.string()
              .min(15, "Must be 15 characters or more")
              .required("Required"),
            title: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
            price: Yup.number()
              .min(0.1, "Must be minumum 0.1 USD  or mor")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            postData(values);
            resetForm();
            setTimeout(() => {
              toast.success("Post Created");
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form className="form">
            <label htmlFor="image">Image</label>
            <Field className="input" name="image" type="text" />
            <div className="error">
              <ErrorMessage name="image" />
            </div>

            <label htmlFor="title">Title</label>
            <Field className="input" name="title" type="text" />
            <div className="error">
              <ErrorMessage name="title" />
            </div>

            <label htmlFor="price">Price </label>
            <Field className="input" name="price" type="number" />
            <div className="error">
              <ErrorMessage name="price" />
            </div>

            <button type="submit">Submit</button>
          </Form>
        </Formik>
        <h1>Poducts</h1>
        <div className="filterArea">
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Search name..."
          />
          <button
            onClick={() => setSortedData({ property: "title", asc: true })}
          >
            A-z
          </button>
          <button
            onClick={() => setSortedData({ property: "title", asc: false })}
          >
            z-A
          </button>
          <button
            onClick={() => setSortedData({ property: "price", asc: true })}
          >
            price LOW to HIGH
          </button>
          <button
            onClick={() => setSortedData({ property: "price", asc: false })}
          >
            price HIGH to LOW
          </button>
          <button onClick={()=>setSortedData(null)}>Default</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allData &&
              allData
                .filter((item) =>
                  item.title
                    .trim()
                    .toLowerCase()
                    .includes(input.trim().toLowerCase())
                )
                .sort((a, b) => {
                  if (sortedData && sortedData.asc) {
                    return CheckTypeOfProperty(a[sortedData.property]) >
                      CheckTypeOfProperty(b[sortedData.property])
                      ? 1
                      : CheckTypeOfProperty(b[sortedData.property]) >
                        CheckTypeOfProperty(a[sortedData.property])
                      ? -1
                      : 0;
                  } else if (sortedData && sortedData.asc === false) {
                    return CheckTypeOfProperty(a[sortedData.property]) >
                      CheckTypeOfProperty(b[sortedData.property])
                      ? -1
                      : CheckTypeOfProperty(b[sortedData.property]) >
                        CheckTypeOfProperty(a[sortedData.property])
                      ? 1
                      : 0;
                  }
                })
                .map((item) => (
                  <tr key={item._id}>
                    <td width={250}>{item._id}</td>
                    <td>
                      <img src={item.image} alt="" />
                    </td>
                    <td>{item.title}</td>
                    <td>${item.price}.00</td>
                    <td width={100}>
                      <i
                        onClick={() => deleteData(item._id)}
                        className="fa-solid fa-trash-can"
                      ></i>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Add;
