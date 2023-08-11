function Form() {



    
    return (
      <div className="form">
        <form>
          <label>
            Enter your name:
            <input type="text" />
          </label>
          <label>
            enter your nick name:
            <input type="text" />
          </label>
          <input type="submit" />
        </form>
      </div>
    );
}

export default Form;