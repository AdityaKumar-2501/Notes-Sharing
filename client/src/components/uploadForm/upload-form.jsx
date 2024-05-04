import React, { useState, useRef } from "react";
import Navbar from "../navbar";
import "./styles.css";
import { Toaster, toast } from "sonner";

function UploadForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        topic: "",
        college: "",
        message: "",
        isUploaded: false,
    });

    const fileInputRef = useRef(null); 

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        console.log(formData[name]);
    };

    const handleFileUpload = (e) => {
        const fileInput = e.target;
        if (fileInput.files.length > 0) {
            // File(s) have been selected
            setFormData((prevState) => ({
                ...prevState,
                isUploaded: true,
            }));
        } else {
            // No file selected
            setFormData((prevState) => ({
                ...prevState,
                isUploaded: false,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("File is uploaded successfully");
        setFormData({
            name: '',
            email: '',
            subject: '',
            topic: '',
            college: '',
            message: '',
            isUploaded: false
        });

        if(fileInputRef.current){
            fileInputRef.current.value = "";
        }

    };

    return (
        <>
            <Navbar />
            <div className="uploadForm">
                <h2 className="text-[40px] text-center">
                    Fill out this form to upload notes.
                </h2>
                <p className="bg-[rgb(255,247,214)] rounded-lg text-[rgb(189,135,77)] px-5 py-3 my-6">
                    NOTE: Do not provide any personal information while
                    uploading the file.
                </p>
                <p className="bg-[rgb(255,240,240)] rounded-lg text-[rgb(231,6,6)] px-5 py-3">
                    Uploading unsuitable or offensive files may result in the
                    ban of your ID.
                </p>
                <div className="w-[50rem] min-h-min bg-white my-14 rounded-lg shadow-xl p-6">
                    <div className="w-[100%] h-[100%] pt-5">
                        <form
                            // action="/upload"
                            // method="post"
                            class="space-y-8"
                            onSubmit={handleSubmit}
                        >
                            <div>
                                <label
                                    for="email"
                                    class="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border focus:outline-none border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                                    placeholder="name@google.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    for="name"
                                    class="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border focus:outline-none border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                                    placeholder="James"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    for="subject"
                                    class="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border focus:outline-none border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                                    placeholder="Subject Name"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    for="topic"
                                    class="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Topic
                                </label>
                                <input
                                    type="text"
                                    id="topic"
                                    name="topic"
                                    class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border focus:outline-none border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                                    placeholder="Topic Name"
                                    value={formData.topic}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    for="collegeName"
                                    class="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    College Name
                                </label>
                                <input
                                    type="text"
                                    id="collegeName"
                                    name="college"
                                    class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border focus:outline-none border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                                    placeholder="College Name"
                                    value={formData.college}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    class="block mb-2 text-sm font-medium text-gray-900 "
                                    for="file_input"
                                >
                                    Upload file
                                </label>
                                <input
                                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 p-2 "
                                    id="file_input"
                                    name="isUploaded"
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleFileUpload}
                                    required
                                />
                            </div>

                            <div class="sm:col-span-2">
                                <label
                                    for="message"
                                    class="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Any Additional Message (Optional)
                                </label>
                                <textarea
                                    id="message"
                                    rows="6"
                                    name="message"
                                    class="block p-2.5 w-full text-sm focus:outline-none text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                                    placeholder="Leave a comment..."
                                    value={formData.message}
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>

                            <Toaster richColors />
                            <button
                                type="submit"
                                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                            >
                                Send File
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UploadForm;
