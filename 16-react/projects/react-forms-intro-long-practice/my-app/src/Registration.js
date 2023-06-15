import { useState, useEffect } from "react";


function Registration() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [bio, setBio] = useState('');
    const [phoneType, setPhoneType] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [isChecked, setIsChecked] = useState('')
    const [validationError, setValidationError] = useState({});
    const [hassubmitted, setHasSubmitted] = useState('false');

    useEffect(() => {
        const errors = {};
        if (!name.length) (errors)['name'] = 'Please enter your Name';
        if (!email.includes('@')) (errors)['email'] = 'Please provide a valid Email';
        if (!phone.includes('1234567890')) (errors)['phone'] = 'Please provide a valid Phone';
        if (!bio.length) (errors)['bio'] = 'Bio is limited to 280 characters';

        setValidationError(errors);

    }, [name, email, phone, bio])

    // Staff: Instructor or Student (radio buttons)
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };


    const onSubmit = e => {
        // Prevent the default form behavior so the page doesn't reload.
        e.preventDefault();

        setHasSubmitted(true);
        if (Object.values(validationError).length)
            return alert(`The following errors were found:

        ${validationError.name ? "* " + validationError.name : ""}
        ${validationError.email ? "* " + validationError.email : ""}
        ${validationError.phone ? "* " + validationError.phone : ""}
        ${validationError.bio ? "* " + validationError.bio : ""}`);

        // Create a new object for the contact us information.
        const RegistrationInformation = {
            name,
            email,
            phone: phone || '',
            bio,
            phoneType: phone ? phoneType : '',
            // selectedOption,
            isChecked,
            submittedOn: new Date()
        };

        // Ideally, we'd persist this information to a database using a RESTful API.
        // For now, though, just log the contact us information to the console.
        console.log(RegistrationInformation);

        // Reset the form state.
        setName('');
        setEmail('');
        setPhone('');
        setBio('');
        setPhoneType('');
        // selectedOption('');
        setIsChecked('');
        setValidationError({});
        setHasSubmitted(false);
    };

    return (

        <div className="container">
            <h2 className='form-title'>Registration Form</h2>
            <form onSubmit={onSubmit}>
                <div className='form-field'>
                    <label htmlFor='name'>Name:</label>
                    <input
                        id='name'
                        type='text'
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div className='error'>
                    {validationError.name && `* ${validationError.name}`}
                </div>
                <div className='form-field'>
                    <label htmlFor='email'>Email:</label>
                    <input
                        id='email'
                        type='text'
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className='error'>
                    {hassubmitted && validationError.email && `* ${validationError.email}`}
                </div>
                <div className='form-field'>
                    <label htmlFor='phone'>Phone:</label>
                    <input
                        id='phone'
                        type='text'
                        onChange={e => setPhone(e.target.value)}
                        value={phone}
                    />
                    <select
                        name='phoneType'
                        onChange={e => setPhoneType(e.target.value)}
                        value={phoneType}
                        disabled={!phone}
                    >
                        <option value='' disabled>
                            Select a phone type...
                        </option>
                        <option>Home</option>
                        <option>Work</option>
                        <option>Mobile</option>
                    </select>
                </div>
                <div className='error'>
                    {validationError.phone && `* ${validationError.phone}`}
                </div>
                <div className='form-field'>
                    <label>
                        <input
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={e => setSelectedOption(e.target.value)}
                        />
                        Staff
                    </label>
                </div >
                <div className='form-field'>
                    <label>
                        <input
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={e => setSelectedOption(e.target.value)}
                        />
                        Student
                    </label>
                </div>

                <div className='form-field'>
                    <label htmlFor='comments'>Bio:</label>
                    <textarea
                        id='comments'
                        name='comments'
                        onChange={e => setBio(e.target.value)}
                        value={bio}
                    />
                </div>
                <div className='error'>
                    {validationError.bio && `* ${validationError.bio}`}
                </div>
                <div className='form-field'>
                    <label>
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        Sign up for email notifications!
                    </label>

                    <p>Checked: {isChecked ? 'Yes' : 'No'}</p>
                </div>
                <button>Submit</button>
            </form >
        </div >
    );
}

export default Registration;
