"use client";
import FileInput from "@/components/FileInput";
import FormField from "@/components/FormField";
import { ChangeEvent, useState } from "react";

const page = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    visibility: "public",
  });
  const [error, setError] = useState(null);
  const hadleInputChange = (e: ChangeEvent) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <div className="wrapper-md upload-page">
      <h1>Upload Your Vide Here</h1>
      {error && <div className="error-field">{error}</div>}
      <form className="rounded-20 shadow-10 gap-6 w-full flex flex-col px-5 py-7.5">
        <FormField
          id="title"
          label="Title"
          value={formData.title}
          onChange={hadleInputChange}
          placeholder="Enter title here"
        />
        <FormField
          id="description"
          label="Description"
          value={formData.description}
          onChange={hadleInputChange}
          placeholder="Describe your video"
          as="textarea"
        />
        <FileInput />
        <FileInput />
        <FormField
          id="visibility"
          label="Visibility"
          value={formData.visibility}
          onChange={hadleInputChange}
          as="select"
          options={[
            { label: "Public", value: "public" },
            { label: "Private", value: "private" },
          ]}
        />
      </form>
    </div>
  );
};

export default page;
