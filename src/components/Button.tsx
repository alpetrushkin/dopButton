import React from 'react';

type PropsType = {
   nickName: string
   callBack: () => void
}

export const Button = (props: PropsType) => {
   const onClickHandler = () => {
      props.callBack()
   }

   return (
      <button onClick={onClickHandler}>{props.nickName}</button>
   );
};

