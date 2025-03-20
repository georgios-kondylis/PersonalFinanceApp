import React from 'react'
import { useState } from "react";

const EditPot = ({setPotToEdit, pot}) => {
  const [newPotName, setNewPotName] = useState(pot.name || "");
  const [newTarget, setNewTarget] = useState(pot.target || "");
  const [newTheme, setNewTheme] = useState(pot.theme || "");
  const [selectThemesOpen, setSelectThemesOpen] = useState(false);

  const themes = [
    { name: "Green", value: "#277c78" },
    { name: "Yellow", value: "#f3cdac" },
    { name: "Cyan", value: "#82c9d7" },
    { name: "Navy", value: "#626070" },
    { name: "Red", value: "#c94736" },
    { name: "Purple", value: "#826cb0" },
    { name: "Turquoise", value: "#597c7c" },
    { name: "Brown", value: "#93674f" },
    { name: "Magenta", value: "#934f6f" },
    { name: "Blue", value: "#3f82b2" },
    { name: "NavyGray", value: "#97a0ac" },
    { name: "ArmyGreen", value: "#7f9161" },
    { name: "Gold", value: "#cab361" },
    { name: "Orange", value: "#be6c49" }
  ];
  

  const handleTargetChange = (e) => {
    const value = e.target.value; 
    if (value === "" || (/^[1-9]\d*$/.test(value))) { 
      setNewTarget(value);
    }
  };

  return (
    <div className='absolute top-0 left-0 z-50 w-full h-full bg-[#00000027] '>
      <div className='absolute abs_center w-[520px] bg-white p-[25px] rounded-[10px] flex flex-col gap-[25px] shadow-sm'>

        <div className='flex justify-between items-center '>
          <h1 className='txt5'>Edit Pot</h1>
          <svg className='cursor-pointer fill-[#737373] hover:fill-[black]' height="26" viewBox="0 0 26 26" width="26" xmlns="http://www.w3.org/2000/svg"
              onClick={() => setPotToEdit(null)}>
            <path d="m17.53 9.53-3.47 3.47 3.47 3.47c.0737.0687.1328.1515.1738.2435s.063.1913.0648.292-.0168.2007-.0545.2941-.0938.1782-.1651.2494c-.0712.0713-.156.1274-.2494.1651s-.1934.0563-.2941.0545-.2-.0238-.292-.0648-.1748-.1001-.2435-.1738l-3.47-3.47-3.47 3.47c-.14217.1325-.33022.2046-.52452.2012-.1943-.0035-.37968-.0822-.5171-.2196-.13741-.1374-.21612-.3228-.21955-.5171s.0687-.3823.20118-.5245l3.46999-3.47-3.46999-3.47c-.13248-.14218-.20461-.33022-.20118-.52452s.08214-.37969.21955-.5171c.13742-.13741.3228-.21613.5171-.21956.1943-.00342.38235.0687.52452.20118l3.47 3.47 3.47-3.47c.1422-.13248.3302-.2046.5245-.20118.1943.00343.3797.08215.5171.21956s.2162.3228.2196.5171-.0687.38234-.2012.52452zm8.22 3.47c0 2.5217-.7478 4.9868-2.1488 7.0835-1.4009 2.0967-3.3922 3.7309-5.722 4.696-2.3297.965-4.8933 1.2175-7.3666.7255-2.47325-.4919-4.74509-1.7063-6.52821-3.4894s-2.997435-4.0549-3.489397-6.5282c-.49196108-2.4733-.239469-5.0369.725547-7.36661.96502-2.32976 2.59922-4.32104 4.69594-5.72203 2.09673-1.400986 4.56182-2.14876 7.08352-2.14876 3.3803.00397 6.621 1.34854 9.0112 3.73877 2.3903 2.39023 3.7348 5.63094 3.7388 9.01123zm-1.5 0c0-2.225-.6598-4.40011-1.896-6.25017-1.2361-1.85005-2.9931-3.29199-5.0488-4.14348-2.0557-.85148-4.3177-1.07427-6.5-.64018-2.18225.43408-4.18681 1.50554-5.76015 3.07888s-2.6448 3.5779-3.07888 5.76015c-.43408 2.1823-.2113 4.4443.64019 6.5s2.29343 3.8127 4.14348 5.0488c1.85005 1.2362 4.02516 1.896 6.25016 1.896 2.9827-.0033 5.8422-1.1896 7.9513-3.2987s3.2954-4.9686 3.2987-7.9513z"/>
          </svg>
        </div>

        <p className='thinSubText'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum qui, nesciunt provident suscipit nihil, quasi tempora cumque, ad laboriosam placeat animi sed ex aspernatur. Iusto consequuntur eveniet harum culpa optio?
        </p>

        <div id='TEXT_FIELDS' className='flex flex-col items-center gap-[17px]'>
          <div id='NEW_NAME' className='w-full flex flex-col gap-[5px] mb-[20px]'>
            <p className='subText'>Pot Name</p>
            <input className='editInputStyles' 
                  type="text" placeholder={pot.name} value={newPotName}
                  onChange={(e) => e.target.value.length <= 30 && setNewPotName(e.target.value)}
            />
            <p className='thinSubText text-right'>{30 - newPotName.length} out of 30 characters left</p>
          </div>

          <div id='NEW_TARGET' className='w-full flex flex-col gap-[5px]'>
            <p className='subText'>Target</p>
            <div className='editInputStyles flex items-center'>
              <i className="text-[#7a7a7a] text-[15px] fa-solid fa-dollar-sign"></i>
              <input className='rounded-[10px] pl-[13px] cursor-pointer w-full outline-none text-[16px] font-sans font-[400]' 
                    onChange={handleTargetChange}
                    type="text" placeholder='Target' 
                    value={newTarget}
              />
            </div>
          </div>

          <div id='NEW_THEME' className='w-full flex flex-col gap-[5px]'>
            <p className='subText'>Theme</p>

            <button className='relative themeButtonStyles'
                    onClick={() => setSelectThemesOpen(prev => !prev)}>
              <div className='flex items-center gap-[11px]'>
                <div className='rounded-full w-[18px] h-[18px]' style={{backgroundColor: newTheme}}></div>
                <p>Green</p>
              </div>
              {selectThemesOpen? 
              <i className="fa-solid fa-caret-up"></i>
               :
              <i className="fa-solid fa-caret-down"></i>
              }

             {/* ------------------------------------------------ */}
              {selectThemesOpen && // DROPDOWN THEME-LIST
              <div className='absolute bottom-[-20px] bg-[#fff] border p-[20px] flex flex-col w-full h-[400px] overflow-y-auto'>
                {themes.map((theme, i) => {

                return(
                <button className='themeButtonListStyles'
                        onClick={() => setSelectThemesOpen(prev => !prev)}>
                  <div className='flex items-center gap-[11px]'>
                    <div className='rounded-full w-[18px] h-[18px]' style={{backgroundColor: theme.value}}></div>
                    <p>{theme.name}</p>
                  </div>
                </button>
                  )
                })}
              </div>
              }
            </button>

          </div>
        </div>

        <button id='SAVE' className='w-full gray1 text-[#fff] p-[17px] rounded-[10px] font-sans font-[550] tracking-[0.5px] hover:text-[17px] transition1'>
          Save Changes
        </button>
      
      </div>
    </div>
  )
}

export default EditPot