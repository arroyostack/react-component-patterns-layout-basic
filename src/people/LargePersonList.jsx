import React from 'react';

export const LargePersonList = ( { people } ) => {
    const { name, age, hairColor, hobbies } = people;
    return (
        <>
            <h3>Name: { name }</h3>
            <p>Age: { age }</p>
            <p>Hair Color: { hairColor }</p>
            <h3>Hobbies:</h3>

            <ul>
                {
                    hobbies.map( hobby => (
                        <li key="hobbie">{ hobby }</li>
                    ) )
                }
            </ul>

        </>
    );
};

