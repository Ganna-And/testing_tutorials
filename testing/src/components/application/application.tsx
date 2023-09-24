

export default function Application() {
  return (
    <>
    <h1>Job application form</h1>
    <h2>Section 1</h2>
    <form>
        <div>
    <label htmlFor="name">Name</label>
    <input type="text" id="name" name="name" required />
</div>
<div>
    <div>
        <label htmlFor="bio">Bio</label>
        <textarea id="bio" name="bio" />
    </div>
    <label htmlFor="country">Name</label>
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
