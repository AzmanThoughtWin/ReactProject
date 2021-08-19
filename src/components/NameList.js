import React from 'react'
import Person from './Person';

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skills: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skills: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skills: 'Vue'
        }
    ];
    const personList = persons.map(person => <Person key={person.name} person={person}/>)
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)

    return(
        <>
            <div>{personList}</div>
            <div>{nameList}</div>
        </>
    )
}

export default NameList
