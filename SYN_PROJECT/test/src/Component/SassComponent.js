import './style/SassComponent.scss'
import './style/style.css'

const SassComponent = () => {
  return (
    <>
      <div className='wrap'>
        <h1>Hello, Sass</h1>
        <ul className='scss_ul'>
          <h2>Scss is....</h2>
          <li>Scss01</li>
          <li className='scss_first'>Scss02</li>
          <li>Scss03</li>
        </ul>
        <ul className='scss_ul_01'>
          <li className='scss01 scss'>Scss01</li>
          <li className='scss02 scss'>Scss02</li>
          <li className='scss03 scss'>Scss03</li>
        </ul>

        <div className='box'>
          <div>box01</div>
          <div>box01</div>
          <div>box01</div>
        </div>


      </div>

    </>
  )
}

export default SassComponent