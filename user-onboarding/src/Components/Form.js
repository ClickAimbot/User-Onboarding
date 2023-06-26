import react from 'react';

const Form = (props) => {
    const { change, submit } = props;
    const { username, email, password, checked } = props.values;

    const onChange = (e) => {
        const { name, value, checked, type } = e.target;
        const newVal = type === 'checkbox' ? checked : value;
        change(name, newVal);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        submit();
    }

    return (
        <div>
            <h1>My cool form!</h1>
            <form onSubmit={onSubmit}>
                <Label> Name:
                    <input 
                        type="text"
                        name="username"
                        value={username}
                        onChange={onChange}
                    />
                </Label>
                <Label> Email:
                    <input 
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange} 
                    />
                </Label>
                <Label> Password
                    <input 
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange} 
                    />
                </Label>
                <Label> Terms of Service:
                    <input 
                        type="checkbox"
                        name="tos"
                        checked={checked}
                        onChange={onChange} 
                    />
                </Label>
                <input type="submit" value="Create a Friend!" />
            </form>
        </div>
    )
}