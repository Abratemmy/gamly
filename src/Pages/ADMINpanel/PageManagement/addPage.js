import React, { useState, useEffect } from 'react';
import { IoIosArrowForward } from 'react-icons/io'
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useDispatch, useSelector } from 'react-redux';
import { createPAGEMANAGEMENT, updatePAGEMANAGEMENT } from '../../../Components/REDUX/ACTION/pageManagementAction';
import { FailedMessage, SuccessMessage } from '../../../Components/Message/Message';

function AddPage({ setToggleState, currentId, setCurrentId }) {
    const getPageId = useSelector((state) => currentId ? state.pageManagementReducer.pageList.find((p) => p.page_id === currentId) : null);

    console.log("getPageId", getPageId)
    useEffect(() => {
        if (getPageId) setValues(getPageId)
    }, [getPageId])


    const initialValue = {
        page_name: "",
        Page_title: "",
        page_url: "",
        created_by: "",
        content: "",
    }
    const [values, setValues] = useState(initialValue)
    const clearPages = () => {
        setCurrentId(null);
        setValues(initialValue)
    }

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
                content: event
            }
        })
    }

    // validation for edit form
    const [pageErrors, setPageErrors] = useState({});
    const handleError = (targets) => {
        let errorsValue = {};
        if (!targets.page_name) errorsValue.page_name = "Please enter page name";
        if (!targets.Page_title) errorsValue.Page_title = "Please enter page title";
        if (!targets.page_url) errorsValue.page_url = "Please enter page url";
        if (!targets.created_by) errorsValue.created_by = "Please enter creator name";
        if (!targets.content) errorsValue.content = "Please add content";

        if (Object.keys(errorsValue).length > 0) setPageErrors({ ...errorsValue });
        else setPageErrors({});

        return Object.keys(errorsValue).length;
    }

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [failure, setFailure] = useState(false);
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        let v = handleError(values);
        if (v > 0) {
            console.log("error");
        }
        else {
            if (currentId) {
                setLoading(true)
                dispatch(updatePAGEMANAGEMENT(currentId, values, setLoading, setSuccess, setFailure, clearPages))
            } else {
                setLoading(true)
                dispatch(createPAGEMANAGEMENT(values, setLoading, setSuccess, setFailure, clearPages));
                console.log("submitted")
            }
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

            <form onSubmit={handleSubmit}>
                <div className='form' style={{ padding: "0px 20px" }}>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className="">
                                <label>Page Name</label>
                                <input type="text" placeholder="Enter page name" className='input'
                                    name="page_name" value={values.page_name} onChange={handleChange} />
                                {pageErrors ? <span className='error'> {pageErrors.page_name}</span> : ""}

                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className="">
                                <label>Page Title</label>
                                <input type="text" placeholder="Enter page title" className='input'
                                    name="Page_title" value={values.Page_title} onChange={handleChange} />
                                {pageErrors ? <span className='error'> {pageErrors.Page_title}</span> : ""}
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className="">
                                <label>Page Url</label>
                                <input type="url" placeholder="Enter page url" className='input'
                                    name="page_url" value={values.page_url} onChange={handleChange} />
                                {pageErrors ? <span className='error'> {pageErrors.page_url}</span> : ""}
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className="">
                                <label>Creator Name</label>
                                <input type="text" placeholder="Enter web title" className='input'
                                    name="created_by" value={values.created_by} onChange={handleChange} />
                                {pageErrors ? <span className='error'> {pageErrors.created_by}</span> : ""}
                            </div>
                        </div>
                        <div className='col-12' >
                            <div className='quillWrapper'>
                                <ReactQuill
                                    placeholder="Add Description"
                                    modules={AddPage.modules}
                                    formats={AddPage.formats}
                                    onChange={handleQuillEdit}
                                    value={values.content}
                                    unit="word"
                                    className='text-editor'
                                />
                                {pageErrors ? <span className='error'> {pageErrors.content}</span> : ""}
                                <div className='word'>Word</div>
                            </div>
                        </div>

                        <div className='submit'>
                            {loading ? <>
                                <button type="submit buttondisabled" style={{ pointerEvents: "none", background: "#bb272f" }}>Submitting...</button>
                            </> :
                                <>
                                    <button type="submit">Submit</button>
                                </>}

                        </div>
                    </div>
                </div>
            </form>

            {success && (
                <>
                    {currentId ? <SuccessMessage message="Page updated successfully" handleClose={() => setSuccess(false)} />
                        : <SuccessMessage message="Page added successfully" handleClose={() => setSuccess(false)} />
                    }
                </>

            )}

            {failure && (
                <>
                    {currentId ? <FailedMessage message="Page could not be updated" handleClose={() => setFailure(false)} />
                        : <FailedMessage message="Page could not be added" handleClose={() => setFailure(false)} />
                    }
                </>

            )}
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