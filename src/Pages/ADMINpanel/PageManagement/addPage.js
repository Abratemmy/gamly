import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io'
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
// import "../../../node_modules/react-quill/dist/quill.snow.css";

function AddPage({ setToggleState, currentId }) {
    const initialValue = {
        pageName: "",
        pageTitle: "",
        pageUrl: "",
        pageWeb: "",
        description: "",
    }
    const [values, setValues] = useState(initialValue)
    const clearPages = () => setValues(initialValue)

    const handleChange = (ev) => {
        setValues({
            ...values,
            [ev.target.name]: ev.target.value,
        });
    };

    const handleQuillEdit = (event) => {
        setValues((prev) => {
            return {
                ...prev,
                description: event
            }
        })
    }

    // validation for edit form
    const [pageErrors, setPageErrors] = useState({});
    const handleError = (targets) => {
        let errorsValue = {};
        if (!targets.pageName) errorsValue.pageName = "Please enter page name";
        if (!targets.pageTitle) errorsValue.pageTitle = "Email  is required";
        if (!targets.pageUrl) errorsValue.pageUrl = "Please enter admin name";
        if (!targets.pageWeb) errorsValue.pageWeb = "Please enter admin name";
        if (!targets.description) errorsValue.description = "Please enter admin name";

        if (Object.keys(errorsValue).length > 0) setPageErrors({ ...errorsValue });
        else setPageErrors({});

        return Object.keys(errorsValue).length;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let v = handleError(values);
        if (v > 0) {
            console.log("error");
        }
        else {
            alert("values", values)
            console.log("values are", values)
            clearPages()
        }
    }

    console.log("pageError", pageErrors)
    return (
        <div className='addPageWrapper'>
            <div className='top'>
                <span onClick={setToggleState}>Page Management</span>
                <span><IoIosArrowForward className="icon" /> </span>
                <span>{currentId ? "Edit Page" : "Add Page"}</span>
            </div>

            <form onClick={handleSubmit}>
                <div className='form' style={{ padding: "0px 20px" }}>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className="">
                                <label>Page Name</label>
                                <input type="text" placeholder="Enter page name" className='input'
                                    name="pageName" value={values.pageName} onChange={handleChange} />
                                {pageErrors ? <span className='error'> {pageErrors.pageName}</span> : ""}

                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className="">
                                <label>Page Title</label>
                                <input type="text" placeholder="Enter page title" className='input'
                                    name="pageTitle" value={values.pageTitle} onChange={handleChange} />
                                {pageErrors ? <span className='error'> {pageErrors.pageTitle}</span> : ""}
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className="">
                                <label>Page Url</label>
                                <input type="text" placeholder="Enter page url" className='input'
                                    name="pageUrl" value={values.pageUrl} onChange={handleChange} />
                                {pageErrors ? <span className='error'> {pageErrors.pageUrl}</span> : ""}
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className="">
                                <label>Web title</label>
                                <input type="text" placeholder="Enter web title" className='input'
                                    name="pageWeb" value={values.pageWeb} onChange={handleChange} />
                                {pageErrors ? <span className='error'> {pageErrors.pageWeb}</span> : ""}
                            </div>
                        </div>
                        <div className='col-12' >
                            <div className='quillWrapper'>
                                <ReactQuill
                                    placeholder="Add Description"
                                    modules={AddPage.modules}
                                    formats={AddPage.formats}
                                    onChange={handleQuillEdit}
                                    value={values.description}
                                    unit="word"
                                    className='text-editor'
                                />
                                {pageErrors ? <span className='error'> {pageErrors.description}</span> : ""}
                                <div className='word'>Word</div>
                            </div>
                        </div>

                        <div className='submit'>
                            <button type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

AddPage.modules = {
    // counter: {
    //     container: '#counter',
    //     unit: 'word'
    // },
    toolbar: [
        ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block', { 'list': 'ordered' }, { 'list': 'bullet' }, 'link', 'image', 'video', { 'direction': 'rtl' }],        // toggled buttons

        [{ 'script': 'sub' }, { 'script': 'super' }, { 'color': [] }, { 'background': [] }, { align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }, 'clean'],      // superscript/subscript

    ]
}

AddPage.formats = [
    'font', 'size',
    'bold', 'italic', 'underline', 'strike',
    'color', 'background',
    'script',
    'header', 'blockquote', 'code-block',
    'indent', 'list',
    'direction', 'align',
    'link', 'image', 'video', 'formula',
]
export default AddPage