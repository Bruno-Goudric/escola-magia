import React from "react";

import IButton from "./IButton";
import * as S from "./styles";

function Button({ title, background, color }: IButton) {
  return (
    <S.Button
      style={{ background: `${background}`, color: `${color}` }}
      type="submit"
    >
      {title}
    </S.Button>
  );
}

export { Button };
