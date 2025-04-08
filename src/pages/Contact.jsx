import { useForm } from "react-hook-form";
import { useState } from "react";
function Contact() {
  const value = {
    defaultValues: {
      name: "nadim",
      email: "demo@gmail.com",
      age: "18",
      password: "aA$13",
    },
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm(value);

  const password = watch("password");

  const [submittedData, setSubmittedData] = useState(null);

  const onsubmit = (data) => {
    setSubmittedData(data);
  };

  return (
    <>
      <div className="form_main">
        <form className="form_head" onSubmit={handleSubmit(onsubmit)}>
          <h1>constact us </h1>

          <div className="inputBox">
            <label htmlFor="">Name : </label>
            <input
              {...register("name", {
                required: "name is required",
                minLength: { value: 3, message: "minlength 3" },
                maxLength: { value: 13, message: "maxlength 13" },
              })}
              type="text"
              placeholder="input name "
            />
            {errors.name && (
              <p className="message_required">{errors.name?.message}</p>
            )}
          </div>

          <div className="inputBox">
            <label htmlFor="">Email : </label>
            <input
              {...register("email")}
              type="email"
              placeholder="input name "
            />
          </div>

          <div className="inputBox">
            <label htmlFor="">Age : </label>
            <input
              {...register("age", {
                required: "Age is required",
                min: { value: 18, message: "Age must be 18" },
                max: { value: 55, message: "Age should be under 55" },
              })}
              type="number"
              placeholder="input name "
            />
            {errors.age && (
              <p className="message_required">{errors.age.message}</p>
            )}
          </div>
          <div className="inputBox">
            <label htmlFor="">Password : </label>
            <input
              {...register(
                "password",

                {
                  required: "Password is required",

                  minLength: { value: 6, message: "Min 6 characters" },
                }
              )}
              type="password"
              placeholder="input name "
            />
            {errors.password && (
              <p className="message_required">{errors.password?.message}</p>
            )}
          </div>
          <div className="inputBox">
            <label htmlFor="">Confirm Password : </label>
            <input
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              type="password"
              placeholder="input name "
            />

            {errors.confirmPassword && (
              <p className="message_required">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <div className="buttonBox">
            <button type=" submit ">Submit</button>
          </div>
        </form>
      </div>

      {submittedData && (
        <div className="showdata">
          <h2>contact form data </h2>
          <p>Name : {submittedData.name}</p>
          <p>Email : {submittedData.email}</p>
          <p>Age: {submittedData.age}</p>
          <p>Password: {submittedData.password}</p>
        </div>
      )}
    </>
  );
}

export default Contact;
