import React from 'react'
import one from '../images/one.jpg'
import two from '../images/2nd.jpg'
import three from '../images/3rd.jpg'
import four from '../images/4th.jpg'
import system from '../images/System.svg'
import life from '../images/Life.svg'
import overall from '../images/Overall Savings.svg'
import avg from '../images/avg.svg'
import phn from '../images/Fill 1.svg'

const Section = () => {
  return (
    <div className='section'>
      <div className='side'>
        <div className='sidebar'> 
        <ul className='sidenav'>
        <li><button className='btn4'>Get Started</button></li>
        <li><a href='#'>Utilities</a></li>
        <li><a href='#'>Installers</a></li>
        <li><a href='#'>Sign In</a></li>
        <div className='ligroup'><li><img src={phn}/></li><li className='phn'>888-454-9979</li></div>
       </ul>
        </div>
      </div>
       <p style={{textAlign:'center',fontWeight: '700',
fontSize: '40px'}}>Success <span style={{fontWeight:'normal'}}>Stories</span> </p><br/>
       <p style={{textAlign:'center',fontWeight: '400',
fontSize: '14px',color: 'rgba(102, 102, 102, 0.98)'}} className='upperpara'>See what our customers have to say about their journey with us</p>
       
        <header className='container1 topcontainer'>
        <div className='image'>
          <img src={one}alt='hello' style={{width:'100%',height:'100%',maxWidth:'543px'}}/>
          </div>
          <div className='text'>
            <p style={{fontWeight:'bold'}}>Shumin Z.</p>
            <p style={{fontSize:'14px',color: '#666666',fontWeight: '400',marginTop:'8px',marginBottom:'24px'}}>Los Altos, California</p>
            
            <p style={{fontSize:'16px'}}>Electrum is really great! Putting up solar panels is not something you do often. Electrum was very helpful in sharing their knowledge and getting me very comfortable in making my decisions on lease versus own, what type of installer, and what to look for in quality. Really great service!</p>
          </div>
        </header>

        <section className='boxes'>
            <div className='container2'>
              <div className='twoboxes'>
            <div className='box'>
              <img src={system} alt='hello'/><br/><br/>
                <span style={{fontWeight:'500',fontSize:'14px' }}>System Overview</span>
                <br/><br/>
                <span style={{fontWeight:'400',fontSize:'12px',color: '#666666'}}>9.45kW</span>
                <br/>
                <span style={{fontWeight:'400',fontSize:'12px',color: '#666666'}}>25x SolarWorld280Mono Plus</span>
            </div>

            <div className='box'>
            <img src={avg} alt='hello'/><br/><br/>
                <span style={{fontWeight:'500',fontSize:'14px' }}>Avg. Monthly Electric Bill</span>
                <br/><br/>
                <span style={{fontWeight:'400',fontSize:'12px',color: '#666666'}}>Before Solar: $250</span>
                <br/>
                <span style={{fontWeight:'400',fontSize:'12px',color: '#666666'}}>After Solar: $0</span>
            </div>
            </div>
           
             <div className='twoboxes'>
            <div className='box'>
            <img src={overall} alt='hello'/><br/><br/>
                <span style={{fontWeight:'500',fontSize:'14px' }}>Overall Savings</span>
                <br/><br/>
                <span style={{fontWeight:'400',fontSize:'12px',color: '#666666'}}>Annual Savings: $4,588</span>
                <br/>
                <span style={{fontWeight:'400',fontSize:'12px',color: '#666666'}}>Lifetime Savings: $114,689</span>
            </div>

            <div className='box'>
            <img src={life} alt='hello'/><br/><br/>
                <span style={{fontWeight:'500',fontSize:'14px' }}>Lifetime Environmental Impact</span>
                <br/><br/>
                <span style={{fontWeight:'400',fontSize:'12px',color: '#666666'}}>CO2 Offset: 315,000 lbs</span>
                <br/>
                <span style={{fontWeight:'400',fontSize:'12px',color: '#666666'}}>Equivalent to 349,344 miles driven</span>
            </div>
            </div>
            
            
            </div>

        </section>
        <hr className='horizontal'/>

        <header className='container1'>
        <div className='image'>
          <img src={two}alt='hello' style={{width:'100%',height:'100%',maxWidth:'543px'}}/>
          </div>
          <div className='text'>
            <p style={{fontWeight:'bold'}}>Peter C.</p>
            <p style={{fontSize:'14px',color: '#666666',fontWeight: '400',marginTop:'8px',marginBottom:'24px'}}>Claremont, California</p>
            
            <p style={{fontSize:'16px'}}>       The thing I remember most about Electrum was how easy it was to use. It’s a powerful idea executed in a very user-friendly way. The idea of profiling the home, figuring out how much solar that individual needs, getting a number of different quotes assembled, and then supplying the homeowner with the three best quotes seemed like a very logical, straightforward idea. And this was all free of charge and right in the right price range for me.</p>
          </div>
        </header>

        <section className='boxes'>
            <div className='container2'>
            <div className='twoboxes'>
            <div className='box'>
            <img src={system} alt='hello'/><br/><br/>
                <span style={{fontWeight:'500',fontSize:'14px' }}>System Overview</span>
                <br/><br/>
                <span style={{fontWeight:'400',fontSize:'12px',color: '#666666'}}>9.45kW</span>
                <br/>
                <span style={{fontWeight:'400',fontSize:'12px',color: '#666666'}}>47x SolarWorld 280W Mono</span>
            </div>

            <div className='box'>
            <img src={overall} alt='hello'/><br/><br/>
                <span style={{fontWeight:'500',fontSize:'14px' }}>Avg. Monthly Electric Bill</span>
                <br/><br/>
                <span style={{fontWeight:'400',fontSize:'12px',color: '#666666'}}>Before Solar: $428</span>
                <br/>
                <span style={{fontWeight:'400',fontSize:'12px',color: '#666666'}}>After Solar: $2</span>
            </div>
            </div>
            <div className='twoboxes'>
            <div className='box'>
            <img src={avg} alt='hello'/><br/><br/>
                <span style={{fontWeight:'500',fontSize:'14px' }}>Overall Savings</span>
                <br/><br/>
                <span style={{fontWeight:'400',fontSize:'12px',color: '#666666'}}>Annual Savings: $8,808</span>
                <br/>
                <span style={{fontWeight:'400',fontSize:'12px',color: '#666666'}}>Lifetime Savings: $220,220</span>
            </div>

            <div className='box'>
            <img src={life} alt='hello'/><br/><br/>
                <span style={{fontWeight:'500',fontSize:'14px' }}>Lifetime Environmental Impact</span>
                <br/><br/>
                <span style={{fontWeight:'400',fontSize:'12px',color: '#666666'}}>CO2 Offset: 592,200 lbs</span>
                <br/>
                <span style={{fontWeight:'400',fontSize:'12px',color: '#666666'}}>Equivalent to 656,766 miles driven</span>
            </div>
            </div>
            </div>
            </section>
            <hr className='horizontal'/>

            <header className='container1'>
              <div className='image'>
          <img src={three}alt='hello' style={{width:'100%',height:'100%',maxWidth:'543px'}}/>
          </div>
          <div className='text'>
            <p style={{fontWeight:'bold'}}>Jeff & Sally B.</p>
            <p style={{fontSize:'14px',color: '#666666',fontWeight: '400',marginTop:'8px',marginBottom:'24px'}}>Los Angeles, California</p>
            
            <p style={{fontSize:'16px'}}>My favorite part of the entire process was being surprised at how easy it was to deal with Electrum and how professional they were. They acted like my own personal engineer and my own personal advocate to help me put the system together.</p>
          </div>
        </header>

        <section className='boxes'>
            <div className='container2'>
            <div className='twoboxes'>
            <div className='box'>
            <img src={system} alt='hello'/><br/><br/>
                <span style={{fontWeight:'500',fontSize:'14px' }}>System Overview</span>
                <br/><br/>
                <span style={{fontWeight:'400',fontSize:'12px',color: '#666666'}}>3.92kW</span>
                <br/>
                <span style={{fontWeight:'400',fontSize:'12px',color: '#666666'}}>14x SolarWorld 280W Mono</span>
            </div>

            <div className='box'>
            <img src={overall} alt='hello'/><br/><br/>
                <span style={{fontWeight:'500',fontSize:'14px' }}>Avg. Monthly Electric Bill</span>
                <br/><br/>
                <span style={{fontWeight:'400',fontSize:'12px',color: '#666666'}}>Before Solar: $98</span>
                <br/>
                <span style={{fontWeight:'400',fontSize:'12px',color: '#666666'}}>After Solar: $5</span>
            </div>
            </div>
            <div className='twoboxes'>
            <div className='box'>
            <img src={avg} alt='hello'/><br/><br/>
                <span style={{fontWeight:'500',fontSize:'14px' }}>Overall Savings</span>
                <br/><br/>
                <span style={{fontWeight:'400',fontSize:'12px',color: '#666666'}}>Annual Savings: $1,436</span>
                <br/>
                <span style={{fontWeight:'400',fontSize:'12px',color: '#666666'}}>Lifetime Savings: $35,896</span>
            </div>

            <div className='box'>
            <img src={life} alt='hello'/><br/><br/>
                <span style={{fontWeight:'500',fontSize:'14px' }}>Lifetime Environmental Impact</span>
                <br/><br/>
                <span style={{fontWeight:'400',fontSize:'12px',color: '#666666'}}>CO2 Offset: 176,400 lbs</span>
                <br/>
                <span style={{fontWeight:'400',fontSize:'12px',color: '#666666'}}>Equivalent to 195,633 miles driven</span>
            </div>
            </div>
            </div>
            </section>
            <hr className='horizontal'/>

            <header className='container1'>
              <div className='image'>
          <img src={four} alt='hello' style={{width:'100%',height:'100%',maxWidth:'543px'}} />
          </div>
          <div className='text'>
            <p style={{fontWeight:'bold'}}>Gregory A.</p>
            <p style={{fontSize:'14px',color: '#666666',fontWeight: '400',marginTop:'8px',marginBottom:'24px'}}>Pacific Palisades, California</p>
            
            <p style={{fontSize:'16px'}}>       Electrum made the process very easy! They helped me find the best system, best installer, and best price. I am 100% satisfied with their help, expertise, and the results.</p>
          </div>
        </header>

        <section className='boxes'>
            <div className='container2'>
            <div className='twoboxes'>
            <div className='box'>
            <img src={system} alt='hello'/><br/><br/>
                <span style={{fontWeight:'500',fontSize:'14px' }}>System Overview</span>
                <br/><br/>
                <span style={{fontWeight:'400',fontSize:'12px',color: '#666666'}}>5.9kW</span>
                <br/>
                <span style={{fontWeight:'400',fontSize:'12px',color: '#666666'}}>18x Hanwha Q CELLS 300W Mono</span>
            </div>

            <div className='box'>
            <img src={overall} alt='hello'/><br/><br/>
                <span style={{fontWeight:'500',fontSize:'14px' }}>Avg. Monthly Electric Bill</span>
                <br/><br/>
                <span style={{fontWeight:'400',fontSize:'12px',color: '#666666'}}>Before Solar: $133</span>
                <br/>
                <span style={{fontWeight:'400',fontSize:'12px',color: '#666666'}}>After Solar: $10</span>
            </div>
            </div>
            <div className='twoboxes'>
            <div className='box'>
            <img src={avg} alt='hello'/><br/><br/>
                <span style={{fontWeight:'500',fontSize:'14px' }}>Overall Savings</span>
                <br/><br/>
                <span style={{fontWeight:'400',fontSize:'12px',color: '#666666'}}>Annual Savings: $2,526</span>
                <br/>
                <span style={{fontWeight:'400',fontSize:'12px',color: '#666666'}}>Lifetime Savings: $63,138</span>
            </div>

            <div className='box'>
            <img src={life} alt='hello'/><br/><br/>
                <span style={{fontWeight:'500',fontSize:'14px' }}>Lifetime Environmental Impact</span>
                <br/><br/>
                <span style={{fontWeight:'400',fontSize:'12px',color: '#666666'}}>CO2 Offset: 310,400 lbs</span>
                <br/>
                <span style={{fontWeight:'400',fontSize:'12px',color: '#666666'}}>Equivalent to 344,239 miles driven</span>
            </div>
            </div>
            </div>
            </section>


            

    </div>
  )
}

export default Section