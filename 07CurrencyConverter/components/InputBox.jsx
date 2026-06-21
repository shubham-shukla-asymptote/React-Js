import React,{useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountchange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency='usd',
    disableCurr=false,
    amountDisable=false,

    
    className = "",
}) {
   const inputAmountId=useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label  htmlFor={inputAmountId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                id={inputAmountId}
                    
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    disabled={amountDisable}
                    onChange={(e)=>{
                        onAmountchange && onAmountchange(Number(e.target.value))
                    }}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={disableCurr}
                    
                >
                    
                       {currencyOptions.map((curr)=>(
                        <option key={curr} value={curr}>
                          {curr}
                        </option>
                       ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;

