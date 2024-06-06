import React, {useState, useEffect} from 'react'
const key = localStorage.getItem("LOGIN_USER_KEY");


export default function Footer({ price }) {
  let pageUrl = window.location.toString();
  const [showCheckoutButton, setShowCheckoutButton] = useState(true);
  const key = localStorage.getItem("LOGIN_USER_KEY");

  useEffect(() => {
    if (pageUrl.includes("cart")) {
      setShowCheckoutButton(false);
    }
  }, []);

    return (
        <div>
            {key != null && (

            <footer>
                <div class="subtotal">
                    <h2>Subtotal: $ {price}</h2>
                    
                
                {showCheckoutButton ? (
                    <a href="/cart">
                        <button>Check Your Cart</button>
                    </a>
                ) :(

                    <a href="/shipment"><button>CheckOut</button></a>
                )}
                </div>
                
            </footer> 
            )}
        </div>
    )
}


