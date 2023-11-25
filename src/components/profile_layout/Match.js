import './style.css'



export default function Match() {


    
    const arr = [1, 1, 1, 1, 1, 1, 1, 1];


    return <div className="match-main" >
        {
            arr.map((item) => {
                return <div className="match-box">
                    <h1>Matches</h1>
                </div>
            })
        }

    </div>
}