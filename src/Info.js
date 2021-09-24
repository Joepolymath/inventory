function Info() {
    const data = {
      "name": "Joshua Tobi Ajagbe",
      "age": 25,
      "gender": "Male"
    }
    return (
      <div>
        <h3>Welcome to my react app</h3>
        <p>Hi, I am {data.name}. I am a {data.gender}.</p>

        {/* with props */}
        <AddItem text="Books" />


        {/* without props */}
        <AddItem />  

        
      </div>
    )
  }

// creating another component here

export function AddItem(props) {
    const choice = true;
    const item = props.text
    if (choice) {
        return (
            <form>
            <label for="name">Item Name</label>
            <input type="text" id = "name" value={item} name="name" />
        </form>
        )
    }
    else{
        return (
            <h4>Your choice is set to 'false'. Please set choice to 'true' to view form.</h4>
        )
    }
}

export default Info;