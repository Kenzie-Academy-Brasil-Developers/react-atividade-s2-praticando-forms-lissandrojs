import './style.css'

const Home = ({db})=>{
   
    return(
        <div>
        
            {db&&db.map((item)=>{ return(
                <div className="container--user">
                   
                    <p>Nome :{item.name}</p>
                    <p>User :{item.userName}</p>
                    <p>Email: {item.email}</p>
                </div>

            )
            })}
        </div>
    )
}
export default Home