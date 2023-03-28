import { useAuth } from "@/components/auth/hooks/useAuth";

export const createCart = async () => {
    try {
        const userId = 'clf5jhgzs00m8phhfigxz64ab';
      const response = await fetch('/api/createCart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userId )
      });
  
      const data = await response.json();
      console.log('Cart data returned from backend ',data); // handle response data here
    } catch (error) {
      console.error(error);
    }
  };
  