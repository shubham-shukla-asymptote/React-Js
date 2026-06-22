import { useState } from 'react'
import InputBox from '../components/InputBox'
import useCurrencyInfo from '../hooks/useCurrencyInfo'
import { useEffect } from 'react'


function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    const temp = from   /// safer state change is asynchronous in react
    setFrom(to)
    setTo(temp)
    let prevConvertedAmount = convertedAmount;    // 2nd  bug yahan tha 
    setConvertedAmount(amount)
    setAmount(prevConvertedAmount)
  }
   const convert = () => {
      if (currencyInfo[to]) {
        setConvertedAmount(amount * currencyInfo[to])
      }
    }

  useEffect(() => {
     convert()
  }, [amount, from, to, currencyInfo])
  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/33022103/pexels-photo-33022103.jpeg')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert()

              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}

                  onCurrencyChange={(currency) => (setFrom(currency))}
                  onAmountchange={(amount) => setAmount(amount)}
                  selectCurrency={from}

                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"

                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => (setTo(currency))}
                  onAmountchange={(amount) => setAmount(amount)}
                  selectCurrency={to}  /// one bug is from here
                  amountDisable

                />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>


    </>
  )
}

export default App
