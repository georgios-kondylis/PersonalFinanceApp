// AddMoney.jsx
import React from 'react'
import { useState } from "react";

const AddMoney = ({pots, pot, setPotToAddMoney, UPDATE}) => {
  const [amountToAdd, setAmountToAdd] = useState(0);
  const [customMessage, setCustomMessage] = useState('New amount added successfully!');  
  const [customMessageActive, setCustomMessageActive] = useState(false);  
  const [succes, setSuccess] = useState(false);  

  const themeColor = pot.theme;
  const percent = ((pot.total / pot.target) * 100);
  const formattedPercent = percent % 1 === 0 ? percent.toFixed(1) : percent.toFixed(2);
  const addedPercent = ((amountToAdd / pot.target) * 100)

  const handleTargetChange = (e) => {
    const value = e.target.value; 
    if (value === "" || (/^[1-9]\d*$/.test(value))) { 
      setAmountToAdd(value);
    }
  };

  const handleAddMoney = async (potID) => {
    if (amountToAdd <= 0) {
      setCustomMessage('Please enter a valid amount')
      setCustomMessageActive(true);
      setTimeout(() => {
        setCustomMessageActive(false); 
      }, 1000);
      return;
    }
    if (parseFloat(amountToAdd) + pot.total > pot.target) {
      setCustomMessage('The amount exceeds the pot target');
      setCustomMessageActive(true);
      setTimeout(() => {
        setCustomMessageActive(false);
      }, 1000);
      return;
    }
    

    const response = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/api/pots/add-money/${potID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: parseFloat(amountToAdd),
      }),
    });

    const updatedPot = await response.json();
    if (response.ok) {
      UPDATE()
      setCustomMessage('New amount added successfully!')
      setCustomMessageActive(true);
      setSuccess(true)
      setTimeout(() => {
        setCustomMessageActive(false); 
        setPotToAddMoney(null); // Close the modal
      }, 1000);
      
    } else {
      console.error('Error adding money to pot:', updatedPot);
    }
  };


  return (
    <div className='absolute top-0 left-0 z-50 w-full h-full bg-[#00000025] overflow-y-hidden'>
      <div className='absolute abs_center w-[520px] max-sm:w-[90%] bg-white p-[25px] rounded-[10px] flex flex-col gap-[25px] shadow-sm'>

        <div id='HEAD_ROW' className='flex justify-between items-center '>
          <h1 className='txt5'>Add To {pot.name}</h1>
          <svg className='cursor-pointer fill-[#737373] hover:fill-[black]' height="28" viewBox="0 0 26 26" width="26" xmlns="http://www.w3.org/2000/svg"
              onClick={() => setPotToAddMoney(null)}>
            <path d="m17.53 9.53-3.47 3.47 3.47 3.47c.0737.0687.1328.1515.1738.2435s.063.1913.0648.292-.0168.2007-.0545.2941-.0938.1782-.1651.2494c-.0712.0713-.156.1274-.2494.1651s-.1934.0563-.2941.0545-.2-.0238-.292-.0648-.1748-.1001-.2435-.1738l-3.47-3.47-3.47 3.47c-.14217.1325-.33022.2046-.52452.2012-.1943-.0035-.37968-.0822-.5171-.2196-.13741-.1374-.21612-.3228-.21955-.5171s.0687-.3823.20118-.5245l3.46999-3.47-3.46999-3.47c-.13248-.14218-.20461-.33022-.20118-.52452s.08214-.37969.21955-.5171c.13742-.13741.3228-.21613.5171-.21956.1943-.00342.38235.0687.52452.20118l3.47 3.47 3.47-3.47c.1422-.13248.3302-.2046.5245-.20118.1943.00343.3797.08215.5171.21956s.2162.3228.2196.5171-.0687.38234-.2012.52452zm8.22 3.47c0 2.5217-.7478 4.9868-2.1488 7.0835-1.4009 2.0967-3.3922 3.7309-5.722 4.696-2.3297.965-4.8933 1.2175-7.3666.7255-2.47325-.4919-4.74509-1.7063-6.52821-3.4894s-2.997435-4.0549-3.489397-6.5282c-.49196108-2.4733-.239469-5.0369.725547-7.36661.96502-2.32976 2.59922-4.32104 4.69594-5.72203 2.09673-1.400986 4.56182-2.14876 7.08352-2.14876 3.3803.00397 6.621 1.34854 9.0112 3.73877 2.3903 2.39023 3.7348 5.63094 3.7388 9.01123zm-1.5 0c0-2.225-.6598-4.40011-1.896-6.25017-1.2361-1.85005-2.9931-3.29199-5.0488-4.14348-2.0557-.85148-4.3177-1.07427-6.5-.64018-2.18225.43408-4.18681 1.50554-5.76015 3.07888s-2.6448 3.5779-3.07888 5.76015c-.43408 2.1823-.2113 4.4443.64019 6.5s2.29343 3.8127 4.14348 5.0488c1.85005 1.2362 4.02516 1.896 6.25016 1.896 2.9827-.0033 5.8422-1.1896 7.9513-3.2987s3.2954-4.9686 3.2987-7.9513z"/>
          </svg>
        </div>

        <p id='TEXT' className='thinSubText'>
          Add money to your pot to keep it seperate from your main balance. As soon as you add this money it will be reduced from your current balance.
        </p>

        <div id='TEXT_FIELDS' className='flex flex-col items-center gap-[17px]'>
          <div id='NEW_NAME' className='w-full flex flex-col gap-[5px]'>
            <p className='subText'>New Amount</p>

            <div className="flex flex-col gap-[10px] items-center justify-between">
                <div id="PROGRESS_BAR" className=" relative overflow-x-hidden w-full rounded-full bg-[#d0d0d0] h-[7.5px]">
                   <div id='DEFAULT_PERCENT' className={`z-20 absolute top-0 left-0 rounded-full h-full ${addedPercent && 'rounded-r-none' }`} style={{ width: `${percent}%`, backgroundColor: addedPercent? 'black' : `${themeColor}`}}> </div>
                   <span id='DIVIDER' className={`absolute ${!addedPercent && 'hidden'} z-30 w-[3px] bg-white h-full`}  style={{left: `${percent}%` }}></span>
                   <div id='ADD_PROGRESS' className={`z-10 absolute top-0 rounded-full ${addedPercent && 'rounded-l-none' } h-full transition-all ease-in-out duration-300`} 
                   style={{ 
                    backgroundColor: themeColor,
                    width: `${addedPercent}%`,
                    left: `${percent}%` }}></div>
                </div>
                
                <div id="PERCENT__TARGET" className="w-full flex justify-between">
                  <p className="font-sans text-[13px] text-[#6c6c6c]">
                    <span className={`font-[700] ${addedPercent > 0 && 'text-GREEN'}`}>{addedPercent > 0? 
                     (parseFloat(formattedPercent) + parseFloat(addedPercent)).toFixed(2)
                      : 
                     formattedPercent}%
                    </span>
                  </p>
                  <p className="thinSubText_POTS">target of ${pot.target.toLocaleString("de-DE")}</p> {/* 2.000 instead of 2000 */}
                </div>
              </div>
          </div>

          <div id='NEW_TARGET' className='w-full flex flex-col gap-[5px]'>
            <p className='subText'>Amount To Add</p>
            <div className='editInputStyles flex items-center'>
              <i className="text-[#7a7a7a] text-[15px] fa-solid fa-dollar-sign"></i>
              <input className='rounded-[10px] pl-[13px] cursor-pointer w-full outline-none text-[16px] font-sans font-[400]' 
                    onChange={handleTargetChange}
                    type="text" placeholder='' 
                    value={amountToAdd}
              />
            </div>
          </div>

        </div>

        <button onClick={() => handleAddMoney(pot._id)} id='SAVE' className='w-full gray1 text-[#fff] p-[17px] rounded-[10px] font-sans font-[550] tracking-[0.5px] hover:text-[17px] transition1'>
          Confirm Addition
        </button>
      
        <div id='POP_UP_MESSAGE' className={`absolute z-10 rounded left-[50%] translate-x-[-50%] ${customMessageActive ? 'bottom-[-50px] opacity-100' : 'bottom-[0px] opacity-0'} bg-white text-black border w-[80%] h-[30px] flex items-center justify-center transition2`}>
          <p className='font-sans font-[700]'>{customMessage} {succes? <i className="text-GREEN ml-[5px] fa-solid fa-circle-check"></i> : <i className="text-RED fa-solid fa-circle-exclamation"></i> }</p>
        </div>
      </div>
    </div>
  )
}

export default AddMoney