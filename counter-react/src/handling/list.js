

function List(){
      
    const fruits =[{id: 1 ,name:'apple',calories:122},
        {id: 2 ,name:'banana',calalories:178},
        {id:3 ,name:'orange',calories:233},
        {id:4 ,name:'grape',calories:100}];

        const listfruites =fruits.map(fruit => <li key={fruit.id}>
            {fruit.name} &nbsp {fruit.calories}
        </li>);


}
export default List;