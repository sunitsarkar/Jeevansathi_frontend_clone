import './style.css'



export default function Match() {


    
    const arr = [1, 2,3,4,5,6,7,8,9,10];


    return <div className="match-main" >
        {
            arr.map((item) => {
                return <div className="match-box" key={item}>
                    <h1>Matches</h1>
                </div>
            })
        }

    </div>
}