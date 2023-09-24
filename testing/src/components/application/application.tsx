

export default function Application() {
  return (
    <>
    <h1>Job application form</h1>
    <h2>Section 1</h2>
    <p>All fields are mendatory</p>
    <span title='close'>X</span>
    <div data-testid='custom-element'>Custom HTML Element</div>
    <form>
        <div>
            <img src="https://images.unsplash.com/photo-1695071336116-f61c2042630c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
            alt="a person with a laptop" />
    <label htmlFor="name">Name</label>
    <input type="text" id="name" name="name" value='Ganna' onChange={()=>{}} placeholder="Fullname" required />
</div>
<div>
    <div>
        <label htmlFor="bio">Bio</label>
        <textarea id="bio" name="bio" />
    </div>
    <label htmlFor="country">Select country:</label>
    <select id="country" name="country" required>
        <option value="">Select a country</option>
        <option value="US">USA</option>
        <option value="CA">Canada</option>
        <option value="UK">UK</option>
        <option value="AU">Australia</option>
        <option value="BB">Germany</option>
    </select>
</div>
<div>
    <input type="checkbox" id="acceptTerms" name="acceptTerms" required />
    <label htmlFor="acceptTerms">I accept the terms and conditions</label>
</div>
<div>
    <button type="submit" value="Submit"></button>
    </div>
</form>
</>
  )
}
