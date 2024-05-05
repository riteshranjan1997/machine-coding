import React, { FunctionComponent, useRef, useState } from "react";

type Props = {
  length: number;
  onlyNumber: boolean;
};

const OtpComponent: FunctionComponent<Props> = ({ length, onlyNumber }) => {
  const [values, setValues] = useState<any[]>(new Array(length).fill(""));
  const elements = useRef(new Array(length));
  console.log(elements.current);

  const handleChange = (event: any, index: number) => {
    const newOTP = [...values];
    const value = event.target.value;
    if (!isNaN(value) && value.length <= length - index) {
      if (value.length === 1) {
        values[index] = value;
        if (index < 5) {
          elements.current[index + 1].focus();
        }
      } else if (value.length > 1 && value.length <= 6) {
        let offset = index;
        while (offset < index + value.length) {
          newOTP[offset] = value[offset - index];
          if (offset + 1 <= 5) {
            elements.current[offset + 1].focus();
          }
          offset += 1;
        }
        verify(newOTP)
      }
    }
  };

  const handleDelete = (event: any, index: number) => {
    console.log("keyCode =>", event.key);
    if (event.target.value === "e") {
      event.preventDefault();
    }

    if (event.keyCode === 8) {
        const newOTP = [...values]
        newOTP[index] = ""
        verify(newOTP)
        if (index > 0) {
            elements.current[index - 1].focus()
        }
      }
      if (
        event.key === "Enter" &&
        values?.filter((n) => n)?.length === 6
        
      ) {
       
      }
  };

  const handlePaste = () => {

  };

  const verify = (value:string[]) => {

}

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          border: "1px solid black",
          borderRadius: "8px",
          padding: "8px",
        }}
      >
        <p style={{ fontSize: "16px", fontWeight: 700 }}>Enter OTP</p>

        <div>
          {values.map((item, index: number) => (
            <input
              maxLength={1}
              type={onlyNumber ? "number" : "text"}
              style={{
                width: 40,
                height: 40,
                padding: 20,
                margin: 10,
                fontSize: "40px",
                textAlign: "center",
                borderRadius: "5px",
              }}
              onPaste={handlePaste}
              onChange={(event) => handleChange(event, index)}
              onKeyDown={(event) => handleDelete(event, index)}
              key={index}
              value={values[index]}
              ref={(n: HTMLInputElement) => {
                elements.current[index] = n;
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtpComponent;
