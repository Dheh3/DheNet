import './Dice.css'

const Dice:any = () => {
    return (
        <>
        <div className='dices'>
            <div className='dice'></div>
            <div className='types'>
                <ul>
                    <li><h4>D6</h4></li>
                    <li><h4>D20</h4></li>
                    <li><h4>D100</h4></li>
                </ul>
            </div>
        </div>
        </>
    )
}
export default Dice