import React from 'react'

const DeletePot = ({pot, setPotToDelete, UPDATE }) => {
  const handleDelete = async (potId) => {
    try {
      const res = await fetch(`http://localhost:5000/api/pots/${potId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (!res.ok) {
        const responseData = await res.json();
        throw new Error(responseData.message || 'Failed to delete pot');
      }
  
      const responseData = await res.json();
      console.log('Pot deleted:', responseData);
      setPotToDelete(null)
      UPDATE()
    } catch (error) {
      console.error('Error deleting pot:', error);
      alert('Something went wrong. Please try again.');
    }
  };
  

  return (
    <div className='absolute top-0 left-0 z-50 w-full h-full bg-[#00000026] '>
      <div className='absolute abs_center w-[520px] max-sm:w-[90%] bg-white p-[25px] rounded-[10px] flex flex-col gap-[25px] shadow-sm'>

        <div className='flex justify-between items-center '>
          <h1 className='txt5'>Delete '{pot.name}'?</h1>
          <svg className='cursor-pointer fill-[#737373] hover:fill-[black]' height="28" viewBox="0 0 26 26" width="26" xmlns="http://www.w3.org/2000/svg"
               onClick={() => setPotToDelete(null)}>
            <path d="m17.53 9.53-3.47 3.47 3.47 3.47c.0737.0687.1328.1515.1738.2435s.063.1913.0648.292-.0168.2007-.0545.2941-.0938.1782-.1651.2494c-.0712.0713-.156.1274-.2494.1651s-.1934.0563-.2941.0545-.2-.0238-.292-.0648-.1748-.1001-.2435-.1738l-3.47-3.47-3.47 3.47c-.14217.1325-.33022.2046-.52452.2012-.1943-.0035-.37968-.0822-.5171-.2196-.13741-.1374-.21612-.3228-.21955-.5171s.0687-.3823.20118-.5245l3.46999-3.47-3.46999-3.47c-.13248-.14218-.20461-.33022-.20118-.52452s.08214-.37969.21955-.5171c.13742-.13741.3228-.21613.5171-.21956.1943-.00342.38235.0687.52452.20118l3.47 3.47 3.47-3.47c.1422-.13248.3302-.2046.5245-.20118.1943.00343.3797.08215.5171.21956s.2162.3228.2196.5171-.0687.38234-.2012.52452zm8.22 3.47c0 2.5217-.7478 4.9868-2.1488 7.0835-1.4009 2.0967-3.3922 3.7309-5.722 4.696-2.3297.965-4.8933 1.2175-7.3666.7255-2.47325-.4919-4.74509-1.7063-6.52821-3.4894s-2.997435-4.0549-3.489397-6.5282c-.49196108-2.4733-.239469-5.0369.725547-7.36661.96502-2.32976 2.59922-4.32104 4.69594-5.72203 2.09673-1.400986 4.56182-2.14876 7.08352-2.14876 3.3803.00397 6.621 1.34854 9.0112 3.73877 2.3903 2.39023 3.7348 5.63094 3.7388 9.01123zm-1.5 0c0-2.225-.6598-4.40011-1.896-6.25017-1.2361-1.85005-2.9931-3.29199-5.0488-4.14348-2.0557-.85148-4.3177-1.07427-6.5-.64018-2.18225.43408-4.18681 1.50554-5.76015 3.07888s-2.6448 3.5779-3.07888 5.76015c-.43408 2.1823-.2113 4.4443.64019 6.5s2.29343 3.8127 4.14348 5.0488c1.85005 1.2362 4.02516 1.896 6.25016 1.896 2.9827-.0033 5.8422-1.1896 7.9513-3.2987s3.2954-4.9686 3.2987-7.9513z"/>
          </svg>
        </div>

        <p className='thinSubText'>
          Are you sure you want to delete this pot? This action cannot be reversed, and all the data inside will be removed forever.
        </p>

        <div className='flex flex-col items-center'>
          <button onClick={() => handleDelete(pot._id)} className='red hover:bg-[#c94736ca] w-full rounded-[6px] py-[11px] text-[#fff] font-sans text-[14px] hover:text-[16px] transition1'>
            Yes, Confirm Deletion
          </button>
          <button className='w-full rounded-[10px] py-[11px] text-[#797979] font-sans text-[14px] hover:text-[16px] hover:text-[black] transition1'
                  onClick={() => setPotToDelete(null)}>
            No, Go Back
          </button>
        </div>
       
      </div>
    </div>
  )
}

export default DeletePot