import React, { useEffect, useState } from 'react';

const Transactions = ({balance, transactions}) => {

  return (
    <div className='beige1 p-[25px] flex flex-col w-full min-h-screen'>
      <h1>Transactions</h1>
      {balance?.map((items, i) => (
        <div className='flex'>
           <p>{items.name} :</p>
           <p>{items.amount}</p>
        </div>
       ))}
    </div>
  );
};

export default Transactions;
