import React, { useState, useEffect } from 'react'
import { themes } from '../../../utils';


const EditBudget = ({setBudgetToEdit, budget, budgets, transactions, UPDATE}) => {
  const transactionCategories = [...new Set(transactions.map((tr) => tr.category))];

  const [newBudgetCategory, setNewBudgetCategory] = useState(budget.category);
  const [selectBudgetCategOpen, setSelectBudgetCategOpen] = useState(false);
  const [newMaxSpend, setNewMaxSpend] = useState(budget.maximum);
  const [newTheme, setNewTheme] = useState({theme: budget.theme, themeName: budget.themeName});
  const [selectThemesOpen, setSelectThemesOpen] = useState(false);
  const [customMessage, setCustomMessage] = useState('Pot Created successfully!');  
  const [customMessageActive, setCustomMessageActive] = useState(false);  
  const [succes, setSuccess] = useState(false);
  

  const handleMaxSpendChange = (e) => {
    const value = e.target.value; 
    if (value === "" || (/^[1-9]\d*$/.test(value))) { 
      setNewMaxSpend(value);
      console.log(newMaxSpend);
    }
  };

  // ----- THEMES -----
  const handleThemeChange = (theme) => {
    setNewTheme({ theme: theme.value, themeName: theme.name });
  };
  const checkUsedThemes = () => {
    const usedThemes = new Set(budgets.map(budget => budget.themeName));
      // [Green, Yellow, Navy, etc..] new Set() ensures no doublicates
    
    return themes.map(theme => ({
      ...theme, // then look through everytheme in themes nad if usedThemes.has(theme.name) its status becomes ...
      status: usedThemes.has(theme.name) ? "Already in use" : "Available"
    }));
  };
  const themesWithUsedStatus = checkUsedThemes()
  useEffect(() => { 
    selectThemesOpen && setSelectThemesOpen(false); // Dropdown closes everytime theme updatess
  }, [newTheme]);
  // ----- THEMES -----

  const handleUpdate = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/budgets/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category: newBudgetCategory,
          maximum: parseInt(newMaxSpend),
          theme: newTheme.theme,
          themeName: newTheme.themeName,
        }),
      });
  
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to update budget');
      }
      const updatedBudget = await res.json();
      console.log('Budget updated successfully:', updatedBudget);
      UPDATE()
      setCustomMessage('Budget Updated!')
      setCustomMessageActive(true);
      setSuccess(true);
      setTimeout(() => {
        setCustomMessageActive(false); 
        setBudgetToEdit(null); // close pop up
      }, 1000);
  
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='fixed h-full top-0 left-0 z-50 w-full bg-[#00000080] overflow-y-hidden'>
      <div className='absolute abs_center w-[520px] max-sm:w-[90%] bg-white p-[25px] rounded-[10px] flex flex-col gap-[25px] shadow-sm'>

        <div id='HEAD_ROW' className='flex justify-between items-center '>
          <h1 className='txt5'>Edit Budget</h1>
          <svg className='cursor-pointer fill-[#737373] hover:fill-[black]' height="28" viewBox="0 0 26 26" width="26" xmlns="http://www.w3.org/2000/svg"
              onClick={() => setBudgetToEdit(null)}>
            <path d="m17.53 9.53-3.47 3.47 3.47 3.47c.0737.0687.1328.1515.1738.2435s.063.1913.0648.292-.0168.2007-.0545.2941-.0938.1782-.1651.2494c-.0712.0713-.156.1274-.2494.1651s-.1934.0563-.2941.0545-.2-.0238-.292-.0648-.1748-.1001-.2435-.1738l-3.47-3.47-3.47 3.47c-.14217.1325-.33022.2046-.52452.2012-.1943-.0035-.37968-.0822-.5171-.2196-.13741-.1374-.21612-.3228-.21955-.5171s.0687-.3823.20118-.5245l3.46999-3.47-3.46999-3.47c-.13248-.14218-.20461-.33022-.20118-.52452s.08214-.37969.21955-.5171c.13742-.13741.3228-.21613.5171-.21956.1943-.00342.38235.0687.52452.20118l3.47 3.47 3.47-3.47c.1422-.13248.3302-.2046.5245-.20118.1943.00343.3797.08215.5171.21956s.2162.3228.2196.5171-.0687.38234-.2012.52452zm8.22 3.47c0 2.5217-.7478 4.9868-2.1488 7.0835-1.4009 2.0967-3.3922 3.7309-5.722 4.696-2.3297.965-4.8933 1.2175-7.3666.7255-2.47325-.4919-4.74509-1.7063-6.52821-3.4894s-2.997435-4.0549-3.489397-6.5282c-.49196108-2.4733-.239469-5.0369.725547-7.36661.96502-2.32976 2.59922-4.32104 4.69594-5.72203 2.09673-1.400986 4.56182-2.14876 7.08352-2.14876 3.3803.00397 6.621 1.34854 9.0112 3.73877 2.3903 2.39023 3.7348 5.63094 3.7388 9.01123zm-1.5 0c0-2.225-.6598-4.40011-1.896-6.25017-1.2361-1.85005-2.9931-3.29199-5.0488-4.14348-2.0557-.85148-4.3177-1.07427-6.5-.64018-2.18225.43408-4.18681 1.50554-5.76015 3.07888s-2.6448 3.5779-3.07888 5.76015c-.43408 2.1823-.2113 4.4443.64019 6.5s2.29343 3.8127 4.14348 5.0488c1.85005 1.2362 4.02516 1.896 6.25016 1.896 2.9827-.0033 5.8422-1.1896 7.9513-3.2987s3.2954-4.9686 3.2987-7.9513z"/>
          </svg>
        </div>

        <p id='TEXT' className='thinSubText'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum qui, nesciunt provident suscipit nihil, quasi tempora cumque, ad laboriosam placeat animi sed ex aspernatur. Iusto consequuntur eveniet harum culpa optio?
        </p>

        <div id='TEXT_FIELDS' className='flex flex-col items-center gap-[17px]'>
          <div id='NEW_CATEGORY' className='w-full flex flex-col gap-[5px]'>
            <p className='subText'>Budget Category</p>
            <div id='CATEGORIES_BUTTON' className='relative themeButtonStyles'
                 onClick={() => {setSelectBudgetCategOpen(prev => !prev); setSelectThemesOpen(false)}}>
              <p className='flex items-center gap-[11px]'>
                {newBudgetCategory? newBudgetCategory : transactionCategories[0]}
              </p>
              {selectBudgetCategOpen? <i className="fa-solid fa-caret-up"></i> : <i className="fa-solid fa-caret-down"></i>}

             {/* ------------------------------------------------ */}
              {selectBudgetCategOpen && // DROPDOWN CATEG-LIST
              <div className='drop_down_theme_list'>
               {transactionCategories.map((category, i) => (
                <div key={i} id='EVERY_CATEG_BUTTON' className='themeButtonListStyles hover:border-b-[#c3c3c3]'
                     onClick={() => setNewBudgetCategory(category)}>
                  <p>{category}</p>
                  {newBudgetCategory === category && <i className="text-[#277c78] fa-solid fa-circle-check"></i>}
                </div>
              ))}
              </div>
              }
            </div>
          </div>

          <div id='MAX_SPEND' className='w-full flex flex-col gap-[5px]'>
            <p className='subText'>Maximum Spend</p>
            <div className='editInputStyles flex items-center'>
              <i className="text-[#7a7a7a] text-[15px] fa-solid fa-dollar-sign"></i>
              <input className='rounded-[10px] pl-[13px] cursor-pointer w-full outline-none text-[16px] font-sans font-[400]' 
                    onChange={(e) => handleMaxSpendChange(e)}
                    type="text" placeholder='e.g. 2000' 
                    value={newMaxSpend}
              />
            </div>
          </div>

          <div id='NEW_THEME' className='w-full flex flex-col gap-[5px]'>
            <p className='subText'>Theme</p>

            <div id='THEME_BUTTON' className='relative themeButtonStyles'
                 onClick={() => {setSelectThemesOpen(prev => !prev); setSelectBudgetCategOpen(false)}}>
              <div className='flex items-center gap-[11px]'>
                <div id='COLOR_CIRCLE' className={`rounded-full w-[18px] h-[18px]`} 
                     style={{backgroundColor: newTheme.theme? newTheme.theme : themes[0].value}}>
                </div>  {/* if no theme selectes take the 1st from themes by default */}
                <p>{newTheme.themeName ? newTheme.themeName : themes[0].name}</p> 
              </div>
              {selectThemesOpen? <i className="fa-solid fa-caret-up"></i> : <i className="fa-solid fa-caret-down"></i>
              }

             {/* ------------------------------------------------ */}
              {selectThemesOpen && // DROPDOWN THEME-LIST
              <div className='drop_down_theme_list'>
               {themesWithUsedStatus.map((theme, i) => (
                <div key={i} id='EVERY_THEME_BUTTON' className='themeButtonListStyles hover:border-b-[#c3c3c3]' 
                             onClick={() => handleThemeChange(theme)}>
                  <div className='flex items-center gap-[11px]'>
                    <div className={`${theme.status === "Already in use" && 'opacity-[40%]'} rounded-full w-[18px] h-[18px]`} style={{ backgroundColor: theme.value }}></div>
                    <p className={`${theme.status === "Already in use" && 'opacity-[40%]'}`}>{theme.name}</p>
                  </div>
                  {theme.name === newTheme.themeName && <i className="text-[#277c78] fa-solid fa-circle-check"></i>}
                  {theme.status === "Already in use" && theme.name !== newTheme.themeName && <p className='thinSubText'>{theme.status}</p>}
                </div>
              ))}
              </div>
              }
            </div>

          </div>
        </div>

        <button id='SAVE' className='w-full gray1 text-[#fff] p-[17px] rounded-[10px] font-sans font-[550] tracking-[0.5px] hover:text-[17px] transition1'
                onClick={() => handleUpdate(budget._id)}>
          Save Changes
        </button>
      
        <div id='POP_UP_MESSAGE' className={`absolute z-10 rounded left-[50%] translate-x-[-50%] ${customMessageActive ? 'bottom-[-50px] opacity-100' : 'bottom-[0px] opacity-0'} bg-white text-black border w-[80%] h-[30px] flex items-center justify-center transition2`}>
          <p className='font-sans font-[700]'>{customMessage} {succes? <i className="text-GREEN ml-[5px] fa-solid fa-circle-check"></i> : <i className="text-RED fa-solid fa-circle-exclamation"></i> }</p>
        </div>
      </div>
    </div>
  )
}

export default EditBudget