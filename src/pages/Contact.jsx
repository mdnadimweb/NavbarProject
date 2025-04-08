function Contact() {
  return (
    <>
      <div className="form_main">
        <form className="form_head">
          <h1>constact us </h1>

          <div className="inputBox">
            <label htmlFor="">Name : </label>
            <input type="text" placeholder="input name " />
          </div>

          <div className="inputBox">
            <label htmlFor="">Email : </label>
            <input type="text" placeholder="input name " />
          </div>

          <div className="inputBox">
            <label htmlFor="">Age : </label>
            <input type="number" placeholder="input name " />
          </div>
          <div className="inputBox">
            <label htmlFor="">Password : </label>
            <input type="password" placeholder="input name " />
          </div>
          <div className="inputBox">
            <label htmlFor="">Confirm Password : </label>
            <input type="password" placeholder="input name " />
          </div>

          <div className="buttonBox">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
