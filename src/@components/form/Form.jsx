import { React } from "react";
import { useForm } from "react-hook-form";

export default function Form({ title, fields, schema }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  return (
    <>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit} className="w-75 mx-auto">
        {Object.keys(fields).map((el) => (
          <>
            {
              <div className="mb-3">
                <label htmlFor={el}>{fields[el][0]}</label>
                <input
                  className="form-control"
                  {...register(el)}
                  id={el}
                  type={fields[el][1]}
                />
              </div>
            }
          </>
        ))}
      </form>
    </>
  );
}
