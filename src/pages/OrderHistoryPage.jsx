import { useState } from "react";
import * as usersService from "../utilities/users-service";
import { checkToken } from "../utilities/users-service";

export default function OrderHistoryPage() {
  const [expirationTime, setExpirationTime] = useState(null);

  const handleCheckToken = async () => {
    checkToken();
    const remainingTime = usersService.msToTime(usersService.getTime());
    setExpirationTime(remainingTime);
  };

  return (
    <>
      <h1>OrderHistoryPage</h1>
      <button onClick={handleCheckToken}>Check When my Login Expires</button>
      {expirationTime && (
        <div>{`Your login Expires in ${expirationTime.hours} hours ${expirationTime.minutes} minutes ${expirationTime.seconds} seconds`}</div>
      )}
      
    </>
  );
}
